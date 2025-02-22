"use client";

import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCard = () => {
  const [cutoutValue, setCutoutValue] = useState(50); // Default value

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 440) setCutoutValue(30); // xs
      else if (width <= 639) setCutoutValue(32); // sm
      else if (width <= 768) setCutoutValue(38); // md
      else if (width <= 1023) setCutoutValue(40); // lg
      else if (width <= 1279) setCutoutValue(50); // xl
      else if (width <= 1535) setCutoutValue(60); // 2xl
      else setCutoutValue(70); // Default for larger screens
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call on page load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    datasets: [
      {
        label: "# of Slots",
        data: [3, 2],
        backgroundColor: ["rgba(65, 222, 91, 0.2)", "rgba(112, 112, 112, 0.2)"],
        borderColor: ["rgba(65, 222, 91, 0.7)", "rgba(112, 112, 112, 0.7)"],
        borderWidth: 1,
        cutout: cutoutValue,
      },
    ],
  };

  return <Doughnut redraw data={data} />;
};

export default DoughnutCard;
