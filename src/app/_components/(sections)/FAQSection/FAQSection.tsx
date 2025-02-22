"use client";

import React from "react";
import { motion } from "framer-motion";
import { FAQCard } from "@/app/_components";
import "./FAQSection.scss";

const faqs = [
  {
    question: "How do you ensure our SaaS product is scalable?",
    answer:
      "We architect our systems with scalability as a priority, ensuring your SaaS product can handle increasing user loads and evolving business demands.",
  },
  {
    question: "What happens if we need changes or updates after launch?",
    answer:
      "We provide flexible post-launch support packages to adapt to your evolving needs and ensure your SaaS product continues to perform and scale effectively.",
  },
  {
    question: "Can you handle complex integrations for our SaaS application?",
    answer:
      "Yes, we specialize in seamless API integrations and custom development to ensure your SaaS application works efficiently with other software.",
  },
  {
    question:
      "How can you help us improve user engagement with our SaaS product?",
    answer:
      "We design intuitive user interfaces and experiences, leveraging user insights to ensure your product is engaging, easy to use, and drives conversion.",
  },
  {
    question: "Can you help us strategize our Go-To-Market approach?",
    answer:
      "Yes! We partner with you to create a custom Go-To-Market strategy that is aligned with your product's value proposition, positioning, and target audience for a successful launch.",
  },
];

const FAQSection = () => {
  return (
    <div className="faq-section">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <motion.div
            className="primary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.div>

          <motion.div
            className="primary-text primary-text-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>Frequently</div> <div>Asked Questions</div>
          </motion.div>

          <motion.div
            className="secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Trusted by brands that value excellence
          </motion.div>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              className="w-full"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.2,
              }}
            >
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
