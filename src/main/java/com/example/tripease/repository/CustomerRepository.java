package com.example.tripease.repository;

import com.example.tripease.enums.Gender;
import com.example.tripease.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    List<Customer> findByCustomerGender(Gender customerGender);
}
