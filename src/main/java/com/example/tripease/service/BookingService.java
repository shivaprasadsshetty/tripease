package com.example.tripease.service;

import com.example.tripease.dto.request.BookingRequest;
import com.example.tripease.dto.response.BookingResponse;
import com.example.tripease.exception.CabNotAvailableException;
import com.example.tripease.exception.CustomerNotFoundException;
import com.example.tripease.model.Booking;
import com.example.tripease.model.Cab;
import com.example.tripease.model.Customer;
import com.example.tripease.model.Driver;
import com.example.tripease.repository.BookingRepository;
import com.example.tripease.repository.CabRepository;
import com.example.tripease.repository.CustomerRepository;
import com.example.tripease.repository.DriverRepository;
import com.example.tripease.transformer.BookingTransformer;
import com.example.tripease.transformer.CabTransformer;
import com.example.tripease.transformer.CustomerTransformer;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.example.tripease.enums.CabStatus.UNAVAILABLE;

@Service
public class BookingService {

    private final CustomerRepository customerRepository;
    private final CabRepository cabRepository;
    private final BookingRepository bookingRepository;
    private final DriverRepository driverRepository;
    private final JavaMailSender javaMailSender;
    public BookingService(CustomerRepository customerRepository,
                          CabRepository cabRepository,
                          BookingRepository bookingRepository,
                          DriverRepository driverRepository,
                          JavaMailSender javaMailSender
                          ){
        this.customerRepository=customerRepository;
        this.cabRepository=cabRepository;
        this.bookingRepository=bookingRepository;
        this.driverRepository=driverRepository;
        this.javaMailSender=javaMailSender;
    }

    public BookingResponse bookCab(BookingRequest bookingRequest, int customerId) {
        Optional<Customer> optionalCustomer=customerRepository.findById(customerId);
        if(optionalCustomer.isEmpty()){
            throw new CustomerNotFoundException("Customer with the id "+customerId+" is not registered");
        }
        Customer customer=optionalCustomer.get();
        Cab cab=cabRepository.getCabRandomly();

        if(cab==null){
            throw new CabNotAvailableException("No cabs Available at the moment please try again later");
        }

        Booking booking= BookingTransformer.bookingRequestToBooking(bookingRequest,cab.getPerKmRate());
        cab.setStatus(UNAVAILABLE);

        Booking savedBooking=bookingRepository.save(booking);

        customer.getBookingList().add(savedBooking);
        Driver driver=driverRepository.getDriverByCabId(cab.getCabId());
        driver.getBookingList().add(savedBooking);
        Driver savedDriver= driverRepository.save(driver);
        Customer savedCustomer= customerRepository.save(customer);
        sendEmail(savedCustomer,driver,booking);
        return BookingTransformer.bookingToBookingResponse(booking,
                CabTransformer.cabToCabResponse(cab,savedDriver),
                CustomerTransformer.customerToCustomerResponse(savedCustomer)
                );
    }

    private void sendEmail(Customer customer,Driver driver,Booking booking){
        String text = "Dear " + customer.getCustomerName() + ",\n\n" +
                "Thank you for choosing TripEase!\n\n" +
                "Your cab has been booked successfully. Here are your booking details:\n\n" +
                "========== BOOKING DETAILS ==========\n" +
                "Pickup Location : " + booking.getPickUp() + "\n" +
                "Destination     : " + booking.getDestination() + "\n\n" +
                "========== DRIVER DETAILS ==========\n" +
                "Driver Name     : " + driver.getDriverName() + "\n" +
                "Cab Details     : " + driver.getCab().getCabModel() + "\n" +
                                        driver.getCab().getCabNumber()+"\n"+
                "We appreciate you choosing TripEase for your journey.\n" +
                "Please be ready at your pickup location at the scheduled time.\n\n" +
                "Have a safe and pleasant journey!\n\n" +
                "Best Regards,\n" +
                "Team TripEase\n" +
                "tripeasespring@gmail.com";

        SimpleMailMessage simpleMailMessage= new SimpleMailMessage();
        simpleMailMessage.setFrom("tripeasespring@gmail.com");
        simpleMailMessage.setTo(customer.getCustomerEmailId());
        simpleMailMessage.setSubject("Cab Booked From "+booking.getPickUp()+" to "+booking.getDestination());
        simpleMailMessage.setText(text);
        javaMailSender.send(simpleMailMessage);
    }
}
