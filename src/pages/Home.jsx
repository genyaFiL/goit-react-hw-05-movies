import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MoviesAPI } from 'services/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await MoviesAPI.fetchMovies();
        setData(data.results);
        console.log('response', data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMoviesData();
  }, []);

  return (
    <>
      {console.log('data=', data)}
      <h2>Trending Today</h2>
      <ul>
        {data?.map(
          ({ id, title }) =>
            title && (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default Home;
