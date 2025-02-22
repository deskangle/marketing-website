import React from "react";
import Image from "next/image";
import { GradelyMockup } from "@/app/_assets";
import "./ProjectCard.scss";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <Image src={GradelyMockup} alt="gradely-mockup" />

      <div className="project-card-display">
        <div className="browser-content">
          <iframe
            src="https://www.gradely.co?forceDesktop=true" // Example query parameter
            title="Gradely Website"
            width="1440"
            height="900"
            style={{
              border: "none",
              transform: "scale(0.75)",
              transformOrigin: "top left",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
