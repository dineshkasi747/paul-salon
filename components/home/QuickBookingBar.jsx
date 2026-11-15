"use client";

import { useState } from "react";

export default function QuickBookingBar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    setStatus({
      type: "success",
      message: `Thank you, ${formData.name}! Your reservation request has been received. We will contact you shortly.`,
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-c9613cb elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
      data-id="c9613cb"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1103dc1"
          data-id="1103dc1"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-ea0b298 elementor-widget elementor-widget-wp-widget-paulhair_core_contact_form_7"
              data-id="ea0b298"
              data-element_type="widget"
              data-widget_type="wp-widget-paulhair_core_contact_form_7.default"
            >
              <div className="elementor-widget-container">
                <div className="qodef-contact-form-7">
                  <div className="wpcf7" id="wpcf7-f14-p18-o1">
                    <form onSubmit={handleSubmit} className="wpcf7-form init demo" noValidate>
                      <div className="qodef-contact-form-main qodef-response-skin--light">
                        <div className="qodef-contact-form-one-row qodef-light-skin">
                          <div className="qodef-col">
                            <span className="wpcf7-form-control-wrap" data-name="your-name">
                              <input
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                placeholder="Full Name*"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                type="text"
                                name="your-name"
                              />
                            </span>
                          </div>
                          <div className="qodef-col">
                            <span className="wpcf7-form-control-wrap" data-name="your-email">
                              <input
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                aria-required="true"
                                placeholder="E-mail*"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                type="email"
                                name="your-email"
                              />
                            </span>
                          </div>
                          <div className="qodef-col">
                            <span className="wpcf7-form-control-wrap" data-name="your-phone">
                              <input
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                type="tel"
                                name="your-phone"
                              />
                            </span>
                          </div>
                          <div className="qodef-submit-holder">
                            <button
                              name="submit"
                              type="submit"
                              className="qodef-submit qodef-button qodef-layout--outlined qodef-size--normal"
                            >
                              <span className="qodef-btn-text">Book</span>
                            </button>
                          </div>
                        </div>
                        <p style={{ marginTop: "15px", color: "#a5a5a5", fontSize: "14px" }}>
                          *or give us a call <a href="tel:8882653556" style={{ color: "#ffffff", textDecoration: "none" }}>(888) 265-3556</a>
                        </p>
                        {status && (
                          <div
                            className={`wpcf7-response-output ${status.type === "success" ? "wpcf7-mail-sent-ok" : "wpcf7-validation-errors"}`}
                            style={{
                              marginTop: "15px",
                              padding: "10px 15px",
                              border: `1px solid ${status.type === "success" ? "#46b450" : "#ffb900"}`,
                              color: "#ffffff",
                              fontSize: "14px",
                            }}
                          >
                            {status.message}
                          </div>
                        )}
                      </div>
                    </form>
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
