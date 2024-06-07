import React from 'react';

function Star ({ index, rating, onClick }) {
  const isFilled = index < (rating);

  return (
    <i
      className={`fa-star ${isFilled ? 'fa-solid' : 'fa-regular'}`}
      onClick={onClick}
    >
    </i>
  );
};

export default Star;
