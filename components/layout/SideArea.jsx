"use client";

import Link from "next/link";

export default function SideArea({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`side-area-backdrop ${isOpen ? "opened" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div id="qodef-side-area" className={isOpen ? "opened" : ""}>
        <button
          type="button"
          id="qodef-side-area-close"
          className="qodef-opener-icon qodef-m qodef-source--predefined qodef--opened"
          onClick={onClose}
          aria-label="Close Side Area"
          style={{ background: "none", border: "none", cursor: "pointer", float: "right" }}
        >
          <span className="qodef-m-icon">
            <svg
              className="qodef-svg--close"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              style={{ stroke: "#ffffff", strokeWidth: 1.5 }}
            >
              <line x1="1" y1="1" x2="25" y2="25" />
              <line x1="1" y1="25" x2="25" y2="1" />
            </svg>
          </span>
        </button>

        <div id="qodef-side-area-inner" style={{ clear: "both", paddingTop: "40px" }}>
          <div className="widget widget_paulhair_core_single_image" style={{ marginBottom: "30px" }}>
            <div className="qodef-shortcode qodef-m qodef-single-image qodef-layout--default qodef--retina">
              <div className="qodef-m-image">
                <Link href="/" onClick={onClose}>
                  <img
                    src="/wp-content/uploads/2022/12/sa-logo-img-1.jpg"
                    width="112"
                    height="124"
                    alt="PaulHair Salon Logo"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="widget widget_paulhair_core_title_widget" style={{ marginBottom: "20px" }}>
            <h6
              className="qodef-widget-title"
              style={{
                fontFamily: "Kanit",
                fontSize: "18px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              Working Hours
            </h6>
          </div>

          <div className="widget widget_paulhair_core_working_hours_list" style={{ marginBottom: "40px" }}>
            <div className="qodef-shortcode qodef-m qodef-working-hours-list qodef-narrow-layout--enabled qodef-item-skin--light">
              <div className="qodef-working-hours-item qodef-e" style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #222222" }}>
                <p className="qodef-e-day" style={{ color: "#999999", margin: 0 }}>Working days:</p>
                <p className="qodef-e-time" style={{ color: "#ffffff", margin: 0 }}>09:00 - 20:00</p>
              </div>
              <div className="qodef-working-hours-item qodef-e" style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #222222" }}>
                <p className="qodef-e-day" style={{ color: "#999999", margin: 0 }}>Saturday:</p>
                <p className="qodef-e-time" style={{ color: "#ffffff", margin: 0 }}>10:00 - 18:00</p>
              </div>
              <div className="qodef-working-hours-item qodef-e" style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #222222" }}>
                <p className="qodef-e-day" style={{ color: "#999999", margin: 0 }}>Sunday:</p>
                <p className="qodef-e-time" style={{ color: "#ffffff", margin: 0 }}>12:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="widget widget_paulhair_core_title_widget" style={{ marginBottom: "15px" }}>
            <h6
              className="qodef-widget-title"
              style={{
                fontFamily: "Kanit",
                fontSize: "18px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Follow Us
            </h6>
          </div>

          <div className="widget widget_paulhair_core_icon" style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://www.instagram.com/qodeinteractive/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: "36px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                color: "#000000",
                fontSize: "16px",
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
                width: "36px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                color: "#000000",
                fontSize: "16px",
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
                width: "36px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                color: "#000000",
                fontSize: "16px",
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
                width: "36px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                color: "#000000",
                fontSize: "16px",
              }}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
