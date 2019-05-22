DROP TABLE IF EXISTS avngr;
DROP TABLE IF EXISTS hibernate_sequence;

CREATE TABLE
	avngr (
		id BIGINT NOT NULL,
		name VARCHAR,
		number_of_movies NUMERIC,
		friendly BOOLEAN,
		last_movie_release_date DATE,
		serial_number VARCHAR,
		PRIMARY KEY (id)
	);

CREATE TABLE
	hibernate_sequence (
		next_val BIGINT NOT NULL
	);

INSERT INTO avngr (id, name, number_of_movies, friendly, last_movie_release_date)
	VALUES (1, "Iron Man", 11, true, "2019-01-01 00:00:00.00");
INSERT INTO avngr (id, name, number_of_movies, friendly, last_movie_release_date)
	VALUES (2, "Thor", 3, true, "2019-01-01 00:00:00.00");

INSERT INTO hibernate_sequence (next_val) VALUES (3);
