"use client";

import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <section id="location" className="py-5 bg-light">
      <div className="container py-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-uppercase text-primary fw-bold" style={{ letterSpacing: '2px' }}>
                Visit Us
              </span>
              <h2 className="display-5 fw-bold mb-4 mt-2 text-dark">
                Conveniently Located in League City
              </h2>
              <p className="lead text-secondary mb-5">
                We are proud to serve League City, TX, and the surrounding communities with top-tier chiropractic and sports rehab care.
              </p>

              <div className="d-flex align-items-start mb-4">
                <div className="text-primary me-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Clinic Address</h5>
                  <p className="text-muted mb-0">
                    Pharaoh Health and Rehab<br />
                    123 Main Street, Suite 100<br />
                    League City, TX 77573
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="text-primary me-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Hours of Operation</h5>
                  <div className="text-muted">
                    <div className="d-flex justify-content-between" style={{ maxWidth: '200px' }}>
                      <span>Mon - Fri:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between" style={{ maxWidth: '200px' }}>
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between" style={{ maxWidth: '200px' }}>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="text-primary me-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Contact</h5>
                  <p className="text-muted mb-0">
                    (555) 123-4567<br />
                    info@pharchiro.com
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
          
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-4 overflow-hidden shadow-lg p-2 bg-white"
            >
              <div className="rounded-3 overflow-hidden bg-secondary w-100 d-flex align-items-center justify-content-center text-white" style={{ height: '450px' }}>
                <span className="opacity-50 fs-5">Embedded Google Map Here</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
