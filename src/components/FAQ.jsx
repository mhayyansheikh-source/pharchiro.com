"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "We accept most major medical insurances. As coverage varies widely, we will verify your specific benefits during your initial consultation so you know exactly what is covered before any treatment begins."
    },
    {
      question: "What should I expect on my first visit?",
      answer: "Your first visit includes a comprehensive consultation, a detailed physical examination, and potentially X-rays if deemed necessary. We take the time to understand your pain, your goals, and formulate a customized treatment plan."
    },
    {
      question: "Does chiropractic adjustment hurt?",
      answer: "Chiropractic adjustments are generally painless. Many patients feel immediate relief. You might feel a slight pressure or hear a 'popping' sound, which is simply the release of gas from the joints."
    },
    {
      question: "How long will it take to get better?",
      answer: "Healing times vary depending on the severity of your condition, your age, and your overall health. Some patients feel better immediately, while chronic issues may take a few weeks or months of consistent care."
    },
    {
      question: "Do I need a referral from a medical doctor?",
      answer: "No, you do not need a referral to see a chiropractor. Chiropractors are primary care providers, meaning you can consult with us directly."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-5 bg-white">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0 pe-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-uppercase text-primary fw-bold" style={{ letterSpacing: '2px' }}>
                FAQ
              </span>
              <h2 className="display-5 fw-bold mb-4 mt-2 text-dark">
                Frequently Asked Questions
              </h2>
              <p className="lead text-secondary mb-4">
                Have questions before booking your appointment? We've got answers. If you don't see your question here, feel free to give us a call.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="accordion-item border-0 border-bottom mb-3 pb-2"
                >
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button shadow-none bg-transparent fw-bold fs-5 text-dark ${activeIndex === index ? '' : 'collapsed'}`}
                      type="button" 
                      onClick={() => toggleAccordion(index)}
                      style={{ paddingLeft: '0' }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="accordion-collapse overflow-hidden"
                      >
                        <div className="accordion-body text-secondary pb-4 px-0" style={{ fontSize: '1.1rem' }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
