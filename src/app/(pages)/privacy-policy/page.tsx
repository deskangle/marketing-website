import React from "react";
import { GridLines } from "@/app/_components";
import "../pages.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="app-container">
        <div className="w-1/2 lg:w-4/5 md:w-full mx-auto">
          {/* TOP CONTAINER */}
          <div className="top-container">
            <div className="content-area">
              <h2 className="page-title">PRIVACY POLICY</h2>
              <p className="page-subtitle">
                OUR PERSONAL STATEMENT, COOKIES, THIRD PARTIES
              </p>
            </div>
          </div>

          {/* BODY CONTAINER */}
          <div className="body-container">
            <div className="paragraph-text">
              {`  At Deskangle Studios, your privacy is at the heart of what we do.
              We want you to feel confident and secure when sharing your
              information with us. This Privacy Policy explains, in clear and
              simple terms, what personal data we collect, how we use it, and
              the steps we take to protect it. Our goal is transparency,
              ensuring you always know how your data is handled and giving you
              control over your personal information.`}
            </div>

            {/* ------ */}
            <div className="header-text">1. Information We Collect</div>

            <div className="paragraph-text">
              {` We collect certain types of personal information when you interact
              with our website or services, including but not limited to:`}
            </div>

            <ul className="item-list">
              <li>
                <span>Your Name and Email</span>: Gathered through contact forms
                so we can respond to your questions, provide updates about your
                projects, and share relevant service information.
              </li>
              <li>
                <span>Project Details</span>: Information about your product,
                including its goals, scope, and technical requirements; to
                customize our services to better suit your needs.
              </li>
              <li>
                <span>Analytics Data</span>: We use Google Analytics to collect
                data such as your IP address, browser type, device information,
                pages you visit, session duration, and how you arrived at our
                site. This data helps us understand visitor behavior and
                optimize user experience.
              </li>
              <li>
                <span>Payment Information</span>: Payment details are securely
                processed through our payment gateway for invoicing, transaction
                handling, and billing.
              </li>
              <li>
                <span>Communication Records</span>: We maintain records of
                emails, inquiries, and feedback to provide consistent support,
                personalize future interactions, and improve our services.
              </li>
            </ul>

            {/* -------- */}
            <div className="header-text">2. How We Use Your Information</div>

            <div className="paragraph-text">
              We use the information we collect for the following purposes:
            </div>

            <ul className="item-list">
              <li>
                To deliver the services you’ve requested and manage project
                timelines.
              </li>
              <li>
                To communicate with you about your projects, respond to
                inquiries, and share important updates.
              </li>
              <li>To securely process payments and ensure accurate billing.</li>
              <li>
                To analyze how users interact with our website and identify ways
                to enhance user experience.
              </li>
              <li>
                To strengthen our customer support by learning from previous
                interactions.
              </li>
              <li>
                To innovate and develop new products, features, or service
                offerings.
              </li>
              <li>
                To send newsletters, promotions, or special offers — but only if
                you’ve given us your consent.
              </li>
              <li>
                To comply with legal obligations, enforce agreements, or respond
                to official requests when necessary.
              </li>
            </ul>

            <div className="header-text">3. Sharing Your Information</div>

            <div className="paragraph-text">
              We take your privacy seriously and never sell your personal
              information. However, we may share data with trusted partners when
              necessary, such as:
            </div>

            <ul className="item-list">
              <li>Payment Processors: To securely handle transactions.</li>
              <li>
                Analytics Services: Google Analytics helps us gather insights
                about how users interact with our site.
              </li>
              <li>
                Service Providers: Trusted partners may assist us with technical
                support, website maintenance, or marketing efforts.
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                business sale, your data may be transferred to the new owner.
              </li>
              <li>
                Legal Obligations: We may disclose information when required by
                law or to protect our legal rights.
              </li>
            </ul>

            {/* ------- */}
            <div className="header-text">4. Your Rights</div>

            <div className="paragraph-text">
              You have full control over your personal data. You can:
            </div>

            <ul className="item-list">
              <li>
                Access Your Data: Request confirmation on whether we’re
                processing your data and receive a copy.
              </li>
              <li>
                Correct Your Data: Notify us of any inaccuracies so we can
                update your records.
              </li>
              <li>
                Erase Your Data: Request data deletion under certain
                circumstances.
              </li>
              <li>
                Data Portability: Obtain your data in a structured format for
                transfer to another service.
              </li>
              <li>
                Withdraw Consent: Opt out of receiving marketing communications
                at any time.
              </li>
              <li>
                Restrict Processing: Limit how we use your data in specific
                situations.
              </li>
              <li>
                Object to Processing: Raise concerns about how we’re using your
                data.
              </li>
            </ul>

            <div className="paragraph-text">
              To exercise any of these rights, simply email us at{" "}
              <a href="mailto:hello@deskangle.com">hello@deskangle.com</a>. We
              aim to respond promptly.
            </div>

            {/* ------- */}
            <div className="header-text"> 5. How We Protect Your Data</div>

            <div className="paragraph-text">
              We implement strong security measures to protect your data,
              including:
            </div>

            <ul className="item-list">
              <li>Encryption to safeguard sensitive information.</li>
              <li>Secure servers and firewall protection.</li>
              <li>
                Access controls to limit data exposure to authorized personnel
                only.
              </li>
              <li>
                Regular security audits and updates to address potential
                vulnerabilities.
              </li>
            </ul>

            <div className="paragraph-text">
              While no system is entirely immune to cyber threats, we are
              committed to staying proactive and continuously strengthening our
              security practices.
            </div>

            {/* ------- */}
            <div className="header-text">6. Data Retention</div>

            <div className="paragraph-text">
              We retain your personal data only as long as needed, whether to
              provide our services, meet legal requirements, or resolve
              disputes. Once your data is no longer necessary, we securely
              delete or anonymize it.
            </div>

            {/* ------- */}
            <div className="header-text">7. Updates to This Privacy Policy</div>

            <div className="paragraph-text">
              We may revise this Privacy Policy occasionally to reflect changes
              in our operations, legal requirements, or technological
              advancements. Significant updates will be communicated via email
              or through clear notices on our website. The most recent version
              of this policy will always be available here.
            </div>

            {/* ------- */}
            <div className="header-text">8. Contact Us</div>

            <div className="paragraph-text">
              We’re here to answer any questions or concerns about how we handle
              your data. Feel free to reach out:
            </div>

            <div className="paragraph-text">
              <p>Deskangle Studios</p>
              <p>Lagos, Nigeria</p>
              <p>
                <a href="mailto:hello@deskangle.com">hello@deskangle.com</a>
              </p>
            </div>

            <div className="paragraph-text">
              By using our website, you acknowledge and agree to the terms of
              this Privacy Policy. If you disagree with any part of it, we
              advise you to discontinue using our services.
            </div>
          </div>
        </div>
      </div>

      <GridLines />
    </>
  );
};

export default PrivacyPolicy;
