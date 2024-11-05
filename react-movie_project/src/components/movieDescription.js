import React from 'react';
import { useParams, Link } from 'react-router-dom';

const getEmbedLink = (link) => {
  const videoId = link.split('v=')[1];
  const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
  return `https://www.youtube.com/embed/${
    ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId
  }`;
};

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={getEmbedLink(movie.trailerLink)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
