"use client";

import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { IServiceType } from "@/app/_types";
import ServiceCardItemRow from "./ServiceCardItemRow/ServiceCardItemRow";
import "./ServiceCard.scss";

const defaultOptions: Record<string, number> = {
  scale: 0.98,
  speed: 3000,
};

const ServiceCard = ({ service }: { service: IServiceType }) => {
  return (
    <Tilt options={defaultOptions}>
      <div className="service-card">
        {/* SERVICE ICON */}
        <Image
          src={service.icon}
          alt={service.title}
          className="service-img"
        ></Image>

        {/* SERVICE TITLE */}
        <div className="service-title">{service.title}</div>

        {/* SERVICE DESCRIPTION */}
        <div className="service-description">{service.description}</div>

        {/* SERVICE LIST TITLE */}
        <div className="service-list-title">{service.listTitle}</div>

        {/* LIST ITEMS */}
        <div className="list-items">
          {service.serviceList.map((item: string, index: number) => (
            <ServiceCardItemRow key={index} item={item} />
          ))}
        </div>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
