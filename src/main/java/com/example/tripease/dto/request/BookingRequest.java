package com.example.tripease.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookingRequest {
    private String pickUp;
    private String destination;
    private  double tripDistanceInKm;
}
