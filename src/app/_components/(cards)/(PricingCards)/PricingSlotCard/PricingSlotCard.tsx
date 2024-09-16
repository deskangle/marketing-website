import React from "react";
import Image from "next/image";
import { FireIcon } from "@/app/_assets";
import "./PricingSlotCard.scss";

const PricingSlotCard = () => {
  return (
    <div className="pricing-slot-card">
      <div className="primary-text">
        <Image src={FireIcon} alt="fire-icon" width={26} height={26} />
        <div className="title">3/8 </div>
        <div className="meta">client slots available</div>
      </div>

      <div className="secondary-text">
        We don't chase after quantity, but rather great results
      </div>
    </div>
  );
};

export default PricingSlotCard;
