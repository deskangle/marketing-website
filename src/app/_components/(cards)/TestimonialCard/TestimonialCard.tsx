"use client";

import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { StarIcon, PlayIcon } from "@heroicons/react/24/solid";
import "./TestimonialCard.scss";

const defaultOptions: Record<string, number> = {
  scale: 0.99,
  speed: 3000,
};

const TestimonialCard = ({
  name,
  role,
  avatar,
  quote,
  isVideo = false,
  videoThumbnail,
  videoSrc,
}: any) => {
  return (
    <Tilt options={defaultOptions} className="w-full">
      {isVideo ? (
        <>
          {/* VIDEO TESTIMONIAL CARD */}
          <div className="testimonial-card video-testimonial-card">
            {/* THUMBNAIL */}
            <div className="video-thumbnail">
              <Image src={videoThumbnail} alt="video-thumbnail" />
            </div>

            {/* VIDEO INFO */}
            <div className="video-info">
              <div className="video-play-trigger">
                <PlayIcon className="play-icon" />
              </div>

              <div className="video-info-details">
                <div className="client-name">{name}</div>
                <div className="client-role">{role}</div>
                <div className="ratings-row">
                  {Array(5)
                    .fill("_")
                    .map((_, index) => (
                      <StarIcon key={index} className="star-icon" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="testimonial-card">
          {/* TEXT TYPE */}
          <div className="testimonial-card-text-block">
            {/* TOP ROW */}
            <div className="top-row">
              <div className="client-img">
                <Image src={avatar} alt="" width="64" height="64"></Image>
              </div>

              <div>
                <div className="client-name">{name}</div>
                <div className="client-role">{role}</div>
              </div>
            </div>

            {/* CONTENT ROW */}
            <div className="content-row">{quote}</div>

            {/* RATINGS ROW */}
            <div className="ratings-row">
              {Array(5)
                .fill("_")
                .map((_, index) => (
                  <StarIcon key={index} className="star-icon" />
                ))}
            </div>
          </div>
        </div>
      )}
    </Tilt>
  );
};

export default TestimonialCard;
