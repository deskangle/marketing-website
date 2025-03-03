"use client";

import React, { useEffect, useState } from "react";
import "./GridLines.scss";

// Define the type for a light ray
interface LightRay {
  id: number;
  isHorizontal: boolean;
  position: number;
  duration: number;
}

const createLineArray = (length: number) => Array.from({ length }, () => 0);

const GridLines: React.FC = () => {
  const [horizontalLines, setHorizontalLines] = useState<number[]>([]);
  const [verticalLines, setVerticalLines] = useState<number[]>([]);
  const [lightRays, setLightRays] = useState<LightRay[]>([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     createLightRay();
  //   }, 1000); // Adjust the interval for light ray creation

  //   return () => clearInterval(interval);
  // }, []);

  const createLightRay = () => {
    const isHorizontal = Math.random() > 0.5; // Randomly choose between horizontal and vertical ray
    const position = Math.random() * 100; // Random position along the grid line
    const duration = Math.random() * 2 + 2; // Random duration for the light ray to move

    const newRay: LightRay = {
      id: Date.now(),
      isHorizontal,
      position,
      duration,
    };

    setLightRays((prevRays) => [...prevRays, newRay]);

    // Remove the light ray after its animation is done
    setTimeout(() => {
      setLightRays((prevRays) =>
        prevRays.filter((ray) => ray.id !== newRay.id)
      );
    }, duration * 1000); // Convert seconds to milliseconds
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 440) {
        setHorizontalLines(createLineArray(8)); // xs
        setVerticalLines(createLineArray(16));
      } else if (width <= 639) {
        setHorizontalLines(createLineArray(15)); // sm
        setVerticalLines(createLineArray(12));
      } else if (width <= 768) {
        setHorizontalLines(createLineArray(14)); // md
        setVerticalLines(createLineArray(12));
      } else if (width <= 1023) {
        setHorizontalLines(createLineArray(14)); // lg
        setVerticalLines(createLineArray(12));
      } else if (width <= 1279) {
        setHorizontalLines(createLineArray(24)); // xl
        setVerticalLines(createLineArray(15));
      } else if (width <= 1535) {
        setHorizontalLines(createLineArray(26)); // 2xl
        setVerticalLines(createLineArray(16));
      } else {
        setHorizontalLines(createLineArray(28)); // larger screens
        setVerticalLines(createLineArray(18));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set the initial values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid-lines-wrapper">
      <div className="grid-lines">
        <div className="grid-lines-horizontal">
          {horizontalLines.map((_, index) => (
            <div className="line-x wave-effect" key={index}></div>
          ))}
        </div>

        <div className="grid-lines-vertical">
          {verticalLines.map((_, index) => (
            <div className="line-y wave-effect" key={index}></div>
          ))}
        </div>
      </div>

      {/* Render light rays */}
      {lightRays.map((ray) => (
        <div
          key={ray.id}
          className="light-ray"
          style={{
            top: ray.isHorizontal ? `${ray.position}%` : undefined,
            left: ray.isHorizontal ? undefined : `${ray.position}%`,
            animationDuration: `${ray.duration}s`,
            animationName: ray.isHorizontal ? "moveHorizontal" : "moveVertical",
          }}
        />
      ))}
    </div>
  );
};

export default GridLines;
