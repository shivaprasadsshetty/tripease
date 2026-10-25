package com.example.tripease.transformer;

import com.example.tripease.dto.request.CabRequest;
import com.example.tripease.dto.response.CabResponse;
import com.example.tripease.enums.CabStatus;
import com.example.tripease.model.Cab;
import com.example.tripease.model.Driver;

public class CabTransformer {
    public static Cab cabRequestToCab(CabRequest cabRequest){
        Cab cab=Cab.builder()
                .cabNumber(cabRequest.getCabNumber())
                .cabModel(cabRequest.getCabModel())
                .perKmRate(cabRequest.getPerKmRate())
                .status(CabStatus.AVAILABLE)
                .build();
        return cab;
    }

    public static CabResponse cabToCabResponse(Cab cab, Driver driver){
        CabResponse cabResponse=CabResponse.builder()
                .cabNumber(cab.getCabNumber())
                .cabModel(cab.getCabModel())
                .perKmRate(cab.getPerKmRate())
                .status(cab.getStatus())
                .driverResponse(DriverTransformer.driverToDriverResponse(driver))
                .build();
        return cabResponse;
    }
}
