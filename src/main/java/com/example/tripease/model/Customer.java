package com.example.tripease.model;


import com.example.tripease.enums.Gender;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    private String customerName;
    private String customerEmailId;
    private int customerAge;
    @Enumerated(value = EnumType.STRING)
    private Gender customerGender;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="customerId")
    private List<Booking> bookingList= new ArrayList<>();

}
