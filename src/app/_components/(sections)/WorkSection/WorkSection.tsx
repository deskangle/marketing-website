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
      description:
        "Gradely LMS is an educational platform designed to personalize learning resources, ensuring that every student has the opportunity to excel academically.",
      link: "https://gradely.co",
    },
    {
      image: ProjectTwo,
      brand: "Class54 Education",
      description:
        "Class54 is an Ed-Tech startup specialized in curating an extensive database of examination questions and answers, covering a wide range of standardized tests.",
      link: "https://class54.com",
    },
    {
      image: ProjectSix,
      brand: "BudgitUs",
      description:
        "Budgit is a leading research and civic tech organization focused on co-creating solutions with local communities on public resource efficiency, equity and inclusion.",
      link: "https://budgit.us",
    },
    {
      image: ProjectFour,
      brand: "Vesicash Technologies",
      description:
        "Vesicash is a FinTech startup simplifying online global payments. They specialize in merchant of record services, handling local transactions, USD, and GBP.",
      link: "https://vesicash.com",
    },
    {
      image: ProjectThree,
      brand: "PaveHQ",
      description:
        "Pave streamlines access to international education and career pathways for African students. Their centralized platform connects students to global institutions and programs",
      link: "https://pavehq.com",
    },
    {
      image: ProjectFive,
      brand: "Golden Penny Festival",
      description:
        "The Golden Penny Soup Festival is a themed event that invites food enthusiasts to a celebration of soups with culinary master classes and vendor opportunities.",
      link: "https://gpsoupfestival.com/",
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
      </div>

      <div className="work-items-mobile">
        {[...getEvenNumberedWorks(), ...getOddNumberedWorks()].map(
          (work: IWorkType, index: number) => (
            <div className="work-column" key={index}>
              <WorkCard
                image={work.image}
                brand={work.brand}
                description={work.description}
                link={work.link}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WorkSection;
