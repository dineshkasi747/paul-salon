"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: "/wp-content/uploads/2023/01/main-home-rev-img-01.jpg",
    title1: "EXTENSIVE",
    title2: "POWER",
  },
  {
    id: 2,
    image: "/wp-content/uploads/2023/01/main-home-rev-img-02.jpg",
    title1: "HIGHLIGHTS",
    title2: "STYLE",
  },
  {
    id: 3,
    image: "/wp-content/uploads/2023/01/main-home-rev-img-03.jpg",
    title1: "DARK HAIR",
    title2: "COLORS",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="elementor-element elementor-element-997c4ce elementor-widget elementor-widget-slider_revolution">
      <div className="elementor-widget-container">
        <div className="wp-block-themepunch-revslider">
          <div id="rev_slider_1_1_wrapper">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`rev-slide-container ${isActive ? "active" : ""}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title1}
                    className="rev-slide-bg"
                  />
                  <div className="rev-slide-content">
                    <h1 className="rev-slide-title-1">{slide.title1}</h1>
                    <h2 className="rev-slide-title-2">{slide.title2}</h2>
                  </div>
                </div>
              );
            })}

            {/* Prev Arrow */}
            <button
              type="button"
              className="paulhair-slider-arrow left"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <div className="qodef-svg-nav">
                <svg viewBox="0 0 37 12">
                  <path d="M37 6H2M7 1L2 6l5 5" />
                </svg>
              </div>
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              className="paulhair-slider-arrow right"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <div className="qodef-svg-nav">
                <svg viewBox="0 0 37 12">
                  <path d="M37 6H2M7 1L2 6l5 5" />
                </svg>
              </div>
            </button>

            {/* Bullets */}
            <div className="paulhair-slider-bullets">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`paulhair-slider-bullet ${index === currentSlide ? "active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
