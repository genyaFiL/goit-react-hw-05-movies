import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { MoviesAPI } from 'services/api';
import { MovieDetailsInfo } from './MovieDetailsInfo';
import { Loader } from '../components/Loader';
import BackLink from '../components/BackLink';

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieByIdData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const movieData = await MoviesAPI.fetchMovieById(movieId);
        setData(movieData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchMovieByIdData();
  }, [movieId]);

  return (
    <>
      <div>Movie Details page</div>
      <div>
        <BackLink to={backLinkHref.current}>Go back</BackLink>
        {isLoading && <Loader />}
        {error && <p>Oops... Something went wrong...</p>}
        {!isLoading && !error && (
          <>
            <MovieDetailsInfo data={data} />
            <hr />
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast" state={{ from: location.state?.from }}>
                  cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location.state?.from }}>
                  reviews
                </Link>
              </li>
            </ul>
            <hr />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
