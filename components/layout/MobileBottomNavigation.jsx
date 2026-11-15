"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isReady) return null;

  const bottomTabs = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: "fa-solid fa-house",
      isActive: pathname === "/",
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      icon: "fa-solid fa-gem",
      isActive: pathname === "/about",
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      icon: "fa-solid fa-scissors",
      isActive: pathname.startsWith("/services"),
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
      icon: "fa-solid fa-location-dot",
      isActive: pathname === "/contact",
    },
  ];

  // 5 peacock radial menu items
  const peacockItems = [
    {
      id: "team",
      label: "Stylists",
      href: "/our-team",
      icon: "fa-solid fa-user-tie",
      angle: 152,
    },
    {
      id: "pricing",
      label: "Pricing",
      href: "/pricing",
      icon: "fa-solid fa-tag",
      angle: 121,
    },
    {
      id: "book",
      label: "Book Now",
      href: "/appointment",
      icon: "fa-solid fa-calendar-check",
      angle: 90,
    },
    {
      id: "portfolio",
      label: "Lookbook",
      href: "/portfolio",
      icon: "fa-solid fa-images",
      angle: 59,
    },
    {
      id: "faq",
      label: "FAQs",
      href: "/faq",
      icon: "fa-solid fa-circle-question",
      angle: 28,
    },
  ];

  const radius = 138;

  return (
    <>
      {/* Peacock Arc Fan Menu Overlay */}
      <div
        className={`peacock-nav-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div className="peacock-glow-sphere"></div>

        <div
          className="peacock-radial-container"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="peacock-spokes-svg" viewBox="-180 -180 360 180">
            <defs>
              <linearGradient id="salonSpokeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E2C785" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {peacockItems.map((item, idx) => {
              const rad = (item.angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = -radius * Math.sin(rad);

              return (
                <line
                  key={`spoke-${idx}`}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  className="peacock-spoke-line"
                  stroke="url(#salonSpokeGrad)"
                  style={{ animationDelay: `${idx * 0.04}s` }}
                />
              );
            })}
          </svg>

          {peacockItems.map((item, idx) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = Math.round(radius * Math.cos(rad));
            const y = Math.round(-radius * Math.sin(rad));

            const style = isOpen
              ? {
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(1)`,
                  opacity: 1,
                  transitionDelay: `${idx * 0.04}s`,
                }
              : {
                  transform: `translate(0px, 0px) translate(-50%, -50%) scale(0.2)`,
                  opacity: 0,
                  transitionDelay: "0s",
                };

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="peacock-arc-item"
                style={style}
                aria-label={item.label}
              >
                <div className="peacock-node-badge">
                  <i className={item.icon}></i>
                </div>
                <span className="peacock-node-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Dock Navigation Bar */}
      <nav className="mobile-bottom-dock" aria-label="Mobile Navigation">
        <div className="mobile-dock-inner">
          <Link
            href={bottomTabs[0].href}
            className={`dock-tab-btn ${bottomTabs[0].isActive ? "active" : ""}`}
          >
            <div className="dock-icon-wrapper">
              <i className={bottomTabs[0].icon}></i>
            </div>
            <span className="dock-tab-label">{bottomTabs[0].label}</span>
          </Link>

          <Link
            href={bottomTabs[1].href}
            className={`dock-tab-btn ${bottomTabs[1].isActive ? "active" : ""}`}
          >
            <div className="dock-icon-wrapper">
              <i className={bottomTabs[1].icon}></i>
            </div>
            <span className="dock-tab-label">{bottomTabs[1].label}</span>
          </Link>

          {/* Elevated Center FAB */}
          <div className="dock-center-fab-anchor">
            <button
              type="button"
              className={`dock-peacock-fab ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle Salon Menu"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-plus"} fab-icon`}></i>
            </button>
          </div>

          <Link
            href={bottomTabs[2].href}
            className={`dock-tab-btn ${bottomTabs[2].isActive ? "active" : ""}`}
          >
            <div className="dock-icon-wrapper">
              <i className={bottomTabs[2].icon}></i>
            </div>
            <span className="dock-tab-label">{bottomTabs[2].label}</span>
          </Link>

          <Link
            href={bottomTabs[3].href}
            className={`dock-tab-btn ${bottomTabs[3].isActive ? "active" : ""}`}
          >
            <div className="dock-icon-wrapper">
              <i className={bottomTabs[3].icon}></i>
            </div>
            <span className="dock-tab-label">{bottomTabs[3].label}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
