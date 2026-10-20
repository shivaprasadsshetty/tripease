package com.example.tripease.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DriverResponse {
    private int driverId;
    private String driverName;
    private int driverAge;
    private String driverEmailId;
}
