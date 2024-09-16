"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import "./FAQCard.scss";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFaq}>
        <h3>{question}</h3>
        {isOpen ? (
          <MinusIcon className="icon" />
        ) : (
          <PlusIcon className="icon" />
        )}
      </div>
      {isOpen && <p className="faq-answer animate-slide-down">{answer}</p>}
    </div>
  );
};

export default FaqCard;
