package com.example.tripease.transformer;


import com.example.tripease.dto.request.BookingRequest;
import com.example.tripease.dto.response.BookingResponse;
import com.example.tripease.dto.response.CabResponse;
import com.example.tripease.dto.response.CustomerResponse;
import com.example.tripease.enums.TripStatus;
import com.example.tripease.model.Booking;

public class BookingTransformer {
    public static Booking bookingRequestToBooking(BookingRequest bookingRequest,double perKmRate){
        return Booking.builder()
                .pickUp(bookingRequest.getPickUp())
                .destination((bookingRequest.getDestination()))
                .tripDistanceInKm(bookingRequest.getTripDistanceInKm())
                .tripStatus(TripStatus.ONGOING)
                .billAmount(perKmRate*bookingRequest.getTripDistanceInKm())
                .build();
    }

    public static BookingResponse bookingToBookingResponse(Booking booking,
                                                           CabResponse cabResponse,
                                                           CustomerResponse customerResponse){
        return BookingResponse.builder()
                .pickUp(booking.getPickUp())
                .destination(booking.getDestination())
                .tripDistanceInKm(booking.getTripDistanceInKm())
                .tripStatus(booking.getTripStatus())
                .billAmount(booking.getBillAmount())
                .bookedAt(booking.getBookedAt())
                .lastUpdateAt(booking.getLastUpdateAt())
                .cabResponse(cabResponse)
                .customerResponse(customerResponse)
                .build();
    }
}
