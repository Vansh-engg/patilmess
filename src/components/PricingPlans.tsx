"use client";

import React from "react";
import { MEAL_PLANS, MealPlan } from "@/data/menuData";

interface PricingPlansProps {
  onSelectPlan: (planTitle: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  return (
    <section id="meal-plans" className="section-pad bg-subtle-pattern" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px auto" }}>
          <div className="badge-pill badge-saffron" style={{ marginBottom: "12px" }}>
            <span>💰</span>
            <span>Simple, Honest &amp; Pocket-Friendly</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", color: "var(--text-main)", marginBottom: "12px" }}>
            Monthly &amp; Trial Tiffin Subscriptions
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            No heavy restaurant markups, no surprise service fees. Pure, nutritious home food prepared in Shastri Nagar, Thane West with pause and skip flexibilities.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", alignItems: "stretch" }}>
          {MEAL_PLANS.map((plan: MealPlan) => {
            return (
              <div
                key={plan.id}
                className="premium-card"
                style={{
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: plan.popular ? "linear-gradient(180deg, #ffffff 0%, #fffbf5 100%)" : "#ffffff",
                  border: plan.popular ? "2.5px solid var(--color-primary)" : "1px solid var(--border-subtle)",
                  boxShadow: plan.popular ? "var(--shadow-warm)" : "var(--shadow-sm)",
                  transform: plan.popular ? "scale(1.02)" : "none",
                }}
              >
                <div>
                  {/* Popular Ribbon */}
                  {plan.popular && (
                    <div
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-amber) 100%)",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        marginBottom: "14px",
                      }}
                    >
                      ★ Most Popular in Thane
                    </div>
                  )}

                  <h3 style={{ fontSize: "1.35rem", color: "var(--text-main)", marginBottom: "4px" }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "18px", minHeight: "38px" }}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: "22px", paddingBottom: "18px", borderBottom: "1px solid #eee5d8" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ fontSize: "2.3rem", fontWeight: "800", color: "var(--color-primary-dark)", lineHeight: 1 }}>
                        ₹{plan.price}
                      </span>
                      {plan.originalPrice > plan.price && (
                        <span style={{ fontSize: "1rem", color: "#a5978f", textDecoration: "line-through" }}>
                          ₹{plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px" }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: "600" }}>{plan.period}</span>
                      <span style={{ fontSize: "0.78rem", background: "#e8f5ec", color: "var(--color-green)", padding: "2px 8px", borderRadius: "10px", fontWeight: "700" }}>
                        ~₹{plan.perMealCost}/meal
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "26px" }}>
                    {plan.features.map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.86rem", color: "var(--text-main)" }}>
                        <span style={{ color: "var(--color-green)", fontWeight: "700" }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(`${plan.name} (₹${plan.price})`)}
                    className={plan.popular ? "btn btn-whatsapp" : "btn btn-secondary"}
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "0.92rem",
                      fontWeight: "700",
                    }}
                  >
                    Select Plan on WhatsApp
                  </button>
                  <p style={{ textAlign: "center", fontSize: "0.72rem", color: "#888", marginTop: "8px" }}>
                    Cancel or pause anytime with notice
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscription Guarantees Box */}
        <div
          style={{
            marginTop: "48px",
            background: "#ffffff",
            borderRadius: "18px",
            padding: "24px 30px",
            border: "1px solid var(--border-gold)",
            boxShadow: "var(--shadow-sm)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.4rem" }}>⏸️</span>
            <div>
              <strong style={{ fontSize: "0.9rem", color: "var(--text-main)", display: "block" }}>
                Flexible Meal Pause Policy
              </strong>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Going out of station? Just drop a WhatsApp message 3 hours before cutoff. Your meal balance carries over.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.4rem" }}>🍱</span>
            <div>
              <strong style={{ fontSize: "0.9rem", color: "var(--text-main)", display: "block" }}>
                Stainless Steel or Disposable
              </strong>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Opt for traditional 3-tier hot steel tiffin exchange or food-grade microwave-safe leak-proof meal trays.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.4rem" }}>📱</span>
            <div>
              <strong style={{ fontSize: "0.9rem", color: "var(--text-main)", display: "block" }}>
                Zero Tedious App Signups
              </strong>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                No complex passwords or wallet topups. Manage renewals, menu queries, and feedback directly on WhatsApp with Uncle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
