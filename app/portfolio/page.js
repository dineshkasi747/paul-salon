"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { galleryData } from "@/data/galleryData";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Color", "Haircuts", "Bridal", "Styling", "Extensions"];

  const filteredItems = activeTab === "All"
    ? galleryData
    : galleryData.filter((item) => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <>
      <PageHeader
        title="Editorial Lookbook"
        subtitle="OUR PORTFOLIO"
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">STUDIO TRANSFORMATIONS</span>
            <h2 className="text-anime-style-3">Visual Artistry &amp; Haute Coiffure.</h2>
            <p className="text-white-50 wow fadeInUp">
              A curated showcase of real client hair transformations created daily in our atelier.
            </p>

            {/* Category Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  type="button"
                  className={`btn ${activeTab === tab ? "btn-gold" : "btn-outline-gold"} py-2 px-3 small`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {filteredItems.map((item, idx) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="gallery-card wow fadeInUp" data-wow-delay={`${0.15 * (idx % 3)}s`}>
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h4 className="text-white">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 pt-3">
            <h4 className="text-white mb-3">Inspired by a Look?</h4>
            <Link href="/appointment" className="btn-gold">
              <span>Book Your Transformation</span>
              <i className="fa-solid fa-calendar-check ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
