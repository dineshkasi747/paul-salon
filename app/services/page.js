"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { servicesData } from "@/data/servicesData";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Haircuts", "Color & Lightening", "Treatments", "Extensions", "Styling"];

  const filteredServices = activeCategory === "All"
    ? servicesData
    : servicesData.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <>
      <PageHeader
        title="Haute Coiffure Services"
        subtitle="OUR SERVICE MENU"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat, i) => (
              <button
                key={i}
                type="button"
                className={`btn ${activeCategory === cat ? "btn-gold" : "btn-outline-gold"} py-2 px-3 small`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {filteredServices.map((service, idx) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card-item wow fadeInUp" data-wow-delay={`${0.1 * (idx % 3)}s`}>
                  <div className="service-card-thumb">
                    <img src={service.image} alt={service.title} />
                    <span className="service-card-badge">{service.price}</span>
                  </div>
                  <div className="service-card-body">
                    <div className="text-gold small mb-2 text-uppercase letter-spacing-1">
                      <i className={`${service.icon} me-1`}></i> {service.category}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>

                    <ul className="list-unstyled text-white-50 small mb-4">
                      {service.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="mb-1 d-flex align-items-center gap-2">
                          <i className="fa-solid fa-check text-gold"></i>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="service-card-footer">
                      <span className="text-white-50 small">
                        <i className="fa-regular fa-clock me-1"></i> {service.duration}
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="service-read-more"
                      >
                        Service Details <i className="fa-solid fa-chevron-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking CTA Banner */}
          <div className="mt-5 p-4 p-md-5 rounded-2 text-center" style={{ background: "#111111", border: "1px solid var(--border-color)" }}>
            <h3 className="text-white mb-2">Unsure Which Treatment Fits Your Hair Goals?</h3>
            <p className="text-white-50 max-w-600 mx-auto mb-4">
              Book a complimentary 15-minute consultation with our master colorists and stylists. We will assess your strand health and tailor an exact formula.
            </p>
            <Link href="/appointment" className="btn-gold">
              <span>Book Free Consultation</span>
              <i className="fa-solid fa-calendar-check ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
