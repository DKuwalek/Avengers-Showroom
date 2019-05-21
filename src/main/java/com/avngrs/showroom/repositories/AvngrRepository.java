package com.avngrs.showroom.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avngrs.showroom.model.Avngr;

public interface AvngrRepository extends JpaRepository<Avngr, Long> {
	
}
