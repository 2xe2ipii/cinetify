import axios from 'axios';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMoviePoster = async (movieTitle: string) => {
  try {
    // 1. Search for the movie by title
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: movieTitle,
      },
    });

    // 2. Get the first result
    const movie = response.data.results[0];

    // 3. Construct the full image URL (w500 size is good for mobile/web)
    if (movie && movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    
    return null;
  } catch (error) {
    console.error("TMDB Error:", error);
    return null;
  }
};