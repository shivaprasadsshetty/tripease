package com.example.tripease.controller;

import com.example.tripease.dto.request.BookingRequest;
import com.example.tripease.dto.response.BookingResponse;
import com.example.tripease.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingController {
    private final BookingService bookingService;
    public BookingController(BookingService bookingService){
        this.bookingService=bookingService;
    }

    @PostMapping("/book/customer-id/{customerId}")
    public ResponseEntity<BookingResponse> bookCab(@RequestBody BookingRequest bookingRequest,
                                  @PathVariable("customerId") int customerId){
        BookingResponse bookingResponse=bookingService.bookCab(bookingRequest,customerId);
        return  new ResponseEntity<>(bookingResponse, HttpStatus.OK);
    }
}
