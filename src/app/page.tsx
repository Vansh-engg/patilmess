"use client";

import React, { useState } from "react";
import InspoHeader from "@/components/InspoHeader";
import HeroSection from "@/components/HeroSection";
import FeaturedCardsSection from "@/components/FeaturedCardsSection";
import InspoFooter from "@/components/InspoFooter";
import TodayMenuShowcase from "@/components/TodayMenuShowcase";
import FullWeeklySchedule from "@/components/FullWeeklySchedule";
import PricingPlans from "@/components/PricingPlans";
import AuthenticPromise from "@/components/AuthenticPromise";
import DeliveryZones from "@/components/DeliveryZones";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import OrderModal from "@/components/OrderModal";
import FlyerModal from "@/components/FlyerModal";

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Single Trial Dabba (₹90)");
  const [showFullMenuDetails, setShowFullMenuDetails] = useState(false);

  const handleOpenOrder = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    setOrderModalOpen(true);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      {/* 1. Inspo Top Header matching inspo.jpg (Chef Logo on Left, Phone + Blue LOG IN pill on Right - NO bulky nav!) */}
      <InspoHeader
        onOpenOrderModal={() => handleOpenOrder()}
        onOpenFlyerModal={() => setFlyerModalOpen(true)}
      />

      {/* 2. Inspo Hero Section matching inspo.jpg (Tray image with bowls & spices on left, cursive script + bold title + rating + olive capsule + buttons on right + wavy divider) */}
      <HeroSection
        onOrderNow={() => handleOpenOrder()}
        onExploreMore={() => {
          const el = document.getElementById("featured-menu");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 3. Inspo 3 Signature Overhanging Container Cards matching inspo.jpg (Jeera Chawal, Kadai Chicken/Paneer, Palak Paneer with circular price badges & arrows) */}
      <FeaturedCardsSection onOrderDish={(dish) => handleOpenOrder(dish)} />

      {/* Optional Toggle to Explore Full Traditional Kitchen Details */}
      <div style={{ background: "#faf7f2", textAlign: "center", paddingBottom: "30px" }}>
        <button
          onClick={() => setShowFullMenuDetails(!showFullMenuDetails)}
          style={{
            background: "#ffffff",
            border: "1.5px solid #dfa55c",
            color: "#965507",
            borderRadius: "9999px",
            padding: "10px 24px",
            fontSize: "0.88rem",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>{showFullMenuDetails ? "▲ Hide Detailed Thane Kitchen Schedule" : "▼ View 7-Day Schedule, Monthly Plans & Thane Delivery Zones"}</span>
        </button>
      </div>

      {/* Full Kitchen Details (Only when toggled or explored) */}
      {showFullMenuDetails && (
        <div className="animate-fade-in">
          {/* Daily Kitchen Menu Showcase */}
          <TodayMenuShowcase onOrderNow={() => handleOpenOrder()} />

          {/* Authentic Homemade Standards (Why it's not commercial hotel food) */}
          <AuthenticPromise />

          {/* Full 7-Day Rotating Schedule (Somvar to Ravivar) */}
          <FullWeeklySchedule onOrderNow={(plan) => handleOpenOrder(plan)} />

          {/* Monthly & Trial Subscription Pricing */}
          <PricingPlans onSelectPlan={(plan) => handleOpenOrder(plan)} />

          {/* Thane West Coverage & Interactive Locality Checker */}
          <DeliveryZones onOrderNow={() => handleOpenOrder()} />

          {/* Customer Reviews from Thane */}
          <Testimonials />
        </div>
      )}

      {/* 4. Inspo Footer matching inspo.jpg (Social Icons + Centered Navigation + Copyright) */}
      <InspoFooter
        onOpenOrderModal={() => handleOpenOrder()}
        onOpenFlyerModal={() => setFlyerModalOpen(true)}
      />

      {/* Floating WhatsApp Action & Mobile Bottom Navigation */}
      <FloatingWhatsApp onOpenOrderModal={() => handleOpenOrder()} />

      {/* Direct WhatsApp Order Generator Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        defaultPlan={selectedPlan}
      />

      {/* Official Verified Flyer Modal */}
      <FlyerModal
        isOpen={flyerModalOpen}
        onClose={() => setFlyerModalOpen(false)}
        onOrderNow={() => handleOpenOrder()}
      />
    </main>
  );
}
