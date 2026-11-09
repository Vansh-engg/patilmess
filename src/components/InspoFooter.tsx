"use client";

import React, { useState } from "react";

interface InspoFooterProps {
  onOpenOrderModal: () => void;
  onOpenFlyerModal: () => void;
}

export default function InspoFooter({ onOpenOrderModal, onOpenFlyerModal }: InspoFooterProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <footer style={{ background: "#ffffff", paddingTop: "50px", paddingBottom: "40px", borderTop: "1px solid #f0eae1" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
        
        {/* Social Icons matching inspo.jpg */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "22px" }}>
          {[
            { label: "Facebook", icon: "f", url: "#" },
            { label: "Pinterest", icon: "P", url: "#" },
            { label: "Twitter", icon: "𝕏", url: "#" },
            { label: "Instagram", icon: "📷", url: "#" },
          ].map((soc) => (
            <a
              key={soc.label}
              href={soc.url}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#221813",
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: "700",
                textDecoration: "none",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              className="inspo-social-icon"
              aria-label={soc.label}
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Centered Navigation Links matching inspo.jpg */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "18px",
            fontSize: "0.88rem",
            color: "#6b5d54",
            fontWeight: "600",
            marginBottom: "20px",
          }}
          className="inspo-footer-links"
        >
          <a href="#" style={{ color: "#221813", textDecoration: "none" }}>Home</a>
          <span style={{ color: "#d5c9bd" }}>/</span>
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{ background: "none", border: "none", color: "#221813", fontSize: "0.88rem", fontWeight: "600", cursor: "pointer", padding: 0 }}
          >
            About Us &amp; Menu {showDetails ? "▲" : "▼"}
          </button>
          <span style={{ color: "#d5c9bd" }}>/</span>
          <a href="#featured-menu" style={{ color: "#221813", textDecoration: "none" }}>Menu</a>
          <span style={{ color: "#d5c9bd" }}>/</span>
          <button
            onClick={onOpenFlyerModal}
            style={{ background: "none", border: "none", color: "#221813", fontSize: "0.88rem", fontWeight: "600", cursor: "pointer", padding: 0 }}
          >
            Original Flyer
          </button>
          <span style={{ color: "#d5c9bd" }}>/</span>
          <a href="tel:9172674260" style={{ color: "#221813", textDecoration: "none" }}>Contact</a>
          <span style={{ color: "#d5c9bd" }}>/</span>
          <button
            onClick={onOpenOrderModal}
            style={{ background: "none", border: "none", color: "#e6a147", fontSize: "0.88rem", fontWeight: "700", cursor: "pointer", padding: 0 }}
          >
            Order Now
          </button>
        </div>

        {/* Copyright Line matching inspo.jpg */}
        <p style={{ fontSize: "0.8rem", color: "#9c8e84", margin: "0 0 16px 0" }}>
          Copyright © 2010-2026 Patil Mess Tiffin Service. Shastri Nagar, Thane West. All rights reserved.
        </p>

        {/* Optional Expandable Mess & Kitchen Details */}
        {showDetails && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#faf7f2",
              borderRadius: "16px",
              border: "1px solid #ebdccc",
              textAlign: "left",
              fontSize: "0.85rem",
              color: "#554b43",
              lineHeight: 1.6,
            }}
          >
            <h4 style={{ fontSize: "1rem", color: "#221813", marginBottom: "6px" }}>
              Patil Mess Tiffin Service (Homemade Food Delivered With Love)
            </h4>
            <p style={{ marginBottom: "8px" }}>
              📍 <strong>Kitchen Address:</strong> Shastri Nagar, Thane West, Maharashtra 400606.
              <br />
              📞 <strong>Direct Numbers:</strong> +91 9172674260 / +91 9769539150
            </p>
            <p>
              Delivering wholesome home-cooked lunch and dinner across Shastri Nagar, Panch Pakhadi, Naupada, Teen Hath Naka, Majiwada, and Ghodbunder Road. 100% pure vegetarian, MP Sharbati wheat phulkas with pure desi ghee, low oil, and zero soda.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .inspo-social-icon:hover {
          background: #e6a147;
          transform: translateY(-2px);
        }
        @media (max-width: 600px) {
          .inspo-footer-links {
            gap: 12px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
