"use client";

import React from "react";
// import { Tilt } from "react-tilt";
import Image from "next/image";
import { IWorkType } from "@/app/_types";
import { motion } from "framer-motion";
import "./WorkCard.scss";

function WorkCard({ image, brand, description, link }: IWorkType) {
  return (
    <motion.div
      className="work-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.5 },
        y: { duration: 0.8, ease: [0, 0.55, 0.45, 1] },
      }}
    >
      <motion.div
        className="image-card"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
      >
        <Image src={image} alt="project-screenshot"></Image>
      </motion.div>

      {/* COPY COLUMN */}
      <motion.div
        className="work-copy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="title-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {brand}
        </motion.div>
        <motion.div
          className="description-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WorkCard;
