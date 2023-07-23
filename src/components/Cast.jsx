import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL_IMAGE, MoviesAPI } from 'services/api';

const Cast = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();
  console.log('movieId', movieId);

  useEffect(() => {
    const fetchMovieCastData = async () => {
      try {
        const data = await MoviesAPI.fetchMovieCast(movieId);
        setData(data.cast);
        console.log('response fetchMovieCast', data.cast);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieCastData();
  }, [movieId]);
  console.log('data', data);
  return (
    <>
      <h3>Cast:</h3>

      <ul>
        {data?.map(
          ({ id, name, profile_path, character }) =>
            name && (
              <li key={id}>
                <img
                  src={`${BASE_URL_IMAGE}${profile_path}`}
                  alt={name}
                  width="100"
                />
                <h3>{name}</h3>
                <p>Character : {character}</p>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default Cast;
