"use client";

import React, { useState } from "react";
import { Tilt } from "react-tilt";
import "./StatSection.scss";

type statDataType = {
  value: string;
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
      title: "Client satisfaction rate",
      description:
        "of combined experience helping build incredible-looking solutions",
    },
    {
      value: "40%",
      title: "Average ROI Increase",
      description: "Clients see an average 40% increase return on investment",
    },
    {
      value: "60%",
      title: "Website Traffic Increase",
      description:
        "Clients experience an average 60% increase in website traffic",
    },
    {
      value: "30%",
      title: "Conversion Rates",
      description:
        "Achieved a 30% average increase in conversion rates for clients",
    },
  ]);

  return (
    <div className="stat-section">
      <div className="app-container">
        <div className="stat-row">
          {statData.map((stat: statDataType, index: number) => (
            <Tilt options={defaultOptions} key={index}>
              <div className="stat-card" key={index}>
                <div className="stat-header">{stat.value}</div>

                <div className="relative top-0.5">
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
