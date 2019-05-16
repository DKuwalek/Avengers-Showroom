package com.avngrs.showroom.model;

import java.math.BigDecimal;
import java.sql.Date;

public class Avngr {
	
	private String name;
	
	private BigDecimal numberOfMovies;
	
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

}
