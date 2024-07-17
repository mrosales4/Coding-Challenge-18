// U22978120

import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';

const movies = [
  { id: 1, title: 'Man on Fire' }, 
  { id: 2, title: 'Flight' },
  { id: 3, title: ' Devil wears prada'}
  
];

const App = () => {
  const [, setSelectedMovie] = useState(movies[0]);

  const handleRate = (movieId, rating) => {
    
  }}
