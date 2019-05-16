package com.avngrs.showroom.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.avngrs.showroom.model.Avngr;

@RestController
@RequestMapping("/api/v1/avngrs")
public class AvngrsController {
	
	@GetMapping
	public List<Avngr> list() {
		List<Avngr>	avngrs = new ArrayList<>();
		avngrs.add(new Avngr());
		return avngrs;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Avngr avngr) {
		
	}
	
	@GetMapping("/{id}")
	public Avngr get(@PathVariable("id") long id) {
		return new Avngr();
	}
 
}
