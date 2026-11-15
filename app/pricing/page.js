import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import { pricingCategories } from "@/data/pricingData";

export const metadata = {
  title: "Pricing Menu & Salon Rates | PaulHair",
  description: "Transparent, comprehensive service rates and treatment menus for PaulHair Haute Coiffure.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Salon Pricing Menu"
        subtitle="TRANSPARENT RATES"
        breadcrumbs={[{ label: "Pricing" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-tag wow fadeInUp">TRANSPARENT VALUE</span>
            <h2 className="text-anime-style-3">Curated Service Menu.</h2>
            <p className="text-white-50 wow fadeInUp">
              All prices include luxury wash, scalp massage, tailored blow-dry, and premium bond-protecting formulas. No surprise add-ons.
            </p>
          </div>

          <div className="row g-4">
            {pricingCategories.map((cat, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="pricing-category-box wow fadeInUp" data-wow-delay={`${0.15 * (idx % 2)}s`}>
                  <h3 className="text-white mb-1">{cat.category}</h3>
                  <p className="text-white-50 small mb-4">{cat.subtitle}</p>

                  <div className="pricing-items-list">
                    {cat.items.map((item, i) => (
                      <div key={i} className="mb-3">
                        <div className="pricing-menu-row">
                          <span className="pricing-menu-title">{item.name}</span>
                          <span className="pricing-menu-dots"></span>
                          <span className="pricing-menu-cost">{item.price}</span>
                        </div>
                        <div className="pricing-menu-desc">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 p-md-5 rounded-2 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--accent-color)" }}>
            <h3 className="text-white mb-2">Book Your Atelier Experience</h3>
            <p className="text-white-50 max-w-600 mx-auto mb-4">
              Select your service, choose your preferred stylist, and receive immediate WhatsApp confirmation.
            </p>
            <Link href="/appointment" className="btn-gold">
              <span>Reserve Appointment Online</span>
              <i className="fa-solid fa-calendar-check ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
