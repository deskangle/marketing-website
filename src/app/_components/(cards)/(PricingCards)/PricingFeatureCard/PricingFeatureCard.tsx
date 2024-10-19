import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PricingPayCard } from "@/app/_components";
import "./PricingFeatureCard.scss";

const featureList = [
  "Access to Dedicated Support",
  "Regular Security Monitoring",
  "Monthly Performance Reports",
  "Bug Fixes and Minor Updates",
  "Basic SEO Maintenance",
  "Cross-Browser Testing",
  "Uptime Monitoring",
];

const PricingFeatureCard = () => {
  return (
    <div className="pricing-feature-wrapper">
      <div className="pricing-feature-card">
        <div className="title-text">
          Each <br /> plan contains
        </div>

        <div className="feature-list">
          {featureList.map((feature, index) => (
            <div key={index} className="feature">
              <div className="marker">
                <CheckIcon className="w-4 h-4 text-black-drop" />
              </div>

              <div className="feature-text">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING PAY CARD */}
      <PricingPayCard />
    </div>
  );
};

export default PricingFeatureCard;
