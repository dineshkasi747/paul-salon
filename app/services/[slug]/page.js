import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import { servicesData } from "@/data/servicesData";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | PaulHair Services`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.category}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row g-5">
            {/* Left: Main Details */}
            <div className="col-lg-8">
              <div className="rounded-1 overflow-hidden mb-4 border border-dark">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-100"
                  style={{ maxHeight: "480px", objectFit: "cover" }}
                />
              </div>

              <h2 className="text-white mb-3">{service.title}</h2>
              <p className="lead text-white-50 mb-4">{service.description}</p>

              {/* Service Features / Phases */}
              <h3 className="text-white mb-4">What the Service Includes</h3>
              <div className="row g-4 mb-5">
                {service.features.map((feature, i) => (
                  <div key={i} className="col-md-4">
                    <div className="p-3 rounded-1 border border-dark h-100" style={{ background: "var(--card-bg)" }}>
                      <span className="badge-vip mb-2 d-inline-block">PHASE 0{i + 1}</span>
                      <h4 className="text-white fs-6 mb-2">{feature.title}</h4>
                      <p className="text-white-50 small mb-0">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights Checklist */}
              <h3 className="text-white mb-3">Service Key Highlights</h3>
              <ul className="list-unstyled mb-5">
                {service.highlights.map((h, i) => (
                  <li key={i} className="d-flex align-items-center gap-3 py-2 border-bottom border-dark text-white-50">
                    <i className="fa-solid fa-circle-check text-gold"></i>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Booking CTA Box */}
              <div className="p-4 rounded-2 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3" style={{ background: "var(--surface-alt)", border: "1px solid var(--accent-color)" }}>
                <div>
                  <h4 className="text-white mb-1">Ready for Your Transformation?</h4>
                  <p className="text-white-50 small mb-0">Book your slot online with our master stylists today.</p>
                </div>
                <Link href="/appointment" className="btn-gold flex-shrink-0">
                  <span>Book This Service</span>
                  <i className="fa-solid fa-calendar-check ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="col-lg-4">
              <div className="p-4 rounded-1 border border-dark mb-4 sticky-top" style={{ background: "var(--card-bg)", top: "100px" }}>
                <h4 className="text-white mb-3 pb-2 border-bottom border-dark">Service Overview</h4>
                
                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                  <span className="text-white-50">Category</span>
                  <strong className="text-white">{service.category}</strong>
                </div>

                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                  <span className="text-white-50">Duration</span>
                  <strong className="text-white">{service.duration}</strong>
                </div>

                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                  <span className="text-white-50">Investment</span>
                  <strong className="text-gold fs-5">{service.price}</strong>
                </div>

                <div className="d-flex justify-content-between py-2 border-bottom border-dark mb-4">
                  <span className="text-white-50">Consultation</span>
                  <strong className="text-white">Included</strong>
                </div>

                <Link href="/appointment" className="btn-gold w-100 text-center mb-3">
                  <span>Reserve Appointment</span>
                </Link>

                <a
                  href="https://wa.me/18005557285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-100 text-center small"
                >
                  <i className="fa-brands fa-whatsapp text-success me-2"></i>
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>

              {/* Related Services */}
              <div className="p-4 rounded-1 border border-dark" style={{ background: "var(--card-bg)" }}>
                <h4 className="text-white mb-3 pb-2 border-bottom border-dark">More Services</h4>
                <div className="d-flex flex-column gap-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="d-flex align-items-center justify-content-between text-white-50 hover-gold"
                    >
                      <span className="text-white small">{rel.title}</span>
                      <span className="text-gold small">{rel.price}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
