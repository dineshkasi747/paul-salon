"use client";

import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* Title */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-29be291 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
        data-id="29be291"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        style={{ padding: "120px 20px 40px 20px" }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-356cdb2"
            data-id="356cdb2"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-69eb48e elementor-widget elementor-widget-paulhair_core_section_title"
                data-id="69eb48e"
                data-element_type="widget"
                data-widget_type="paulhair_core_section_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center">
                    <h3
                      className="qodef-m-title"
                      style={{
                        fontFamily: "Kanit",
                        fontSize: "clamp(26px, 4vw, 42px)",
                        textTransform: "uppercase",
                        textAlign: "center",
                        maxWidth: "900px",
                        margin: "0 auto",
                      }}
                    >
                      LET YOUR HAIR SHINE WITH SPECIAL OFFERS AND DEALS! SUBSCRIBE!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-3c8ebc9 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
        data-id="3c8ebc9"
        data-element_type="section"
        style={{ paddingBottom: "120px" }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="qodef-background-text elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64adcc5 qodef-background-text-disabled-on-mobile-devices--yes"
            data-id="64adcc5"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-382060a elementor-widget elementor-widget-wp-widget-paulhair_core_contact_form_7"
                data-id="382060a"
                data-element_type="widget"
                data-widget_type="wp-widget-paulhair_core_contact_form_7.default"
              >
                <div className="elementor-widget-container">
                  <div className="qodef-contact-form-7">
                    <form onSubmit={handleSubmit} style={{ maxWidth: "650px", margin: "0 auto" }}>
                      <div
                        className="qodef-contact-form-subscribe"
                        style={{ display: "flex", gap: "10px", alignItems: "stretch" }}
                      >
                        <div className="qodef-col" style={{ flexGrow: 1 }}>
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            aria-required="true"
                            placeholder="Enter e-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            style={{
                              width: "100%",
                              height: "56px",
                              padding: "0 20px",
                              border: "1px solid #000000",
                              backgroundColor: "transparent",
                              fontFamily: "Albert Sans",
                              fontSize: "16px",
                              color: "#000000",
                              outline: "none",
                              boxSizing: "border-box",
                            }}
                          />
                        </div>
                        <div className="qodef-submit-holder">
                          <button
                            className="wpcf7-form-control wpcf7-submit qodef-button qodef-size--normal qodef-layout--filled qodef-m"
                            type="submit"
                            style={{
                              height: "56px",
                              padding: "0 35px",
                              backgroundColor: "#000000",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "Kanit",
                              fontSize: "15px",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            <span className="qodef-m-text">Subscribe</span>
                          </button>
                        </div>
                      </div>
                      {submitted && (
                        <p style={{ marginTop: "15px", color: "#28a745", textAlign: "center", fontSize: "15px" }}>
                          Thank you for subscribing to PaulHair special offers!
                        </p>
                      )}
                    </form>
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
