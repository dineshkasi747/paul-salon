export default function TextMarquee() {
  const repetitions = [1, 2, 3, 4, 5, 6];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-50ac395 elementor-section-boxed elementor-section-height-default"
      data-id="50ac395"
      data-element_type="section"
      style={{
        overflow: "hidden",
        backgroundColor: "#ffffff",
        padding: "60px 0 90px 0",
        margin: 0,
        width: "100%",
      }}
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-402156e"
          data-id="402156e"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-ad3f3dc elementor-widget elementor-widget-paulhair_core_text_marquee"
              data-id="ad3f3dc"
              data-element_type="widget"
              data-widget_type="paulhair_core_text_marquee.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-text-marquee qodef-layout--default qodef-direction--left">
                  <div
                    className="qodef-m-content"
                    style={{
                      fontSize: "clamp(38px, 6vw, 85px)",
                      lineHeight: "1.05",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontFamily: "'Kanit', sans-serif",
                      color: "#000000",
                      letterSpacing: "-0.5px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div className="marquee-track">
                      {repetitions.map((item) => (
                        <span
                          key={item}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            marginRight: "60px",
                          }}
                        >
                          <span style={{ marginRight: "35px" }}>
                            INVEST IN YOUR HAIR.
                          </span>
                          <span>
                            IT&apos;S THE CROWN YOU NEVER TAKE OF.
                          </span>
                        </span>
                      ))}
                    </div>
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
