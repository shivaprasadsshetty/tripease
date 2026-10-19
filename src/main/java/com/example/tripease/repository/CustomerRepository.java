package com.example.tripease.repository;

import com.example.tripease.enums.Gender;
import com.example.tripease.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    List<Customer> findByCustomerGender(Gender customerGender);
    List<Customer> findByCustomerGenderAndCustomerAge(Gender customerGender,int customerAge);

    @Query("select c from Customer c where c.customerGender=:gender and c.customerAge>:age")
    List<Customer> getAllCustomerBYGenderAndAgeGreaterThan(@Param("gender") Gender gender, @Param("age") int age);
}
