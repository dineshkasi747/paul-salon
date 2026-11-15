"use client";

import { useState } from "react";

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

  return (
    <>
      {/* 1. Video Section */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-3be8d3e elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
        data-id="3be8d3e"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8ac482"
            data-id="d8ac482"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-fd04503 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="fd04503"
                data-element_type="section"
                style={{ position: "relative", minHeight: "550px", overflow: "hidden" }}
              >
                <div className="elementor-background-video-container" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                  <video
                    className="elementor-background-video-hosted elementor-html5-video"
                    autoPlay
                    muted
                    playsInline
                    loop
                    src="/wp-content/uploads/2022/12/main-home-video-2-1.mp4"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-be1c59c"
                    data-id="be1c59c"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-04c5be1 elementor-widget elementor-widget-paulhair_core_separator"
                        data-id="04c5be1"
                        data-element_type="widget"
                        data-widget_type="paulhair_core_separator.default"
                      >
                        <div className="elementor-widget-container" style={{ minHeight: "500px" }}>
                          <div className="qodef-shortcode qodef-m qodef-separator clear">
                            <div className="qodef-m-line" style={{ borderColor: "#00000000" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Testimonials Overlapping Card */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9d3e575 qodef-elementor-content-grid elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="9d3e575"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{
          marginTop: "-210px",
          position: "relative",
          zIndex: 5,
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "100px 40px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bb6c7ec"
            data-id="bb6c7ec"
            data-element_type="column"
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
                    style={{ textAlign: "center", position: "relative", maxWidth: "800px", margin: "0 auto" }}
                  >
                    {/* Quote mark icon */}
                    <div style={{ marginBottom: "25px" }}>
                      <svg
                        className="qodef-svg--mark-quote qodef-e-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        viewBox="0 0 18.7 16.5"
                        style={{ fill: "#ffffff" }}
                      >
                        <path
                          d="M35.552,62.1V45.6h5.3l-1.2,16.5Zm-13.4,0V45.6h5.3l-1.2,16.5Z"
                          transform="translate(-22.152 -45.6)"
                        />
                      </svg>
                    </div>

                    {/* Testimonial Quote */}
                    <div
                      className="qodef-e-text"
                      style={{
                        fontFamily: "Kanit",
                        fontSize: "clamp(22px, 3.5vw, 36px)",
                        lineHeight: 1.3,
                        fontWeight: 400,
                        color: "#ffffff",
                        marginBottom: "30px",
                      }}
                    >
                      &ldquo;{testimonials[currentIndex].quote}&rdquo;
                    </div>

                    {/* Author & Job */}
                    <div className="qodef-e-author" style={{ marginBottom: "35px" }}>
                      <span
                        className="qodef-e-author-name"
                        style={{ fontFamily: "Kanit", fontSize: "18px", color: "#ffffff", textTransform: "uppercase" }}
                      >
                        {testimonials[currentIndex].author}
                      </span>
                      <span className="qodef-e-author-job" style={{ color: "#888888", fontSize: "16px" }}>
                        , {testimonials[currentIndex].job}
                      </span>
                    </div>

                    {/* Navigation Controls */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "25px" }}>
                      <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous Testimonial"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "5px" }}
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

                      {/* Dots */}
                      <div style={{ display: "flex", gap: "8px" }}>
                        {testimonials.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              border: "none",
                              backgroundColor: i === currentIndex ? "#ffffff" : "rgba(255,255,255,0.3)",
                              cursor: "pointer",
                              padding: 0,
                              transform: i === currentIndex ? "scale(1.3)" : "scale(1)",
                              transition: "all 0.3s ease",
                            }}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={next}
                        aria-label="Next Testimonial"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "5px" }}
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
