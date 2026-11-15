"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { faqsData } from "@/data/faqsData";

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="SALON POLICIES & CARE"
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">CLIENT QUESTIONS</span>
            <h2 className="text-anime-style-3">Everything You Need to Know.</h2>
            <p className="text-white-50 wow fadeInUp">
              Find transparent answers about preparing for your service, aftercare, cancellations, and appointment scheduling.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="salon-accordion accordion" id="fullFaqAccordion">
                {faqsData.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="accordion-item wow fadeInUp" data-wow-delay={`${0.08 * idx}s`}>
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

              <div className="text-center mt-5 p-4 rounded-1 border border-dark" style={{ background: "var(--card-bg)" }}>
                <h4 className="text-white mb-2">Still Have Questions?</h4>
                <p className="text-white-50 small mb-3">Our concierge is happy to guide you through services and pricing.</p>
                <div className="d-flex justify-content-center gap-3">
                  <Link href="/contact" className="btn-outline-gold">
                    <span>Contact Studio</span>
                  </Link>
                  <Link href="/appointment" className="btn-gold">
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
