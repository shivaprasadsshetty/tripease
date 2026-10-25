package com.example.tripease.dto.response;

import com.example.tripease.enums.CabStatus;
import com.example.tripease.model.Driver;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class CabResponse {
    private String cabNumber;
    private String cabModel;
    private double perKmRate;
    private CabStatus status;
    private DriverResponse driverResponse;
}
