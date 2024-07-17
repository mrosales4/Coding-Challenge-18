//U22978120
import React, { useState } from 'react';

const MovieSelector = ({ movies, onSelect }) => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]); // Default to first movie

  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const newMovie = movies.find((movie) => movie.id === selectedId);
    setSelectedMovie(newMovie);
    onSelect(newMovie); // Call parent function on selection change
  };

  return (
    <select value={selectedMovie.id} onChange={handleChange}>
      {movies.map((movie) => (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      ))}
    </select>
  );
};
