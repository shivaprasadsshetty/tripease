package com.example.tripease.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer driverId;
    private String driverName;
    private int driverAge;
    private String driverEmailId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="driverId")
    private List<Booking> bookingList=new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="cabId")
    private Cab cabId;
}




