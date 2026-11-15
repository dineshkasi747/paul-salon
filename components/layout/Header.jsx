"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideArea from "./SideArea";
import SearchModal from "./SearchModal";

function NavMenu({ id = "menu-main-menu-1" }) {
  return (
    <nav className="qodef-header-navigation" role="navigation" aria-label="Divided Menu">
      <ul id={id} className="menu">
        {/* Home */}
        <li className="menu-item menu-item-has-children qodef-menu-item--narrow">
          <Link href="/">
            <span className="qodef-menu-item-text">
              <span className="qodef-menu-item-text-inner">Home</span>
            </span>
          </Link>
          <div className="qodef-drop-down-second">
            <div className="qodef-drop-down-second-inner">
              <ul className="sub-menu">
                <li className="menu-item current-menu-item">
                  <Link href="/"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Main Home</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/hair-salon"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Hair Salon</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/hairdresser-home"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Hairdresser Home</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/pricing"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Haircare Products</span></span></Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Pages */}
        <li className="menu-item menu-item-has-children qodef-menu-item--narrow">
          <Link href="/about">
            <span className="qodef-menu-item-text">
              <span className="qodef-menu-item-text-inner">Pages</span>
            </span>
          </Link>
          <div className="qodef-drop-down-second">
            <div className="qodef-drop-down-second-inner">
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/about"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">About Us</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/our-team"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Our Team</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/pricing"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Pricing Tables</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/services"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Our Services</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Contact Us</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/appointment"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Appointment</span></span></Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Portfolio */}
        <li className="menu-item menu-item-has-children qodef-menu-item--narrow">
          <Link href="/portfolio">
            <span className="qodef-menu-item-text">
              <span className="qodef-menu-item-text-inner">Portfolio</span>
            </span>
          </Link>
          <div className="qodef-drop-down-second">
            <div className="qodef-drop-down-second-inner">
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/portfolio"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Gallery Grid</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/portfolio"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Creative Styles</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/portfolio"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Lookbook Slider</span></span></Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Shop */}
        <li className="menu-item menu-item-has-children qodef-menu-item--narrow">
          <Link href="/shop">
            <span className="qodef-menu-item-text">
              <span className="qodef-menu-item-text-inner">Shop</span>
            </span>
          </Link>
          <div className="qodef-drop-down-second">
            <div className="qodef-drop-down-second-inner">
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/shop"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Product List</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/shop"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Product Single</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/shop"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Cart</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/shop"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Checkout</span></span></Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Blog */}
        <li className="menu-item menu-item-has-children qodef-menu-item--narrow">
          <Link href="/blog">
            <span className="qodef-menu-item-text">
              <span className="qodef-menu-item-text-inner">Blog</span>
            </span>
          </Link>
          <div className="qodef-drop-down-second">
            <div className="qodef-drop-down-second-inner">
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/blog"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">All Articles</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/blog"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Hair Trends 2026</span></span></Link>
                </li>
                <li className="menu-item">
                  <Link href="/blog"><span className="qodef-menu-item-text"><span className="qodef-menu-item-text-inner">Salon Tips</span></span></Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sideAreaOpen, setSideAreaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Main Divided Header (Floats over hero / banner) */}
      <header id="qodef-page-header" role="banner">
        <div id="qodef-page-header-inner" className="qodef-logo--outside-yes qodef-skin--light">
          {/* Left Navigation */}
          <div className="qodef-divided-header-left-wrapper">
            <NavMenu id="menu-main-menu-1" />
          </div>

          {/* Center Logo */}
          <Link
            className={`qodef-header-logo-link qodef-height--set qodef-source--image ${isHome ? "qodef-logo--home" : "qodef-logo--subpage"}`}
            href="/"
            rel="home"
          >
            <img
              width="321"
              height="358"
              src="/wp-content/uploads/2023/02/h1-logo-img-1.jpg"
              className="qodef-header-logo-image qodef--main qodef--light"
              alt="PaulHair Master Salon"
            />
          </Link>

          {/* Right Divided Actions */}
          <div className="qodef-divided-header-right-wrapper">
            <div className="qodef-widget-holder qodef--one">
              {/* Book Now Button */}
              <div id="paulhair_core_button-2" className="widget widget_paulhair_core_button qodef-header-widget-area-one">
                <Link
                  className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link"
                  href="/appointment"
                  style={{ color: "#ffffff", margin: "-2px 0px 0px 0px" }}
                >
                  <span className="qodef-m-text">Book now</span>
                </Link>
              </div>

              {/* Search Opener */}
              <div id="paulhair_core_search_opener-2" className="widget widget_paulhair_core_search_opener qodef-header-widget-area-one">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="qodef-opener-icon qodef-m qodef-source--svg-path qodef-search-opener"
                  style={{ background: "none", border: "none", cursor: "pointer", margin: "-3px 0px 0px", padding: 0 }}
                  aria-label="Open Search"
                >
                  <span className="qodef-m-icon qodef--open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.125" height="16.281" viewBox="0 0 17.125 16.281" style={{ stroke: "#ffffff" }}>
                      <g transform="translate(-1801 -35)">
                        <g transform="translate(1801 35)" fill="none" strokeWidth="2">
                          <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                          <circle cx="7.5" cy="7.5" r="6.5" fill="none" />
                        </g>
                        <line x2="5" y2="4" transform="translate(1812.5 46.5)" fill="none" strokeWidth="2" />
                      </g>
                    </svg>
                  </span>
                </button>
              </div>

              {/* Side Area Opener */}
              <div id="paulhair_core_side_area_opener-2" className="widget widget_paulhair_core_side_area_opener qodef-header-widget-area-one">
                <button
                  type="button"
                  onClick={() => setSideAreaOpen(true)}
                  className="qodef-opener-icon qodef-m qodef-source--predefined qodef-side-area-opener"
                  style={{ background: "none", border: "none", cursor: "pointer", margin: "-2px 0px 0px", padding: 0 }}
                  aria-label="Open Side Area"
                >
                  <span className="qodef-m-icon qodef--open">
                    <svg
                      className="qodef-svg--menu"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35px"
                      height="12px"
                      viewBox="0 0 35 12"
                      style={{ stroke: "#ffffff", strokeWidth: 2 }}
                    >
                      <line x1="0" y1="1" x2="35" y2="1" />
                      <line x1="0" y1="11" x2="35" y2="11" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Authentic White Sticky Header (Appears smoothly on scroll) */}
      <div className={`qodef-header-sticky qodef-custom-header-layout ${isScrolled ? "qodef-header-sticky--scrolled" : ""}`}>
        <div className="qodef-header-sticky-inner qodef-logo--outside-yes">
          {/* Left Navigation */}
          <div className="qodef-divided-header-left-wrapper">
            <NavMenu id="menu-main-menu-2" />
          </div>

          {/* Center Logo - Authentic Dark Logo (stiki.png) directly on white navbar */}
          <Link className="qodef-header-logo-link qodef-height--set qodef-source--image" href="/" rel="home">
            <img
              width="300"
              height="270"
              src="/wp-content/uploads/2023/03/stiki.png"
              className="qodef-header-logo-image qodef--main"
              alt="PaulHair Sticky Logo"
            />
          </Link>

          {/* Right Divided Actions */}
          <div className="qodef-divided-header-right-wrapper">
            <div className="qodef-widget-holder qodef--one">
              {/* Book Now Button */}
              <div className="widget widget_paulhair_core_button qodef-sticky-right">
                <Link
                  className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link"
                  href="/appointment"
                  style={{ color: "#000000", margin: "-2px 0px 0px 0px" }}
                >
                  <span className="qodef-m-text">Book now</span>
                </Link>
              </div>

              {/* Search Opener */}
              <div className="widget widget_paulhair_core_search_opener qodef-sticky-right">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="qodef-opener-icon qodef-m qodef-source--svg-path qodef-search-opener"
                  style={{ background: "none", border: "none", cursor: "pointer", margin: "-3px 0px 0px", padding: 0 }}
                  aria-label="Open Search"
                >
                  <span className="qodef-m-icon qodef--open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.125" height="16.281" viewBox="0 0 17.125 16.281" style={{ stroke: "#000000" }}>
                      <g transform="translate(-1801 -35)">
                        <g transform="translate(1801 35)" fill="none" strokeWidth="2">
                          <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                          <circle cx="7.5" cy="7.5" r="6.5" fill="none" stroke="#000000" />
                        </g>
                        <line x2="5" y2="4" transform="translate(1812.5 46.5)" fill="none" strokeWidth="2" stroke="#000000" />
                      </g>
                    </svg>
                  </span>
                </button>
              </div>

              {/* Side Area Opener */}
              <div className="widget widget_paulhair_core_side_area_opener qodef-sticky-right">
                <button
                  type="button"
                  onClick={() => setSideAreaOpen(true)}
                  className="qodef-opener-icon qodef-m qodef-source--predefined qodef-side-area-opener"
                  style={{ background: "none", border: "none", cursor: "pointer", margin: "-2px 0px 0px", padding: 0 }}
                  aria-label="Open Side Area"
                >
                  <span className="qodef-m-icon qodef--open">
                    <svg
                      className="qodef-svg--menu"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35px"
                      height="12px"
                      viewBox="0 0 35 12"
                      style={{ stroke: "#000000", strokeWidth: 2 }}
                    >
                      <line x1="0" y1="1" x2="35" y2="1" stroke="#000000" />
                      <line x1="0" y1="11" x2="35" y2="11" stroke="#000000" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Header */}
      <header id="qodef-page-mobile-header" role="banner">
        <div id="qodef-page-mobile-header-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 25px" }}>
          <Link className="qodef-mobile-header-logo-link qodef-height--set qodef-source--image" href="/" rel="home">
            <img
              width="120"
              height="120"
              src="/wp-content/uploads/2023/03/logo-mob.png"
              className="qodef-header-logo-image qodef--main"
              alt="PaulHair Mobile Logo"
              style={{ maxHeight: "45px", width: "auto" }}
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="qodef-opener-icon qodef-m qodef-source--predefined qodef-mobile-header-opener"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <span className="qodef-m-icon qodef--close">
                <svg
                  className="qodef-svg--close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  style={{ stroke: "#ffffff", strokeWidth: 2 }}
                >
                  <line x1="1" y1="1" x2="25" y2="25" />
                  <line x1="1" y1="25" x2="25" y2="1" />
                </svg>
              </span>
            ) : (
              <span className="qodef-m-icon qodef--open">
                <svg
                  className="qodef-svg--menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="12px"
                  viewBox="0 0 35 12"
                  style={{ stroke: "#ffffff", strokeWidth: 2 }}
                >
                  <line x1="0" y1="1" x2="35" y2="1" />
                  <line x1="0" y1="11" x2="35" y2="11" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="qodef-mobile-header-navigation" role="navigation" style={{ background: "#000000", padding: "20px 25px" }}>
            <ul id="menu-main-menu-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Home
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  About Us
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Services
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Pricing
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/our-team" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Our Team
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Portfolio
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Blog
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid #1a1a1a" }}>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontFamily: "Kanit", fontSize: "16px", textTransform: "uppercase" }}>
                  Contact Us
                </Link>
              </li>
              <li style={{ padding: "15px 0 5px 0" }}>
                <Link
                  href="/appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    border: "1px solid #ffffff",
                    color: "#ffffff",
                    fontFamily: "Kanit",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Side Area Drawer & Search Modal */}
      <SideArea isOpen={sideAreaOpen} onClose={() => setSideAreaOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
