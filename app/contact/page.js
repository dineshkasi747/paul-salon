"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import { siteConfig } from "@/data/siteData";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <>
      <PageHeader
        title="Contact Our Atelier"
        subtitle="GET IN TOUCH"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info Cards */}
            <div className="col-lg-5">
              <span className="section-tag wow fadeInUp">VISIT OUR ATELIER</span>
              <h2 className="text-anime-style-3 mb-4">
                We Would Love to Hear From You.
              </h2>
              <p className="text-white-50 wow fadeInUp mb-4">
                Whether you have an inquiry regarding custom wedding parties, editorial partnerships, or personalized color formulas, reach our team anytime.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="feature-highlight-box p-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="feature-icon-wrap mb-0" style={{ width: "45px", height: "45px", fontSize: "18px" }}>
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <span className="text-white-50 small d-block">Studio Location</span>
                      <strong className="text-white">{siteConfig.address}</strong>
                    </div>
                  </div>
                </div>

                <div className="feature-highlight-box p-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="feature-icon-wrap mb-0" style={{ width: "45px", height: "45px", fontSize: "18px" }}>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <span className="text-white-50 small d-block">Concierge Line</span>
                      <strong className="text-white">{siteConfig.phone}</strong>
                    </div>
                  </div>
                </div>

                <div className="feature-highlight-box p-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="feature-icon-wrap mb-0" style={{ width: "45px", height: "45px", fontSize: "18px" }}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div>
                      <span className="text-white-50 small d-block">Direct Email</span>
                      <strong className="text-white">{siteConfig.email}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="appointment-form-card">
                <h3 className="text-white mb-2">Send an Inquiry</h3>
                <p className="text-white-50 small mb-4">
                  Fill out the form below and our client manager will respond within 24 hours.
                </p>

                {sent ? (
                  <div className="p-4 rounded-1 text-center" style={{ background: "var(--surface-alt)", border: "1px solid var(--accent-color)" }}>
                    <i className="fa-solid fa-circle-check text-gold fs-1 mb-3"></i>
                    <h4 className="text-white">Message Sent!</h4>
                    <p className="text-white-50 small mb-0">Thank you for contacting PaulHair. We will respond promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label text-white-50 small">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-control salon-input"
                          placeholder="e.g. Miranda Kerr"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label text-white-50 small">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-control salon-input"
                          placeholder="miranda@example.com"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label text-white-50 small">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-control salon-input"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label text-white-50 small">Inquiry Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="form-control salon-input"
                          placeholder="Bridal booking / Consultation"
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label text-white-50 small">Your Message *</label>
                        <textarea
                          rows="4"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="form-control salon-input"
                          placeholder="How can we assist you today?"
                        ></textarea>
                      </div>

                      <div className="col-md-12 mt-4">
                        <button type="submit" className="btn-gold w-100 py-3">
                          <span>Send Message</span>
                          <i className="fa-regular fa-paper-plane ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
