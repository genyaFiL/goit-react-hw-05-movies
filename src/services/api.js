const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `d18b4a9f72261e134a57a36252f3e89a`;
export const BASE_URL_IMAGE = `https://image.tmdb.org/t/p/w500`;
export const DEFAULT_URL_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoviesAPI = {
  async fetchMovies() {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    return await response.json();
  },
  async fetchMovieById(movieId) {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return await response.json();
  },
  async fetchMovieBySearch(searchTerm) {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
    return await response.json();
  },
  async fetchMovieCast(movieId) {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return await response.json();
  },
  async fetchMovieReviews(movieId) {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return await response.json();
  },
};
