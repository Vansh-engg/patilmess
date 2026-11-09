"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOrderNow: () => void;
  onExploreMore?: () => void;
}

export default function HeroSection({ onOrderNow, onExploreMore }: HeroSectionProps) {
  return (
    <section style={{ background: "#ffffff", paddingTop: "10px", paddingBottom: "0px", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "20px",
            alignItems: "center",
            minHeight: "500px",
          }}
          className="inspo-hero-grid"
        >
          {/* Left: Top-down container with bowls and scattered spices matching inspo.jpg */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} className="inspo-hero-left">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "470px",
                aspectRatio: "1/1",
                filter: "drop-shadow(0 20px 30px rgba(34, 24, 19, 0.12))",
                transition: "transform 0.4s ease",
              }}
              className="inspo-tray-container"
            >
              <Image
                src="/images/hero-tray.png"
                alt="Patil Mess Authentic Homestyle Tiffin Meal Tray with Raita and Spices"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          {/* Right: Typography and Capsule Bio matching inspo.jpg */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} className="inspo-hero-right">
            {/* Script Cursive Accent matching 'Mouton' in inspo.jpg */}
            <div
              className="font-script"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)",
                color: "#221813",
                lineHeight: 0.95,
                transform: "rotate(-3deg)",
                transformOrigin: "left bottom",
                marginBottom: "-4px",
              }}
            >
              Mouton
            </div>

            {/* Bold Modern Title matching 'Biryani' in inspo.jpg */}
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                fontWeight: "900",
                color: "#221813",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                margin: "4px 0 12px 0",
              }}
            >
              Biryani
            </h1>

            {/* Sub-label for Patil Mess Thane West */}
            <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#8a7e75", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Patil Mess Tiffin Service • Shastri Nagar, Thane West
            </div>

            {/* Star Rating strip matching inspo.jpg */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <div style={{ color: "#e6a147", fontSize: "1.2rem", letterSpacing: "2px" }}>
                ★★★★★
              </div>
              <span style={{ fontWeight: "800", fontSize: "1.05rem", color: "#221813" }}>4.5</span>
              <span style={{ fontSize: "0.82rem", color: "#9c8e84" }}>
                321 Reviews
              </span>
            </div>

            {/* Signature Olive Green Capsule Box matching inspo.jpg */}
            <div
              style={{
                background: "var(--inspo-green)",
                color: "#ffffff",
                borderRadius: "36px",
                padding: "24px 28px",
                boxShadow: "0 12px 28px rgba(108, 126, 57, 0.28)",
                marginBottom: "24px",
                maxWidth: "500px",
              }}
              className="inspo-bio-capsule"
            >
              <p style={{ fontSize: "0.88rem", lineHeight: 1.65, fontWeight: "400", margin: 0 }}>
                Découvrez Biryana, votre destination gourmande au coeur de Thane West! Savor wholesome homestyle meals prepared fresh with love, MP Sharbati wheat phulkas with pure desi ghee, zero baking soda, and low oil. Punctual doorstep delivery right to your door!
              </p>
            </div>

            {/* Action Buttons matching inspo.jpg */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              {/* Amber Pill ORDER NOW */}
              <button
                onClick={onOrderNow}
                style={{
                  background: "var(--inspo-ochre)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "13px 32px",
                  fontSize: "0.92rem",
                  fontWeight: "800",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(230, 161, 71, 0.38)",
                  transition: "all 0.2s ease",
                  textTransform: "uppercase",
                }}
                className="btn-inspo-order"
              >
                ORDER NOW
              </button>

              {/* Outlined Pill EXPLORE MORE */}
              <a
                href="#featured-menu"
                onClick={onExploreMore}
                style={{
                  background: "transparent",
                  color: "#c28124",
                  border: "1.8px solid #e6b87d",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontSize: "0.9rem",
                  fontWeight: "800",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  textTransform: "uppercase",
                }}
                className="btn-inspo-explore"
              >
                EXPLORE MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Wavy Divider matching inspo.jpg */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, marginTop: "30px" }}>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", display: "block", width: "100%", height: "55px" }}
        >
          <path
            d="M0,25 C360,85 580,0 900,45 C1180,80 1340,15 1440,25 L1440,100 L0,100 Z"
            fill="#faf7f2"
          />
        </svg>
      </div>

      <style jsx>{`
        .btn-inspo-order:hover {
          background: #d48e35;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(230, 161, 71, 0.45);
        }
        .btn-inspo-explore:hover {
          background: #fef7ee;
          color: #9c5c0c;
        }
        .inspo-tray-container:hover {
          transform: scale(1.02);
        }
        @media (max-width: 900px) {
          .inspo-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            text-align: center;
          }
          .inspo-hero-left {
            order: 1;
          }
          .inspo-hero-right {
            order: 2;
            align-items: center;
          }
          .inspo-bio-capsule {
            border-radius: 26px !important;
            padding: 18px 20px !important;
            text-align: left;
          }
          .font-script {
            transform: none !important;
          }
        }
        @media (max-width: 480px) {
          .inspo-tray-container {
            max-width: 280px !important;
          }
          .btn-inspo-order, .btn-inspo-explore {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
