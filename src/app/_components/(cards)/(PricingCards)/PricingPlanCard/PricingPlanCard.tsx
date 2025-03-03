"use client";

import React from "react";
import { IPricingType } from "@/app/_types";
import { getSelectedPlanAmount } from "@/app/_utils";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
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
      {/* <div className="plan-toggler"></div> */}

      <div className="plan-title">{pricing.type}</div>

      <div className="plan-description">{pricing.description}</div>

      {/* AMOUNT PER MONTH */}
      <div className="plan-amount">
        <div className="plan-amount-text">{getSelectedAmount()}</div>
        <div className="plan-amount-meta"> per month</div>
      </div>

      <div className="description-title">{`What's Included:`}</div>

      <ul className="plan-features">
        {pricing.features.map((feature: string, index: number) => (
          <li className="feature" key={index}>
            {feature}
          </li>
        ))}
      </ul>

      <div className="plan-action">
        <Link href="" className="btn btn-primary-green">
          <div className="btn-text">Book a slot</div>{" "}
          <div className="btn-icon">
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default PricingPlanCard;
