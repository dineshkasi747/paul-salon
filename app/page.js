"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoModal from "@/components/common/VideoModal";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import { servicesData } from "@/data/servicesData";
import { teamData } from "@/data/teamData";
import { testimonialsData } from "@/data/testimonialsData";
import { faqsData } from "@/data/faqsData";
import { galleryData } from "@/data/galleryData";
import { blogsData } from "@/data/blogsData";

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* =========================================================================
          1. Hero Section
          ========================================================================= */}
      <section className="salon-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="salon-hero-content">
                <div className="d-inline-flex mb-3">
                  <span className="hero-feature-pill wow fadeInUp">
                    <i className="fa-solid fa-crown text-gold"></i>
                    <span>HAUTE COIFFURE &amp; CREATIVE ATELIER</span>
                  </span>
                </div>

                <h1 className="text-anime-style-3 text-white">
                  The Art of Modern Hairdressing.
                </h1>

                <p className="salon-hero-lead wow fadeInUp" data-wow-delay="0.2s">
                  Experience effortless, relaxed luxury in the heart of the creative district. From precision face-contouring cuts to bespoke hand-painted French balayage, we sculpt hair that moves with timeless grace.
                </p>

                <div className="d-flex flex-wrap gap-3 wow fadeInUp" data-wow-delay="0.35s">
                  <Link href="/appointment" className="btn-gold">
                    <span>Reserve Appointment</span>
                    <i className="fa-solid fa-calendar-check"></i>
                  </Link>

                  <Link href="/services" className="btn-outline-gold">
                    <span>Explore Services</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    className="btn-outline-gold"
                    aria-label="Watch studio tour"
                  >
                    <i className="fa-solid fa-circle-play text-gold"></i>
                    <span>Studio Tour</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-image-composition wow fadeInUp" data-wow-delay="0.3s">
                <div className="hero-main-card">
                  <figure className="reveal mb-0">
                    <img
                      src="/images/inner-page-01-480x400.jpg"
                      alt="PaulHair Master Styling"
                      className="w-100"
                    />
                  </figure>
                </div>

                <div className="hero-floating-stat">
                  <span className="stat-number">15+</span>
                  <div className="stat-label">
                    Years of Haute<br /><strong>Excellence</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. Highlight Features Strip
          ========================================================================= */}
      <section className="py-5" style={{ background: "#0E0E0E", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-highlight-box wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-icon-wrap">
                  <i className="fa-solid fa-scissors"></i>
                </div>
                <h3>Bespoke Face-Contouring</h3>
                <p>
                  Every haircut is mathematically tailored to your facial geometry, hair density, and organic movement.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-highlight-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="feature-icon-wrap">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <h3>Clean European Botanicals</h3>
                <p>
                  Zero ammonia, sulfate-free cleansers, and organic cold-pressed plant ceramides that preserve hair vitality.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-highlight-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-icon-wrap">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <h3>Private VIP Suites</h3>
                <p>
                  Indulgent private styling rooms with customized espresso service, ergonomic wash loungers, and high privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. About Atelier Section
          ========================================================================= */}
      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-visual-lockup position-relative">
                <div className="about-main-image rounded-1 overflow-hidden shadow-lg border border-dark">
                  <figure className="reveal mb-0">
                    <img
                      src="/images/about-hero.jpg"
                      alt="PaulHair Atelier Atmosphere"
                      className="w-100"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-text-content">
                <span className="section-tag wow fadeInUp">OUR HERITAGE</span>
                <h2 className="text-anime-style-3 mb-4">
                  Where Craftsmanship Meets Contemporary Vision.
                </h2>
                <p className="text-white-50 wow fadeInUp mb-4" data-wow-delay="0.15s">
                  Founded by visionary creative director Paul Morrison, PaulHair is designed as an inspiring sanctuary from the bustling city. We reject one-size-fits-all beauty in favor of effortless personalization.
                </p>

                <div className="about-pillars row g-3 mb-4 wow fadeInUp" data-wow-delay="0.25s">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-3">
                      <i className="fa-solid fa-circle-check text-gold mt-1"></i>
                      <div>
                        <strong className="text-white d-block">Editorial Master Stylists</strong>
                        <span className="text-white-50 small">Runway and fashion-week certified stylists.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-3">
                      <i className="fa-solid fa-circle-check text-gold mt-1"></i>
                      <div>
                        <strong className="text-white d-block">Molecular Bond Protection</strong>
                        <span className="text-white-50 small">K18 &amp; Olaplex included in all lightener treatments.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-3">
                      <i className="fa-solid fa-circle-check text-gold mt-1"></i>
                      <div>
                        <strong className="text-white d-block">Transparent Pricing</strong>
                        <span className="text-white-50 small">No hidden add-on fees; all toners &amp; finishes included.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-start gap-3">
                      <i className="fa-solid fa-circle-check text-gold mt-1"></i>
                      <div>
                        <strong className="text-white d-block">Japanese Scalp Rituals</strong>
                        <span className="text-white-50 small">Micro-mist and deep acupressure therapy.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 pt-2 wow fadeInUp" data-wow-delay="0.35s">
                  <Link href="/about" className="btn-gold">
                    <span>Our Full Story</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href="/our-team" className="btn-outline-gold">
                    <span>Meet The Stylists</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. Signature Services Showcase
          ========================================================================= */}
      <section className="py-5" style={{ background: "#0E0E0E" }}>
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <span className="section-tag wow fadeInUp">HAUTE COIFFURE SERVICES</span>
              <h2 className="text-anime-style-3 mb-0">
                Signature Salon Services Crafted for Perfection.
              </h2>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/services" className="btn-outline-gold">
                <span>View All Services</span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {servicesData.slice(0, 6).map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div
                  className="service-card-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (index % 3)}s`}
                >
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
                    <div className="service-card-footer">
                      <span className="text-white-50 small">
                        <i className="fa-regular fa-clock me-1"></i> {service.duration}
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="service-read-more"
                      >
                        Details <i className="fa-solid fa-chevron-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. Lookbook / Portfolio Gallery
          ========================================================================= */}
      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">EDITORIAL LOOKBOOK</span>
            <h2 className="text-anime-style-3">
              Transformations &amp; Studio Creations.
            </h2>
            <p className="text-white-50 wow fadeInUp">
              Explore our latest balayage palettes, precision architectural cuts, and bridal coiffure designed in our atelier.
            </p>
          </div>

          <div className="row g-4">
            {galleryData.map((item, idx) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className="gallery-card wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx % 3)}s`}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h4 className="text-white">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/portfolio" className="btn-gold">
              <span>View Complete Lookbook</span>
              <i className="fa-solid fa-images ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. Master Stylists Team
          ========================================================================= */}
      <section className="py-5" style={{ background: "#0E0E0E" }}>
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">OUR MASTER ARTISTS</span>
            <h2 className="text-anime-style-3">
              Crafted by International Stylists.
            </h2>
            <p className="text-white-50 wow fadeInUp">
              Each stylist at PaulHair brings more than a decade of international fashion week experience and technical mastery.
            </p>
          </div>

          <div className="row g-4">
            {teamData.map((stylist, idx) => (
              <div key={stylist.id} className="col-lg-3 col-md-6">
                <div
                  className="team-member-card wow fadeInUp"
                  data-wow-delay={`${0.15 * idx}s`}
                >
                  <div className="team-member-thumb">
                    <img src={stylist.image} alt={stylist.name} />
                  </div>
                  <div className="team-member-body">
                    <h3>{stylist.name}</h3>
                    <div className="team-member-role">{stylist.role}</div>
                    <div className="d-flex flex-wrap mb-3">
                      {stylist.specialties.slice(0, 2).map((spec, i) => (
                        <span key={i} className="specialty-tag">{spec}</span>
                      ))}
                    </div>
                    <Link
                      href={`/our-team/${stylist.slug}`}
                      className="btn-outline-gold w-100 py-2 small"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. Testimonials Carousel
          ========================================================================= */}
      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">CLIENT TESTIMONIALS</span>
            <h2 className="text-anime-style-3">
              Loved by Discerning Clients.
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="p-4 p-md-5 rounded-2 text-center"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)" }}
              >
                <div className="testimonial-stars mb-3 text-gold">
                  {Array.from({ length: testimonialsData[activeSlide].stars }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                </div>

                <blockquote className="fs-5 text-white mb-4 fst-italic">
                  &ldquo;{testimonialsData[activeSlide].content}&rdquo;
                </blockquote>

                <div className="d-flex align-items-center justify-content-center gap-3">
                  <img
                    src={testimonialsData[activeSlide].image}
                    alt={testimonialsData[activeSlide].name}
                    className="rounded-circle"
                    style={{ width: "54px", height: "54px", objectFit: "cover", border: "2px solid var(--accent-color)" }}
                  />
                  <div className="text-start">
                    <strong className="text-white d-block">{testimonialsData[activeSlide].name}</strong>
                    <span className="text-gold small">{testimonialsData[activeSlide].service}</span>
                  </div>
                </div>

                {/* Slider Pagination */}
                <div className="d-flex justify-content-center gap-2 mt-4">
                  {testimonialsData.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      style={{
                        width: activeSlide === i ? "28px" : "10px",
                        height: "10px",
                        borderRadius: "5px",
                        background: activeSlide === i ? "var(--accent-color)" : "#333",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. Appointment Booking CTA Section
          ========================================================================= */}
      <section className="py-5" style={{ background: "#0E0E0E", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="section-tag wow fadeInUp">RESERVATIONS</span>
              <h2 className="text-anime-style-3 mb-4">
                Schedule Your Personalized Transformation.
              </h2>
              <p className="text-white-50 wow fadeInUp mb-4">
                Book your bespoke appointment online. We connect you with our master stylists and confirm your preferred slot instantly via WhatsApp.
              </p>

              <div className="booking-perks d-flex flex-column gap-3 wow fadeInUp">
                <div className="d-flex align-items-center gap-3">
                  <div className="feature-icon-wrap mb-0" style={{ width: "42px", height: "42px", fontSize: "16px" }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <span className="text-white-50 small d-block">Booking Concierge</span>
                    <strong className="text-white">+1 (800) 555-7285</strong>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="feature-icon-wrap mb-0" style={{ width: "42px", height: "42px", fontSize: "16px" }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="text-white-50 small d-block">Atelier Address</span>
                    <strong className="text-white">742 Evergreen Terrace, Creative District, NY</strong>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="feature-icon-wrap mb-0" style={{ width: "42px", height: "42px", fontSize: "16px" }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <span className="text-white-50 small d-block">Direct WhatsApp</span>
                    <strong className="text-gold">Instant Token &amp; Slot Confirmation</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FAQs Accordion
          ========================================================================= */}
      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <span className="section-tag wow fadeInUp">CLIENT QUESTIONS</span>
              <h2 className="text-anime-style-3 mb-3">
                Everything You Need to Know Before Your Visit.
              </h2>
              <p className="text-white-50 wow fadeInUp mb-4">
                Have questions about color consultation, preparation, or cancellation policies? We are always here to assist.
              </p>
              <Link href="/contact" className="btn-outline-gold wow fadeInUp">
                <span>Contact Concierge</span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="salon-accordion accordion" id="faqAccordion">
                {faqsData.slice(0, 5).map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="accordion-item wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                        >
                          {faq.q}
                        </button>
                      </h3>
                      {isOpen && (
                        <div className="accordion-collapse collapse show">
                          <div className="accordion-body">
                            <p className="mb-0">{faq.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="ScMzIvxBSi4"
      />
    </>
  );
}
