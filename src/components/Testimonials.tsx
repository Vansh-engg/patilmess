"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/menuData";

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: "#ffffff", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px auto" }}>
          <div className="badge-pill badge-gold" style={{ marginBottom: "12px" }}>
            <span>⭐</span>
            <span>Loved Across Thane West</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", color: "var(--text-main)", marginBottom: "12px" }}>
            Words From Our Regular Dabba Customers
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            Hear from students, corporate IT employees, and families in Thane who rely on Patil Mess every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="premium-card"
              style={{
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(180deg, #ffffff 0%, #fdfbf7 100%)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                {/* Rating stars & Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div style={{ color: "#f39c12", fontSize: "1.1rem", letterSpacing: "2px" }}>
                    {"★".repeat(item.rating)}
                  </div>
                  <span style={{ fontSize: "0.72rem", background: "var(--color-amber-light)", color: "#8a5200", padding: "3px 10px", borderRadius: "12px", fontWeight: "700" }}>
                    {item.tag}
                  </span>
                </div>

                {/* Quote */}
                <p style={{ fontSize: "0.92rem", color: "var(--text-main)", lineHeight: 1.65, fontStyle: "italic", marginBottom: "22px" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div style={{ borderTop: "1px solid #ebdccc", paddingTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "var(--color-primary-light)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "1rem", flexShrink: 0 }}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong style={{ fontSize: "0.92rem", color: "var(--color-primary-dark)", display: "block" }}>
                    {item.name}
                  </strong>
                  <div style={{ fontSize: "0.78rem", color: "#666" }}>{item.role}</div>
                  <div style={{ fontSize: "0.74rem", color: "#8a5200", fontWeight: "500", marginTop: "1px" }}>
                    📍 {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
