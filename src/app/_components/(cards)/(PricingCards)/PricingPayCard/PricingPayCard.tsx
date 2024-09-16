"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "@/app/_store";
import { IPricingType } from "@/app/_types";
import { getSelectedPlanAmount } from "@/app/_utils";
import "./PricingPayCard.scss";

const PricingPayCard = () => {
  const { selectedPricing, isLocalCurrency, selectedPeriod } = useAppStore();

  const getSelectedAmount = () =>
    getSelectedPlanAmount(selectedPricing, selectedPeriod, isLocalCurrency);

  return (
    <div className="pricing-pay-card">
      {/* FORM AREA */}
      <div className="form-area"></div>

      {/* FORM PAYMENT */}
      <div className="form-payment">
        <div className="amount-top">
          <div className="amount">{getSelectedAmount()}</div>
          <div className="meta">Total</div>
        </div>

        <button className="btn btn-secondary">
          <div className="btn-text">Proceed</div>{" "}
          <div className="btn-icon">
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

export default PricingPayCard;
