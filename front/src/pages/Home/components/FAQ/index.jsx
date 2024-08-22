import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

import "./_style.scss";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is an Email Signature?",
      answer:
        "An email signature is a personalized block of text at the end of your emails that includes your name, contact information, and other details. It enhances your professional image and makes it easy for recipients to contact you.",
    },
    {
      question: "What is an Email Signature Generator?",
      answer:
        "An Email Signature Generator is a tool that allows users to create professional and personalized email signatures easily. It typically offers features such as customizable templates, social media links, logos, banners, and contact information, ensuring a consistent and polished look for all email communications.",
    },
    {
      question: "How to set up an email signature in Gmail?",
      answer:
        "To set up an email signature in Gmail with our service, simply provide the correct email login details for integration. Our tool will automatically add your personalized signature to your Gmail account.",
    },
    {
      question: "What are the advantages of an email signature?",
      answer: "An email signature offers you multiple templates, personalized signatures for every employee in any size company",
    },
    {
      question: "What does an email signature offer me?",
      answer:
        "An email signature offers you multiple templates, personalized signatures for every employee in any size company, and links to social media and websites. It also provides marketing campaign capabilities with various banners, bulk creation, and automatic integration.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
 
      <section className="support FAQ ">
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
                    <div className="faq-question-header">
                      <h5 className="etxt-text">{faq.question}</h5>
                      <CiCircleChevDown />
                    </div>
                    {activeIndex === index && (
                      <div className="faq-answer">
                        <p className="font-weight-400">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default FAQs;
