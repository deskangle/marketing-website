"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { PairColumnBlock, FoundersSection } from "@/app/_components";
import { motion } from "framer-motion";
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
    <div className="mission-section" id="about">
      <PairColumnBlock title="Who we are">
        <div className="mission-section-wrapper">
          {/* COLUMN HEADER BLOCK */}
          <div className="flex flex-col justify-between items-start h-full">
            <div className={`column-header-block`}>
              <motion.div
                className=""
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                INNOVATE.
              </motion.div>

              <motion.div
                className=""
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                DESIGN.
              </motion.div>

              <motion.div
                className="text-primary-green"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                LEAD.
              </motion.div>
            </div>

            {/* AVATAR ROW */}
            <FoundersSection />
          </div>

          {/* COLUMN DESCRIPTION BLOCK */}
          <div className="column-description">
            <div className="column-description-header">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                At <span className="text-primary-green">Deskangle Studios</span>
                , we don't just build brands — we ignite them. With a blend of
                creativity and strategic thinking, we create impactful
                experiences that resonate and leave an indelible mark on your
                audience.
              </motion.div>

              <motion.div
                className="mt-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                From ideation to delivery, we obsess over every detail to ensure
                that your brand shines in every interaction.
              </motion.div>
            </div>

            <div className="offer-list">
              {offerList.map((offer: any, index: number) => (
                <motion.div
                  className={`offer-card ${offer.active && "active-card"}`}
                  key={index}
                  onMouseEnter={() => changeActiveState(index)}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 * index,
                  }}
                >
                  <div className="bullet"></div>
                  <div className="title">{offer.title}:</div>
                  {offer.active && (
                    <div className="description">{offer.description}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PairColumnBlock>
    </div>
  );
};

export default MissionSection;
