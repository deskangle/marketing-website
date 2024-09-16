"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PricingPeriodCard, PricingPlanCard } from "@/app/_components";
import { IPricingType } from "@/app/_types";
import { useAppStore } from "@/app/_store";
import "./PricingAreaCard.scss";

const PricingAreaCard = () => {
  const {
    pricingList,
    isLocalCurrency,
    selectedPeriod,
    updatePricingList,
    updateSelectedPeriod,
  } = useAppStore();

  const updateSelectedPlan = (type: string) => {
    const updatedPlan = pricingList.map((plan: IPricingType) => ({
      ...plan,
      isSelected: plan.type === type ? true : false,
    }));

    updatePricingList(updatedPlan);
  };

  const updatePricingPeriod = (period: string) => {
    updateSelectedPeriod(period);
  };

  return (
    <div className="pricing-area-card">
      <div className="top-row">
        <div className="top-row--left">
          <div className="title-text">
            Choose the relevant plan to build and grow your business
          </div>

          <div className="action-row">
            <span>Can’t decide?</span>{" "}
            <Link href="">Book a 15-minute call</Link>
          </div>
        </div>

        <div className="top-row--right">
          <PricingPeriodCard
            selectedPeriod={selectedPeriod}
            updatePeriod={updatePricingPeriod}
          />
        </div>
      </div>

      {/* PRICING PLANS */}
      <div className="pricing-plans">
        {pricingList.map((pricing: IPricingType, index: number) => (
          <PricingPlanCard
            key={index}
            pricing={pricing}
            isLocalCurrency={isLocalCurrency}
            selectedPeriod={selectedPeriod}
            updatePlan={updateSelectedPlan}
          />
        ))}
      </div>

      {/* CUSTOM PRICING */}
      <div className="custom-pricing">
        <div className="primary-text">Want a custom package?</div>
        <div className="secondary-text">Bespoke pricing to your needs</div>

        <button className="btn btn-secondary">
          <div className="btn-text">Book a Session</div>{" "}
          <div className="btn-icon">
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

export default PricingAreaCard;
