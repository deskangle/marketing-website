import React from "react";
import {
  PricingAreaCard,
  PricingSlotCard,
  PricingFeatureCard,
} from "@/app/_components";
import "./PricingSection.scss";

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <div className="primary-text">Solutions at competitive rates</div>

          <div className="secondary-text">
            No extra hassle. No managing employees. No headaches.
          </div>
        </div>

        {/* PRICING DISPLAY AREA */}
        <div className="pricing-area">
          <div className="pricing-area--left">
            <PricingAreaCard />
          </div>

          <div className="pricing-area--right">
            <PricingSlotCard />
            <PricingFeatureCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
