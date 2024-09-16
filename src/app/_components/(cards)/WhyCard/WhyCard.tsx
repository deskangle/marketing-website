"use client";

import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import "./WhyCard.scss";
import { CheckIcon } from "@heroicons/react/24/outline";

const defaultOptions: Record<string, number> = {
  scale: 0.99,
  speed: 3000,
};

const WhyCard = ({ image, title, highlights }: any) => {
  return (
    <Tilt options={defaultOptions} className="w-full">
      <div className="why-card">
        {/* WHY IMAGE */}
        <Image src={image} alt={title} className="why-img" />

        <div className="copy-content">
          {/* WHY TITLE TEXT */}
          <div
            className="title-text"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>

          <div className="highlight-list">
            {highlights.map((highlight: string, index: number) => (
              <div key={index} className="highlight-row">
                <div className="check-icon-wrapper">
                  <CheckIcon className="w-[18px] h-[18px] text-white" />
                </div>

                <div className="highlight-text">{highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default WhyCard;
