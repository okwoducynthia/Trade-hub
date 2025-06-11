import React, { useState } from "react";
import "./Testimonial.css";
import { testimonials } from "../../Data/Data";

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (window.innerWidth <= 768) {
      return [testimonials[currentIndex]];
    } else {
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ];
    }
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="testimonial">
      <h3>TESTIMONIAL</h3>
      <h1>Client Review</h1>
      <div className="testimonial-page">
        <div className="testimonial-slider">
          <button className="arrow-left" onClick={handlePrev}>
            &#10094;
          </button>

          <div className="testimonial-roll">
            {visibleTestimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <div className="testimonial-content">
                  <p className="testimonial-text">"{t.content}"</p>
                  <p className="testimonial-name">- {t.name}</p>
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="star">
                        &#9733;
                        </span>
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, i) => (
                      <span key={i} className="star-empty">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              
            ))}
          </div>
          

          <button className="arrow-right" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;