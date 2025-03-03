"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { DeskangleLogoDark } from "@/app/_assets";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { GridLines } from "@/app/_components";
import "./MobileMenu.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const MobileMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const closeMenu = () => {
    setTimeout(() => toggleMenu(), 300);
  };

  return (
    <div className="mobile-menu">
      <div className="app-container menu-wrapper">
        {/* MENU TOP */}
        <div className="menu-top">
          {/* BRAND LOG */}
          <Link href="/#">
            <Image
              src={DeskangleLogoDark}
              alt="Deskangle logo"
              className="brand-logo"
              width={175}
              height={85}
            ></Image>
          </Link>

          <div className="close-action" onClick={toggleMenu}>
            <XMarkIcon className="icon" />
          </div>
        </div>

        {/* MENU BOTTOM */}
        <div className="menu-bottom">
          <div className={`nav-items ${inter.className}`}>
            <Link href="/#about" className="nav-item" onClick={closeMenu}>
              About
            </Link>

            <Link href="/#work" className="nav-item" onClick={closeMenu}>
              Work
            </Link>

            <Link href="/#services" className="nav-item" onClick={closeMenu}>
              Services
            </Link>

            <Link href="/#pricing" className="nav-item" onClick={closeMenu}>
              Pricing
            </Link>

            <Link href="/#process" className="nav-item" onClick={closeMenu}>
              Process
            </Link>
          </div>
        </div>
      </div>

      {/* GRID LINES */}
      <GridLines />
    </div>
  );
};

export default MobileMenu;
