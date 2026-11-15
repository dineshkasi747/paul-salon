import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { siteConfig } from "@/data/siteData";
import { teamData } from "@/data/teamData";

export const metadata = {
  title: "About Us | Haute Coiffure Atelier",
  description: "Learn about the heritage, philosophy, and master craftsmanship of PaulHair salon.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About PaulHair Atelier"
        subtitle="OUR PHILOSOPHY & HERITAGE"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Story & Philosophy */}
      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-tag wow fadeInUp">CRAFTING EFFORTLESS BEAUTY</span>
              <h2 className="text-anime-style-3 mb-4">
                Hairdressing Elevated to an Art Form.
              </h2>
              <p className="text-white-50 wow fadeInUp mb-4">
                Since our founding, PaulHair has stood for relaxed refinement. We believe that exceptional hair should never look stiff or over-styled; it should reflect your individuality, move naturally, and elevate your confidence effortlessly.
              </p>
              <p className="text-white-50 wow fadeInUp mb-4">
                Our atelier blends Parisian couture cutting traditions with innovative botanical formulations. Each client receives a dedicated consultation where we analyze hair fiber integrity, face contouring, and everyday styling preferences.
              </p>

              <div className="row g-4 mt-2">
                <div className="col-6">
                  <div className="p-3 border border-dark rounded-1" style={{ background: "var(--card-bg)" }}>
                    <h3 className="text-gold mb-1">{siteConfig.stats.experienceYears}</h3>
                    <span className="text-white-50 small">Years of Studio Heritage</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border border-dark rounded-1" style={{ background: "var(--card-bg)" }}>
                    <h3 className="text-gold mb-1">{siteConfig.stats.happyClients}</h3>
                    <span className="text-white-50 small">Delighted Clients</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rounded-1 overflow-hidden shadow-lg border border-dark">
                <figure className="reveal mb-0">
                  <img
                    src="/images/about-hero.jpg"
                    alt="PaulHair Atelier Experience"
                    className="w-100"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-5" style={{ background: "#0E0E0E" }}>
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">OUR CORE VALUES</span>
            <h2 className="text-anime-style-3">The PaulHair Commitment.</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-highlight-box wow fadeInUp">
                <div className="feature-icon-wrap">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <h3>100% Sustainable &amp; Clean</h3>
                <p>
                  We partner exclusively with zero-waste salon recyclers and choose ammonia-free, cruelty-free European formulations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-highlight-box wow fadeInUp" data-wow-delay="0.15s">
                <div className="feature-icon-wrap">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <h3>Molecular Integrity First</h3>
                <p>
                  We never compromise your hair health for quick chemical results. Every lightening service is guarded with K18 peptide therapy.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-highlight-box wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-icon-wrap">
                  <i className="fa-solid fa-couch"></i>
                </div>
                <h3>Unrushed Private Comfort</h3>
                <p>
                  No double-booking. Your stylist is exclusively dedicated to you throughout your entire appointment window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Stylists Team Showcase */}
      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">THE ARTISANS</span>
            <h2 className="text-anime-style-3">Meet Our Master Stylists.</h2>
          </div>

          <div className="row g-4">
            {teamData.map((stylist, idx) => (
              <div key={stylist.id} className="col-lg-3 col-md-6">
                <div className="team-member-card wow fadeInUp" data-wow-delay={`${0.15 * idx}s`}>
                  <div className="team-member-thumb">
                    <img src={stylist.image} alt={stylist.name} />
                  </div>
                  <div className="team-member-body">
                    <h3>{stylist.name}</h3>
                    <div className="team-member-role">{stylist.role}</div>
                    <Link href={`/our-team/${stylist.slug}`} className="btn-outline-gold w-100 py-2 small">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/appointment" className="btn-gold">
              <span>Reserve With A Stylist</span>
              <i className="fa-solid fa-calendar-check ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
