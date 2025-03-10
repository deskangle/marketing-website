"use client";

import React from "react";
// import { Tilt } from "react-tilt";
import Image from "next/image";
import Link from "next/link";
import { IWorkType } from "@/app/_types";
import { motion } from "framer-motion";
import "./WorkCard.scss";

function WorkCard({ image, brand, description, link }: IWorkType) {
  return (
    <div className="work-card">
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
        <div className="title-row">
          <div className="title-text">{brand}</div>

          <Link
            href={link as string}
            target="_blank"
            className="btn btn-sm btn-primary-green-outline"
          >
            Visit Site
          </Link>
        </div>

        <div className="description-text">{description}</div>
      </motion.div>
    </div>
  );
}

export default WorkCard;
