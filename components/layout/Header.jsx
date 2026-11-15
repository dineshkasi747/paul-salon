"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/useScroll";
import { siteConfig } from "@/data/siteData";

export default function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScroll(70);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="salon-header">
      {/* Top Announcement Bar */}
      <div className="salon-top-bar d-none d-lg-block">
        <div className="container-fluid px-xl-5 px-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="top-bar-notice d-flex align-items-center gap-2">
                <span className="badge-vip">EXCLUSIVE</span>
                <span className="text-white-50 small">
                  Complimentary K18 Molecular Bond Treatment with all Master Balayage appointments this month.
                </span>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="top-bar-contact d-inline-flex align-items-center gap-4">
                <span className="text-white-50 small">
                  <i className="fa-regular fa-clock text-gold me-1"></i>
                  {siteConfig.workingHours}
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="top-bar-link small text-white"
                >
                  <i className="fa-solid fa-phone text-gold me-1"></i>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg salon-navbar ${isScrolled ? "sticky-scrolled" : ""}`}>
        <div className="container-fluid px-xl-5 px-lg-4 px-3">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <img
              src="/images/paul-logo.png"
              alt="PaulHair Salon"
              className="salon-logo-img"
            />
          </Link>

          {/* Mobile Actions & Toggle */}
          <div className="d-flex align-items-center gap-2 d-lg-none">
            <Link href="/appointment" className="btn-gold-sm">
              <i className="fa-regular fa-calendar-check me-1"></i> Book
            </Link>
            <button
              type="button"
              className="navbar-toggler salon-toggler border-0"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation"
            >
              <i className={`fa-solid ${mobileNavOpen ? "fa-xmark" : "fa-bars-staggered"}`}></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`collapse navbar-collapse ${mobileNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link ${pathname.startsWith("/services") ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/our-team"
                  className={`nav-link ${pathname.startsWith("/our-team") ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Stylists
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/pricing"
                  className={`nav-link ${pathname === "/pricing" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/portfolio"
                  className={`nav-link ${pathname === "/portfolio" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Lookbook
                </Link>
              </li>

              {/* Submenu Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <ul className="dropdown-menu salon-dropdown-menu">
                  <li>
                    <Link
                      href="/faq"
                      className="dropdown-item"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Salon FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="dropdown-item"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Hair & Trends Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/master-balayage-and-ombre"
                      className="dropdown-item"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Balayage Service Detail
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-team/paul-morrison"
                      className="dropdown-item"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Director Profile
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </Link>
              </li>

              {/* Desktop CTA */}
              <li className="nav-item ms-lg-3">
                <Link href="/appointment" className="btn-gold-header">
                  <span>Book Appointment</span>
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
