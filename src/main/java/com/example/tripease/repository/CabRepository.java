package com.example.tripease.repository;

import com.example.tripease.model.Cab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CabRepository extends JpaRepository<Cab,Integer> {
    @Query(value = "select * from cab where status='AVAILABLE' order by rand() limit 1 ",nativeQuery = true)
    Cab getCabRandomly();

}
