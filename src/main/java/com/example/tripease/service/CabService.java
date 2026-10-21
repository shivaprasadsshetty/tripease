package com.example.tripease.service;

import com.example.tripease.dto.request.CabRequest;
import com.example.tripease.dto.response.CabResponse;
import com.example.tripease.exception.DriverNotFoundException;
import com.example.tripease.model.Cab;
import com.example.tripease.model.Driver;
import com.example.tripease.repository.DriverRepository;
import com.example.tripease.transformer.CabTransformer;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CabService {
    private final DriverRepository driverRepository;
    public CabService(DriverRepository driverRepository){
        this.driverRepository=driverRepository;
    }

    public CabResponse addCab(CabRequest cabRequest,int driverId) {
        Optional<Driver> optionalDriver=driverRepository.findById(driverId);
        if(optionalDriver.isEmpty()){
            throw new DriverNotFoundException("Driver with the id "+driverId+" is not registered");
        }
        Driver driver =optionalDriver.get();
        Cab cab= CabTransformer.cabRequestToCab(cabRequest);
        driver.setCab(cab);
        Driver savedDriver=driverRepository.save(driver);
        return CabTransformer.cabToCabResponse(savedDriver.getCab(),driver);
    }
}
