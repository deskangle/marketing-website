"use client";

import React, { useState, useEffect } from "react";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";
import "./ScrollTop.scss";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Check scroll position
  const checkScroll = () => {
    if (window.scrollY > 1200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll); // Cleanup
  }, []);

  return (
    <div
      className={`scroll-top ${!isVisible && "!hidden"}`}
      onClick={scrollToTop}
    >
      <ChevronUpIcon className="icon" />
    </div>
  );
};

export default ScrollTop;
