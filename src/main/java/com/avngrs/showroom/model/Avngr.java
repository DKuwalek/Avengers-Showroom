package com.avngrs.showroom.model;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Avngr {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private BigDecimal numberOfMovies;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-mm-DD")
	private Date lastMovieReleaseDate;
	
	private boolean friendly;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getNumberOfMovies() {
		return numberOfMovies;
	}

	public void setNumberOfMovies(BigDecimal numberOfMovies) {
		this.numberOfMovies = numberOfMovies;
	}

	public Date getLastMovieReleaseDate() {
		return lastMovieReleaseDate;
	}

	public void setLastMovieReleaseDate(Date lastMovieReleaseDate) {
		this.lastMovieReleaseDate = lastMovieReleaseDate;
	}

	public boolean isFriendly() {
		return friendly;
	}

	public void setFriendly(boolean friendly) {
		this.friendly = friendly;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
