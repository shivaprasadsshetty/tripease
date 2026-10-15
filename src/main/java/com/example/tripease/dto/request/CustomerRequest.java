package com.example.tripease.dto.request;

import com.example.tripease.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomerRequest {
    private String customerName;
    private String customerEmailId;
    private int customerAge;
    private Gender customerGender;
}
