import Link from "next/link";

export default function VouchersSection() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-f204208 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
      data-id="f204208"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
      style={{ padding: "80px 0" }}
    >
      <div className="elementor-container elementor-column-gap-default">
        {/* Left Column: Voucher Image */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c988de"
          data-id="2c988de"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-aab78bf elementor-widget elementor-widget-paulhair_core_single_image"
              data-id="aab78bf"
              data-element_type="widget"
              data-widget_type="paulhair_core_single_image.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-single-image qodef-layout--default">
                  <div className="qodef-m-image">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="1201"
                      height="656"
                      src="/wp-content/uploads/2022/12/Main-home-single-img-05.png"
                      className="attachment-full size-full"
                      alt="Paul Hair Salon Vouchers"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Voucher Info */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f3354d4"
          data-id="f3354d4"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-4d7a969 elementor-widget elementor-widget-paulhair_core_section_title"
              data-id="4d7a969"
              data-element_type="widget"
              data-widget_type="paulhair_core_section_title.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                  <h3 className="qodef-m-title">
                    VOUCHERS THAT EVERY FRIEND OF YOURS WILL LOVE.
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-a774843 elementor-widget elementor-widget-text-editor"
              data-id="a774843"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Dolore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.
                </p>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-7980ed2 elementor-widget elementor-widget-paulhair_core_button"
              data-id="7980ed2"
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
      </div>
    </section>
  );
}
