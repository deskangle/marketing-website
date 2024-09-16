import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./CTASection.scss";

const CTASection = () => {
  return (
    <div className="cta-section">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <div className="primary-text">
            Use the cheat code to get <br /> started quickly and get results
          </div>

          <div className="secondary-text">
            Get an almost in-house experience with a dedicated remote team
          </div>
        </div>

        {/* CARD ITEMS */}
        <div className="card-items">
          <div className="card-item card-item-one">
            {/* TOP AREA */}
            <div className="top-area"></div>

            {/* BASE AREA */}
            <div className="base-area">
              <div className="text">Pick a plan</div>

              <div className="btn-icon">
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="card-item card-item-two">
            {/* TOP AREA */}
            <div className="top-area"></div>

            {/* BASE AREA */}
            <div className="base-area">
              <div className="text">Book a call</div>

              <div className="btn-icon">
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* COPY TEXT */}
        <div className="copy-text">
          Save time and $ on hiring someone, interviews, and trying to find
          great work for peanuts. Try Undercat and get first results in 2-3
          business days.
        </div>
      </div>
    </div>
  );
};

export default CTASection;
