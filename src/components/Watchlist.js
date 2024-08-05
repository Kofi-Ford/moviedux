import React from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
	return (
		<div>
			<h1 className="title">Your Watchlist</h1>
			<div className="watchlist">
				{watchlist.map((title) => {
					const movie = movies.find((movie) => movie.title === title);
					return (
						<MovieCard
							key={title}
							movie={movie}
							toggleWatchlist={toggleWatchlist}
							onWatchlist={true}
						></MovieCard>
					);
				})}
			</div>
		</div>
	);
}
