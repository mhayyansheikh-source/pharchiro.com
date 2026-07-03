"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Prefooter() {
  return (
    <section className="py-5" style={{ backgroundColor: '#946c44', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decor */}
      <div 
        className="position-absolute rounded-circle" 
        style={{ width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', top: '-100px', right: '-50px' }}
      ></div>
      <div 
        className="position-absolute rounded-circle" 
        style={{ width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', bottom: '-50px', left: '10%' }}
      ></div>

      <div className="container py-lg-5 position-relative z-1 text-center text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-4 fw-bold mb-4"
            >
              Ready to Get Out of Pain?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lead mb-5 opacity-75"
            >
              Take the first step towards a pain-free life. Schedule your consultation today and let our expert team design a personalized treatment plan for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="#contact" className="btn btn-light text-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg hover-scale">
                Book Your Appointment Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.2s ease-in-out;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
