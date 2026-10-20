package com.example.tripease.service;

import com.example.tripease.dto.request.DriverRequest;
import com.example.tripease.dto.response.DriverResponse;
import com.example.tripease.exception.DriverNotFoundException;
import com.example.tripease.model.Driver;
import com.example.tripease.repository.DriverRepository;
import com.example.tripease.transformer.DriverTransformer;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DriverService {
    private final DriverRepository driverRepository;

    public DriverService(DriverRepository driverRepository) {
        this.driverRepository=driverRepository;
    }

    public DriverResponse addDriver(DriverRequest driverRequest) {
        Driver driver= DriverTransformer.driverRequestToDriver(driverRequest);
        Driver savedDriver= driverRepository.save(driver);
        return DriverTransformer.driverToDriverResponse(savedDriver);
    }

    public DriverResponse getDriverById(int id) {
        Optional<Driver> optionalDriver=driverRepository.findById(id);
        if(optionalDriver.isEmpty()){
            throw new DriverNotFoundException("Driver with the id "+id+" not registered");
        }
        Driver driver=optionalDriver.get();
        return DriverTransformer.driverToDriverResponse(driver);
    }
}
