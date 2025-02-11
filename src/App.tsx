import { useState } from 'react';
import { beautyQueenList } from './data.tsx'; 
import './app.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < beautyQueenList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(beautyQueenList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let beautyQueen = beautyQueenList[index];

  return (
    <div className="gallery-container">
      <h1>Krista Jezel Pelayo</h1>
      <div className="gallery-controls">
        <button onClick={handlePreviousClick} disabled={!hasPrevious}>
          Back
        </button>
        <button onClick={handleNextClick} disabled={!hasNext}>
          Next
        </button>
      </div>
      <h2>
        <i>{beautyQueen.name}</i> - {beautyQueen.title}
      </h2>
      <h3>
        ({index + 1} of {beautyQueenList.length})
      </h3>

      <button id="show-more" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{beautyQueen.description}</p>} 

      <div className="image-container">
        <img
          src={beautyQueen.url}
          alt={beautyQueen.alt}
        />
      </div>
    </div>
  );
}