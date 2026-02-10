import "../css/MovieCard.css";
import { TMDB_GENRES } from "../services/tmdbGenres";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
	const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
	const favorite = isFavorite(movie.id);

	function handleFavoriteClick(e) {
		e.preventDefault();
		if (favorite) removeFromFavorites(movie.id);
		else addToFavorites(movie);
	}
	return (
		<div className="movie-card">
			<div className="movie-poster">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className="movie-overlay">
					<button
						className={`favorite-btn ${favorite ? "active" : ""}`}
						onClick={handleFavoriteClick}
					>
						{favorite ? "❤️" : "🤍"}
					</button>
				</div>
			</div>
			<div className="movie-info">
				<h3>{movie.title}</h3>

				<p className="year">{movie.release_date?.slice(0, 4)}</p>

				<p className="genre">
					{movie.genre_ids
						?.map((id) => TMDB_GENRES[id])
						.filter(Boolean)
						.join(", ")}
				</p>

				<p className="rating">⭐ {movie.vote_average?.toFixed(1)}</p>
			</div>
		</div>
	);
}
export default MovieCard;
