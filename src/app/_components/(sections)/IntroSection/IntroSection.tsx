import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import { DoughnutCard } from "@/app/_components";
import { FireIcon } from "@/app/_assets";
import "./IntroSection.scss";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="app-container">
        <div className="intro-block-row">
          {/* BLOCK AREA */}
          <div className="block-one block-card">
            {/* DOUGHNUT BLOCK */}
            <div className="doughnut-block">
              <DoughnutCard />
              <div className="doughnut-label">
                <div className="text">3/8</div>
                <div className="description">SLOTS</div>
              </div>
            </div>

            {/* COPY BLOCK */}
            <div className="copy-block">
              <div className="primary-text">
                <Image src={FireIcon} alt="fire-icon" width={17} height={17} />
                <div>{`3/8 client slots available`}</div>
              </div>

              <div className="secondary-text">
                {`We don't chase after quantity, but rather great results`}
              </div>
            </div>
          </div>

          {/* BLOCK AREA */}
          <div className="block-two block-card">
            {/* autoPlay */}
            <video
              poster="https://a-us.storyblok.com/f/1010806/1280x720/8bc268ee44/sample-cover-image.png/m/1400x0/"
              loop
              muted
              width="100%"
              height="100%"
              playsInline
              preload="auto"
            >
              <source
                src="https://a-us.storyblok.com/f/1010806/x/e0622c17f9/adr-homepagevideo_v3.mp4"
                type="video/mp4"
              ></source>

              <span data-nosnippet="true">
                {`Sorry, your browser doesn't support videos.`}
              </span>
            </video>

            <div className="video-overlay">
              <div className="action-wrapper">
                <div className="video-action" title="Play video">
                  <PlayIcon className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK AREA */}
          <div className="block-three">
            <div className="block-three-card block-card">
              <div className="header-text">10+</div>

              <div className="relative top-0.5">
                <div className="primary-text">Years of experience</div>
                <div className="secondary-text">
                  of combined experience helping build incredible-looking
                  solutions
                </div>
              </div>
            </div>

            <div className="block-three-card block-card">
              <div className="header-text">50+</div>

              <div className="relative top-0.5">
                <div className="primary-text">Value driven clients</div>

                <div className="secondary-text">
                  of combined experience helping build incredible-looking
                  solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
