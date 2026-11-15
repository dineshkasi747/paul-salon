import PageHeader from "@/components/common/PageHeader";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Book Appointment Online | PaulHair",
  description: "Reserve your bespoke haircut, balayage, or smoothing treatment with instant WhatsApp token routing.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        title="Reserve an Appointment"
        subtitle="ONLINE BOOKING"
        breadcrumbs={[{ label: "Appointment" }]}
      />

      <section className="py-5 my-lg-4">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="section-tag wow fadeInUp">ONLINE RESERVATION</span>
              <h2 className="text-anime-style-3 mb-4">
                Your Luxury Hair Journey Starts Here.
              </h2>
              <p className="text-white-50 wow fadeInUp mb-4">
                Fill out the reservation details below. Our booking concierge reviews your requested time slot, matches you with the ideal stylist, and confirms immediately via WhatsApp.
              </p>

              <div className="booking-info-cards d-flex flex-column gap-3 mb-4">
                <div className="p-3 rounded-1 border border-dark" style={{ background: "var(--card-bg)" }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="feature-icon-wrap mb-0" style={{ width: "40px", height: "40px", fontSize: "16px" }}>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <span className="text-white-50 small d-block">Telephone Booking</span>
                      <strong className="text-white">{siteConfig.phone}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-1 border border-dark" style={{ background: "var(--card-bg)" }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="feature-icon-wrap mb-0" style={{ width: "40px", height: "40px", fontSize: "16px" }}>
                      <i className="fa-brands fa-whatsapp text-success"></i>
                    </div>
                    <div>
                      <span className="text-white-50 small d-block">Instant WhatsApp Support</span>
                      <strong className="text-gold">Chat with Salon Concierge</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-1 border border-dark" style={{ background: "var(--card-bg)" }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="feature-icon-wrap mb-0" style={{ width: "40px", height: "40px", fontSize: "16px" }}>
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <div>
                      <span className="text-white-50 small d-block">Opening Hours</span>
                      <strong className="text-white">{siteConfig.workingHours}</strong>
                    </div>
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
    </>
  );
}
