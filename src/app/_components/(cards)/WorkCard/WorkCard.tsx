// "use client";

import React from "react";
// import { Tilt } from "react-tilt";
import Image from "next/image";
import { IWorkType } from "@/app/_types";
import "./WorkCard.scss";

// const defaultOptions: Record<string, number> = {
//   scale: 0.98,
//   speed: 3000,
// };

function WorkCard({ image, brand, description, link }: IWorkType) {
  return (
    // <Tilt options={defaultOptions}>
    // </Tilt>
    <div className="work-card">
      <div className="image-card">
        <Image src={image} alt="project-screenshot"></Image>
      </div>

      {/* COPY COLUMN */}
      <div className="work-copy">
        <div className="title-text">{brand}</div>
        <div className="description-text">{description}</div>
      </div>
    </div>
  );
}

export default WorkCard;
