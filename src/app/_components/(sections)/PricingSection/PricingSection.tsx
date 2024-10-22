"use client";

import React from "react";
import {
  PricingAreaCard,
  PricingSlotCard,
  PricingFeatureCard,
} from "@/app/_components";
import { motion } from "framer-motion";
import "./PricingSection.scss";

const PricingSection = () => {
  return (
    <div className="pricing-section" id="pricing">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <motion.div
            className="primary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Solutions at competitive rates
          </motion.div>

          <motion.div
            className="primary-text primary-text-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>Solutions at</div> <div>competitive rates</div>
          </motion.div>

          <motion.div
            className="secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            No extra hassle. No managing employees. No headaches.
          </motion.div>
        </div>

        {/* PRICING DISPLAY AREA */}
        <div className="pricing-area">
          <motion.div
            className="pricing-area--left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <PricingAreaCard />
          </motion.div>

          <div className="pricing-area--right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <PricingSlotCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <PricingFeatureCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
