import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={
          movie.posterURL.startsWith('http')
            ? movie.posterURL
            : `${process.env.PUBLIC_URL}${movie.posterURL}`
        }
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p id="rating">Rating: {movie.rating}</p>
      <Link to={`/movies/${movie.id}`} className="trailer-link">
        Watch Trailer
      </Link>
    </div>
  );
};

export default MovieCard;
