import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GridLines, ClientSection } from "@/app/_components";
import "./HeroSection.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="app-container app-container-wrapper">
        <div className="hero-content">
          {/* HERO COPY BLOCK */}
          <div className="hero-copy-block">
            {/* HERO META */}
            <div className="hero-meta">
              <div className="check-indicator">
                <CheckIcon />
              </div>
              <div>Dedicated team of pro designers & developers</div>
            </div>

            {/* HERO HEADLINE */}
            <div className={`hero-headline ${inter.className}`}>
              Design & Development Solutions for Forward Thinking Brands
            </div>
          </div>

          {/* HERO TAGLINE */}
          <div className="hero-tagline">
            At Deskangle, we believe that every brand has a story that defines
            who they are and where they're headed. We partner with such brands
            to bring those stories to life through bespoke design, cutting-edge
            development, and strategic digital marketing.
          </div>

          {/* ACTION ROW */}
          <div className="action-row">
            <button className="btn btn-primary-green">
              <div className="btn-text">Get Started</div>{" "}
              <div className="btn-icon">
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </div>{" "}
            </button>

            <button className="btn btn-primary-green-outline">
              <div className="text"> Book a Call</div>
              <div className="people-row">
                <div className="people">
                  <Image
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    width="40"
                    height="40"
                  ></Image>
                </div>

                <div className="people moveable">
                  <Image
                    src="https://images.unsplash.com/photo-1706885093496-64e6ff14155e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    width="40"
                    height="40"
                  ></Image>
                </div>

                <div className="people">
                  <Image
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    width="40"
                    height="40"
                  ></Image>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* CLIENT BLOCK */}
      <ClientSection />

      {/* GRID LINES */}
      <GridLines />
    </div>
  );
};

export default HeroSection;
