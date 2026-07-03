"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Marathon Runner",
      text: "Dr. J is incredible! I was dealing with severe knee pain that kept me from running. After just a few sessions of sports rehab and dry needling, I am back on the road and feeling stronger than ever. Highly recommend Pharaoh Health!",
      rating: 5
    },
    {
      name: "Mark Thompson",
      role: "Local Resident",
      text: "I was in a minor car accident and suffered from terrible whiplash. The team here took amazing care of me. The spinal decompression therapy worked wonders. They are true professionals.",
      rating: 5
    },
    {
      name: "Emily R.",
      role: "CrossFit Athlete",
      text: "I've been to many chiropractors, but Pharaoh Health is by far the best in League City. They don't just crack your back; they actually diagnose the problem and give you a full plan to heal.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-uppercase text-primary fw-bold" 
            style={{ letterSpacing: '2px' }}
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="display-5 fw-bold mt-2 text-dark"
          >
            Hear From Our Patients
          </motion.h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="position-relative">
              
              <div className="text-center text-warning mb-4" style={{ fontSize: '2rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-quote opacity-25" viewBox="0 0 16 16" style={{ color: '#0d6efd' }}>
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg>
              </div>

              <div style={{ minHeight: '220px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="d-flex justify-content-center mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <div key={i} className="text-warning mx-1">
                          {'★'}
                        </div>
                      ))}
                    </div>
                    <p className="fs-4 fst-italic text-dark mb-4">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <h5 className="fw-bold mb-1">{testimonials[currentIndex].name}</h5>
                    <p className="text-muted">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="d-flex justify-content-center mt-4 gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-0"
                  style={{ width: '45px', height: '45px' }}
                >
                  ←
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center p-0"
                  style={{ width: '45px', height: '45px' }}
                >
                  →
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
