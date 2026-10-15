package com.example.tripease.service;

import com.example.tripease.dto.request.CustomerRequest;
import com.example.tripease.dto.response.CustomerResponse;
import com.example.tripease.exception.CustomerNotFoundException;
import com.example.tripease.model.Customer;
import com.example.tripease.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public CustomerResponse addCustomer(CustomerRequest customerRequest) {
        Customer customer= new Customer();
        customer.setCustomerName(customerRequest.getCustomerName());
        customer.setCustomerEmailId(customerRequest.getCustomerEmailId());
        customer.setCustomerAge(customerRequest.getCustomerAge());
        customer.setCustomerGender(customerRequest.getCustomerGender());

        Customer savedCustomer= customerRepository.save(customer);
        CustomerResponse customerResponse = new CustomerResponse();
        customerResponse.setCustomerName(savedCustomer.getCustomerName());
        customerResponse.setCustomerEmailId(savedCustomer.getCustomerEmailId());
        customerResponse.setCustomerGender(savedCustomer.getCustomerGender());

        return customerResponse;

    }

    public CustomerResponse getCustomer(int id) {
        Optional<Customer> extractedCustomer = customerRepository.findById(id);
        if (extractedCustomer.isEmpty()) {
            throw new CustomerNotFoundException("Invalid Customer Id");
        }
        Customer customer= extractedCustomer.get();
        CustomerResponse customerResponse = new CustomerResponse();
        customerResponse.setCustomerName(customer.getCustomerName());
        customerResponse.setCustomerEmailId(customer.getCustomerEmailId());
        customerResponse.setCustomerGender(customer.getCustomerGender());
        return customerResponse;
    }
}
