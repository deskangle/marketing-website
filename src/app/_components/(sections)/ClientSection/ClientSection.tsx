"use client";

import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import {
  VesicashLogo,
  PaveLogo,
  Class54Logo,
  BudgitLogo,
  GradelyLogo,
  InvictusLogo,
  AdvantageAfricaLogo,
  GlaxeLogo,
} from "@/app/_assets";
import { motion } from "framer-motion";
import "./ClientSection.scss";

type LogoType = {
  src: string;
  alt: string;
};

const defaultOptions: Record<string, number> = {
  scale: 0.98,
  speed: 3000,
};

const clientLogo: LogoType[] = [
  {
    src: BudgitLogo,
    alt: "Budgit",
  },
  {
    src: AdvantageAfricaLogo,
    alt: "Advantage Africa",
  },
  {
    src: PaveLogo,
    alt: "Pave",
  },
  {
    src: VesicashLogo,
    alt: "Vesicash",
  },
  {
    src: GlaxeLogo,
    alt: "Glaxe",
  },
  {
    src: GradelyLogo,
    alt: "Invictus",
  },
  {
    src: InvictusLogo,
    alt: "Invictus",
  },
  {
    src: Class54Logo,
    alt: "Class54",
  },
];

const ClientSection = () => {
  return (
    <div className="client-block">
      <motion.div
        className="app-container client-content text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="primary-text">
          Trusted by brands that value excellence
        </div>
      </motion.div>

      {/* CLIENT ROW */}
      <motion.div
        className="client-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <div className="client-row">
          {[...clientLogo, ...clientLogo].map(
            (logo: LogoType, index: number) => (
              <Tilt options={defaultOptions} key={index}>
                <div className="client-col">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={45}
                    className={logo.alt.toLowerCase()}
                  />
                </div>
              </Tilt>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientSection;
