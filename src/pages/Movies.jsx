import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'services/api';
import { Loader } from '../components/Loader';
import { MovieList } from '../components/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieBySearchData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setError(null);
        const data = await MoviesAPI.fetchMovieBySearch(query);
        setData(data.results);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
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

  return (
    <>
      <h2>Movies page</h2>
      <Suspense fallback={<Loader />}>
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
      {isLoading && <Loader />}
      {error && <p>Oops... Something went wrong...</p>}
      {data.length > 0 && !isLoading && !error && <MovieList data={data} />}
    </>
  );
};

export default Movies;
