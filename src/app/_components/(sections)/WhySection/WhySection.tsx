import React from "react";
import { Inter } from "next/font/google";
import { WhyCard } from "@/app/_components";
import { WhyImage1 } from "@/app/_assets";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./WhySection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const whyData = [
  {
    image: WhyImage1,
    title: "We are a <br> design leader",
    highlights: [
      "Designing world-class products & brands",
      "Pushing boundaries & influencing designers everywhere",
    ],
  },
  {
    image: WhyImage1,
    title: "We get things <br> done, right & fast",
    highlights: [
      "Fast-paced & no bullshit",
      "We make the complex simple",
      "Flexible collaboration & payments",
    ],
  },
  {
    image: WhyImage1,
    title: "People love <br> working with us",
    highlights: [
      "Meeting with Orizon was our favorite part of the week!",
      "Committed to putting a smile on people’s faces",
      "4.9 ★ That’s what we call a stellar reputation",
    ],
  },
];

const WhySection = () => {
  return (
    <div className="why-section">
      <div className="app-container">
        <div className="content-section-block">
          {/* COPY AREA */}
          <div className="copy-area">
            <div className={`primary-text ${inter.className}`}>
              Why 100+ clients trust Deskangle?
            </div>

            <div className="secondary-text">
              Working with Deskangle you get the experience of our core team
              that created WAYUP, as well as the most concentrated experience of
              our best specialists, united by one big idea - to make the digital
              world a better place.
            </div>

            <button className="btn btn-primary-green">
              <div className="btn-text">Book a quick session</div>{" "}
              <div className="btn-icon">
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </div>{" "}
            </button>
          </div>

          {/* CONTENT AREA */}
          <div className="content-area">
            {whyData.map((data, index) => (
              <WhyCard
                key={index}
                image={data.image}
                title={data.title}
                highlights={data.highlights}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
