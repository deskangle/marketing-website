"use client";

import React, { useState } from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { StatOne, StatTwo, StatThree, StatFour } from "@/app/_assets";
import "./StatSection.scss";

type statDataType = {
  value: string;
  image: string | StaticImageData;
  title: string;
  description: string;
};

const defaultOptions: Record<string, number> = {
  scale: 0.98,
  speed: 3000,
};

const StatSection = () => {
  const [statData, _] = useState<statDataType[]>([
    {
      value: "98%",
      image: StatOne,
      title: "Client satisfaction rate",
      description:
        "Achieved over the past 12 months, reflecting our track record of building innovative quality solutions.",
    },
    {
      value: "40%",
      image: StatTwo,
      title: "Average ROI Increase",
      description:
        "On average, clients have seen a 40% ROI increase within the first six months of partnering with us.",
    },
    {
      value: "60%",
      image: StatThree,
      title: "Website Traffic Increase",
      description:
        "Clients experienced a 60% boost in website traffic in just 3 months, thanks to our targeted digital strategies.",
    },
    {
      value: "30%",
      image: StatFour,
      title: "Conversion Rates",
      description:
        "Achieved a 30% improvement in conversion rates within 6 months for clients across various industries.",
    },
  ]);

  return (
    <div className="stat-section">
      <div className="app-container">
        <div className="stat-row">
          {statData.map((stat: statDataType, index: number) => (
            <Tilt options={defaultOptions} key={index}>
              <div className="stat-card" key={index}>
                <Image
                  src={stat.image}
                  alt={stat.title}
                  width={120}
                  height={120}
                ></Image>

                <div className="relative top-0.5">
                  <div className="stat-header">{stat.value}</div>
                  <div className="stat-primary-text">{stat.title}</div>

                  <div className="stat-secondary-text">{stat.description}</div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatSection;
