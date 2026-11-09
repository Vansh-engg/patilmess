"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WEEKLY_MENU, MenuItem } from "@/data/menuData";

interface TodayMenuProps {
  onOrderNow: () => void;
}

export default function TodayMenuShowcase({ onOrderNow }: TodayMenuProps) {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [todayName, setTodayName] = useState<string>("Monday");
  const [activeSlot, setActiveSlot] = useState<"lunch" | "dinner">("lunch");

  React.useEffect(() => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const current = dayNames[new Date().getDay()];
    setSelectedDay(current);
    setTodayName(current);
  }, []);

  const currentMenu: MenuItem =
    WEEKLY_MENU.find((m) => m.day.toLowerCase() === selectedDay.toLowerCase()) || WEEKLY_MENU[0];

  const mealContent = activeSlot === "lunch" ? currentMenu.lunch : currentMenu.dinner;

  return (
    <section id="today-menu" className="section-pad" style={{ background: "#fbf9f5", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px auto" }}>
          <div className="badge-pill badge-saffron" style={{ marginBottom: "12px" }}>
            <span>♨️</span>
            <span>Daily Fresh Kitchen Batch</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", color: "var(--text-main)", marginBottom: "12px" }}>
            What&apos;s Cooking at Patil Mess?
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            Our menu changes every single day so you never get bored of eating homestyle food. Cooked fresh twice daily in Shastri Nagar, Thane West.
          </p>
        </div>

        {/* Day Selector Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {WEEKLY_MENU.map((item) => {
            const isSelected = item.day.toLowerCase() === selectedDay.toLowerCase();
            const isActualToday = item.day.toLowerCase() === todayName.toLowerCase();

            return (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.88rem",
                  fontWeight: "700",
                  border: isSelected ? "2px solid var(--color-primary)" : "1px solid #e3dbcf",
                  background: isSelected ? "var(--color-primary)" : "#ffffff",
                  color: isSelected ? "#ffffff" : "var(--text-main)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "var(--transition-smooth)",
                  boxShadow: isSelected ? "0 4px 14px rgba(168, 46, 17, 0.25)" : "none",
                }}
              >
                <span>{item.day}</span>
                {isActualToday && (
                  <span
                    style={{
                      fontSize: "0.68rem",
                      background: isSelected ? "#ffffff" : "var(--color-amber-light)",
                      color: isSelected ? "var(--color-primary-dark)" : "#8a4e00",
                      padding: "2px 6px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Today
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Meal Slot Toggle: Lunch vs Dinner */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div
            style={{
              background: "#ede5d8",
              padding: "4px",
              borderRadius: "var(--radius-full)",
              display: "inline-flex",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setActiveSlot("lunch")}
              style={{
                padding: "8px 24px",
                borderRadius: "var(--radius-full)",
                border: "none",
                fontSize: "0.9rem",
                fontWeight: "700",
                cursor: "pointer",
                background: activeSlot === "lunch" ? "#ffffff" : "transparent",
                color: activeSlot === "lunch" ? "var(--color-primary-dark)" : "var(--text-muted)",
                boxShadow: activeSlot === "lunch" ? "var(--shadow-sm)" : "none",
                transition: "var(--transition-smooth)",
              }}
            >
              ☀️ Lunch Dabba (11:45 AM - 1:30 PM)
            </button>
            <button
              onClick={() => setActiveSlot("dinner")}
              style={{
                padding: "8px 24px",
                borderRadius: "var(--radius-full)",
                border: "none",
                fontSize: "0.9rem",
                fontWeight: "700",
                cursor: "pointer",
                background: activeSlot === "dinner" ? "#ffffff" : "transparent",
                color: activeSlot === "dinner" ? "var(--color-primary-dark)" : "var(--text-muted)",
                boxShadow: activeSlot === "dinner" ? "var(--shadow-sm)" : "none",
                transition: "var(--transition-smooth)",
              }}
            >
              🌙 Dinner Dabba (7:30 PM - 9:30 PM)
            </button>
          </div>
        </div>

        {/* Menu Cards Display Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "36px", alignItems: "stretch" }} className="menu-showcase-grid">
          {/* Left: Detailed Dish Breakdown */}
          <div
            className="premium-card"
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#ffffff",
              border: "1.5px solid var(--border-gold)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-primary)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {selectedDay} {activeSlot.toUpperCase()} SPECIAL
                  </span>
                  <h3 style={{ fontSize: "1.6rem", color: "var(--text-main)", marginTop: "4px" }}>
                    Full Homestyle Thali
                  </h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--color-primary-dark)" }}>₹90</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "block" }}>All Inclusive</span>
                </div>
              </div>

              {/* Dish Items Breakdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "26px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--color-amber-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                    🥘
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-main)", display: "block" }}>Daily Sabzi:</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-primary-dark)", fontWeight: "600" }}>{mealContent.sabzi}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--color-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                    🥣
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-main)", display: "block" }}>Dal / Kadhi:</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{mealContent.dal}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#fef1ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                    🫓
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-main)", display: "block" }}>Breads:</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{mealContent.bread}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#edf6f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                    🍚
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-main)", display: "block" }}>Rice:</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{mealContent.rice}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#f4f1ea", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                    🥗
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-main)", display: "block" }}>Salad &amp; Accompaniments:</strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{mealContent.sides}</span>
                  </div>
                </div>
              </div>

              {/* Special Note */}
              <div style={{ background: "#fdf8f0", padding: "12px 16px", borderRadius: "10px", borderLeft: "4px solid var(--color-amber)", fontSize: "0.85rem", color: "#8a5200", marginBottom: "24px" }}>
                💡 <strong>Chef&apos;s Note:</strong> {currentMenu.specialHighlight}
              </div>
            </div>

            {/* Direct Order Button */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <button
                onClick={onOrderNow}
                className="btn btn-whatsapp"
                style={{ flex: 1, padding: "13px 20px", fontSize: "0.98rem" }}
              >
                Order {selectedDay}&apos;s {activeSlot === "lunch" ? "Lunch" : "Dinner"} on WhatsApp
              </button>
              <a
                href="tel:9172674260"
                className="btn btn-secondary"
                style={{ padding: "13px 18px" }}
              >
                📞 Call Patil Mess
              </a>
            </div>
          </div>

          {/* Right: Real Indian Food Visual Gallery */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src="/images/fresh-phulkas.jpg"
                alt="Soft Hand-Rolled Phulkas with Pure Desi Ghee"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "14px",
                  background: "rgba(22, 17, 14, 0.8)",
                  backdropFilter: "blur(6px)",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                }}
              >
                🫓 Hot Ghee Phulkas made live on iron tawa
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "170px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Image
                  src="/images/kadai-special.jpg"
                  alt="Special Kadai Sabzi & Paneer"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    background: "rgba(0,0,0,0.75)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    fontWeight: "600",
                  }}
                >
                  Pure Veg Delicacies
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "170px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Image
                  src="/images/tiffin-dabba.jpg"
                  alt="Stainless Steel Tiffin Carrier Delivery"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    background: "rgba(0,0,0,0.75)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    fontWeight: "600",
                  }}
                >
                  Hot Tiffin Dabba Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .menu-showcase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
