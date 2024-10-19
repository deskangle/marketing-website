"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { PairColumnBlock, FoundersSection } from "@/app/_components";
import "./MissionSection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const MissionSection = () => {
  const [offerList, setOfferList] = useState<any>([
    {
      title: "Unmatched Creativity 🎨✨",
      description:
        "We pride ourselves on delivering designs that inspire and captivate audiences.",
      active: true,
    },
    {
      title: "Proven Track Record 📈🏆",
      description:
        "Over a decade of experience helping businesses like yours achieve remarkable results.",
      active: false,
    },
    {
      title: "Tailored Strategies 🛠️📊",
      description:
        "We don’t believe in one-size-fits-all. Each project is custom-tailored to fit your unique brand vision.",
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
          <div className="flex flex-col justify-between items-start h-full">
            <div className={`column-header-block`}>
              <div className="">INNOVATE.</div>
              <div className="">DESIGN.</div>
              <div className="text-primary-green">LEAD.</div>
            </div>

            {/* AVATAR ROW */}
            <FoundersSection />
          </div>

          {/* COLUMN DESCRIPTION BLOCK */}
          <div className="column-description">
            <div className="column-description-header">
              At <span className="text-primary-green">Deskangle Studios</span>,
              we don’t just build brands — we ignite them. With a blend of
              creativity and strategic thinking, we create impactful experiences
              that resonate and leave an indelible mark on your audience.
              <div className="mt-5">
                From ideation to delivery, we obsess over every detail to ensure
                that your brand shines in every interaction.
              </div>
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
                  {offer.active && (
                    <div className="description">{offer.description}</div>
                  )}
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
