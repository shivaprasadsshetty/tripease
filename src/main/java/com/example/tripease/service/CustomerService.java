package com.example.tripease.service;

import com.example.tripease.dto.request.CustomerRequest;
import com.example.tripease.dto.response.CustomerResponse;
import com.example.tripease.enums.Gender;
import com.example.tripease.exception.CustomerNotFoundException;
import com.example.tripease.model.Customer;
import com.example.tripease.repository.CustomerRepository;
import com.example.tripease.transformer.CustomerTransformer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public CustomerResponse addCustomer(CustomerRequest customerRequest) {
        Customer customer= new Customer();
        customer=CustomerTransformer.customerRequestToCustomer(customerRequest);

        Customer savedCustomer= customerRepository.save(customer);

       return CustomerTransformer.customerToCustomerResponse(savedCustomer);



    }

    public CustomerResponse getCustomer(int id) {
        Optional<Customer> extractedCustomer = customerRepository.findById(id);
        if (extractedCustomer.isEmpty()) {
            throw new CustomerNotFoundException("Invalid Customer Id");
        }
        Customer customer= extractedCustomer.get();

        return CustomerTransformer.customerToCustomerResponse(customer);
    }

    public List<CustomerResponse> getByGender(Gender gender) {
        List<Customer> customers= customerRepository.findByCustomerGender(gender);

        if(customers.isEmpty()){
            throw new CustomerNotFoundException("Customers of gender "+gender+" not registered");
        }

        List<CustomerResponse> customerResponses=new ArrayList<>();

        for(Customer customer: customers){
            CustomerResponse customerResponse= CustomerTransformer.customerToCustomerResponse(customer);
            customerResponses.add(customerResponse);
        }
        return customerResponses;
    }
}
