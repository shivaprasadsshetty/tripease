package com.example.tripease.dto.response;

import com.example.tripease.enums.TripStatus;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@Setter
public class BookingResponse {
    private String pickUp;
    private String destination;
    private  double tripDistanceInKm;
    private TripStatus tripStatus;
    private double billAmount;
    private Date bookedAt;
    private Date lastUpdateAt;
    private CustomerResponse customerResponse;
    private CabResponse cabResponse;
}
