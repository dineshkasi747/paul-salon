"use client";

export default function DemoToolbar() {
  return (
    <aside
      className="qodef-frame-toolbar"
      style={{
        position: "fixed",
        right: 0,
        top: "240px",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        fontFamily: "'Albert Sans', sans-serif",
      }}
      aria-label="Demo Toolbar"
    >
      {/* RELATED */}
      <a
        href="https://qodeinteractive.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#ef2853",
          color: "#ffffff",
          padding: "9px 16px 9px 12px",
          borderRadius: "3px 0 0 3px",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          textDecoration: "none",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
          transition: "transform 0.2s ease, background-color 0.2s ease",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        <span>RELATED</span>
      </a>

      {/* BUY NOW */}
      <a
        href="https://themeforest.net"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "9px 16px 9px 12px",
          borderRadius: "3px 0 0 3px",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          textDecoration: "none",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.18)",
          transition: "transform 0.2s ease",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef2853"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span>BUY NOW</span>
      </a>
    </aside>
  );
}
