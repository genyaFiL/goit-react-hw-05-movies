import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { MoviesAPI } from 'services/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await MoviesAPI.fetchMovies();
        setData(data.results);
        console.log('response', data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMoviesData();
  }, []);

  // const Home = () => {
  return (
    <>
      {console.log('data=', data)}
      <h2>Trending Today</h2>
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
      {/* <ul>
        {response.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            alt={tags}
          ></ImageGalleryItem>
        ))}
      </ul> */}
    </>
  );
};
// };
export default Home;

//_________________________
// useEffect(() => {
//   // const options = {
//   //   method: 'GET',
//   //   headers: {
//   //     accept: 'application/json',
//   //     Authorization:
//   //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMThiNGE5ZjcyMjYxZTEzNGE1N2EzNjI1MmYzZTg5YSIsInN1YiI6IjY0YTliMzE4M2UyZWM4MDBjYmNkNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9BobpGlb04cnntK7JHlzR3-RQwfo-bAqukZ2hVpU3g',
//   //   },
//   // };

//   // fetch('https://api.themoviedb.org/3/trending/movie/day', options)
//   fetch(MoviesAPI.fetchMovies())
//     .then(response => response.json())
//     .then(data => {
//       setData(data.results);
//       console.log('response', data.results);
//     })
//     .catch(err => console.error(err));
// }, []);

// _______________________________
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/authentication',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMThiNGE5ZjcyMjYxZTEzNGE1N2EzNjI1MmYzZTg5YSIsInN1YiI6IjY0YTliMzE4M2UyZWM4MDBjYmNkNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9BobpGlb04cnntK7JHlzR3-RQwfo-bAqukZ2hVpU3g',
//   },
// };

// async function fetchData() {
//   try {
//     const response = await axios(options); // Вызываем axios с объектом опций напрямую
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();
// useEffect(() => {
//   const fetchApi = useContext(second);

//   return () => {
//     second;
//   };
// }, [third]);

// useEffect(() => {
//   if (!postId) return;

//   const fetchPostData = async () => {
//     try {
//       setIsLoading(true);

//       const postData = await fetchPostDetails(postId);
//       setPostDetails(postData);
//       toast.success('Post details were successfully fetched!', toastConfig);
//     } catch (error) {
//       setError(error.message);
//       toast.error(error.message, toastConfig);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchPostData();
// }, [postId]);
