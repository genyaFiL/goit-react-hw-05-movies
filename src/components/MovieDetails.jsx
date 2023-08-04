import BackLink from 'components/BackLink';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

import { BASE_URL_IMAGE, MoviesAPI } from 'services/api';

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieByIdData = async () => {
      try {
        const data = await MoviesAPI.fetchMovieById(movieId);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieByIdData();
  }, [movieId]);

  return (
    <>
      <div>Movie Details page</div>
      <div>
        <BackLink to={backLinkHref.current}>Go back</BackLink>
        <img
          src={`${BASE_URL_IMAGE}${data.poster_path}`}
          alt={data.title}
          width="100"
        />
        <h2>{data.original_title}</h2>
        <p>UserScore: {Math.round(data.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{data.overview}</p>
        <h3>Genres</h3>
        {data.genres?.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
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
        <Suspense fallback={<div>Loading additional information...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
