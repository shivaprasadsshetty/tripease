package com.example.tripease.dto.request;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DriverRequest {
    private String driverName;
    private int driverAge;
    private String driverEmailId;
}
