import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './components/filter';
import AddMovieForm from './components/addMovieForm';
import moviesData from './components/movieData';
import MovieList from './components/movieList';
import MovieDescription from './components/movieDescription';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <Router>
      <div className="App">
        <h1 className="addFilter">
          <span id="filter">
            <h2>Filter the movie</h2>
            <Filter filter={filter} setFilter={setFilter} />
          </span>
          <span id="add">
            <h2>Add a movie of your choice</h2>
            <AddMovieForm addMovie={addMovie} />
          </span>
        </h1>

        <Routes>
          <Route path="/" element={<MovieList movies={movies} filter={filter} />} />
          <Route path="/movies/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
