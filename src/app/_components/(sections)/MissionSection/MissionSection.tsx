"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { PairColumnBlock, FoundersSection } from "@/app/_components";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import "./MissionSection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const MissionSection = () => {
  const [offerList, setOfferList] = useState<any>([
    {
      title: "Agile SaaS Design",
      description:
        "We craft intuitive, future-proof interfaces that drive conversions and engagement",
      active: true,
    },
    {
      title: "Fast-Track Development",
      description:
        "We accelerate your SaaS product launch without compromising quality and scalability.",
      active: false,
    },
    {
      title: "Custom SaaS Solutions",
      description:
        "We tailor our processes to match the unique needs of your product and market.",
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
            <div className={`column-header-block ${inter.className}`}>
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
                Welcome to{" "}
                <span className="text-primary-green font-semibold">{` Deskangle Studios, `}</span>
                {`where we don't just iterate on SaaS — we innovate at scale. We fuse cutting-edge design and agile development to build fast and scalable SaaS products for disruptive brands.`}
              </motion.div>

              <motion.div
                className="mt-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                {`From concept to launch, we're obsessed with reducing time to market and maximizing user adoption.`}
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
                  <div className="bullet">
                    <CheckIcon className="check-icon" />
                  </div>

                  <div className="title">{offer.title}</div>
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
