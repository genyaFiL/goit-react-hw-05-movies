import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      Movies page
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
