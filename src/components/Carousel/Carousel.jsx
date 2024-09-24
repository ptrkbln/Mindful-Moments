import React, { useState, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Move to the next slide automatically
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
              />
            </div>
            <p className="carousel-item-description">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
