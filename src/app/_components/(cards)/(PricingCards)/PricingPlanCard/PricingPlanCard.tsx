"use client";

import React from "react";
import { IPricingType } from "@/app/_types";
import { getSelectedPlanAmount } from "@/app/_utils";
import "./PricingPlanCard.scss";

type PricingPlanCardType = {
  pricing: IPricingType;
  isLocalCurrency: boolean;
  selectedPeriod: string;
  updatePlan: (type: string) => void;
};

const PricingPlanCard = ({
  pricing,
  isLocalCurrency,
  selectedPeriod,
  updatePlan,
}: PricingPlanCardType) => {
  const getSelectedAmount = () =>
    getSelectedPlanAmount(pricing, selectedPeriod, isLocalCurrency);

  return (
    <div
      className={`pricing-plan-card ${pricing.isSelected && "is-selected"}`}
      onClick={() => updatePlan(pricing.type)}
    >
      <div className="plan-toggler"></div>

      <div className="plan-title">{pricing.type}</div>

      <ul className="plan-features">
        {pricing.features.map((feature: string, index: number) => (
          <li className="feature" key={index}>
            {feature}
          </li>
        ))}
      </ul>

      <div className="plan-price">{getSelectedAmount()}</div>
    </div>
  );
};

export default PricingPlanCard;
