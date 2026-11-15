import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import { teamData } from "@/data/teamData";

export async function generateStaticParams() {
  return teamData.map((m) => ({
    slug: m.slug,
  }));
}

export function generateMetadata({ params }) {
  const member = teamData.find((m) => m.slug === params.slug);
  if (!member) return { title: "Stylist Not Found" };

  return {
    title: `${member.name} - ${member.role} | PaulHair`,
    description: member.bio,
  };
}

export default function StylistProfilePage({ params }) {
  const member = teamData.find((m) => m.slug === params.slug);
  if (!member) notFound();

  return (
    <>
      <PageHeader
        title={member.name}
        subtitle={member.role}
        breadcrumbs={[
          { label: "Our Team", href: "/our-team" },
          { label: member.name },
        ]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="rounded-1 overflow-hidden border border-dark shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-100"
                  style={{ maxHeight: "550px", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <span className="section-tag wow fadeInUp">{member.experience} OF ARTISTRY</span>
              <h2 className="text-white mb-2">{member.name}</h2>
              <div className="text-gold fs-5 mb-4">{member.role}</div>

              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                </div>
                <span className="text-white fw-bold">{member.rating}</span>
                <span className="text-white-50">({member.reviewsCount} verified reviews)</span>
              </div>

              <h4 className="text-white mb-2">Biography &amp; Style Ethos</h4>
              <p className="text-white-50 mb-4">{member.bio}</p>

              <h4 className="text-white mb-3">Core Specialties</h4>
              <div className="d-flex flex-wrap gap-2 mb-5">
                {member.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="p-2 px-3 rounded-1 text-white border border-dark"
                    style={{ background: "var(--surface-alt)" }}
                  >
                    <i className="fa-solid fa-scissors text-gold me-2"></i>
                    {spec}
                  </span>
                ))}
              </div>

              <div className="d-flex gap-3">
                <Link href="/appointment" className="btn-gold">
                  <span>Book with {member.name.split(" ")[0]}</span>
                  <i className="fa-solid fa-calendar-check ms-2"></i>
                </Link>
                <Link href="/services" className="btn-outline-gold">
                  <span>View Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
