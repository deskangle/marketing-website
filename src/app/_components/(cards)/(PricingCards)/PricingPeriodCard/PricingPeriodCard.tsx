import React from "react";
import "./PricingPeriodCard.scss";

const PricingPeriodCard = ({
  selectedPeriod,
  updatePeriod,
}: {
  selectedPeriod: string;
  updatePeriod: (type: string) => void;
}) => {
  return (
    <div className="pricing-period-block">
      <div
        className={`period-block ${
          selectedPeriod === "monthly" && "period-block-active"
        }`}
        onClick={() => updatePeriod("monthly")}
      >
        Monthly
      </div>
      
      <div
        className={`period-block ${
          selectedPeriod === "quarterly" && "period-block-active"
        }`}
        onClick={() => updatePeriod("quarterly")}
      >
        Quarterly
      </div>
    </div>
  );
};

export default PricingPeriodCard;
