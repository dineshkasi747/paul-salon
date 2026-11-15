"use client";

import Link from "next/link";

export default function BannersSection() {
  const banners = [
    {
      image: "/wp-content/uploads/2022/12/main-home-banner-img-01.jpg",
      title: "hair & styles",
      btnText: "view all seRvices",
      link: "/services",
      colClass: "elementor-element-acac03b",
    },
    {
      image: "/wp-content/uploads/2022/12/main-home-banner-img-02.jpg",
      title: "hair coloring",
      btnText: "view all seRvices",
      link: "/services",
      colClass: "elementor-element-acd4a06",
    },
    {
      image: "/wp-content/uploads/2022/12/main-home-banner-img-03.jpg",
      title: "hair products",
      btnText: "view all products",
      link: "/services",
      colClass: "elementor-element-b952d12",
    },
  ];

  return (
    <>
      {/* Title Header Section */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6dd0d30 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
        data-id="6dd0d30"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{ paddingTop: "115px", paddingBottom: "63px" }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="qodef-background-text elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-03a0c05 qodef-background-text-disabled-on-mobile-devices--yes"
            data-id="03a0c05"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-005a027 elementor-widget elementor-widget-paulhair_core_section_title"
                data-id="005a027"
                data-element_type="widget"
                data-widget_type="paulhair_core_section_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center">
                    <h2 className="qodef-m-title">all hair services</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Full-Width Banners Section */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-d6d0461 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="d6d0461"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`elementor-column elementor-col-33 elementor-top-column elementor-element ${banner.colClass}`}
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-widget elementor-widget-paulhair_core_banner"
                  data-element_type="widget"
                  data-widget_type="paulhair_core_banner.default"
                >
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m qodef-banner qodef-layout--simple-boxed">
                      <div className="qodef-m-image" style={{ overflow: "hidden" }}>
                        <img
                          loading="lazy"
                          decoding="async"
                          width="900"
                          height="968"
                          src={banner.image}
                          className="attachment-full size-full"
                          alt={banner.title}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            transition: "transform 0.6s ease",
                          }}
                        />
                      </div>
                      <div className="qodef-m-content" style={{ marginTop: "20px" }}>
                        <h5
                          className="qodef-m-title"
                          style={{
                            fontFamily: "Kanit",
                            fontSize: "28px",
                            textTransform: "uppercase",
                            color: "#000000",
                            margin: "0 0 10px 0",
                          }}
                        >
                          {banner.title}
                        </h5>
                        <div className="qodef-m-button">
                          <Link
                            className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link"
                            href={banner.link}
                            target="_self"
                          >
                            <span className="qodef-m-text">{banner.btnText}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
