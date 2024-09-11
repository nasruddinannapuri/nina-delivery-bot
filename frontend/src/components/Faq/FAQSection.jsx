import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How does it work?",
      answer: "Our autonomous vehicles pick up, transport, and deliver your parcels seamlessly."
    },
    {
      question: "Which areas are covered?",
      answer: "We operate in multiple urban locations listed on our website."
    },
    {
      question: "Are deliveries safe?",
      answer: "Yes, our vehicles are equipped with advanced safety features and are constantly monitored."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up on our website or mobile app to begin using our delivery services."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;