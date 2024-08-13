import { useState } from "react";
import SectionHeader from "../../../../components/common/SectionHeader";
import { CiCircleChevDown } from "react-icons/ci";

import "./_style.scss";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is email signature software?",
      answer:
        "Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus.",
    },
    {
      question: "How to add a global Office 365 signature?",
      answer:
        "Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus.",
    },
    {
      question: "How to edit an email signature in Office 365?",
      answer:
        "Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus.",
    },
    {
      question: "How to create an email signature in Exchange?",
      answer:
        "Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus.",
    },
    {
      question: "How to create an email signature in Google Workspace?",
      answer:
        "Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <SectionHeader header="Frequently Asked Questions" />
      <section className="support FAQ my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 faqs">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-container ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question flex-container flex-justify-space-between">
                    <h5>{faq.question}</h5>
                    <CiCircleChevDown />
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              <div className="col-12 flex-container flex-justify-center my-5">
                <p className="support-question">
                  Still have a question? <a href="#">Ask your question here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
