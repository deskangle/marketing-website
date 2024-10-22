"use client";

import React from "react";
import Image from "next/image";
import { PickAPlan, ContactSales } from "@/app/_assets";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import "./CTASection.scss";

const CTASection = () => {
  return (
    <div className="cta-section">
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
            Use the cheat code to get <br /> started quickly and get results
          </motion.div>

          <motion.div
            className="primary-text primary-text-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Use the cheat code to get started quickly and get results
          </motion.div>

          <motion.div
            className="secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Get an almost in-house experience with a dedicated remote team
          </motion.div>
        </div>

        {/* CARD ITEMS */}
        <div className="card-items">
          <motion.div
            className="card-item card-item-one"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* TOP AREA */}
            <div className="top-area">
              <Image src={PickAPlan} alt="pick a plan" width={80} height={80} />
            </div>

            {/* BASE AREA */}
            <Link href="/#pricing" className="base-area">
              <div className="text">Pick a plan</div>

              <div className="btn-icon">
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="card-item card-item-two"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {/* TOP AREA */}
            <div className="top-area">
              <Image
                src={ContactSales}
                alt="contact sales"
                width={80}
                height={80}
              />
            </div>

            {/* BASE AREA */}
            <Link href="" className="base-area">
              <div className="text">Book a call</div>

              <div className="btn-icon">
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* COPY TEXT */}
        <motion.div
          className="copy-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Save time and $ on hiring someone, interviews, and trying to find
          great work for peanuts. Try Undercat and get first results in 2-3
          business days.
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
