"use client";

import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AvatarOne, AvatarTwo, AvatarThree } from "@/app/_assets";
import { AnimatedTooltip } from "@/app/_components";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import "./CTASection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const people = [
  {
    id: 1,
    name: "Efemena Elvis",
    designation: "Software Engineer",
    image: AvatarOne,
  },
  {
    id: 2,
    name: "Daniel Akinleye",
    designation: "Brand/Product Strategist",
    image: AvatarTwo,
  },
  {
    id: 3,
    name: "Ehiz Eneboh",
    designation: "AI Engineer",
    image: AvatarThree,
  },
];

const CTASection = () => {
  return (
    <div className="cta-section">
      <div className="app-container">
        <div className={`primary-text ${inter.className}`}>
          Got a Project in Mind?
        </div>

        <div className="primary-action-row">
          <div
            className={`left-column ${inter.className}`}
          >{`Let's Talk!`}</div>

          <div className="right-column">
            <AnimatedTooltip items={people} />
          </div>
        </div>

        <div className="primary-action">
          <EnvelopeIcon className="icon" />
          <Link href="mail:hello@deskangle.com" className="text">
            hello@deskangle.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
