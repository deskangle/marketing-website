import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PricingPayCard } from "@/app/_components";
import "./PricingFeatureCard.scss";

const PricingFeatureCard = () => {
  return (
    <div className="pricing-feature-wrapper">
      <div className="pricing-feature-card">
        <div className="title-text">
          Each <br /> plan contains
        </div>

        <div className="feature-list">
          <div className="feature">
            <div className="marker">
              <CheckIcon className="w-4 h-4 text-black-drop" />
            </div>

            <div className="feature-text">2-3 business days delivery time</div>
          </div>

          <div className="feature">
            <div className="marker">
              <CheckIcon className="w-4 h-4 text-black-drop" />
            </div>

            <div className="feature-text">Whole team input</div>
          </div>

          <div className="feature">
            <div className="marker">
              <CheckIcon className="w-4 h-4 text-black-drop" />
            </div>

            <div className="feature-text">Unlimited brands</div>
          </div>

          <div className="feature">
            <div className="marker">
              <CheckIcon className="w-4 h-4 text-black-drop" />
            </div>

            <div className="feature-text">Unlimited revisions</div>
          </div>
        </div>
      </div>

      {/* PRICING PAY CARD */}
      <PricingPayCard />
    </div>
  );
};

export default PricingFeatureCard;
