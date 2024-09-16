import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./PairColumnBlock.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

type PairColumnBlockType = {
  title: string;
  children: ReactNode;
};

function PairColumnBlock({ title, children }: PairColumnBlockType) {
  return (
    <div className="pair-column-block">
      <div className="app-container">
        <div className="pair-wrapper">
          {/* TITLE BLOCK */}
          <div className={`title-block ${inter.className}`}>{title}</div>

          {/* CONTENT BLOCK */}
          <div className="content-block">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PairColumnBlock;
