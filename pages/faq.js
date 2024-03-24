import React, { useState } from "react";

const FAQs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that helps you quickly build custom designs without having to leave your HTML.",
  },
  {
    question: "How can I use this component?",
    answer:
      "You can import the FAQ component into your project and use it by passing the question and answer props.",
  },
];

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(Array(FAQs.length).fill(false));

  const toggleAccordion = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <div>
      <div className="justify-center items-center px-16 py-20 bg-gradient-to-r from-[#2F00A8] to-[#000000] max-md:px-5">
        <div className="flex justify-center">
          <p className="text-white text-2xl font-bold">
            Frequently Asked Questions
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-white">
            See all your questions and their answers on this page.
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div
                className="bg-gray-200 px-4 py-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    isOpen[index] ? "transform rotate-90" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {isOpen[index] && (
                <div className="px-4 py-3 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
