import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import "./css/App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
	return (
		<MovieProvider>
			<NavBar />
			<main className="main-content">
				<Routes>
					{/* Default homepage */}
					<Route path="/" element={<Home />} />

					{/* Redirect /home to / if needed */}
					<Route path="/home" element={<Navigate to="/" />} />

					{/* Other routes */}
					<Route path="/Favorites" element={<Favorites />} />
				</Routes>
			</main>
		</MovieProvider>
	);
}

export default App;
