package com.example.tripease.transformer;

import com.example.tripease.dto.request.CustomerRequest;
import com.example.tripease.dto.response.CustomerResponse;
import com.example.tripease.model.Customer;

public class CustomerTransformer {
    public static Customer customerRequestToCustomer(CustomerRequest customerRequest){
//        Customer customer= new Customer();
//        customer.setCustomerName(customerRequest.getCustomerName());
//        customer.setCustomerEmailId(customerRequest.getCustomerEmailId());
//        customer.setCustomerAge(customerRequest.getCustomerAge());
//        customer.setCustomerGender(customerRequest.getCustomerGender());

        Customer customer=  Customer.builder()
                .customerName(customerRequest.getCustomerName())
                .customerEmailId(customerRequest.getCustomerEmailId())
                .customerAge(customerRequest.getCustomerAge())
                .customerGender(customerRequest.getCustomerGender())
                .build();
        return customer;
    }

    public static CustomerResponse customerToCustomerResponse(Customer customer){
//        CustomerResponse customerResponse= new CustomerResponse();
//        customerResponse.setCustomerName(customer.getCustomerName());
//        customerResponse.setCustomerGender(customer.getCustomerGender());
//        customerResponse.setCustomerEmailId(customer.getCustomerEmailId());

        CustomerResponse customerResponse=CustomerResponse.builder()
                .customerName(customer.getCustomerName())
                .customerGender(customer.getCustomerGender())
                .customerEmailId(customer.getCustomerEmailId())
                .build();


        return customerResponse;
    }
}
