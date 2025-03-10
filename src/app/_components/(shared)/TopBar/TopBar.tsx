"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/app/_components";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { DeskangleLogoDark } from "@/app/_assets";
import "./TopBar.scss";

const TopBar = () => {
  const currentPath = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, []);

  const handlePageScroll = () => {
    const scrollValue = window.scrollY > 60;
    setIsScrolled(scrollValue);
  };

  return (
    <>
      <header className={`${isScrolled && "is-scrolled"}`}>
        <div className="header-container app-container">
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

          {/* NAV ITEMS */}
          <nav>
            <Link href="/#about" className="nav-item">
              About
            </Link>

            <Link href="/#work" className="nav-item">
              Work
            </Link>

            <Link href="/#services" className="nav-item">
              Services
            </Link>

            <Link href="/#pricing" className="nav-item">
              Pricing
            </Link>

            <Link href="/#process" className="nav-item">
              Process
            </Link>
          </nav>

          <Link
            href="https://cal.com/deskangle-studios/30min"
            target="_blank"
            className="btn btn-primary-green nav-item-btn"
          >
            {`Let's talk`}
          </Link>

          {/* HAMBURGER MENU */}
          <div className="menu-bar" onClick={toggleMobileMenu}>
            <Bars3Icon />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {showMobileMenu && <MobileMenu toggleMenu={toggleMobileMenu} />}
    </>
  );
};

export default TopBar;
