"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenFlyerModal: () => void;
}

export default function Navbar({ onOpenOrderModal, onOpenFlyerModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, background: "rgba(255, 255, 255, 0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f0eae1", boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}>
      {/* Top Micro-Bar for Mobile & Desktop Delivery Update */}
      <div style={{ background: "#221813", color: "#f7eee3", padding: "5px 12px", fontSize: "0.78rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0 auto" }}>
            <span className="pulse-dot"></span>
            <span>
              <strong>Thane West Kitchen:</strong> Fresh Lunch &amp; Dinner Delivered Daily across Shastri Nagar, Panch Pakhadi, Naupada
            </span>
          </div>
          <div style={{ display: "none", alignItems: "center", gap: "10px" }} className="top-micro-contact">
            <a href="tel:9172674260" style={{ color: "#e29f44", fontWeight: "700", textDecoration: "none" }}>
              📞 9172674260
            </a>
            <span style={{ color: "#666" }}>|</span>
            <a href="tel:9769539150" style={{ color: "#e29f44", fontWeight: "700", textDecoration: "none" }}>
              📞 9769539150
            </a>
          </div>
        </div>
      </div>

      <nav className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
        {/* Brand Identity matching inspo.jpg */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{ width: "46px", height: "46px", position: "relative", borderRadius: "50%", overflow: "hidden", border: "2px solid #e29f44", boxShadow: "0 4px 10px rgba(0,0,0,0.08)", flexShrink: 0 }}>
            <Image
              src="/images/brand-logo.jpg"
              alt="Patil Mess Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "1.35rem", fontWeight: "800", color: "#221813", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Patil Mess
              </span>
              <span style={{ fontSize: "0.68rem", background: "#fbf3e6", color: "#b86c12", padding: "2px 6px", borderRadius: "4px", fontWeight: "700", border: "1px solid #fedba8" }}>
                घरगुती चव
              </span>
            </div>
            <p style={{ fontSize: "0.72rem", color: "#786b62", fontWeight: "500", marginTop: "1px" }}>
              Tiffin Service • Shastri Nagar, Thane West
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{ display: "none", alignItems: "center", gap: "24px" }} className="desktop-nav">
          <a href="#featured-menu" style={{ fontSize: "0.9rem", fontWeight: "600", color: "#33261f" }}>
            Featured Menu
          </a>
          <a href="#today-menu" style={{ fontSize: "0.9rem", fontWeight: "600", color: "#33261f" }}>
            Daily Thali
          </a>
          <a href="#weekly-schedule" style={{ fontSize: "0.9rem", fontWeight: "600", color: "#33261f" }}>
            7-Day Schedule
          </a>
          <a href="#meal-plans" style={{ fontSize: "0.9rem", fontWeight: "600", color: "#33261f" }}>
            Monthly Plans
          </a>
          <a href="#delivery-zones" style={{ fontSize: "0.9rem", fontWeight: "600", color: "#33261f" }}>
            Thane Delivery
          </a>

          <button
            onClick={onOpenFlyerModal}
            style={{
              background: "#fdf8f0",
              border: "1px solid #fedba8",
              color: "#965507",
              padding: "7px 14px",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            📄 Official Flyer
          </button>
        </div>

        {/* Right Action: Phone Call & Order Now Pill matching inspo.jpg */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Phone link styled like inspo.jpg */}
          <a
            href="tel:9172674260"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: "700",
              fontSize: "0.9rem",
              color: "#221813",
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "9999px",
              background: "#faf7f2",
            }}
            className="phone-pill"
          >
            <span style={{ fontSize: "1rem" }}>📞</span>
            <span className="phone-text">+91 9172674260</span>
          </a>

          {/* Pill CTA button matching inspo.jpg */}
          <button
            onClick={onOpenOrderModal}
            style={{
              background: "#e29f44",
              color: "#ffffff",
              border: "none",
              borderRadius: "9999px",
              padding: "9px 18px",
              fontSize: "0.85rem",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(226, 159, 68, 0.4)",
              transition: "transform 0.2s ease, background 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            ORDER NOW
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "transparent",
              border: "1px solid #e5ded5",
              borderRadius: "8px",
              padding: "7px 8px",
              cursor: "pointer",
              display: "inline-flex",
              flexDirection: "column",
              gap: "4px",
            }}
            className="mobile-hamburger"
            aria-label="Toggle navigation menu"
          >
            <span style={{ width: "18px", height: "2px", background: "#221813", display: "block" }}></span>
            <span style={{ width: "18px", height: "2px", background: "#221813", display: "block" }}></span>
            <span style={{ width: "13px", height: "2px", background: "#221813", display: "block" }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ background: "#ffffff", borderTop: "1px solid #f0eae1", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
          <a
            href="#featured-menu"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "0.95rem", fontWeight: "600", color: "#221813", padding: "6px 0", borderBottom: "1px solid #f6f1eb" }}
          >
            🍱 Featured Dabba Dishes
          </a>
          <a
            href="#today-menu"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "0.95rem", fontWeight: "600", color: "#221813", padding: "6px 0", borderBottom: "1px solid #f6f1eb" }}
          >
            🍛 Today&apos;s Daily Thali
          </a>
          <a
            href="#weekly-schedule"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "0.95rem", fontWeight: "600", color: "#221813", padding: "6px 0", borderBottom: "1px solid #f6f1eb" }}
          >
            📅 7-Day Rotating Schedule
          </a>
          <a
            href="#meal-plans"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "0.95rem", fontWeight: "600", color: "#221813", padding: "6px 0", borderBottom: "1px solid #f6f1eb" }}
          >
            💰 Monthly Subscriptions (From ₹86/meal)
          </a>
          <a
            href="#delivery-zones"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "0.95rem", fontWeight: "600", color: "#221813", padding: "6px 0", borderBottom: "1px solid #f6f1eb" }}
          >
            📍 Thane West Delivery Areas
          </a>

          <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenFlyerModal(); }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "9999px",
                border: "1px solid #e5ded5",
                background: "#faf7f2",
                fontWeight: "600",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              📄 Original Flyer
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOrderModal(); }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "9999px",
                border: "none",
                background: "#25D366",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              💬 WhatsApp Order
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .top-micro-contact {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .phone-text {
            display: none;
          }
          .phone-pill {
            padding: 8px 10px;
          }
        }
      `}</style>
    </header>
  );
}
