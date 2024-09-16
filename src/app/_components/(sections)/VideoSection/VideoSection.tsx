import React from "react";
import "./VideoSection.scss";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="app-container">
        <div className="video-wrapper">
          <video
            poster="https://a-us.storyblok.com/f/1010806/1280x720/8bc268ee44/sample-cover-image.png/m/1400x0/"
            autoPlay
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
              Sorry, your browser doesn't support videos.
            </span>
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
