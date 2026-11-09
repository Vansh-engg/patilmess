"use client";

import React, { useState } from "react";
import { WEEKLY_MENU } from "@/data/menuData";

interface WeeklyScheduleProps {
  onOrderNow: (planName?: string) => void;
}

export default function FullWeeklySchedule({ onOrderNow }: WeeklyScheduleProps) {
  const [selectedDayTab, setSelectedDayTab] = useState(0);

  return (
    <section id="weekly-schedule" className="section-pad" style={{ background: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px auto" }}>
          <div className="badge-pill badge-gold" style={{ marginBottom: "12px" }}>
            <span>🗓️</span>
            <span>Balanced Nutrition • Zero Repetition</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", color: "var(--text-main)", marginBottom: "12px" }}>
            Full 7-Day Tiffin Schedule
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            Review our planned homestyle meals from Monday through Sunday. Cooked with authentic spices, less oil, and high protein pulses like Rajma, Chole, Paneer, and Sprouts.
          </p>
        </div>

        {/* Day Pills Bar */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "10px",
            paddingBottom: "16px",
            marginBottom: "30px",
            justifyContent: "flex-start",
          }}
        >
          {WEEKLY_MENU.map((item, idx) => (
            <button
              key={item.day}
              onClick={() => setSelectedDayTab(idx)}
              style={{
                flex: "0 0 auto",
                padding: "12px 20px",
                borderRadius: "14px",
                border: selectedDayTab === idx ? "2px solid var(--color-primary)" : "1px solid #e5ded5",
                background: selectedDayTab === idx ? "var(--color-amber-light)" : "#faf7f2",
                color: selectedDayTab === idx ? "var(--color-primary-dark)" : "var(--text-main)",
                fontWeight: "700",
                fontSize: "0.92rem",
                cursor: "pointer",
                transition: "var(--transition-smooth)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                minWidth: "120px",
              }}
            >
              <span>{item.day}</span>
              <span style={{ fontSize: "0.72rem", color: selectedDayTab === idx ? "var(--color-primary)" : "#888", fontWeight: "500" }}>
                {idx === 6 ? "Sunday Feast 🎉" : "Lunch & Dinner"}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Day Content Card */}
        {(() => {
          const dayData = WEEKLY_MENU[selectedDayTab];
          return (
            <div
              className="premium-card"
              style={{
                padding: "36px",
                border: "2px solid var(--border-gold)",
                background: "linear-gradient(180deg, #ffffff 0%, #faf6ef 100%)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", borderBottom: "1px solid #eee1d0", paddingBottom: "20px", marginBottom: "26px" }}>
                <div>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Day {selectedDayTab + 1} of 7 Cycle
                  </span>
                  <h3 style={{ fontSize: "1.8rem", color: "var(--text-main)" }}>
                    {dayData.day}&apos;s Homestyle Meal Plan
                  </h3>
                </div>
                <div style={{ background: "#e8f5ec", color: "var(--color-green-dark)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: "700" }}>
                  🌱 100% Pure Vegetarian &amp; Freshly Cooked
                </div>
              </div>

              {/* Grid with Lunch & Dinner */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }} className="day-grid">
                {/* Lunch Box */}
                <div style={{ background: "#ffffff", padding: "24px", borderRadius: "16px", border: "1px solid #ebdccc", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "1.4rem" }}>☀️</span>
                    <div>
                      <h4 style={{ fontSize: "1.15rem", color: "var(--color-primary-dark)" }}>Afternoon Lunch Dabba</h4>
                      <span style={{ fontSize: "0.75rem", color: "#777" }}>Delivered 11:45 AM - 1:30 PM across Thane West</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Main Sabzi:</strong> {dayData.lunch.sabzi}</span>
                    </li>
                    {dayData.lunch.specialDish && (
                      <li style={{ display: "flex", gap: "8px" }}>
                        <span style={{ color: "var(--color-amber)" }}>★</span>
                        <span><strong>Special Side:</strong> {dayData.lunch.specialDish}</span>
                      </li>
                    )}
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Dal:</strong> {dayData.lunch.dal}</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Roti:</strong> {dayData.lunch.bread}</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Rice:</strong> {dayData.lunch.rice}</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Salad/Achar:</strong> {dayData.lunch.sides}</span>
                    </li>
                  </ul>
                </div>

                {/* Dinner Box */}
                <div style={{ background: "#ffffff", padding: "24px", borderRadius: "16px", border: "1px solid #ebdccc", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "1.4rem" }}>🌙</span>
                    <div>
                      <h4 style={{ fontSize: "1.15rem", color: "var(--color-primary-dark)" }}>Evening Dinner Dabba</h4>
                      <span style={{ fontSize: "0.75rem", color: "#777" }}>Delivered 7:30 PM - 9:30 PM right to your door</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Main Sabzi:</strong> {dayData.dinner.sabzi}</span>
                    </li>
                    {dayData.dinner.specialDish && (
                      <li style={{ display: "flex", gap: "8px" }}>
                        <span style={{ color: "var(--color-amber)" }}>★</span>
                        <span><strong>Special Side:</strong> {dayData.dinner.specialDish}</span>
                      </li>
                    )}
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Dal:</strong> {dayData.dinner.dal}</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Roti:</strong> {dayData.dinner.bread}</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Rice:</strong> {dayData.dinner.rice}</span>
                    </li>
                    <li style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--color-primary)" }}>•</span>
                      <span><strong>Salad/Achar:</strong> {dayData.dinner.sides}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom bar with action */}
              <div style={{ marginTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", background: "rgba(201, 139, 44, 0.08)", padding: "16px 20px", borderRadius: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.3rem" }}>✨</span>
                  <span style={{ fontSize: "0.88rem", color: "#6a400c" }}>
                    Want custom spice level or no-onion-garlic option for {dayData.day}? Just mention it on WhatsApp!
                  </span>
                </div>
                <button
                  onClick={() => onOrderNow(`Order for ${dayData.day}`)}
                  className="btn btn-whatsapp"
                  style={{ padding: "10px 22px", fontSize: "0.9rem" }}
                >
                  Book {dayData.day} Tiffin on WhatsApp
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .day-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
