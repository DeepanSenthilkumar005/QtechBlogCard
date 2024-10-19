import React, { useState, useEffect } from 'react';
import i1 from '../assets/c1.avif';
import i2 from '../assets/c2.avif';
import i3 from '../assets/c3.avif';

const Carousel = () => {
  const images = [i1, i2, i3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  return (
    <div 
      className="relative w-full h-auto p-2 rounded-md max-w-4xl mx-auto" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden relative h-96 mt-3 my-auto lg:-mx-40 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`mx-auto absolute inset-0 sm:w-full md:h-fit md:w-5/6 object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full z-10 hover:bg-opacity-75 transition"
        onClick={handlePrevClick}
      >
        &larr;
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full z-10 hover:bg-opacity-75 transition"
        onClick={handleNextClick}
      >
        &rarr;
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
