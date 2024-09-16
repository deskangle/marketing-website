import React from "react";
import "./FAQSection.scss";
import { FAQCard } from "@/app/_components";

const faqs = [
  {
    question: "How long does the branding design process take?",
    answer:
      "The timeline depends on the scope and revisions. Typically, a full branding package can be delivered within 1-2 weeks.",
  },
  {
    question: "What do you need from me to start the branding design?",
    answer:
      "We require insights into your business goals, target audience, and any existing materials. A brand questionnaire will help guide the process.",
  },
  {
    question: "Do you offer custom software development?",
    answer:
      "Yes, we specialize in custom software development, including web and mobile applications, tailored to your business needs.",
  },
  {
    question: "What if I want changes after the product is developed?",
    answer:
      "We provide post-launch support and flexible revision packages to ensure the product continues to meet your needs.",
  },
  {
    question: "Can you help with product development and launch strategy?",
    answer:
      "Absolutely. We assist with product design, prototyping, and provide go-to-market strategies to ensure a successful launch.",
  },
  {
    question: "Can you help with product development and launch strategy?",
    answer:
      "Yes, our product development services include everything from initial ideation and design to prototyping, development, and go-to-market strategies. We work closely with you to ensure your product's success.",
  },
];

const FAQSection = () => {
  return (
    <div className="faq-section">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <div className="primary-text">Frequently Asked Questions</div>
          <div className="secondary-text">
            Trusted by brands that value excellence
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
