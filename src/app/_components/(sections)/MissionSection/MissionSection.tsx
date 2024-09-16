"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { PairColumnBlock } from "@/app/_components";
import "./MissionSection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const MissionSection = () => {
  const [offerList, setOfferList] = useState<any>([
    {
      title: "Brand Identity",
      description: "Crafting unique and impactful brand identities.",
      active: true,
    },
    {
      title: "Stunning Websites",
      description: "Designing captivating and engaging websites.",
      active: false,
    },
    {
      title: "Strategic Storytelling",
      description: "Connecting your brand with its audience.",
      active: false,
    },
  ]);

  const changeActiveState = (index: number) => {
    const updatedOfferList = offerList.map((offer: any, offerId: number) => ({
      ...offer,
      active: index === offerId ? true : false,
    }));

    setOfferList(updatedOfferList);
  };

  return (
    <div className="mission-section">
      <PairColumnBlock title="Who we are">
        <div className="mission-section-wrapper">
          {/* COLUMN HEADER BLOCK */}
          <div className={`column-header-block ${inter.className}`}>
            <div className="">INNOVATE.</div>
            <div className="">DESIGN.</div>
            <div className="">LEAD.</div>
          </div>

          {/* COLUMN DESCRIPTION BLOCK */}
          <div className="column-description">
            <div className="column-description-header">
              Welcome to Deskangle Studio, your go-to branding and design
              agency. We ignite your brand with captivating creativity and
              strategic vision, crafting extraordinary experiences that leave a
              lasting impression.
            </div>

            <div className="offer-list">
              {offerList.map((offer: any, index: number) => (
                <div
                  className={`offer-card ${offer.active && "active-card"}`}
                  key={index}
                  onMouseEnter={() => changeActiveState(index)}
                >
                  <div className="bullet"></div>
                  <div className="title">{offer.title}:</div>
                  <div className="description">{offer.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PairColumnBlock>
    </div>
  );
};

export default MissionSection;
