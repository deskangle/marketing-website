import React from "react";
import { AgencyVideo } from "@/app/_assets";
import { PlayIcon } from "@heroicons/react/24/solid";
import "./VideoSection.scss";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="app-container">
        <div className="video-wrapper">
          <video
            poster="https://a-us.storyblok.com/f/1010806/1280x720/8bc268ee44/sample-cover-image.png/m/1400x0/"
            loop
            muted
            width="100%"
            height="100%"
            playsInline
            preload="auto"
          >
            <source src={AgencyVideo} type="video/mp4"></source>

            <span data-nosnippet="true">
              {`Sorry, your browser doesn't support videos.`}
            </span>
          </video>

          <div className="video-overlay">
            <div className="action-wrapper">
              <div className="video-action" title="Play video">
                <PlayIcon className="text-white w-8 sm:w-7 h-8 sm:h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
