package com.example.tripease.model;

import com.example.tripease.enums.CabStatus;
import com.sun.jdi.BooleanType;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class Cab {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cabId;
    private String cabNumber;
    private String cabModel;
    private double perKmRate;
    @Enumerated(value= EnumType.STRING)
    private CabStatus status;
}
