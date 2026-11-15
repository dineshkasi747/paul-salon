import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { teamData } from "@/data/teamData";

export const metadata = {
  title: "Master Stylists Directory | PaulHair",
  description: "Meet the world-class master stylists, colorists, and creative directors of PaulHair.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Master Stylists"
        subtitle="THE CREATIVE TEAM"
        breadcrumbs={[{ label: "Our Team" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">CREATIVE MASTERY</span>
            <h2 className="text-anime-style-3">International Talent &amp; Passion.</h2>
            <p className="text-white-50 wow fadeInUp">
              Our team consists of award-winning stylists, editorial runway artists, and French balayage masters committed to delivering a bespoke luxury experience.
            </p>
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
                    <div className="text-white-50 small mb-2">
                      <i className="fa-solid fa-briefcase text-gold me-1"></i>
                      {stylist.experience} Experience
                    </div>
                    <div className="d-flex flex-wrap mb-3">
                      {stylist.specialties.map((spec, i) => (
                        <span key={i} className="specialty-tag">{spec}</span>
                      ))}
                    </div>
                    <Link
                      href={`/our-team/${stylist.slug}`}
                      className="btn-outline-gold w-100 py-2 small"
                    >
                      View Profile &amp; Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
