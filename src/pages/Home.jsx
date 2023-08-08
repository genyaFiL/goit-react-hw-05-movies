import React, { useEffect, useState } from 'react';

import { MoviesAPI } from 'services/api';
import { MovieList } from '../components/MovieList';
import { Loader } from '../components/Loader';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await MoviesAPI.fetchMovies();
        setData(data.results);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      {isLoading && <Loader />}
      {error && <p>Oops... Something went wrong...</p>}
      {!isLoading && !error && data.length > 0 && <MovieList data={data} />}
    </>
  );
};

export default Home;
