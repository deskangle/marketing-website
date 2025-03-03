"use client";
import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { GridLines, ClientSection } from "@/app/_components";
import { FireIcon } from "@/app/_assets";
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
                <Image src={FireIcon} alt="fire-icon" width={26} height={26} />
              </div>
              <div>{`2 of 5 slots open. Book a discovery call today!`}</div>
            </div>

            {/* HERO HEADLINE */}
            <div className={`hero-headline ${inter.className}`}>
              {`Transform your SaaS Ideas into Business Solutions.`}
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
            <Link href="/" className="btn btn-primary-green">
              <div className="btn-text">Book a Discovery Call</div>{" "}
              <div className="btn-icon">
                <ArrowRightIcon className="w-5 h-5 text-white animate-pulse" />
              </div>{" "}
            </Link>

            <div className="project-stat-card">
              <div className="people-row">
                <div className="people-item">
                  <Image
                    src="https://res.cloudinary.com/richy-jones/image/upload/v1703514594/imole.jpg"
                    alt="imole-oluyemi"
                    width="40"
                    height="40"
                  ></Image>
                </div>

                <div className="people-item moveable">
                  <Image
                    src="https://res.cloudinary.com/richy-jones/image/upload/v1703514594/tomisin.jpg"
                    alt="tomisin"
                    width="40"
                    height="40"
                  ></Image>
                </div>

                <div className="people-item">
                  <div className="text">50+</div>
                </div>
              </div>

              <div className="value-row">
                <div className="stars-row">
                  {Array(5)
                    .fill("_")
                    .map((_, index) => (
                      <StarIcon key={index} className="star-icon" />
                    ))}
                </div>
                <div className="copy-text">50+ projects completed</div>
              </div>
            </div>
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
