"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeskangleLogoLight, DeskangleLogoDark } from "@/app/_assets";
import "./TopBar.scss";

const TopBar = () => {
  const currentPath = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, []);

  const handlePageScroll = () => {
    const scrollValue = window.scrollY > 60;
    setIsScrolled(scrollValue);
  };

  return (
    <header className={`${isScrolled && "is-scrolled"}`}>
      <div className="header-container app-container">
        {/* BRAND LOG */}
        <Link href="/">
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
          <Link href="/about-us" className="nav-item">
            About
          </Link>

          <Link href="/" className="nav-item">
            Work
          </Link>

          <Link href="/services" className="nav-item">
            Services
          </Link>

          <Link href="/insights" className="nav-item">
            Pricing
          </Link>

          <Link href="/process" className="nav-item">
            Process
          </Link>
        </nav>

        <Link href="/" className="btn btn-primary-green nav-item-btn">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default TopBar;
