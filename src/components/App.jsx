import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from './MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews " element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

//API KEY
//d18b4a9f72261e134a57a36252f3e89a
