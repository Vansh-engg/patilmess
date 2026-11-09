"use client";

import React from "react";
import Image from "next/image";

interface InspoHeaderProps {
  onOpenOrderModal: () => void;
  onOpenFlyerModal?: () => void;
}

export default function InspoHeader({ onOpenOrderModal }: InspoHeaderProps) {
  return (
    <header style={{ background: "#ffffff", width: "100%", borderBottom: "none" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px 10px 24px",
        }}
      >
        {/* Left: Chef Logo exactly like inspo.jpg */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: "2px solid #e6a147",
            }}
          >
            <Image
              src="/images/brand-logo.jpg"
              alt="Patil Mess Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Right: Phone number + Blue Pill Button matching inspo.jpg */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Phone with handset icon */}
          <a
            href="tel:9172674260"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "1.05rem",
              fontWeight: "800",
              color: "#221813",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
            className="inspo-phone-link"
          >
            <span style={{ fontSize: "1.1rem" }}>📞</span>
            <span>+91 9172674260</span>
          </a>

          {/* Blue Pill Button with User Icon matching inspo.jpg */}
          <button
            onClick={onOpenOrderModal}
            style={{
              background: "var(--inspo-blue)",
              color: "#ffffff",
              border: "none",
              borderRadius: "9999px",
              padding: "9px 22px",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "0.04em",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 14px rgba(75, 163, 227, 0.4)",
              transition: "transform 0.2s ease, background 0.2s ease",
            }}
            className="btn-inspo-blue"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>LOG IN</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .btn-inspo-blue:hover {
          background: #3991d0;
          transform: translateY(-1px);
        }
        @media (max-width: 600px) {
          .inspo-phone-link span:last-child {
            display: none;
          }
          .inspo-phone-link {
            padding: 8px 10px;
            background: #faf7f2;
            border-radius: 50%;
          }
        }
      `}</style>
    </header>
  );
}
