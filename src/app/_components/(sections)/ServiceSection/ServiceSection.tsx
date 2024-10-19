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
        "Custom Web & App Development",
        "API Integration",
        "Continuous Optimization & Maintenance",
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

          <div className="primary-text primary-text-mobile">
            <div>All you want,</div> <div>delivered on time</div>
          </div>

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
