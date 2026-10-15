package com.example.tripease.controller;

import com.example.tripease.dto.request.CustomerRequest;
import com.example.tripease.dto.response.CustomerResponse;
import com.example.tripease.model.Customer;
import com.example.tripease.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    private final CustomerService customerService;
    @Autowired
    public CustomerController(CustomerService customerService){
        this.customerService=customerService;
    }

    @PostMapping("/add")
    public ResponseEntity<CustomerResponse> addCustomer(@RequestBody CustomerRequest customerRequest){
        CustomerResponse customerResponse=customerService.addCustomer(customerRequest);
        return new ResponseEntity<>(customerResponse, HttpStatus.CREATED);
    }

    @GetMapping("/get/customer-id/{id}")
    public ResponseEntity<CustomerResponse> getCustomer(@PathVariable("id") int id){
        CustomerResponse customerResponse= customerService.getCustomer(id);
        if(customerResponse==null){
            return new ResponseEntity<>(customerResponse,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customerResponse,HttpStatus.OK);
    }
}
