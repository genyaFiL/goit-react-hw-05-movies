import React from 'react';
import { BASE_URL_IMAGE, DEFAULT_URL_IMG } from 'services/api';

export const MovieDetailsInfo = ({ data }) => {
  return (
    <>
      <img
        src={
          data.poster_path
            ? `${BASE_URL_IMAGE}${data.poster_path}`
            : DEFAULT_URL_IMG
        }
        width={100}
        alt={data.title || 'poster'}
      />
      <h2>{data.original_title}</h2>
      <p>UserScore: {Math.round(data.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{data.overview}</p>
      <h3>Genres</h3>
      {data.genres?.map(({ id, name }) => (
        <span key={id}>{name} </span>
      ))}
    </>
  );
};
