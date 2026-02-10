const API_KEY = "1bf15bac7e5e7ba362c037c5794538bb";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
	const data = await response.json();
	return data.results;
};

export const searchMovies = async (query) => {
	const response = await fetch(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
	);
	const data = await response.json();
	return data.results;
};
