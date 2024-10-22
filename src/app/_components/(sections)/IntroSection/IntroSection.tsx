"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import { DoughnutCard } from "@/app/_components";
import { FireIcon, AgencyVideo } from "@/app/_assets";
import { motion } from "framer-motion";
import "./IntroSection.scss";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="app-container">
        <div className="intro-block-row">
          {/* BLOCK AREA */}
          <motion.div
            className="block-one block-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
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
                <div>{`3 of 8 client slots available`}</div>
              </div>

              <div className="secondary-text">
                {`We don't chase after quantity, but rather great results`}
              </div>
            </div>
          </motion.div>

          {/* BLOCK AREA */}
          <motion.div
            className="block-two block-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <video
              poster="https://a-us.storyblok.com/f/1010806/1280x720/8bc268ee44/sample-cover-image.png/m/1400x0/"
              loop
              muted
              autoPlay
              width="100%"
              height="100%"
              playsInline
              preload="auto"
            >
              <source src={AgencyVideo} type="video/webm"></source>

              <span data-nosnippet="true">
                {`Sorry, your browser doesn't support videos.`}
              </span>
            </video>

            <div className="video-overlay">
              <div className="action-wrapper">
                <div className="video-action" title="Play video">
                  <PlayIcon className="text-white w-7 h-7" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* BLOCK AREA */}
          <div className="block-three">
            <motion.div
              className="block-three-card block-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="header-text">10+</div>

              <div className="relative top-0.5">
                <div className="primary-text">Years of experience</div>
                <div className="secondary-text">
                  Our team's decade-long expertise drives innovative digital
                  solutions.
                </div>
              </div>
            </motion.div>

            <motion.div
              className="block-three-card block-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="header-text">50+</div>

              <div className="relative top-0.5">
                <div className="primary-text">Value driven clients</div>

                <div className="secondary-text">
                  We work with driven brands to create lasting impact with
                  designs.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
