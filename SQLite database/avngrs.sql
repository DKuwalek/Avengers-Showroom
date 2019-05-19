DROP TABLE IF EXISTS avngr;
DROP TABLE IF EXISTS hibernate_sequence;

CREATE TABLE
	avngr (
		id BIGINT NOT NULL,
		name VARCHAR,
		numberOfMovies NUMERIC,
		friendly BOOLEAN,
		lastMovieReleaseDate DATE,
		serial_number VARCHAR,
		PRIMARY KEY (id)
	);

CREATE TABLE
	hibernate_sequence (
		next_value BIGINT NOT NULL
	);

INSERT INTO avngr (id, name, numberOfMovies, friendly, lastMovieReleaseDate)
	VALUES (1, "Iron Man", 11, true, "2019-01-01");
INSERT INTO avngr (id, name, numberOfMovies, friendly, lastMovieReleaseDate)
	VALUES (2, "Thor", 3, true, "2019-01-01");

INSERT INTO hibernate_sequence (next_value) VALUES (3);
