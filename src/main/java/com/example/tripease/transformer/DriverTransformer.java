package com.example.tripease.transformer;

import com.example.tripease.dto.request.DriverRequest;
import com.example.tripease.dto.response.DriverResponse;
import com.example.tripease.model.Driver;

public class DriverTransformer {
    public static Driver driverRequestToDriver(DriverRequest driverRequest){
        Driver driver=Driver.builder()
                .driverName(driverRequest.getDriverName())
                .driverAge(driverRequest.getDriverAge())
                .driverEmailId(driverRequest.getDriverEmailId())
                .build();
        return driver;
    }
    public static DriverResponse driverToDriverResponse(Driver driver){
        DriverResponse driverResponse=DriverResponse.builder()
                .driverName(driver.getDriverName())
                .driverAge(driver.getDriverAge())
                .driverEmailId(driver.getDriverEmailId())
                .build();
        return driverResponse;

    }
}
