import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
    setMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={movie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Movie Description"
        value={movie.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (0-10)"
        value={movie.rating}
        min="0"
        max="10"
        step="0.1"
        onChange={handleChange}
        required
      />

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
