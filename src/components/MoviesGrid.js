import React, { useState, useEffect } from 'react';
import '../styles.css';
import MoviesCard from './MovieCard';

export default function MoviesGrid() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch('movies.json')
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);

	return (
		<div className="movies-grid">
			{movies.map((movie) => (
				<MoviesCard movie={movie} key={movie.id}></MoviesCard>
			))}
		</div>
	);
}
