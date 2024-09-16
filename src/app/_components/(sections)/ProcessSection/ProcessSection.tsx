import React from "react";
import { PairColumnBlock, ProcessCard } from "@/app/_components";
import { IProcessType } from "@/app/_types";
import "./ProcessSection.scss";

const ProcessSection = () => {
  const processList: IProcessType[] = [
    {
      icon: "",
      title: "Consultation",
      description:
        "We start by understanding your goals and vision. Asking the right questions helps us gain insights to guide our creative process.",
      highlights: ["Insights", "Target users"],
    },
    {
      icon: "",
      title: "Concept",
      description:
        "With gathered insights, we craft strategies and concepts that align with your brand, ensuring an impactful and unique solution.",
      highlights: ["Wireframes", "Ideation"],
    },
    {
      icon: "",
      title: "Design",
      description:
        "Our designers bring the concept to life with meticulous attention to detail, crafting visually cohesive designs that embody your brand.",
      highlights: ["Web design", "Figma file"],
    },
    {
      icon: "",
      title: "Development",
      description:
        "We turn designs into functional realities, creating engaging websites, experiences, and campaigns for seamless user interaction.",
      highlights: ["Webflow", "Responsive design"],
    },
    {
      icon: "",
      title: "Delivery",
      description:
        "With the finishing touches in place, we deliver the final product promptly and flawlessly. Your brand shines brightly, poised for success",
      highlights: ["Launch day", "Ready to rock"],
    },
    {
      icon: "",
      title: "Get started",
      description:
        "Start today, see updates in 2-3 days. No negotiation, just top-notch results. Solve your design & dev challenges from day one.",
      highlights: [],
    },
  ];

  return (
    <div className="process-section">
      <PairColumnBlock title="Our Process">
        <div className="process-title-text">
          <span className="text-white/45">Collaborative Design Process:</span>{" "}
          We dive deep into your brand's essence, ideate innovative solutions,
          and meticulously craft exceptional experiences for success.
        </div>
      </PairColumnBlock>

      <div className="process-flow-section">
        <div className="app-container">
          <div className="process-block">
            {processList.map((process: IProcessType, index: number) => (
              <ProcessCard
                key={index}
                process={process}
                counter={index + 1}
              ></ProcessCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
