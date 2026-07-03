"use client";

import { motion } from 'framer-motion';

export default function AboutUs() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-lg-5">
        <div className="row align-items-stretch">
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5 d-flex flex-column justify-content-center py-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.span variants={textVariants} className="text-uppercase text-primary fw-bold" style={{ letterSpacing: '2px' }}>
                About Pharaoh Health & Rehab
              </motion.span>
              <motion.h2 variants={textVariants} className="display-5 fw-bold mb-4 mt-2 text-dark">
                Your Journey to <span style={{ color: '#946c44' }}>Optimal Health</span> Starts Here
              </motion.h2>
              <motion.p variants={textVariants} className="lead text-secondary mb-4">
                At Pharaoh Health and Rehab in League City, TX, we believe that true healing goes beyond just masking symptoms. We are dedicated to finding the root cause of your pain and providing personalized, comprehensive care.
              </motion.p>
              <motion.p variants={textVariants} className="text-muted mb-4">
                Whether you're recovering from a sports injury, an auto accident, or dealing with chronic back and neck pain, our state-of-the-art facility and experienced team are equipped to help you recover faster and perform better. We combine advanced chiropractic techniques with specialized sports rehab to ensure you not only get out of pain but stay out of pain.
              </motion.p>
              
              <motion.div variants={textVariants} className="d-flex align-items-center mt-4">
                <div className="d-flex align-items-center me-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#946c44" className="bi bi-person-hearts" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1-1 1-1 1s1 0 1-1 1-4 6-4 6 3 6 4-1 1-1 1H0Zm11-9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0">Personalized Care</h5>
                    <small className="text-muted">1-on-1 Treatments</small>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#946c44" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0">5-Star Rated</h5>
                    <small className="text-muted">Trusted by Patients</small>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="position-relative h-100"
            >
              <div className="rounded-4 overflow-hidden shadow-lg position-relative h-100" style={{ minHeight: '400px' }}>
                <img src="https://pharchiro.com/wp-content/uploads/customized-chiropractic-care.jpg" alt="Clinic Staff" className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover', objectPosition: '80% 50%' }} />
              </div>
              <div className="position-absolute bottom-0 start-0 translate-middle bg-white p-4 rounded-4 shadow-lg text-center" style={{ marginLeft: '20%', marginBottom: '20px' }}>
                <h3 className="fw-bold mb-0" style={{ color: '#946c44' }}>10+</h3>
                <p className="fw-medium mb-0 text-dark">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
