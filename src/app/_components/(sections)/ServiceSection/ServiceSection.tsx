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
import "./ServiceSection.scss";

const ServiceSection = () => {
  const [services, _] = useState<IServiceType[]>([
    {
      icon: BrandingServiceIcon,
      title: "Branding",
      description:
        "We craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.",
      listTitle: "Branding Services",
      serviceList: [
        "Market Analysis and Insights",
        "Goal Setting and Roadmapping",
        "Innovation Integration",
      ],
      style: "bg-tint-blue/85 border-tint-blue",
    },
    {
      icon: ProductServiceIcon,
      title: "Product Design",
      description:
        "We collaborate with you to understand your unique needs, offering insights, and practical solutions.",
      listTitle: "Product Services",
      serviceList: [
        "Organizational Restructuring",
        "Process Optimization",
        "Performance Analysis",
      ],
      style: "bg-tint-purple/85 border-tint-purple",
    },
    {
      icon: DevelopmentServiceIcon,
      title: "Software Development",
      description:
        "From market entry strategies to partnership development, we act as catalysts for your growth journey.",
      listTitle: "Development Services",
      serviceList: [
        "Real-time Analytics",
        "Performance Metrics Tracking",
        "Risk Management Solutions",
      ],
      style: "bg-tint-green/85 border-tint-green",
    },
  ]);

  return (
    <div className="service-section">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <div className="primary-text">All you want, delivered on time</div>

          <div className="secondary-text">
            From business branding and ui/ux design to SaaS platform or mobile
            app
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="card-item-row">
          {services.map((service: IServiceType, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
