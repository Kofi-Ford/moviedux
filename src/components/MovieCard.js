import React from 'react';
import { appwriteStorage } from '../Utils';
import '../styles.css';

export default function MoviesCard({ movie, onWatchlist, toggleWatchlist }) {
	const imageBucketEndpoint = process.env.REACT_APP_IMAGE_BUCKET_ID;

	const imageList = appwriteStorage.listFiles(imageBucketEndpoint);

	console.log(imageList);

	const handleError = (e) => {
		e.target.src = 'images/default.jpg';
	};

	const getRatingClass = (rating) => {
		if (rating >= 8) {
			return 'rating-good';
		} else if (rating >= 5) {
			return 'rating-ok';
		} else {
			return 'rating-bad';
		}
	};

	return (
		<div key={movie.id} className="movie-card">
			<img
				src={`images/${movie.image}`}
				alt={movie.title}
				onError={handleError}
			/>
			<div>
				<h3 className="movie-card-title"> {movie.title} </h3>
				<div>
					<span className="movie-card-genre"> {movie.genre}</span>
					<span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
						{movie.rating}
					</span>
				</div>
				<label className="switch">
					<input
						type="checkbox"
						checked={onWatchlist}
						onChange={() => toggleWatchlist(movie.id)}
					></input>
					<span className="slider">
						<span className="slider-label">
							{onWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
						</span>
					</span>
				</label>
			</div>
		</div>
	);
}
