import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL_IMAGE, DEFAULT_URL_IMG, MoviesAPI } from 'services/api';
import { Loader } from '../components/Loader';

const Cast = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCastData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const castData = await MoviesAPI.fetchMovieCast(movieId);
        setData(castData.cast);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchMovieCastData();
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      {isLoading && <Loader />}
      {error && <p>Oops... Something went wrong...</p>}
      {!isLoading && !error && (
        <ul>
          {data.length === 0 ? (
            <p>We don't have any cast for this movie</p>
          ) : (
            data?.map(
              ({ id, name, profile_path, character }) =>
                name && (
                  <li key={id}>
                    <img
                      src={
                        profile_path
                          ? `${BASE_URL_IMAGE}${profile_path}`
                          : DEFAULT_URL_IMG
                      }
                      alt={name || 'actor photo'}
                      width={100}
                    />
                    <h3>{name}</h3>
                    <p>Character : {character}</p>
                  </li>
                )
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
