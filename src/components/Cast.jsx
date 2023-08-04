import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL_IMAGE, MoviesAPI } from 'services/api';

const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

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
  return (
    <>
      <h3>Cast:</h3>

      <ul>
        {data.length === 0 ? (
          <p>We don't have any cast for this movie</p>
        ) : (
          data?.map(
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
          )
        )}
      </ul>
    </>
  );
};

export default Cast;
