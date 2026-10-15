package com.example.tripease.model;

import com.example.tripease.enums.TripStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer booking_id;
    private String pickUp;
    private String destination;
    private  double tripDistanceInKm;
    private TripStatus tripStatus;
    private double billAmount;

    //did this just for practice
//    @ManyToOne
//    @JoinColumn(name="Customer_id")
//    private Customer customer;

}
