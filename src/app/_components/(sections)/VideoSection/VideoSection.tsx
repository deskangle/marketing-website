"use client";

import React, { useRef, useState } from "react";
import { AgencyVideo } from "@/app/_assets";
import { PlayIcon } from "@heroicons/react/24/solid";
import "./VideoSection.scss";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = (): void => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .catch((err: Error) => console.error("Failed to play video:", err));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-section">
      <div className="app-container">
        <div className="video-wrapper" onClick={togglePlayPause}>
          <video
            ref={videoRef}
            poster="https://a-us.storyblok.com/f/1010806/1280x720/8bc268ee44/sample-cover-image.png/m/1400x0/"
            loop
            muted
            width="100%"
            height="100%"
            playsInline
            preload="auto"
          >
            <source src={AgencyVideo} type="video/mp4" />
            <span data-nosnippet="true">
              {`Sorry, your browser doesn't support videos.`}
            </span>
          </video>

          {!isPlaying && (
            <div className="video-overlay">
              <div className="action-wrapper">
                <div className="video-action" title="Play video">
                  <PlayIcon className="text-white w-8 sm:w-7 h-8 sm:h-7" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
