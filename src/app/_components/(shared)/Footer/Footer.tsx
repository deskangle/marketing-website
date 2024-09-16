import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DeskangleLogoDark } from "@/app/_assets";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="app-container">
        {/* FOOTER TOP */}
        <div className="footer-top">
          {/* BRAND DETAILS BLOCK */}
          <div className="brand-details-block">
            {/* BRAND LOGO */}
            <Image
              src={DeskangleLogoDark}
              alt="Deskangle logo"
              width={200}
              height={100}
            ></Image>

            {/* BRNAD SLOGAN */}
            <div className="brand-slogan">
              We partner with startups and Fortune 500 companies to create
              custom digital experiences that drive results and help them stand
              out in a competitive market.
            </div>

            {/* ACTION BUTTON ROW */}
            <div className="action-btn-row">
              <Link href="/" className="btn btn-primary-green nav-item-btn">
                Contact Us
              </Link>

              <Link
                href="/"
                className="btn btn-primary-green-outline nav-item-btn"
              >
                Refer Us
              </Link>
            </div>
          </div>

          {/* PAGE LINKS BLOCK */}
          <div className="page-links-block">
            <div className="page-links">
              <div className="section-links">
                <div className="link-header">Company</div>

                <div className="nav-item-list">
                  <Link href="/" className="nav-item">
                    Services
                  </Link>

                  <Link href="/" className="nav-item">
                    Our Process
                  </Link>

                  <Link href="/" className="nav-item">
                    Our Work
                  </Link>

                  <Link href="/" className="nav-item">
                    Pricing Plans
                  </Link>
                  {/* 
                  <Link href="/" className="nav-item">
                    Insights
                  </Link> */}
                </div>
              </div>

              <div className="section-links">
                <div className="link-header">Socials</div>

                <div className="nav-item-list">
                  <Link href="#" className="nav-item nav-item-flex">
                    <div className="icon icon-twitter-x"></div>
                    <div>Twitter</div>
                  </Link>

                  <Link href="#" className="nav-item nav-item-flex">
                    <div className="icon icon-instagram"></div>
                    <div>Instagram</div>
                  </Link>

                  <Link href="#" className="nav-item nav-item-flex">
                    <div className="icon icon-linkedin"></div>
                    <div>LinkedIn</div>
                  </Link>

                  <Link href="#" className="nav-item nav-item-flex">
                    <div className="icon icon-youtube"></div>
                    <div>Youtube</div>
                  </Link>

                  {/* <Link href="#" className="nav-item nav-item-flex">
                    <div className="icon icon-youtube"></div>
                    <div>Tiktok</div>
                  </Link> */}
                </div>
              </div>

              <div className="section-links">
                <div className="link-header">Contact Us</div>

                <div className="nav-item-list">
                  <Link
                    href="tel:+2348058130913"
                    className="nav-item nav-item-flex"
                  >
                    <PhoneIcon className="w-[17px] h-[17px]" />
                    <div>+(234)-80-5813-0913</div>
                  </Link>

                  <Link
                    href="tel:+2348058130913"
                    className="nav-item nav-item-flex"
                  >
                    <div className="icon icon-whatsapp"></div>
                    <div>+(234)-80-5813-0913</div>
                  </Link>

                  <Link
                    href="mail:hello@deskangle.com"
                    className="nav-item nav-item-flex"
                  >
                    <EnvelopeIcon className="w-[18px] h-[18px]" />
                    <div>hello@deskangle.com</div>
                  </Link>

                  <Link href="#" className="nav-item nav-item-flex">
                    <MapPinIcon className="w-[18px] h-[18px]" />
                    <div>Lagos, Nigeria</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BASE */}
        <div className="footer-base">
          <div className="base-links">
            <Link href="/privacy-policy" className="nav-item">
              Privacy policy
            </Link>

            <Link href="terms-of-use" className="nav-item">
              Terms of use
            </Link>

            <Link href="sitemap" className="nav-item">
              Sitemap
            </Link>
          </div>

          <div className="copyright-text">
            &copy; 2024 Deskangle Studios. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
