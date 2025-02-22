"use client";

import React from "react";
import { useState } from "react";
import { ServiceCard } from "@/app/_components";
import { IServiceType } from "@/app/_types";
import {
  BrandingServiceIcon,
  ProductServiceIcon,
  DevelopmentServiceIcon,
} from "@/app/_assets";
import { motion } from "framer-motion";
import "./ServiceSection.scss";

const ServiceSection = () => {
  const [services, _] = useState<IServiceType[]>([
    {
      icon: BrandingServiceIcon,
      title: "Brand Identity",
      description:
        "We craft brand stories that connect with your audience, ensuring all visual elements aligns with business your goals.",
      listTitle: "Branding Services",
      serviceList: [
        "Market Positioning & Strategy",
        "Visual Identity Design",
        "Brand Messaging & Tone of Voice",
      ],
      style: "bg-tint-blue/85 border-tint-blue",
    },
    {
      icon: ProductServiceIcon,
      title: "Product Design",
      description:
        "We create innovative designs that prioritize user needs, elevating both experience and engagement.",
      listTitle: "Product Services",
      serviceList: [
        "User Experience (UX) Research",
        "Wireframing & Prototyping",
        "Design System Development",
      ],
      style: "bg-tint-purple/85 border-tint-purple",
    },
    {
      icon: DevelopmentServiceIcon,
      title: "Software Development",
      description:
        "We provide development solutions focused on performance, security, and scalability to help businesses grow and adapt.",
      listTitle: "Development Services",
      serviceList: [
        "Custom Web & Mobile Development",
        "API & CMS Integration",
        "No-Code product development",
      ],
      style: "bg-tint-green/85 border-tint-green",
    },
  ]);

  return (
    <div className="service-section" id="services">
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
            All you want, delivered on time
          </motion.div>

          <motion.div
            className="primary-text primary-text-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>All you want,</div> <div>delivered on time</div>
          </motion.div>

          <motion.div
            className="secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            From business branding and ui/ux design to SaaS platform or mobile
            app
          </motion.div>
        </div>

        {/* BOTTOM ROW */}
        <div className="card-item-row">
          {services.map((service: IServiceType, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.2,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
