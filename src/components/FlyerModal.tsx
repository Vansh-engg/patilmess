"use client";

import React from "react";
import Image from "next/image";

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export default function FlyerModal({ isOpen, onClose, onOrderNow }: FlyerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(18, 14, 11, 0.85)",
        backdropFilter: "blur(8px)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
          position: "relative",
          border: "2px solid var(--color-gold)",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #ebdccc", background: "#fbf8f4" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", color: "var(--color-primary-dark)", margin: 0 }}>
              Original Patil Mess Menu Flyer
            </h3>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0 0" }}>
              Official flyer distributed in Shastri Nagar, Thane West
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#ebdccc",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#333",
            }}
          >
            ✕
          </button>
        </div>

        {/* Flyer Image Container */}
        <div style={{ position: "relative", width: "100%", height: "620px", background: "#f5f0e8" }}>
          <Image
            src="/images/original-flyer.jpg"
            alt="Original Patil Mess Tiffin Service Pamphlet"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Action bar below flyer */}
        <div style={{ padding: "16px 20px", display: "flex", gap: "12px", background: "#fff", borderTop: "1px solid #ebdccc" }}>
          <button
            onClick={() => { onClose(); onOrderNow(); }}
            className="btn btn-whatsapp"
            style={{ flex: 1, padding: "12px" }}
          >
            💬 Order This Menu on WhatsApp
          </button>
          <a
            href="tel:9172674260"
            className="btn btn-primary"
            style={{ padding: "12px 20px" }}
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
