"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FooterProps {
  onOpenOrderModal: () => void;
  onOpenFlyerModal: () => void;
}

export default function Footer({ onOpenOrderModal, onOpenFlyerModal }: FooterProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Patil Mess 100% Pure Vegetarian?",
      a: "Yes, 100% pure vegetarian kitchen. We cook with pure desi ghee, fresh daily dairy paneer, and clean vegetables. No meat or eggs are ever prepared in our premises.",
    },
    {
      q: "How does the monthly tiffin subscription work?",
      a: "Our monthly regular plan includes 26 wholesome meals (Monday to Saturday). You can choose lunch or dinner (or take our 52-meal Full Board for both). Sunday special sweets are complimentary!",
    },
    {
      q: "What if I need to skip or pause my meal when traveling?",
      a: "Just drop us a message on WhatsApp (+91 9172674260) at least 3 hours before cutoff time (10:30 AM for lunch, 6:00 PM for dinner). Your meal count will be paused and extended without any deduction.",
    },
    {
      q: "How is the food delivered? Do I get steel tiffins?",
      a: "Yes! Subscribers can opt for our traditional 3-tier/4-tier stainless steel tiffin dabba exchange system, or leak-proof microwave-safe hygienic containers if preferred for office delivery.",
    },
  ];

  return (
    <footer style={{ background: "var(--bg-dark)", color: "#e8ded8", paddingTop: "70px", paddingBottom: "50px", borderTop: "3px solid var(--color-primary)" }}>
      <div className="container">
        {/* FAQ Section */}
        <div style={{ marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "700" }}>
              Frequently Asked Questions
            </span>
            <h3 style={{ fontSize: "1.8rem", color: "#ffffff", marginTop: "4px" }}>
              Common Tiffin Queries Answered
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-dark-surface)",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      background: "transparent",
                      border: "none",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: "var(--color-gold)", fontSize: "1.2rem" }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 18px 20px", fontSize: "0.88rem", color: "#bdaea4", lineHeight: 1.6, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Main Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "48px", marginBottom: "40px" }} className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{ width: "48px", height: "48px", position: "relative", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--color-gold)" }}>
                <Image src="/images/brand-logo.jpg" alt="Patil Mess Logo" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h4 style={{ fontSize: "1.3rem", color: "#ffffff", margin: 0 }}>Patil Mess Tiffin Service</h4>
                <span style={{ fontSize: "0.78rem", color: "var(--color-gold)" }}>पाटील मेस • अस्सल घरगुती चव</span>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#bdaea4", lineHeight: 1.6, marginBottom: "18px" }}>
              Providing authentic, wholesome, home-cooked Maharashtrian and North Indian daily tiffin meals to students, corporate employees, and families across Thane West.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={onOpenFlyerModal} className="btn btn-secondary" style={{ padding: "8px 14px", fontSize: "0.82rem" }}>
                📄 Official Flyer
              </button>
              <button onClick={onOpenOrderModal} className="btn btn-whatsapp" style={{ padding: "8px 14px", fontSize: "0.82rem" }}>
                💬 Quick Order
              </button>
            </div>
          </div>

          {/* Contact Numbers directly from flyer */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "#ffffff", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
              Direct Contact &amp; Orders
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
              <div>
                <span style={{ color: "#9c8e84", fontSize: "0.75rem", display: "block" }}>Primary Order Line:</span>
                <a href="tel:9172674260" style={{ color: "#ffffff", fontWeight: "700", textDecoration: "none" }}>
                  📞 +91 9172674260
                </a>
              </div>
              <div>
                <span style={{ color: "#9c8e84", fontSize: "0.75rem", display: "block" }}>Alternate Line:</span>
                <a href="tel:9769539150" style={{ color: "#ffffff", fontWeight: "700", textDecoration: "none" }}>
                  📞 +91 9769539150
                </a>
              </div>
              <div>
                <span style={{ color: "#9c8e84", fontSize: "0.75rem", display: "block" }}>Kitchen &amp; Mess Address:</span>
                <span style={{ color: "#e8ded8", lineHeight: 1.4, display: "block" }}>
                  Patil Mess, Shastri Nagar, Thane West, Maharashtra 400606
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "#ffffff", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
              Kitchen Timings
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "#bdaea4" }}>
              <div>
                <strong style={{ color: "#ffffff", display: "block" }}>Morning Lunch Window:</strong>
                <span>Cooking: 9:00 AM - 11:30 AM</span>
                <br />
                <span>Delivery: 11:45 AM - 1:30 PM</span>
              </div>
              <div>
                <strong style={{ color: "#ffffff", display: "block" }}>Evening Dinner Window:</strong>
                <span>Cooking: 5:30 PM - 7:30 PM</span>
                <br />
                <span>Delivery: 7:30 PM - 9:30 PM</span>
              </div>
              <div style={{ background: "rgba(201, 139, 44, 0.15)", padding: "8px 12px", borderRadius: "8px", border: "1px solid rgba(201, 139, 44, 0.3)", color: "var(--color-gold)", fontSize: "0.78rem" }}>
                ✓ Delivering Monday through Sunday
              </div>
            </div>
          </div>
        </div>

        {/* Inspo-Style Centered Navigation & Social Strip */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px", paddingBottom: "10px", textAlign: "center" }}>
          {/* Social Icons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
            {["WhatsApp", "Instagram", "Facebook", "Call"].map((soc) => (
              <a
                key={soc}
                href={soc === "WhatsApp" ? "https://wa.me/919172674260" : soc === "Call" ? "tel:9172674260" : "#"}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {soc === "WhatsApp" ? "💬" : soc === "Instagram" ? "📷" : soc === "Facebook" ? "f" : "📞"}
              </a>
            ))}
          </div>

          {/* Quick Footer Links matching inspo.jpg */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "18px", fontSize: "0.85rem", color: "#bdaea4", marginBottom: "18px" }}>
            <a href="#" style={{ color: "#ffffff", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <a href="#featured-menu" style={{ color: "#ffffff", textDecoration: "none" }}>Featured</a>
            <span>/</span>
            <a href="#today-menu" style={{ color: "#ffffff", textDecoration: "none" }}>Daily Thali</a>
            <span>/</span>
            <a href="#weekly-schedule" style={{ color: "#ffffff", textDecoration: "none" }}>7-Day Menu</a>
            <span>/</span>
            <a href="#meal-plans" style={{ color: "#ffffff", textDecoration: "none" }}>Monthly Plans</a>
            <span>/</span>
            <a href="#delivery-zones" style={{ color: "#ffffff", textDecoration: "none" }}>Thane Delivery</a>
          </div>

          <p style={{ fontSize: "0.78rem", color: "#8a7e75" }}>
            Copyright © 2018-2026 Patil Mess Tiffin Service. Shastri Nagar, Thane West. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}
