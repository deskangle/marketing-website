import React from "react";
import { GridLines } from "@/app/_components";
import "../pages.scss";

const TermsofUse = () => {
  return (
    <>
      <div className="app-container">
        <div className="w-1/2 lg:w-4/5 md:w-full mx-auto">
          {/* TOP CONTAINER */}
          <div className="top-container">
            <div className="content-area">
              <h2 className="page-title">TERMS OF USE</h2>
            </div>
            ;
          </div>

          {/* BODY CONTAINER */}
          <div className="body-container">
            <div className="paragraph-text">
              Welcome to Deskangle Studios! These Terms of Use outline the rules
              and guidelines for using our website and services. By accessing or
              using our site, you agree to these terms, if you don't agree,
              please don't use our services.
            </div>

            {/* ------ */}
            <div className="header-text">1. Acceptance of Terms</div>

            <div className="paragraph-text">
              By using our website or services, you acknowledge that you have
              read, understood, and accepted these Terms of Use. Deskangle
              reserves the right to update these terms at any time, and any
              changes will be effective immediately upon posting. We encourage
              you to review these terms regularly to stay informed.
            </div>

            {/* -------- */}
            <div className="header-text">2. Use of Our Services</div>

            <div className="paragraph-text">
              You agree to use our website and services lawfully, responsibly,
              and respectfully. Specifically, you must not:
            </div>

            <ul className="item-list">
              <li>
                Violate any applicable local, national, or international laws or
                regulations.
              </li>
              <li>
                Infringe on any intellectual property rights, including
                trademarks, copyrights, and patents.
              </li>
              <li>
                Attempt to hack, damage, or disrupt our site’s functionality or
                security features.
              </li>
              <li>
                Use automated systems, like bots, to access our services without
                permission.
              </li>
              <li>
                Engage in unauthorized marketing, spamming, or phishing
                activities.
              </li>
              <li>
                Misrepresent yourself, impersonate others, or provide false
                information.
              </li>
            </ul>

            <div className="paragraph-text">
              Any violation of these rules may result in immediate termination
              of your access to our services.
            </div>

            {/* ------- */}
            <div className="header-text">3. Intellectual Property</div>

            <div className="paragraph-text">
              All content on this website, including text, logos, graphics,
              images, videos, and software, is the exclusive property of
              Deskangle or our licensors. This content is protected by
              intellectual property laws. You may not copy, distribute, modify,
              or use any content without our express written permission.
              Unauthorized use of our intellectual property is strictly
              prohibited.
            </div>

            {/* ------- */}
            <div className="header-text">4. User Contributions</div>

            <div className="paragraph-text">
              If you submit feedback, ideas, or suggestions, whether through
              forms, email, or other communication methods, you agree that
              Deskangle has the right to use, modify, and incorporate those
              contributions into our services without compensation or obligation
              to you. Your ideas help us grow, but we retain full discretion
              over their implementation.
            </div>

            {/* ------- */}
            <div className="header-text"> 5. Limitation of Liability</div>

            <div className="paragraph-text">
              While we work hard to keep our website accurate and fully
              functional, Deskangle does not guarantee that the site will always
              be available, error-free, or secure. We are not responsible for
              any direct, indirect, incidental, or consequential damages that
              may arise from your use of our website or services. This includes,
              but is not limited to, data loss, service interruptions, or errors
              in content.
            </div>

            <div className="paragraph-text">
              By using our services, you acknowledge that you assume full
              responsibility for any risks associated with using our website.
            </div>

            {/* ------- */}
            <div className="header-text">6. Third-Party Links</div>

            <div className="paragraph-text">
              Our website may include links to third-party websites for your
              convenience. These links do not imply Deskangle's endorsement or
              control of these external sites. We are not responsible for the
              content, privacy practices, or security of any third-party
              websites. Visiting linked sites is at your own risk, and we
              encourage you to review their terms and privacy policies.
            </div>

            {/* ------- */}
            <div className="header-text">7. Termination of Use</div>

            <div className="paragraph-text">
              We reserve the right to suspend or terminate your access to our
              website or services if you breach these terms, misuse our
              platform, or engage in any activities that may harm Deskangle, our
              users, or our partners. Termination may occur without prior
              notice, depending on the severity of the breach.
            </div>

            {/* ------- */}
            <div className="header-text">8. Governing Law</div>

            <div className="paragraph-text">
              These Terms of Use are governed by and interpreted in accordance
              with the laws of Lagos state, Nigeria. Any legal disputes arising
              from these terms will be resolved exclusively in the courts of
              Nigeria.
            </div>

            {/* ------- */}
            <div className="header-text">9. Changes to These Terms</div>

            <div className="paragraph-text">
              We may update these Terms of Use from time to time to reflect
              changes in our services, legal obligations, or business practices.
              When we make significant updates, we will notify you, either by
              email (if applicable) or through a clear notice on our website.
              The most recent version of these terms will always be available
              here.
            </div>

            {/* ------- */}
            <div className="header-text">10. Contact Us</div>

            <div className="paragraph-text">
              If you have any questions, concerns, or feedback about these Terms
              of Use, please feel free to reach out to us:
            </div>

            <div className="paragraph-text">
              <p>Deskangle Studios</p>
              <p>Lagos, Nigeria</p>
              <p>
                <a href="mailto:hello@deskangle.com">hello@deskangle.com</a>
              </p>
            </div>

            <div className="paragraph-text">
              By using our website and services, you agree to abide by these
              terms. Thank you for trusting us and being part of our community
              as we build innovative solutions together.
            </div>
          </div>
        </div>
      </div>

      <GridLines />
    </>
  );
};

export default TermsofUse;
