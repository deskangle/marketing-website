import React from "react";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import "./ContactCTA.scss";

const ContactCTA = () => {
  return (
    <div className="contact-cta-row">
      <div className="app-container">
        <div className="action-row">
          <div className="copy-text">Partner with us today</div>

          <div className="contact-actions">
            {/* PHONE ACTION */}
            <div className="action-cta">
              <div className="icon-wrapper">
                <PhoneIcon className="icon" />
              </div>

              <div className="text">
                <Link href="tel:+2348058130913" className="text-link">
                  +234-80-5813-0913
                </Link>
              </div>
            </div>

            {/* MAIL ACTION */}
            <div className="action-cta">
              <div className="icon-wrapper">
                <EnvelopeIcon className="icon" />
              </div>

              <div className="text">
                <Link href="mail:hello@deskangle.com" className="text-link">
                  hello@deskangle.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
