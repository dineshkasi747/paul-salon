import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-825ea0d elementor-section-full_width qodef-elementor-content-grid qodef-extended-grid qodef-extended-grid--right qodef-extended-grid-disabled--1024 elementor-section-height-default elementor-section-height-default"
      data-id="825ea0d"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        {/* Left Column: Text & Content */}
        <div
          className="qodef-background-text elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f1c75fb qodef-background-text-disabled-on-mobile-devices--yes"
          data-id="f1c75fb"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* Title */}
            <div
              className="elementor-element elementor-element-d09d68e elementor-widget elementor-widget-paulhair_core_section_title"
              data-id="d09d68e"
              data-element_type="widget"
              data-widget_type="paulhair_core_section_title.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                  <h3 className="qodef-m-title">
                    Life is more beautiful when you meet the right hairdresser.
                  </h3>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <div
              className="elementor-element elementor-element-06ae532 elementor-widget elementor-widget-text-editor"
              data-id="06ae532"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore amet.
                </p>
              </div>
            </div>

            {/* Button */}
            <div
              className="elementor-element elementor-element-6333156 elementor-widget elementor-widget-paulhair_core_button"
              data-id="6333156"
              data-element_type="widget"
              data-widget_type="paulhair_core_button.default"
            >
              <div className="elementor-widget-container">
                <Link
                  className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link"
                  href="/our-team"
                  target="_self"
                >
                  <span className="qodef-m-text">BOOK</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Single Image */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c2159b1"
          data-id="c2159b1"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-79aed20 elementor-widget elementor-widget-paulhair_core_single_image"
              data-id="79aed20"
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
                      height="601"
                      src="/wp-content/uploads/2022/12/main-home-single-img-01.jpg"
                      className="attachment-full size-full"
                      alt="PaulHair Salon Studio"
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
