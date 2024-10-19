import React from "react";
import "./FAQSection.scss";
import { FAQCard } from "@/app/_components";

const faqs = [
  {
    question: "How long does the branding design process take?",
    answer:
      "The timeline varies based on project complexity and feedback. A typical branding package can be delivered within 1-3 weeks.",
  },
  {
    question: "What do you need from me to begin the branding process?",
    answer:
      "We’ll need details about your business goals, target audience, and any existing brand assets. We’ll also provide a brand questionnaire to gather deeper insights.",
  },
  {
    question: "Do you offer custom software development?",
    answer:
      "Yes, we specialize in custom web and mobile applications tailored to meet your business's unique needs.",
  },
  {
    question: "What if I want revisions after the product launch?",
    answer:
      "We offer post-launch support and revision packages to accommodate any necessary changes or updates as your business evolves.",
  },
  {
    question: "Can you assist with product development and launch strategies?",
    answer:
      "Absolutely! From product design to prototyping and go-to-market strategies, we collaborate to ensure a smooth and successful launch.",
  },
  {
    question: "What differentiates your branding services from others?",
    answer:
      "We focus on creating holistic brand strategies that not only visually appeal but align with your business goals to build long-lasting brand recognition.",
  },
];

const FAQSection = () => {
  return (
    <div className="faq-section">
      <div className="app-container">
        {/* TOP ROW */}
        <div className="top-header-row">
          <div className="primary-text">Frequently Asked Questions</div>

          <div className="primary-text primary-text-mobile">
            <div>Frequently</div> <div>Asked Questions</div>
          </div>

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
