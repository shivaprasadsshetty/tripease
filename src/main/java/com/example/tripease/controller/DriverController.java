package com.example.tripease.controller;

import com.example.tripease.dto.request.DriverRequest;
import com.example.tripease.dto.response.DriverResponse;
import com.example.tripease.model.Driver;
import com.example.tripease.service.DriverService;
import lombok.Builder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/driver")
public class DriverController {

    private final DriverService driverService;
    public DriverController(DriverService driverService){
        this.driverService=driverService;
    }

    @PostMapping("/add")
    public ResponseEntity<DriverResponse> addDriver(@RequestBody DriverRequest driverRequest){
        DriverResponse driverResponse=driverService.addDriver(driverRequest);
        return new ResponseEntity<>(driverResponse, HttpStatus.CREATED);
    }

    @GetMapping("/get/driver-id/{id}")
    public ResponseEntity<DriverResponse> getDriverById(@PathVariable int id){
        DriverResponse driverResponse= driverService.getDriverById(id);
        return new ResponseEntity<>(driverResponse,HttpStatus.OK);
    }
}
