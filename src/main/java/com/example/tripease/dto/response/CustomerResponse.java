package com.example.tripease.dto.response;

import com.example.tripease.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomerResponse {
    private String customerName;
    private String customerEmailId;
    private Gender customerGender;
}
