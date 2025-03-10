import React, { useState } from "react";
import "../style/faqsection.css";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample FAQ data (customize as needed)
  const faqs = [
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question:
        "Will investors be able to have multiple Common Account Numbers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ];

  const toggleFAQ = (index) => {
    // Close if the same FAQ is clicked, otherwise open the new one
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            {/* Question row */}
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p
                className="question-text"
                style={{
                  color: activeIndex !== index ? "#525252" : "",
                }}
              >
                {faq.question}
              </p>
              <div className="icon-wrapper">
                {/* Inline SVG for plus/minus icon */}
                {activeIndex === index ? (
                  /* Minus icon */
                  <img className="faqicon" src="/svgs/minus.svg" alt="" />
                ) : (
                  /* Plus icon */
                  <img className="faqicon" src="/svgs/add.svg" alt="" />
                )}
              </div>
            </div>

            {/* Answer (visible only if this FAQ is active) */}
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
