import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MoviesAPI } from 'services/api';

const Reviews = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();
  console.log('movieId', movieId);

  useEffect(() => {
    const fetchMovieReviewsData = async () => {
      try {
        const data = await MoviesAPI.fetchMovieReviews(movieId);
        setData(data.results);
        console.log('response fetchMovieReviews', data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieReviewsData();
  }, [movieId]);
  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {data.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          data?.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author : {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Reviews;
