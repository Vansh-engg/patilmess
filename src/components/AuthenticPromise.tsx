"use client";

import React from "react";
import Image from "next/image";

export default function AuthenticPromise() {
  return (
    <section className="section-pad" style={{ background: "#ffffff", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center" }} className="promise-grid">
          {/* Left Column: Food Visual with Badge */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "var(--shadow-warm)",
                border: "4px solid #ffffff",
              }}
            >
              <Image
                src="/images/tiffin-dabba.jpg"
                alt="Patil Mess Traditional Stainless Steel Dabba"
                fill
                style={{ objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  padding: "10px 16px",
                  borderRadius: "14px",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--border-gold)",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--color-primary)", fontWeight: "700", textTransform: "uppercase" }}>
                  Pure Maharashtrian &amp; North Indian
                </span>
                <div style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-main)" }}>
                  घरगुती आणि सात्त्विक चव
                </div>
              </div>
            </div>

            {/* Accent Card */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "var(--bg-dark)",
                color: "#fff",
                borderRadius: "18px",
                padding: "16px 22px",
                maxWidth: "260px",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              className="accent-tag"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ color: "#f39c12", fontSize: "1.2rem" }}>★ ★ ★ ★ ★</span>
              </div>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.4, color: "#e8ded8" }}>
                &ldquo;Eating daily here for 6 months. Never felt heavy or acidic even once!&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: 4 Real Culinary Pillars */}
          <div>
            <div className="badge-pill badge-green" style={{ marginBottom: "14px" }}>
              <span>🍃</span>
              <span>The Patil Family Kitchen Standard</span>
            </div>

            <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "var(--text-main)", marginBottom: "16px", lineHeight: 1.2 }}>
              Why Patil Mess Food Feels Like Home, Not a Commercial Hotel
            </h2>

            <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "28px", lineHeight: 1.65 }}>
              Most food delivery apps send heavy, oily restaurant food loaded with soda, tasting agents, and days-old gravies. At Patil Mess in Shastri Nagar, we cook the way mothers cook at home:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--color-amber-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  🌾
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--text-main)", marginBottom: "3px" }}>
                    100% MP Sharbati Whole Wheat Atta
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Zero maida mixing. Rolled thin by hand, puffed on an open tawa, and brushed with real desi ghee. They remain ultra-soft even if you eat 3 hours later.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--color-green-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  🚫
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--text-main)", marginBottom: "3px" }}>
                    Zero Baking Soda &amp; Zero Synthetic Colors
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Commercial eateries use soda to quickly soften lentils and artificial colors for bright gravies. We use traditional slow boiling and pure turmeric, coriander &amp; cumin.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#fef1ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  💧
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--text-main)", marginBottom: "3px" }}>
                    Controlled Cold-Pressed Oil &amp; RO Purified Water
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Light on your stomach, healthy for your heart. All dals, curries, and vegetable washes use 100% RO filtered water with strict kitchen sanitization.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--color-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  ⏰
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--text-main)", marginBottom: "3px" }}>
                    Twice Daily Fresh Cooking Batches
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Lunch is cooked fresh in the morning at 10:00 AM. Dinner is cooked fresh in the evening at 6:00 PM. No morning leftovers served at night!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .promise-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .accent-tag {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
