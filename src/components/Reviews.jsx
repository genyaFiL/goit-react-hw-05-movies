import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from 'services/api';
import { Loader } from '../components/Loader';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviewsData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const reviewsData = await MoviesAPI.fetchMovieReviews(movieId);
        setData(reviewsData.results);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchMovieReviewsData();
  }, [movieId]);

  return (
    <>
      <h3>Reviews:</h3>
      {isLoading && <Loader />}
      {error && <p>Oops... Something went wrong...</p>}
      {!isLoading && !error && (
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
      )}
    </>
  );
};

export default Reviews;
