import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data?.map(
        ({ id, title }) =>
          title && (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          )
      )}
    </ul>
  );
};
