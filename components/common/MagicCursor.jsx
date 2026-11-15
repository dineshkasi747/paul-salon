"use client";

import { useEffect, useRef } from "react";

export default function MagicCursor() {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ballX = mouseX;
    let ballY = mouseY;
    let isHovered = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("btn-gold") ||
        target.classList.contains("appointment-btn") ||
        target.classList.contains("btn-services")
      ) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    let animationFrameId;
    const animate = () => {
      ballX += (mouseX - ballX) * 0.16;
      ballY += (mouseY - ballY) * 0.16;

      if (ball) {
        ball.style.transform = `translate3d(${ballX}px, ${ballY}px, 0) translate(-50%, -50%) ${
          isHovered ? "scale(2.2)" : "scale(1)"
        }`;
        ball.style.borderColor = isHovered
          ? "rgba(197, 160, 89, 0.9)"
          : "rgba(197, 160, 89, 0.6)";
        ball.style.backgroundColor = isHovered
          ? "rgba(197, 160, 89, 0.2)"
          : "transparent";
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="magic-cursor">
      <div id="ball" ref={ballRef} style={{ willChange: "transform" }}></div>
    </div>
  );
}
