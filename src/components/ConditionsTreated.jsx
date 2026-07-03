"use client";

import { motion } from 'framer-motion';

export default function ConditionsTreated() {
  const conditions = [
    "Back Pain & Sciatica",
    "Neck Pain & Whiplash",
    "Headaches & Migraines",
    "Sports Injuries",
    "Auto Accident Injuries",
    "Shoulder & Arm Pain",
    "Hip & Knee Pain",
    "Neuropathy",
  ];

  return (
    <section id="conditions" className="py-5 bg-white">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-uppercase text-primary fw-bold" style={{ letterSpacing: '2px' }}>
                Conditions We Treat
              </span>
              <h2 className="display-5 fw-bold mb-4 mt-2 text-dark">
                Don't Let Pain Dictate Your Life
              </h2>
              <p className="lead text-secondary mb-4">
                We've helped thousands of patients in League City overcome chronic and acute pain conditions without the need for surgery or heavy medications.
              </p>
              <ul className="list-unstyled mb-4">
                {conditions.map((condition, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="d-flex align-items-center mb-3 fs-5"
                  >
                    <div className="text-success me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    </div>
                    {condition}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="col-lg-6 offset-lg-1">
            <motion.div 
              className="row g-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              <div className="col-6">
                <motion.div 
                  className="rounded-4 overflow-hidden mb-3 bg-secondary"
                  style={{ height: '300px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white">
                    <span className="opacity-50">Image 1</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="rounded-4 overflow-hidden bg-primary"
                  style={{ height: '200px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                   <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white">
                    <span className="opacity-50">Image 2</span>
                  </div>
                </motion.div>
              </div>
              <div className="col-6 mt-5">
                <motion.div 
                  className="rounded-4 overflow-hidden mb-3 bg-dark"
                  style={{ height: '200px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white">
                    <span className="opacity-50">Image 3</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="rounded-4 overflow-hidden bg-secondary"
                  style={{ height: '300px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white">
                    <span className="opacity-50">Image 4</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
