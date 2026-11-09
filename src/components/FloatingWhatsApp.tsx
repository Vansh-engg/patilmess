"use client";

import React, { useState } from "react";

interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}

export default function FloatingWhatsApp({ onOpenOrderModal }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop & Tablet Floating Widget */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9000,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
        className="floating-widget"
      >
        {showTooltip && (
          <div
            style={{
              background: "#ffffff",
              padding: "10px 16px",
              borderRadius: "14px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              border: "1px solid var(--border-gold)",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--text-main)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative",
            }}
          >
            <span>💬 Craving hot homestyle food in Thane?</span>
            <button
              onClick={() => setShowTooltip(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#999",
                cursor: "pointer",
                fontSize: "0.9rem",
                marginLeft: "4px",
              }}
            >
              ✕
            </button>
          </div>
        )}

        <button
          onClick={onOpenOrderModal}
          style={{
            width: "62px",
            height: "62px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            color: "#ffffff",
            border: "none",
            boxShadow: "0 10px 30px rgba(37, 211, 102, 0.45)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.25s ease",
            position: "relative",
          }}
          aria-label="Order Tiffin on WhatsApp"
          className="wa-pulse-btn"
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.574 1.777.822 2.806.822 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.765-5.767-5.765zm3.374 8.211c-.146.415-.851.785-1.185.835-.333.05-.72.062-2.146-.532-1.724-.718-2.834-2.483-2.92-2.597-.087-.114-.698-.928-.698-1.77 0-.842.441-1.256.598-1.428.157-.172.343-.215.457-.215.114 0 .229.002.329.007.105.006.246-.04.385.294.146.353.499 1.222.543 1.311.044.089.073.193.015.308-.058.115-.088.187-.174.288-.088.102-.185.227-.264.305-.089.088-.182.184-.078.362.103.178.461.761.989 1.231.678.604 1.25.791 1.428.879.178.088.283.073.388-.048.105-.12.449-.523.568-.702.119-.179.238-.149.398-.089.16.059 1.019.48 1.194.568.175.088.292.132.335.206.044.073.044.427-.102.842z"/>
          </svg>
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#ff3b30",
              border: "2px solid #fff",
            }}
          />
        </button>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border-gold)",
          padding: "10px 16px",
          zIndex: 8999,
          display: "none",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.1)",
        }}
        className="mobile-sticky-bar"
      >
        <a
          href="tel:9172674260"
          className="btn btn-secondary"
          style={{
            flex: 1,
            padding: "12px",
            fontSize: "0.88rem",
            fontWeight: "700",
            gap: "6px",
          }}
        >
          📞 Call Patil Mess
        </a>

        <button
          onClick={onOpenOrderModal}
          className="btn btn-whatsapp"
          style={{
            flex: 1.3,
            padding: "12px",
            fontSize: "0.88rem",
            fontWeight: "700",
            gap: "6px",
          }}
        >
          💬 Order on WhatsApp
        </button>
      </div>

      <style jsx>{`
        .wa-pulse-btn:hover {
          transform: scale(1.08);
        }
        @media (max-width: 768px) {
          .floating-widget {
            display: none !important;
          }
          .mobile-sticky-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
