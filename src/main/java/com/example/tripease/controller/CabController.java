package com.example.tripease.controller;

import com.example.tripease.dto.request.CabRequest;
import com.example.tripease.dto.response.CabResponse;
import com.example.tripease.service.CabService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cab")
public class CabController {
    private final CabService cabService;
    public CabController(CabService cabService){
        this.cabService=cabService;
    }

    @PostMapping("/add/driver-id/{driverId}")
    public ResponseEntity<CabResponse> addCab(@RequestBody CabRequest cabRequest
                                              , @PathVariable int driverId){
        CabResponse cabResponse=cabService.addCab(cabRequest,driverId);
        return new ResponseEntity<>(cabResponse, HttpStatus.CREATED);
    }
}
