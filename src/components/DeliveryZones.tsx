"use client";

import React, { useState } from "react";
import { THANE_LOCALITIES } from "@/data/menuData";

interface DeliveryZonesProps {
  onOrderNow: () => void;
}

export default function DeliveryZones({ onOrderNow }: DeliveryZonesProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocalities = THANE_LOCALITIES.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.landmark.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="delivery-zones" className="section-pad bg-subtle-pattern" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 40px auto" }}>
          <div className="badge-pill badge-green" style={{ marginBottom: "12px" }}>
            <span>🛵</span>
            <span>Fast &amp; Hot Thane West Delivery</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", color: "var(--text-main)", marginBottom: "12px" }}>
            Tiffin Delivery Across Thane West
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            Our kitchen is centered in <strong>Shastri Nagar, Thane West</strong>. We deliver hot, spill-proof tiffins to residential societies, student PGs, libraries, and corporate IT parks.
          </p>
        </div>

        {/* Timings and Cutoff Banner */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "24px",
            border: "1.5px solid var(--border-gold)",
            boxShadow: "var(--shadow-sm)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "36px",
          }}
          className="timing-grid"
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: "var(--color-amber-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
              ☀️
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-amber)", fontWeight: "700", textTransform: "uppercase" }}>
                Lunch Window
              </div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--text-main)" }}>11:45 AM - 1:30 PM</h4>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Cutoff: Order before <strong>10:30 AM</strong> for same-day delivery
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: "#f0f4ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
              🌙
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", color: "#2563eb", fontWeight: "700", textTransform: "uppercase" }}>
                Dinner Window
              </div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--text-main)" }}>7:30 PM - 9:30 PM</h4>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Cutoff: Order before <strong>6:00 PM</strong> for same-day delivery
              </p>
            </div>
          </div>
        </div>

        {/* Locality Search Input */}
        <div style={{ maxWidth: "560px", margin: "0 auto 30px auto", position: "relative" }}>
          <input
            type="text"
            placeholder="🔍 Type your Thane West locality or landmark (e.g. Panch Pakhadi, Naupada)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 20px",
              borderRadius: "var(--radius-full)",
              border: "1.5px solid var(--border-gold)",
              fontSize: "0.95rem",
              background: "#ffffff",
              boxShadow: "var(--shadow-sm)",
            }}
          />
        </div>

        {/* Localities Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "36px" }}>
          {filteredLocalities.map((loc) => (
            <div
              key={loc.name}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "var(--transition-smooth)",
              }}
            >
              <div>
                <strong style={{ fontSize: "0.92rem", color: "var(--text-main)", display: "block" }}>
                  {loc.name}
                </strong>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px", display: "block" }}>
                  📍 {loc.landmark}
                </span>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span style={{ fontSize: "0.72rem", background: "var(--color-green-light)", color: "var(--color-green)", padding: "3px 8px", borderRadius: "10px", fontWeight: "700", display: "inline-block" }}>
                  Free Delivery
                </span>
                <span style={{ fontSize: "0.72rem", color: "#888", display: "block", marginTop: "3px" }}>
                  ⏱️ {loc.eta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Locality Footer Action */}
        <div style={{ textAlign: "center", background: "#fbf6ee", padding: "24px", borderRadius: "16px", border: "1px solid #ebdccc" }}>
          <h4 style={{ fontSize: "1.1rem", color: "var(--color-primary-dark)", marginBottom: "6px" }}>
            Don&apos;t see your specific building or society listed?
          </h4>
          <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "16px" }}>
            We cover almost every corner of Thane West! Message Patil Uncle on WhatsApp to verify delivery to your building.
          </p>
          <button onClick={onOrderNow} className="btn btn-whatsapp" style={{ padding: "12px 26px" }}>
            💬 Check Your Address on WhatsApp
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
