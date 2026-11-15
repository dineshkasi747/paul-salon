import Link from "next/link";

export default function ShopFeatureSection() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-7981052 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
      data-id="7981052"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        {/* Left Column: Text & CTA */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c652c8c"
          data-id="c652c8c"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* Title */}
            <div
              className="elementor-element elementor-element-6a3991a elementor-widget elementor-widget-paulhair_core_section_title"
              data-id="6a3991a"
              data-element_type="widget"
              data-widget_type="paulhair_core_section_title.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                  <h3 className="qodef-m-title">
                    enjoy all paul&apos;s products at your home. Shop here.
                  </h3>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <div
              className="elementor-element elementor-element-b2d2783 elementor-widget elementor-widget-text-editor"
              data-id="b2d2783"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Dolore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.
                </p>
              </div>
            </div>

            {/* Button */}
            <div
              className="elementor-element elementor-element-3352cdd elementor-widget elementor-widget-paulhair_core_button"
              data-id="3352cdd"
              data-element_type="widget"
              data-widget_type="paulhair_core_button.default"
            >
              <div className="elementor-widget-container">
                <Link
                  className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link"
                  href="/services"
                  target="_self"
                >
                  <span className="qodef-m-text">View products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Single Image 03 */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a9fd9a5"
          data-id="a9fd9a5"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-baac704 elementor-widget elementor-widget-paulhair_core_single_image"
              data-id="baac704"
              data-element_type="widget"
              data-widget_type="paulhair_core_single_image.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-single-image qodef-layout--default">
                  <div className="qodef-m-image">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="1000"
                      height="788"
                      src="/wp-content/uploads/2022/12/main-home-single-img-03.jpg"
                      className="attachment-full size-full"
                      alt="Paul Haircare Products Collection"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
