"use client";

import React from "react";
import { motion } from "framer-motion";
import { WorkCard, ProjectCard } from "@/app/_components";
import { IWorkType } from "@/app/_types";
import {
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
  ProjectSix,
} from "@/app/_assets";
import "./WorkSection.scss";

const WorkSection = () => {
  const workList: IWorkType[] = [
    {
      image: ProjectOne,
      brand: "Gradely LMS",
      description: "Gradely is a pioneering digital education startup",
      link: "https://gradely.co",
    },
    {
      image: ProjectTwo,
      brand: "Class54 Education",
      description: "Class54 is an innovative Ed-Tech startup.",
      link: "https://class54.com",
    },
    {
      image: ProjectThree,
      brand: "PaveHQ",
      description: "Pave is a transformative Ed-Tech platform",
      link: "https://pavehq.com",
    },
    {
      image: ProjectFour,
      brand: "Vesicash Escrow & MoR",
      description: "Vesicash, a dynamic FinTech startup",
      link: "https://vesicash.com",
    },
    {
      image: ProjectFive,
      brand: "Glaxe",
      description:
        "Pave is a transformative Ed-Tech platform with a bold mission",
      link: "https://pavehq.com",
    },
    {
      image: ProjectSix,
      brand: "BudgitUs",
      description: "Budgit, a dynamic data based startup",
      link: "https://vesicash.com",
    },
  ];

  const getEvenNumberedWorks = () => {
    return workList.filter((_, index: number) => index % 2 === 0) ?? [];
  };

  const getOddNumberedWorks = () => {
    return workList.filter((_, index: number) => index % 2 !== 0) ?? [];
  };

  return (
    <div className="work-section" id="work">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <motion.div
            className="primary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Our Work Transforms Brands
          </motion.div>

          <motion.div
            className="primary-text primary-text-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>Our Work</div> <div>Transforms Brands</div>
          </motion.div>

          <motion.div
            className="secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Partnered with brands pushing boundaries and setting new standards
          </motion.div>
        </div>

        {/* PROJECT LIST SECTION */}
        {/* <div className="project-list-section">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div> */}

        <div className="work-items">
          <div className="work-column work-column--top">
            {getEvenNumberedWorks().map((work: IWorkType, index: number) => (
              <WorkCard
                key={index}
                image={work.image}
                brand={work.brand}
                description={work.description}
                link={work.link}
              />
            ))}
          </div>

          <div className="work-column work-column--bottom md:!hidden">
            {getOddNumberedWorks().map((work: IWorkType, index: number) => (
              <WorkCard
                key={index}
                image={work.image}
                brand={work.brand}
                description={work.description}
                link={work.link}
              />
            ))}
          </div>
        </div>

        <div className="work-items !hidden md:!flex md:mt-5">
          <div className="work-column work-column--bottom">
            {getOddNumberedWorks().map((work: IWorkType, index: number) => (
              <WorkCard
                key={index}
                image={work.image}
                brand={work.brand}
                description={work.description}
                link={work.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
