"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface FeaturedCardsProps {
  onOrderDish: (dishName: string) => void;
}

export default function FeaturedCardsSection({ onOrderDish }: FeaturedCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "jeera-chawal",
      scriptTitle: "Jeera",
      mainTitle: "Chawal",
      price: 180,
      originalPrice: 200,
      rating: 4.5,
      bgColor: "var(--inspo-green)",
      image: "/images/card-jeera-chawal.png",
      description: "Aromatic, soft, and tender chunks of lamb layered with rice infused with the flavors of spices...",
    },
    {
      id: "kadai-chicken",
      scriptTitle: "Kadai",
      mainTitle: "Chicken",
      price: 220,
      originalPrice: 260,
      rating: 4.5,
      bgColor: "var(--inspo-ochre)",
      image: "/images/card-kadai-paneer.png",
      description: "Aromatic, soft, and tender chunks of lamb layered with rice infused with the flavors of spices...",
    },
    {
      id: "palak-paneer",
      scriptTitle: "Palak",
      mainTitle: "Paneer",
      price: 200,
      originalPrice: 220,
      rating: 4.5,
      bgColor: "var(--inspo-green)",
      image: "/images/card-palak-paneer.png",
      description: "Aromatic, soft, and tender chunks of lamb layered with rice infused with the flavors of spices...",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -330 : 330;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="featured-menu" style={{ background: "#faf7f2", paddingTop: "40px", paddingBottom: "70px", position: "relative" }}>
      <div className="container" style={{ position: "relative", maxWidth: "1140px" }}>
        
        {/* Carousel Container */}
        <div style={{ position: "relative" }}>
          
          {/* Left Arrow Button matching inspo.jpg */}
          <button
            onClick={() => handleScroll("left")}
            style={{
              position: "absolute",
              top: "52%",
              left: "-25px",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #e2dbd0",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b5d54",
              fontSize: "1.2rem",
              transition: "all 0.2s ease",
            }}
            className="carousel-btn left-arrow"
            aria-label="Previous dishes"
          >
            ‹
          </button>

          {/* Right Arrow Button matching inspo.jpg */}
          <button
            onClick={() => handleScroll("right")}
            style={{
              position: "absolute",
              top: "52%",
              right: "-25px",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #e2dbd0",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b5d54",
              fontSize: "1.2rem",
              transition: "all 0.2s ease",
            }}
            className="carousel-btn right-arrow"
            aria-label="Next dishes"
          >
            ›
          </button>

          {/* Cards Track matching inspo.jpg layout */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "26px",
              overflowX: "auto",
              paddingTop: "65px", // Room for the overhanging container
              paddingBottom: "24px",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
            }}
            className="inspo-cards-wrapper"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  flex: "0 0 320px",
                  scrollSnapAlign: "center",
                  position: "relative",
                  borderRadius: "28px",
                  background: card.bgColor,
                  color: "#ffffff",
                  padding: "95px 24px 26px 24px",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease",
                }}
                className="inspo-dish-card"
              >
                {/* Overhanging Angled Black Food Container matching inspo.jpg */}
                <div
                  style={{
                    position: "absolute",
                    top: "-60px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(-12deg)",
                    width: "220px",
                    height: "165px",
                    filter: "drop-shadow(0 16px 20px rgba(0,0,0,0.38))",
                    zIndex: 2,
                    transition: "transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                  className="overhanging-container"
                >
                  <Image
                    src={card.image}
                    alt={card.mainTitle}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>

                {/* Overlapping Circular Price Badge matching inspo.jpg */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "16px",
                    background: "#ffffff",
                    borderRadius: "50%",
                    width: "65px",
                    height: "65px",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
                    zIndex: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "2px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <span style={{ fontSize: "0.6rem", fontWeight: "700", color: "#8a7e75", textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1 }}>
                    PRICE
                  </span>
                  <span style={{ fontSize: "1.05rem", fontWeight: "900", color: "#221813", lineHeight: 1.1, marginTop: "2px" }}>
                    ₹{card.price}
                  </span>
                  <span style={{ fontSize: "0.68rem", color: "#9c8e84", textDecoration: "line-through", lineHeight: 1 }}>
                    ₹{card.originalPrice}
                  </span>
                </div>

                {/* Card Details */}
                <div>
                  {/* Script Cursive Accent matching inspo.jpg */}
                  <div
                    className="font-script"
                    style={{
                      fontSize: "2.4rem",
                      lineHeight: 1,
                      color: "#ffffff",
                      opacity: 0.95,
                      marginBottom: "-4px",
                      transform: "rotate(-2deg)",
                    }}
                  >
                    {card.scriptTitle}
                  </div>

                  {/* Bold Display Title matching inspo.jpg */}
                  <h3
                    style={{
                      fontSize: "1.9rem",
                      fontWeight: "800",
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                    }}
                  >
                    {card.mainTitle}
                  </h3>

                  {/* Star Rating strip matching inspo.jpg */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <div style={{ color: "#ffd56b", fontSize: "0.95rem", letterSpacing: "1px" }}>
                      ★★★★★
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#ffffff" }}>
                      {card.rating}
                    </span>
                  </div>

                  {/* Description matching inspo.jpg */}
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.55, color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>
                    {card.description}
                  </p>
                </div>

                {/* Dark Capsule Button matching inspo.jpg */}
                <button
                  onClick={() => onOrderDish(`${card.mainTitle} (₹${card.price})`)}
                  style={{
                    background: "#221813",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "11px 22px",
                    fontSize: "0.82rem",
                    fontWeight: "800",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                    transition: "all 0.2s ease",
                    width: "100%",
                    textTransform: "uppercase",
                  }}
                  className="btn-card-order-dark"
                >
                  ORDER NOW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div style={{ textAlign: "center", marginTop: "12px", fontSize: "0.78rem", color: "#8a7e75" }} className="mobile-swipe-guide">
          ← Swipe to explore dishes →
        </div>
      </div>

      <style jsx>{`
        .inspo-cards-wrapper::-webkit-scrollbar {
          display: none;
        }
        .inspo-dish-card:hover {
          transform: translateY(-6px);
        }
        .inspo-dish-card:hover .overhanging-container {
          transform: translateX(-50%) rotate(-8deg) scale(1.04);
        }
        .btn-card-order-dark:hover {
          background: #3a2b22;
          transform: scale(1.02);
        }
        .carousel-btn:hover {
          background: #faf7f2;
          border-color: #c98b2c;
          color: #221813;
        }
        @media (min-width: 1040px) {
          .inspo-cards-wrapper {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 28px !important;
            overflow-x: visible !important;
          }
          .inspo-dish-card {
            flex: unset !important;
          }
          .carousel-btn {
            display: none !important;
          }
          .mobile-swipe-guide {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .inspo-dish-card {
            flex: 0 0 275px !important;
            padding: 85px 20px 22px 20px !important;
          }
          .overhanging-container {
            width: 185px !important;
            height: 145px !important;
            top: -48px !important;
          }
        }
      `}</style>
    </section>
  );
}
