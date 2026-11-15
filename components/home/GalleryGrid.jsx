"use client";

import { useState } from "react";

const galleryImages = [
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-01.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-02.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-03.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-04.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-05.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-06.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-07.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-08.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-09.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-10.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-11.jpg",
  "/wp-content/uploads/2022/12/MAIN-HOME-GALLERY-IMG-12.jpg",
];

export default function GalleryGrid() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-8f2f650 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="8f2f650"
        data-element_type="section"
        style={{ padding: "0", margin: "0" }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bf5a63b"
            data-id="bf5a63b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-7c40916 elementor-widget elementor-widget-paulhair_core_image_gallery"
                data-id="7c40916"
                data-element_type="widget"
                data-widget_type="paulhair_core_image_gallery.default"
              >
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m qodef-image-gallery qodef-grid qodef-layout--columns qodef-gutter--no qodef-col-num--4 qodef-responsive--custom">
                    <div
                      className="qodef-grid-inner"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 0,
                      }}
                    >
                      {galleryImages.map((src, index) => (
                        <div
                          key={index}
                          className="qodef-e qodef-image-wrapper qodef-grid-item"
                          style={{ overflow: "hidden", position: "relative", cursor: "pointer" }}
                          onClick={() => setSelectedImg(src)}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="800"
                            height="800"
                            src={src}
                            className="attachment-full size-full"
                            alt={`Paul Hair Salon Lookbook ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              aspectRatio: "1/1",
                              transition: "transform 0.5s ease",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImg(null)}
            aria-label="Close Preview"
          >
            &times;
          </button>
          <img
            src={selectedImg}
            alt="Full size preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
