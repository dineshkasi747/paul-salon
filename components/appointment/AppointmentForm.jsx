"use client";

import { useState } from "react";
import { servicesData } from "@/data/servicesData";
import { teamData } from "@/data/teamData";

export default function AppointmentForm({ defaultService = "", defaultStylist = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || servicesData[0]?.title || "",
    stylist: defaultStylist || "Any Available Master Stylist",
    date: "",
    time: "11:00 AM",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "06:30 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const message = `*New Salon Appointment Request - PaulHair*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Stylist:* ${encodeURIComponent(formData.stylist)}%0A*Preferred Date:* ${encodeURIComponent(formData.date)}%0A*Preferred Time:* ${encodeURIComponent(formData.time)}%0A*Notes:* ${encodeURIComponent(formData.notes || "None")}`;
    
    // Open WhatsApp in new tab after showing success
    setTimeout(() => {
      window.open(`https://wa.me/18005557285?text=${message}`, "_blank");
    }, 1200);
  };

  return (
    <div className="appointment-form-card">
      {submitted ? (
        <div className="booking-success-box text-center py-5">
          <div className="success-icon mb-3">
            <i className="fa-solid fa-circle-check text-gold" style={{ fontSize: "54px", color: "var(--accent-color)" }}></i>
          </div>
          <h3 className="text-white mb-2">Reservation Request Sent!</h3>
          <p className="text-white-50 mb-4">
            Thank you, <strong>{formData.name}</strong>. Our salon concierge is reviewing your request for <strong>{formData.service}</strong> on <strong>{formData.date} at {formData.time}</strong> and opening WhatsApp to confirm immediately.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => setSubmitted(false)}
          >
            Book Another Service
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label text-white-50 small">Your Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Vivienne Westwood"
                className="form-control salon-input"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-white-50 small">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="form-control salon-input"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-white-50 small">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="client@example.com"
                className="form-control salon-input"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-white-50 small">Select Service *</label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="form-select salon-input"
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title} ({svc.price})
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label text-white-50 small">Preferred Stylist</label>
              <select
                name="stylist"
                value={formData.stylist}
                onChange={handleChange}
                className="form-select salon-input"
              >
                <option value="Any Available Master Stylist">Any Available Master Stylist</option>
                {teamData.map((member) => (
                  <option key={member.id} value={member.name}>
                    {member.name} ({member.role})
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label text-white-50 small">Preferred Date *</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="form-control salon-input"
              />
            </div>

            <div className="col-md-12">
              <label className="form-label text-white-50 small">Preferred Time Slot *</label>
              <div className="time-slots-grid">
                {timeSlots.map((slot, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`time-slot-btn ${formData.time === slot ? "active" : ""}`}
                    onClick={() => setFormData((prev) => ({ ...prev, time: slot }))}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-md-12">
              <label className="form-label text-white-50 small">Special Requests / Hair History</label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any previous chemical treatments, hair goals, or questions for your stylist..."
                className="form-control salon-input"
              ></textarea>
            </div>

            <div className="col-md-12 mt-4 text-center">
              <button type="submit" className="btn-gold w-100 py-3 text-uppercase fw-bold letter-spacing-1">
                <span>Confirm Appointment</span>
                <i className="fa-solid fa-calendar-check ms-2"></i>
              </button>
              <small className="d-block text-white-50 mt-2">
                <i className="fa-brands fa-whatsapp text-success me-1"></i> Instant WhatsApp confirmation with token details
              </small>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
