"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Lorem ipsum dolo sit, conse ctetur adipiscing elit sed lorem ipsum.",
    author: "Eline Styberin",
    job: "Model",
  },
  {
    quote: "Dolor lorem ipsum dolo sit do, conse ctetur adipiscing sit sed lorem.",
    author: "Maline Anerh",
    job: "Actress",
  },
  {
    quote: "Vivid ipsum dolore sint trindincut, amet in adipiscing sunt aquilia.",
    author: "Annahe Yaley",
    job: "Singer",
  },
];

export default function VideoTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  // Optional subtle auto-rotate like original Swiper
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. Video Section - Sits in front (z-index: 23) in a centered 1300px container */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-3be8d3e elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default"
        data-id="3be8d3e"
        data-element_type="section"
        style={{
          position: "relative",
          zIndex: 23,
          margin: 0,
          padding: 0,
          backgroundColor: "transparent",
        }}
      >
        <div
          className="elementor-container elementor-column-gap-default"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 25px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8ac482"
            data-id="d8ac482"
            data-element_type="column"
            style={{ width: "100%" }}
          >
            <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: 0 }}>
              <div
                className="elementor-section elementor-inner-section elementor-element elementor-element-fd04503"
                data-id="fd04503"
                data-element_type="section"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "660px",
                  minHeight: "660px",
                  overflow: "hidden",
                  backgroundColor: "#111111",
                }}
              >
                {/* Hair washing video */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                  <video
                    className="elementor-background-video-hosted elementor-html5-video"
                    autoPlay
                    muted
                    playsInline
                    loop
                    poster="/wp-content/uploads/2022/12/main-home-single-img-02.jpg"
                    src="/wp-content/uploads/2022/12/main-home-video-2-1.mp4"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width 100% Solid Black Section - Overlaps video by 334px to create 50/50 split */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9d3e575 qodef-elementor-content-grid elementor-section-boxed elementor-section-height-default"
        data-id="9d3e575"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{
          width: "100%",
          backgroundColor: "#000000",
          color: "#ffffff",
          marginTop: "-334px",
          padding: "480px 0 140px 0",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        <div
          className="elementor-container elementor-column-gap-default"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 25px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bb6c7ec"
            data-id="bb6c7ec"
            data-element_type="column"
            style={{ width: "100%" }}
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-57cf301 elementor-widget elementor-widget-paulhair_core_testimonials_list"
                data-id="57cf301"
                data-element_type="widget"
                data-widget_type="paulhair_core_testimonials_list.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="qodef-shortcode qodef-m qodef-testimonials-list qodef-skin--light"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Navigation Arrow Left - Positioned on far left */}
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous Testimonial"
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "10px",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        className="qodef-svg--slider-arrow-left"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="29"
                        viewBox="0 0 16.121 29.414"
                        style={{ stroke: "#ffffff", fill: "none", strokeWidth: 2 }}
                      >
                        <path d="M1446,1160l-14,14,14,14" transform="translate(-1430.586 -1159.293)" />
                      </svg>
                    </button>

                    {/* Navigation Arrow Right - Positioned on far right */}
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next Testimonial"
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "10px",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        className="qodef-svg--slider-arrow-right"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="29"
                        viewBox="0 0 16.121 29.414"
                        style={{ stroke: "#ffffff", fill: "none", strokeWidth: 2 }}
                      >
                        <path d="M1432,1160l14,14-14,14" transform="translate(-1431.293 -1159.293)" />
                      </svg>
                    </button>

                    {/* Testimonial Quote Content - Centered with authentic padding */}
                    <div
                      className="qodef-e-content"
                      style={{
                        padding: "0 18%",
                        margin: "0 auto",
                        maxWidth: "1100px",
                        boxSizing: "border-box",
                      }}
                    >
                      {/* Quote mark icon */}
                      <div style={{ marginBottom: "35px" }}>
                        <svg
                          className="qodef-svg--mark-quote qodef-e-mark"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="20"
                          viewBox="0 0 18.7 16.5"
                          style={{ fill: "#ffffff", display: "inline-block" }}
                        >
                          <path
                            d="M35.552,62.1V45.6h5.3l-1.2,16.5Zm-13.4,0V45.6h5.3l-1.2,16.5Z"
                            transform="translate(-22.152 -45.6)"
                          />
                        </svg>
                      </div>

                      {/* Testimonial Quote Text - Kanit 600 uppercase, matching authentic demo */}
                      <div
                        className="qodef-e-text"
                        style={{
                          fontFamily: "'Kanit', sans-serif",
                          fontSize: "clamp(24px, 3.2vw, 40px)",
                          lineHeight: 1.15,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.01em",
                          color: "#ffffff",
                          margin: "0 0 32px 0",
                        }}
                      >
                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                      </div>

                      {/* Author & Job */}
                      <div className="qodef-e-author" style={{ marginTop: "25px" }}>
                        <span
                          className="qodef-e-author-name"
                          style={{
                            fontFamily: "'Kanit', sans-serif",
                            fontSize: "17px",
                            fontWeight: 500,
                            color: "#ffffff",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {testimonials[currentIndex].author}
                        </span>
                        <span
                          className="qodef-e-author-job"
                          style={{
                            color: "#999999",
                            fontSize: "15px",
                            fontWeight: 400,
                          }}
                        >
                          , {testimonials[currentIndex].job}
                        </span>
                      </div>
                    </div>

                    {/* Pagination Dots */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "35px",
                      }}
                    >
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrentIndex(i)}
                          aria-label={`Go to testimonial ${i + 1}`}
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor: i === currentIndex ? "#ffffff" : "rgba(255, 255, 255, 0.35)",
                            cursor: "pointer",
                            padding: 0,
                            transform: i === currentIndex ? "scale(1.3)" : "scale(1)",
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
