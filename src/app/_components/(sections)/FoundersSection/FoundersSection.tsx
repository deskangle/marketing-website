"use client";

import React from "react";
import { Inter } from "next/font/google";
import { AvatarOne, AvatarTwo, AvatarThree } from "@/app/_assets";
import { AnimatedTooltip } from "@/app/_components";
import "./FoundersSection.scss";

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

const FoundersSection = () => {
  return (
    <>
      <div className="avatar-block">
        {/* AVATAR ROW */}
        <div className="avatar-row">
          <AnimatedTooltip items={people} />
        </div>

        <div className={`avatar-title ${inter.className}`}>
          DESKANGLE CO-FOUNDERS
        </div>
      </div>
    </>
  );
};

export default FoundersSection;
