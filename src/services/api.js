// import axios from 'axios';
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `d18b4a9f72261e134a57a36252f3e89a`;
export const BASE_URL_IMAGE = `https://image.tmdb.org/t/p/w500`;

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
    console.log('movieId in fetch by id', movieId);
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

// const API_KEY = `177f9a94bc6cffceeb45ffe96a6de0f1`;

// const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

// export const fetchPosts = async () => {
//   const { data } = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
//   return data;
// };

// export const fetchPostDetails = async postId => {
//   const { data } = await axios.get(
//     `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}`
//   );
//   return data;
// };

// export const fetchPostComments = async postId => {
//   const { data } = await axios.get(
//     `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}/comments`
//   );
//   return data;
// };
// MoviesAPI.fetchMovies
