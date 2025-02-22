"use client";

import React, { useState } from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { StatOne, StatTwo, StatThree, StatFour } from "@/app/_assets";
import { motion } from "framer-motion";
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
        "Committed to delivering SaaS products; clients love and are excited to use",
    },
    {
      value: "40%",
      image: StatTwo,
      title: "Average ROI Increase",
      description:
        "Our SaaS strategies helps achieve a 40% ROI increase in under 6 months.",
    },
    {
      value: "60%",
      image: StatThree,
      title: "Website Traffic Increase",
      description:
        "Drive a 60% website traffic surge, on our targeted SaaS strategies.",
    },
    {
      value: "30%",
      image: StatFour,
      title: "Conversion Rates",
      description:
        "Targeted approach; spiked an increase of 30% conversion rate in 6 months.",
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
                />

                <div className="relative top-0.5">
                  <motion.div
                    className="stat-header"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {stat.value}
                  </motion.div>

                  <motion.div
                    className="stat-primary-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {stat.title}
                  </motion.div>

                  <motion.div
                    className="stat-secondary-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {stat.description}
                  </motion.div>
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
