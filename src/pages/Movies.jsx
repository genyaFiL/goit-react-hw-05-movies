import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovieBySearchData = async () => {
      if (!query) return;
      try {
        const data = await MoviesAPI.fetchMovieBySearch(query);
        setData(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieBySearchData();
  }, [query]);

  const [formData, setFormData] = useState({ searchValue: '' });

  const handleSubmit = e => {
    e.preventDefault();
    formData.searchValue === ''
      ? setSearchParams({})
      : setSearchParams({ query: formData.searchValue });
  };

  const handleSearchTermChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const location = useLocation();
  return (
    <>
      <h2>Movies page</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleSearchTermChange}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchValue"
          value={formData.searchValue || ''}
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <hr />
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
    </>
  );
};

export default Movies;
