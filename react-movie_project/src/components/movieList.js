import React from 'react';
import MovieCard from './movieCard';

const getRatingRange = (rating) => {
  const lowerBound = rating;
  const upperBound = rating + 0.9;
  return { lowerBound, upperBound };
};

const MovieList = ({ movies, filter }) => {
  // code to Check if a rating is provided in the filter
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());

    // If no rating is provided, only filter by title
    if (!filter.rating) {
      return matchesTitle;
    }

    const { lowerBound, upperBound } = getRatingRange(filter.rating);
    // This code Filters by both title and rating if rating is provided
    return matchesTitle && movie.rating >= lowerBound && movie.rating <= upperBound;
  });

  return (
    <div className="movie-list">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found matching the criteria.</p>
      )}
    </div>
  );
};

export default MovieList;
