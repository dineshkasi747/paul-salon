export default function VideoPriceListSection() {
  const priceItems = [
    {
      title: "Haircut with blow dry",
      price: "$39",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      title: "Blow dry & curl",
      price: "$49",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Shampoo & set",
      price: "$29",
      description: "Lorem ipsum dolor sit amet, conse",
    },
    {
      title: "Haircut with highlights",
      price: "$79",
      description: "Lorem ipsum dolor sit amet, consectur adipsing",
    },
    {
      title: "Haircut & curl",
      price: "$59",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-6e47193 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
      data-id="6e47193"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        {/* Left Column: Background Video */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b91f3db"
          data-id="b91f3db"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-db8f94c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="db8f94c"
              data-element_type="section"
              style={{ position: "relative", minHeight: "600px", overflow: "hidden" }}
            >
              <div className="elementor-background-video-container" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <video
                  className="elementor-background-video-hosted elementor-html5-video"
                  autoPlay
                  muted
                  playsInline
                  loop
                  src="/wp-content/uploads/2022/12/Main-home-video-02.mp4"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-fe4e3fe"
                  data-id="fe4e3fe"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-7dc973c elementor-widget elementor-widget-paulhair_core_separator"
                      data-id="7dc973c"
                      data-element_type="widget"
                      data-widget_type="paulhair_core_separator.default"
                    >
                      <div className="elementor-widget-container" style={{ minHeight: "550px" }}>
                        <div className="qodef-shortcode qodef-m qodef-separator clear">
                          <div className="qodef-m-line" style={{ borderColor: "#02010100" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column: Menu Price List */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c6aeb08"
          data-id="c6aeb08"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* Section Title */}
            <div
              className="elementor-element elementor-element-f44ad62 elementor-widget elementor-widget-paulhair_core_section_title"
              data-id="f44ad62"
              data-element_type="widget"
              data-widget_type="paulhair_core_section_title.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                  <h3 className="qodef-m-title">
                    my hairdresser is my therapist
                  </h3>
                </div>
              </div>
            </div>

            {/* Menu Price List */}
            <div
              className="elementor-element elementor-element-cd0547c elementor-widget elementor-widget-paulhair_core_restaurant_menu_list"
              data-id="cd0547c"
              data-element_type="widget"
              data-widget_type="paulhair_core_restaurant_menu_list.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-restaurant-menu-list qodef-item-skin--default qodef-grid qodef-layout--columns qodef-gutter--normal qodef-col-num--1 qodef-item-layout--info-standard qodef-responsive--predefined">
                  <div className="qodef-grid-inner">
                    {priceItems.map((item, idx) => (
                      <div key={idx} className="qodef-e qodef-grid-item" style={{ marginBottom: "25px" }}>
                        <div className="qodef-e-inner">
                          <div
                            className="qodef-e-heading"
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                              marginBottom: "6px",
                            }}
                          >
                            <h6
                              className="qodef-e-heading-title"
                              style={{
                                fontFamily: "Kanit",
                                fontSize: "20px",
                                textTransform: "uppercase",
                                color: "#000000",
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              {item.title}
                            </h6>
                            <div
                              className="qodef-e-heading-line"
                              style={{
                                flexGrow: 1,
                                margin: "0 15px",
                                borderBottom: "1px dashed #cccccc",
                              }}
                            />
                            <p
                              className="qodef-e-heading-price"
                              style={{
                                fontFamily: "Kanit",
                                fontSize: "20px",
                                fontWeight: 600,
                                color: "#000000",
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              {item.price}
                            </p>
                          </div>
                          <p className="qodef-e-description" style={{ color: "#777777", fontSize: "15px", margin: 0 }}>
                            {item.description}
                          </p>
                        </div>
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
  );
}
