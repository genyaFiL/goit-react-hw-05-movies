import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

// const Movies = () => {
//   // const backLinkHref = '/Home';
//   // const location = useLocation();
//   // const backLinkHref = useRef(location.state?.from ?? '/');
//   // console.log('location', location);
//   // console.log('location.state', location.state);
//   return (
//     <div>
//     </div>
//   );
// };

// export default Movies;

// import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

// import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';

// import { MoviesGallery, Searchbar } from 'components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const { isFetching, data, error, fetchData } = useFetch();
  const query = searchParams.get('query'); // ?query=rush+hour -> "rush hour"
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (!query) return;

  //   fetchData(MoviesAPI.fetchMovieBySearch(query));
  // }, [query, fetchData]);

  useEffect(() => {
    const fetchMovieBySearchData = async () => {
      try {
        const data = await MoviesAPI.fetchMovieBySearch(query);
        setData(data.results);
        console.log('response fetchMovieBySearch data', data);
        console.log('response fetchMovieBySearch data.results', data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieBySearchData();
  }, [query]);

  // const handleSubmitSearchTerm = query => {
  //   setSearchParams({ query: query });
  // };

  // const movies = data?.results;
  return (
    <>
      {/* <Searchbar onSubmit={handleSubmitSearchTerm} />
      <MoviesGallery error={error} isFetching={isFetching} movies={movies} /> */}
      <h2>Movies page</h2>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      <form>
        <input
          // onChange={handleSearchTermChange}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchValue"
          // value={formData.searchValue}
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
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default Movies;
