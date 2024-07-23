import './App.css';
import './styles.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { appwriteDatabase } from './Utils';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';

function App() {
	const dbId = process.env.REACT_APP_DB_ID;
	const collectionId = process.env.REACT_APP_COLLECTION_ID;

	const [movies, setMovies] = useState([]);
	const [watchlist, setWatchlist] = useState([]);

	useEffect(() => {
		appwriteDatabase
			.listDocuments(dbId, collectionId, [])
			.then((data) => setMovies(data.documents));
	}, []);

	const toggleWatchlist = (movieId) => {
		setWatchlist((prev) =>
			prev.includes(movieId)
				? prev.filter((id) => id !== movieId)
				: [...prev, movieId]
		);
	};

	return (
		<div className="App">
			<div className="container">
				<Header></Header>
				<Router>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/watchlist">Watchlist</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route
							path="/"
							element={
								<MoviesGrid
									movies={movies}
									watchlist={watchlist}
									toggleWatchlist={toggleWatchlist}
								/>
							}
						></Route>
						<Route
							path="/watchlist"
							element={
								<Watchlist
									movies={movies}
									watchlist={watchlist}
									toggleWatchlist={toggleWatchlist}
								/>
							}
						></Route>
					</Routes>
				</Router>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
