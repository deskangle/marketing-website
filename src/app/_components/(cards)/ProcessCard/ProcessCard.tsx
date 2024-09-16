"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { IProcessType } from "@/app/_types";
import "./ProcessCard.scss";

const defaultOptions: Record<string, number> = {
  scale: 0.98,
  speed: 3000,
};

const ProcessCard = ({
  process,
  counter,
}: {
  process: IProcessType;
  counter: number;
}) => {
  return (
    <Tilt options={defaultOptions}>
      <div className="process-card text-white">
        {/* PROCESS TITLE ROW */}
        <div className="process-title-row">
          <div className="process-counter">0{counter}</div>
          <div className="separator-line"></div>
          <div className="process-title">{process.title}</div>
        </div>

        {/* PROCESS DESCRIPTION */}
        <div className="process-description">{process.description}</div>

        {/* PROCESS HIGHLIGHTS */}
        {process.highlights.length ? (
          <div className="process-highlights">
            {process.highlights.map((highlight: string, index: number) => (
              <div className="highlight" key={index}>
                <div className="highlight-indicator">
                  <CheckIcon className="w-[18px] h-[18px] text-white" />
                </div>

                <div className="highlight-text">{highlight}</div>
              </div>
            ))}
          </div>
        ) : (
          <button className="btn btn-secondary">
            <div className="btn-text">Get Started</div>{" "}
            <div className="btn-icon">
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </div>{" "}
          </button>
        )}
      </div>
    </Tilt>
  );
};

export default ProcessCard;
