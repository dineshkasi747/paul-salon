"use client";

import { useScroll } from "@/hooks/useScroll";

export default function ScrollToTop() {
  const { isScrolled } = useScroll(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${isScrolled ? "visible" : ""}`}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
