import Link from "next/link";

export default function Footer() {
  return (
    <footer id="qodef-page-footer" role="contentinfo" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Footer Top Area */}
      <div id="qodef-page-footer-top-area" style={{ padding: "80px 0 60px 0" }}>
        <div id="qodef-page-footer-top-area-inner" className="qodef-content-grid">
          {/* Center Brand Logo */}
          <div id="qodef-custom-widget-area-top" style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="widget widget_paulhair_core_single_image" data-area="footer-top-logo">
              <div className="qodef-shortcode qodef-m qodef-single-image qodef-layout--default qodef--retina qodef-image-alignment--center">
                <div className="qodef-m-image">
                  <Link href="/" target="_self">
                    <img
                      src="/wp-content/uploads/2023/03/footer-logo.png"
                      width="135"
                      height="150"
                      alt="PaulHair Salon Footer Logo"
                      style={{ display: "inline-block", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Footer Grid */}
          <div className="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--3 qodef-col-num--768--1 qodef-gutter--medium qodef-alignment--space-between">
            <div className="qodef-grid-inner" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
              {/* Column 1: Contact */}
              <div className="qodef-grid-item" style={{ flex: "1 1 300px", padding: "0 20px 30px" }}>
                <div className="widget widget_block" data-area="qodef-footer-top-area-column-1">
                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container">
                      <div className="widget widget_paulhair_core_separator">
                        <div className="qodef-shortcode qodef-m qodef-separator clear">
                          <div className="qodef-m-line" style={{ width: "0px", marginTop: "20px" }}></div>
                        </div>
                      </div>
                      <h6
                        className="wp-block-heading"
                        style={{
                          fontFamily: "Kanit",
                          fontSize: "18px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          color: "#ffffff",
                          marginBottom: "15px",
                        }}
                      >
                        Contact
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="widget widget_block" data-area="qodef-footer-top-area-column-1" style={{ fontSize: "15px", lineHeight: "1.8", color: "#a5a5a5" }}>
                  <div>
                    A:{" "}
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      Seestrasse 21, Zurich, CH
                    </a>
                  </div>
                  <div style={{ marginTop: "7px" }}>
                    E:{" "}
                    <a
                      href="mailto:info@paulhair.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      info@paulhair.com
                    </a>
                  </div>
                  <div style={{ marginTop: "7px" }}>
                    T:{" "}
                    <a href="tel:675467967" style={{ color: "#ffffff", textDecoration: "none" }}>
                      +675 467 967
                    </a>
                    ;{" "}
                    <a href="tel:675467888" style={{ color: "#ffffff", textDecoration: "none" }}>
                      +675 467 888
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Quote & Social Icons */}
              <div className="qodef-grid-item" style={{ flex: "1 1 360px", padding: "0 20px 30px", textAlign: "center" }}>
                <div style={{ maxWidth: "390px", margin: "0 auto" }}>
                  <span
                    style={{
                      fontFamily: "Kanit",
                      fontSize: "30px",
                      fontWeight: 500,
                      lineHeight: "34px",
                      color: "#ffffff",
                      display: "block",
                      marginBottom: "25px",
                      textTransform: "uppercase",
                    }}
                  >
                    IT&apos;S NOT JUST A HAIR.
                    <br />
                    IT&apos;S STATE OF MIND.
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <a
                    href="https://www.instagram.com/qodeinteractive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{
                      width: "28px",
                      height: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/qode-themes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: "28px",
                      height: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.pinterest.com/qodeinteractive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    style={{
                      width: "28px",
                      height: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/QodeInteractive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{
                      width: "28px",
                      height: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>

              {/* Column 3: Hours */}
              <div className="qodef-grid-item" style={{ flex: "1 1 300px", padding: "0 20px 30px" }}>
                <h6
                  className="qodef-widget-title"
                  style={{
                    fontFamily: "Kanit",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#ffffff",
                    marginBottom: "15px",
                  }}
                >
                  Hours
                </h6>
                <div className="qodef-shortcode qodef-m qodef-working-hours-list qodef-narrow-layout--enabled qodef-item-skin--light">
                  <div className="qodef-working-hours-item qodef-e" style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #222222" }}>
                    <p className="qodef-e-day" style={{ color: "#a5a5a5", margin: 0 }}>Working Days:</p>
                    <p className="qodef-e-time" style={{ color: "#ffffff", margin: 0 }}>09:00 - 20:00</p>
                  </div>
                  <div className="qodef-working-hours-item qodef-e" style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #222222" }}>
                    <p className="qodef-e-day" style={{ color: "#a5a5a5", margin: 0 }}>Saturday:</p>
                    <p className="qodef-e-time" style={{ color: "#ffffff", margin: 0 }}>10:00 - 18:00</p>
                  </div>
                  <div className="qodef-working-hours-item qodef-e" style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #222222" }}>
                    <p className="qodef-e-day" style={{ color: "#a5a5a5", margin: 0 }}>Sunday:</p>
                    <p className="qodef-e-time" style={{ color: "#ffffff", margin: 0 }}>12:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Area */}
      <div id="qodef-page-footer-bottom-area" style={{ padding: "25px 0", borderTop: "1px solid #262626" }}>
        <div id="qodef-page-footer-bottom-area-inner" className="qodef-content-grid">
          <div
            className="qodef-grid qodef-layout--columns qodef-gutter--small"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="qodef-grid-item" style={{ padding: "5px 15px" }}>
              <img
                src="/wp-content/uploads/2023/02/icon-footer.png"
                width="168"
                height="19"
                alt="PaulHair Icon"
                style={{ display: "block", height: "auto" }}
              />
            </div>
            <div className="qodef-grid-item" style={{ padding: "5px 15px", color: "#777777", fontSize: "14px" }}>
              © 2026 <a href="https://qodeinteractive.com/" target="_blank" rel="nofollow noopener noreferrer" style={{ color: "#a5a5a5" }}>Qode Interactive</a>, All Rights Reserved
            </div>
            <div className="qodef-grid-item" style={{ padding: "5px 15px", fontSize: "14px" }}>
              <Link href="/privacy-policy" style={{ color: "#777777", textDecoration: "none" }}>
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
