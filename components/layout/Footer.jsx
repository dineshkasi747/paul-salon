import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const instaImages = [
    "/images/portfolio-land-img-01-600x500.jpg",
    "/images/portfolio-land-img-02-600x500.jpg",
    "/images/portfolio-land-img-04-600x500.jpg",
    "/images/portfolio-land-img-05-600x500.jpg",
    "/images/portfolio-land-img-06-600x500.jpg",
    "/images/portfolio-land-img-07-600x500.jpg",
  ];

  return (
    <footer className="salon-footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Column 1: Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget brand-widget">
              <Link href="/" className="footer-logo mb-3 d-inline-block">
                <img
                  src="/images/paul-logo.png"
                  alt="PaulHair"
                  className="footer-logo-img"
                />
              </Link>
              <p className="footer-desc text-white-50">
                {siteConfig.description}
              </p>
              <div className="footer-social-links mt-4 d-flex gap-2">
                <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="TikTok">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href={siteConfig.socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Pinterest">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
                <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-widget">
              <h4 className="footer-widget-title">Navigation</h4>
              <ul className="footer-nav-list list-unstyled">
                <li><Link href="/">Home Studio</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Service Menu</Link></li>
                <li><Link href="/our-team">Master Stylists</Link></li>
                <li><Link href="/pricing">Pricing Tables</Link></li>
                <li><Link href="/portfolio">Lookbook Gallery</Link></li>
                <li><Link href="/appointment">Book Online</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Studio Hours & Contact */}
          <div className="col-lg-3 col-md-6 col-6">
            <div className="footer-widget">
              <h4 className="footer-widget-title">Studio Hours</h4>
              <ul className="footer-hours-list list-unstyled text-white-50 small">
                <li className="d-flex justify-content-between py-1 border-bottom border-dark">
                  <span>Tue - Fri</span>
                  <span className="text-white">9:00 AM - 8:00 PM</span>
                </li>
                <li className="d-flex justify-content-between py-1 border-bottom border-dark">
                  <span>Saturday</span>
                  <span className="text-white">9:00 AM - 7:00 PM</span>
                </li>
                <li className="d-flex justify-content-between py-1 border-bottom border-dark">
                  <span>Sunday</span>
                  <span className="text-white">10:00 AM - 6:00 PM</span>
                </li>
                <li className="d-flex justify-content-between py-1 text-gold">
                  <span>Monday</span>
                  <span>Masterclasses</span>
                </li>
              </ul>
              <div className="footer-contact-mini mt-3">
                <p className="text-white-50 small mb-1">
                  <i className="fa-solid fa-location-dot text-gold me-2"></i>
                  {siteConfig.shortAddress}
                </p>
                <p className="text-white-50 small mb-0">
                  <i className="fa-solid fa-phone text-gold me-2"></i>
                  {siteConfig.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Instagram Lookbook Grid */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="footer-widget-title">Instagram @PaulHair</h4>
              <div className="footer-insta-grid">
                {instaImages.map((src, i) => (
                  <a
                    key={i}
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-grid-item"
                  >
                    <img src={src} alt="Hair inspiration" />
                    <div className="insta-hover-overlay">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-white-50 small mt-2">
                Tag <strong>#PaulHairStudio</strong> to be featured on our weekly lookbook.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-row pt-4 mt-5 border-top border-dark d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0 text-white-50 small">
            &copy; {currentYear} <strong>{siteConfig.name}</strong>. All Rights Reserved. Crafted for Haute Coiffure.
          </p>
          <div className="footer-legal-links d-flex gap-3 text-white-50 small">
            <Link href="/faq" className="text-white-50">Cancellation Policy</Link>
            <span>•</span>
            <Link href="/contact" className="text-white-50">Studio Map</Link>
            <span>•</span>
            <Link href="/appointment" className="text-gold">Book Consultation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
