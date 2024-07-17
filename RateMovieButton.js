//U22978120
import React, { useState } from 'react';

const RateMovieButton = ({ movie, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (newRating) => {
    setRating(newRating);
    onRate(movie.id, newRating); // Call parent function to submit rating
  };

  return (
    <div className="rate-movie">
      <span>Rate "{movie.title}":</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleClick(star)} className={`star ${rating >= star ? 'active' : ''}`}>
          ★
        </button>
      ))}
      {rating > 0 && <p>Rating submitted: {rating} stars</p>}
    </div>
  );
};

export default RateMovieButton;
