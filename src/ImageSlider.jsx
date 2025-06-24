import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  '/Img/image-1.jpg',
  '/Img/image-2.jpg',
  '/Img/image-3.jpg',
  '/Img/image-4.jpg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Layer (full width) */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              filter: 'blur(8px) brightness(0.4)',
              transform: 'scale(1.1)',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-6 lg:px-10 flex items-center">
        {/* Left side - will be occupied by text content from Landing.jsx */}
        <div className="flex-1"></div>

        {/* Right side - Foreground Image with Arrows */}
        <div className="relative w-[400px] h-[400px] lg:h-[500px] flex items-center justify-center mr-20">
          {/* Navigation Arrows */}
          {length > 1 && (
            <>
              <button
                onClick={goToPrev}
                disabled={isTransitioning}
                className="absolute left-0 -translate-x-10 bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black/70 transition disabled:opacity-50 hidden lg:block"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="absolute right-0 translate-x-10 bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black/70 transition disabled:opacity-50 hidden lg:block"
              >
                <FaChevronRight size={16} />
              </button>
            </>
          )}

          {/* Foreground Image */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-contain object-center drop-shadow-2xl transition-transform duration-500 hover:scale-105 hidden lg:block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}