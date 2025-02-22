"use client";
import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GridLines, ClientSection } from "@/app/_components";
import { AvatarOne, AvatarTwo, AvatarThree } from "@/app/_assets";
import { motion } from "framer-motion";
import "./HeroSection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="app-container app-container-wrapper">
        <div className="hero-content">
          {/* HERO COPY BLOCK */}
          <motion.div
            className="hero-copy-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* HERO META */}
            <div className="hero-meta">
              <div className="check-indicator">
                <CheckIcon />
              </div>
              <div>{`Dedicated team of Pro Designers & Engineers`}</div>
            </div>

            {/* HERO HEADLINE */}
            <div className={`hero-headline ${inter.className}`}>
              {`Tired of Slow SaaS Product Cycles? We Speed Up Innovation.`}
            </div>
          </motion.div>

          {/* HERO TAGLINE */}
          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {`We empower SaaS companies with expert product design, fast-paced development, and growth strategies that drive user engagement.`}
          </motion.div>

          {/* ACTION ROW */}
          <motion.div
            className="action-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <Link href="/#pricing" className="btn btn-primary-green">
              <div className="btn-text">Explore our Solutions</div>{" "}
              <div className="btn-icon">
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </div>{" "}
            </Link>

            <button className="btn btn-primary-green-outline">
              <div className="text">Book a 15-min Call</div>
              <div className="people-row">
                <div className="people">
                  <Image
                    src={AvatarOne}
                    alt="efemena-elvis"
                    width="40"
                    height="40"
                  ></Image>
                </div>

                <div className="people moveable">
                  <Image
                    src={AvatarTwo}
                    alt="daniel-akinleye"
                    width="40"
                    height="40"
                  ></Image>
                </div>

                <div className="people">
                  <Image
                    src={AvatarThree}
                    alt="ehiz-eneboh"
                    width="40"
                    height="40"
                  ></Image>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* CLIENT BLOCK */}
      <ClientSection />

      {/* GRID LINES */}
      <GridLines />
    </div>
  );
};

export default HeroSection;
