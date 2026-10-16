package com.example.tripease.dto.response;

import com.example.tripease.enums.Gender;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class CustomerResponse {
    private String customerName;
    private String customerEmailId;
    private Gender customerGender;
}
