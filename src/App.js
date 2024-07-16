import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';

function App() {
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
						<Route path="/" element={<MoviesGrid />}></Route>
						<Route path="/watch;ist" element={<Watchlist />}></Route>
					</Routes>
				</Router>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
