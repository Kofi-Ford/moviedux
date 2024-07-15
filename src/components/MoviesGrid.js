import React, { useState, useEffect } from 'react';
import '../styles.css';
import MoviesCard from './MovieCard';

export default function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('[]');

	useEffect(() => {
		fetch('movies.json')
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);

	return (
		<div>
			<input
				type="text"
				className="search-input"
				placeholder="Search movies..."
			/>
			<div className="movies-grid">
				{movies.map((movie) => (
					<MoviesCard movie={movie} key={movie.id}></MoviesCard>
				))}
			</div>
		</div>
	);
}
