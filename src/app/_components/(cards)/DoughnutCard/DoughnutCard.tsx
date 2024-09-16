"use client";

import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "# of Slots",
      data: [5, 3],
      backgroundColor: ["rgba(65, 222, 91, 0.2)", "rgba(112, 112, 112, 0.2)"],
      borderColor: ["rgba(65, 222, 91, 0.7)", "rgba(112, 112, 112, 0.7)"],
      borderWidth: 1,
      cutout: 42,
    },
  ],
};

const DoughnutCard = () => {
  return <Doughnut redraw data={data} />;
};

export default DoughnutCard;
