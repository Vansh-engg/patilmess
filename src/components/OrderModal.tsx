"use client";

import React, { useState } from "react";
import { THANE_LOCALITIES } from "@/data/menuData";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export default function OrderModal({ isOpen, onClose, defaultPlan = "Single Trial Dabba (₹90)" }: OrderModalProps) {
  const [plan, setPlan] = useState(defaultPlan);
  const [slot, setSlot] = useState("Lunch (11:45 AM - 1:30 PM)");
  const [thaliType, setThaliType] = useState("Regular Ghar Ki Thali (4 Ghee Phulkas + Sabzi + Dal + Rice + Salad)");
  const [extraPhulkas, setExtraPhulkas] = useState(false);
  const [extraCurd, setExtraCurd] = useState(false);
  const [extraThechaPapad, setExtraThechaPapad] = useState(false);
  const [extraSweet, setExtraSweet] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [locality, setLocality] = useState("Shastri Nagar, Thane West");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  // Calculate estimated total
  let basePrice = 90;
  if (plan.includes("Weekly")) basePrice = 520;
  else if (plan.includes("Monthly Regular")) basePrice = 2250;
  else if (plan.includes("Monthly Full")) basePrice = 4350;
  else if (thaliType.includes("Paneer")) basePrice = 130;

  let addOnTotal = 0;
  if (extraPhulkas) addOnTotal += 15;
  if (extraCurd) addOnTotal += 20;
  if (extraThechaPapad) addOnTotal += 15;
  if (extraSweet) addOnTotal += 25;

  const grandTotal = basePrice + addOnTotal;

  const constructWhatsAppMessage = () => {
    let text = `*Namaste Patil Mess!* 🍲\n`;
    text += `I would like to order a tiffin service from your website.\n\n`;
    text += `📋 *ORDER DETAILS*\n`;
    text += `• *Plan:* ${plan}\n`;
    text += `• *Delivery Slot:* ${slot}\n`;
    text += `• *Thali Choice:* ${thaliType}\n`;

    const addOnsList = [];
    if (extraPhulkas) addOnsList.push("Extra 2 Phulkas (+₹15)");
    if (extraCurd) addOnsList.push("Fresh Curd / Dahi (+₹20)");
    if (extraThechaPapad) addOnsList.push("Thecha & Papad (+₹15)");
    if (extraSweet) addOnsList.push("Sweet / Gulab Jamun (+₹25)");

    if (addOnsList.length > 0) {
      text += `• *Add-ons:* ${addOnsList.join(", ")}\n`;
    }

    text += `• *Estimated Amount:* ₹${grandTotal}\n\n`;
    text += `📍 *DELIVERY ADDRESS (Thane West)*\n`;
    text += `• *Locality:* ${locality}\n`;
    text += `• *Full Address:* ${address.trim() ? address.trim() : "Will share location / flat details"}\n`;
    if (customerName.trim()) text += `• *Name:* ${customerName.trim()}\n`;
    if (customerPhone.trim()) text += `• *Contact Phone:* ${customerPhone.trim()}\n`;
    if (notes.trim()) text += `• *Special Instruction:* ${notes.trim()}\n\n`;

    text += `Please confirm my order and share UPI / QR code for payment. Dhanyawad! 🙏`;
    return text;
  };

  const handleSendWhatsApp = (phoneNum: string) => {
    const message = constructWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/91${phoneNum}?text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(22, 17, 14, 0.75)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "680px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          padding: "28px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          position: "relative",
          border: "1px solid var(--border-gold)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background: "#f3ede3",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b5d54",
          }}
          aria-label="Close Order Modal"
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ borderBottom: "1px solid #f0eae1", paddingBottom: "16px", marginBottom: "20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#e8f5ec", color: "#1b7a42", padding: "4px 10px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: "700", marginBottom: "8px" }}>
            <span className="pulse-dot"></span>
            Direct Kitchen WhatsApp Link
          </div>
          <h2 style={{ fontSize: "1.5rem", color: "var(--color-primary-dark)", lineHeight: 1.2 }}>
            Instant Tiffin Order Generator
          </h2>
          <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Customize your ghar ka dabba below. It creates a neat WhatsApp message ready to send with one click!
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSendWhatsApp("9172674260"); }}>
          {/* Step 1: Meal Plan Selection */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "6px" }}>
              1. Choose Tiffin Plan / Frequency:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px" }}>
              {[
                { title: "Single Trial", price: "₹90 / meal", val: "Single Trial Dabba (₹90)" },
                { title: "6-Day Pass", price: "₹520 total", val: "Weekly Work Pass (6 Days - ₹520)" },
                { title: "Monthly Regular", price: "₹2,250 (26 days)", val: "Monthly Regular (26 Meals - ₹2,250)" },
                { title: "Full Board (L+D)", price: "₹4,350 (52 meals)", val: "Monthly Full Board (52 Meals - ₹4,350)" },
              ].map((item) => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => setPlan(item.val)}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: plan === item.val ? "2px solid var(--color-primary)" : "1px solid #e5ded5",
                    background: plan === item.val ? "var(--color-amber-light)" : "#faf8f5",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontWeight: "700", fontSize: "0.85rem", color: plan === item.val ? "var(--color-primary-dark)" : "#333" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#666", marginTop: "2px" }}>{item.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Delivery Slot */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "6px" }}>
              2. Delivery Slot in Thane West:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { label: "Lunch (11:45 AM - 1:30 PM)", sub: "Order before 10:30 AM" },
                { label: "Dinner (7:30 PM - 9:30 PM)", sub: "Order before 6:00 PM" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.label}
                  onClick={() => setSlot(s.label)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: slot === s.label ? "2px solid var(--color-primary)" : "1px solid #e5ded5",
                    background: slot === s.label ? "#fef3e2" : "#ffffff",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: "700", color: slot === s.label ? "var(--color-primary-dark)" : "#333" }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#777" }}>{s.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Thali Style */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "6px" }}>
              3. Thali Preparation Choice:
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                {
                  id: "regular",
                  title: "Classic Ghar Ki Thali (₹90)",
                  desc: "4 Soft Desi Ghee Phulkas + Sabzi of the Day + Dal Tadka + Steamed Kolam Rice + Fresh Salad & Pickle",
                },
                {
                  id: "paneer",
                  title: "Special Paneer Feast Thali (₹130)",
                  desc: "4 Ghee Phulkas + Shahi / Kadai Paneer + Dal Tadka + Fragrant Jeera Rice + Papad + Sweet of the Day",
                },
                {
                  id: "diet",
                  title: "Light Diet / Student Dabba (₹90)",
                  desc: "3 Plain Phulkas (no oil/ghee) + Yellow Moong Dal + Boiled/Sprouts Sabzi + Steamed Rice + Cucumber Salad",
                },
              ].map((thali) => (
                <label
                  key={thali.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: thaliType.startsWith(thali.title.slice(0, 15)) ? "2px solid var(--color-primary)" : "1px solid #e5ded5",
                    background: thaliType.startsWith(thali.title.slice(0, 15)) ? "#fef7ed" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="thaliType"
                    checked={thaliType.startsWith(thali.title.slice(0, 15))}
                    onChange={() => setThaliType(`${thali.title} (${thali.desc})`)}
                    style={{ marginTop: "4px" }}
                  />
                  <div>
                    <strong style={{ fontSize: "0.88rem", color: "var(--color-primary-dark)" }}>{thali.title}</strong>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>{thali.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Step 4: Add-ons */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "6px" }}>
              4. Delicious Homestyle Add-ons:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", background: "#fbf9f5", padding: "8px 12px", borderRadius: "8px", border: "1px solid #ebdccc", cursor: "pointer" }}>
                <input type="checkbox" checked={extraPhulkas} onChange={(e) => setExtraPhulkas(e.target.checked)} />
                <span>Extra 2 Phulkas (+₹15)</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", background: "#fbf9f5", padding: "8px 12px", borderRadius: "8px", border: "1px solid #ebdccc", cursor: "pointer" }}>
                <input type="checkbox" checked={extraCurd} onChange={(e) => setExtraCurd(e.target.checked)} />
                <span>Fresh Curd / Dahi (+₹20)</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", background: "#fbf9f5", padding: "8px 12px", borderRadius: "8px", border: "1px solid #ebdccc", cursor: "pointer" }}>
                <input type="checkbox" checked={extraThechaPapad} onChange={(e) => setExtraThechaPapad(e.target.checked)} />
                <span>Thecha & Roasted Papad (+₹15)</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", background: "#fbf9f5", padding: "8px 12px", borderRadius: "8px", border: "1px solid #ebdccc", cursor: "pointer" }}>
                <input type="checkbox" checked={extraSweet} onChange={(e) => setExtraSweet(e.target.checked)} />
                <span>Sweet / Gulab Jamun (+₹25)</span>
              </label>
            </div>
          </div>

          {/* Step 5: Thane Delivery Info */}
          <div style={{ marginBottom: "20px", background: "#fdf8f2", padding: "14px", borderRadius: "12px", border: "1px solid #eedec7" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", color: "var(--color-primary-dark)", marginBottom: "8px" }}>
              5. Delivery Address in Thane West:
            </label>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <div>
                <label style={{ fontSize: "0.75rem", color: "#555", fontWeight: "600", display: "block", marginBottom: "3px" }}>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #d5c7b7", fontSize: "0.85rem" }}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.75rem", color: "#555", fontWeight: "600", display: "block", marginBottom: "3px" }}>WhatsApp Mobile No.</label>
                <input
                  type="tel"
                  placeholder="e.g. 9820xxxxxx"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #d5c7b7", fontSize: "0.85rem" }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "0.75rem", color: "#555", fontWeight: "600", display: "block", marginBottom: "3px" }}>Select Locality (Thane West)</label>
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                style={{ width: "100%", padding: "9px 12px", borderRadius: "6px", border: "1px solid #d5c7b7", fontSize: "0.85rem", background: "#fff" }}
              >
                {THANE_LOCALITIES.map((loc) => (
                  <option key={loc.name} value={loc.name}>
                    {loc.name} (Free Delivery • {loc.eta})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "0.75rem", color: "#555", fontWeight: "600", display: "block", marginBottom: "3px" }}>Flat No., Building / Society Name & Landmark</label>
              <input
                type="text"
                placeholder="e.g. Flat 302, Sai Prasad CHS, Near Gokhale Road"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #d5c7b7", fontSize: "0.85rem" }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.75rem", color: "#555", fontWeight: "600", display: "block", marginBottom: "3px" }}>Special Request (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Less spicy, Extra lemon, Ring doorbell twice"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #d5c7b7", fontSize: "0.85rem" }}
              />
            </div>
          </div>

          {/* Pricing Summary */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8f4ee", padding: "12px 18px", borderRadius: "10px", marginBottom: "20px" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Calculated Total</span>
              <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--color-primary-dark)" }}>
                ₹{grandTotal} <span style={{ fontSize: "0.75rem", fontWeight: "400", color: "#555" }}>({plan.split("(")[0]})</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "0.75rem", color: "#1b7a42", background: "#e8f5ec", padding: "3px 8px", borderRadius: "12px", fontWeight: "700" }}>
                ✓ Free Doorstep Delivery
              </span>
              <p style={{ fontSize: "0.72rem", color: "#888", marginTop: "2px" }}>Pay after confirmation via UPI</p>
            </div>
          </div>

          {/* WhatsApp Submit Action */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="button"
              onClick={() => handleSendWhatsApp("9172674260")}
              className="btn btn-whatsapp"
              style={{ width: "100%", padding: "14px", fontSize: "1rem", fontWeight: "700", gap: "10px" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.574 1.777.822 2.806.822 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.765-5.767-5.765zm3.374 8.211c-.146.415-.851.785-1.185.835-.333.05-.72.062-2.146-.532-1.724-.718-2.834-2.483-2.92-2.597-.087-.114-.698-.928-.698-1.77 0-.842.441-1.256.598-1.428.157-.172.343-.215.457-.215.114 0 .229.002.329.007.105.006.246-.04.385.294.146.353.499 1.222.543 1.311.044.089.073.193.015.308-.058.115-.088.187-.174.288-.088.102-.185.227-.264.305-.089.088-.182.184-.078.362.103.178.461.761.989 1.231.678.604 1.25.791 1.428.879.178.088.283.073.388-.048.105-.12.449-.523.568-.702.119-.179.238-.149.398-.089.16.059 1.019.48 1.194.568.175.088.292.132.335.206.044.073.044.427-.102.842z"/>
              </svg>
              Send Order via WhatsApp to 9172674260
            </button>

            <button
              type="button"
              onClick={() => handleSendWhatsApp("9769539150")}
              style={{
                background: "transparent",
                border: "none",
                color: "#6b5d54",
                fontSize: "0.82rem",
                textDecoration: "underline",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              Or send to alternate WhatsApp number: +91 9769539150
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
