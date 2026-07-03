"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PharchiroHero() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    concern: '',
    appointmentType: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(7); // Step 7 is Thank You
    }, 800);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column - Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <motion.div initial="hidden" animate="visible" variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}>
              <motion.span variants={textVariants} className="badge bg-primary rounded-pill mb-3 px-3 py-2 text-uppercase" style={{ backgroundColor: '#0d6efd', letterSpacing: '1px' }}>
                Top Rated in League City, TX
              </motion.span>
              <motion.h1 variants={textVariants} className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                World-Class <span style={{ color: '#0056b3' }}>Chiropractic Care</span> & Sports Rehab
              </motion.h1>
              <motion.p variants={textVariants} className="lead text-secondary mb-4">
                Experience pain relief and enhanced performance with our personalized, state-of-the-art treatments. Start your journey to recovery today.
              </motion.p>
              <motion.div variants={textVariants} className="d-flex gap-3 align-items-center">
                <div className="d-flex align-items-center">
                  <div className="text-warning me-2">
                    {'★'.repeat(5)}
                  </div>
                  <span className="fw-bold">5.0</span>
                </div>
                <span className="text-muted border-start ps-3">Hundreds of happy patients</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 6 Step Form */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ background: '#ffffff' }}>
              <div className="card-body p-4 p-md-5">
                
                {step < 7 && (
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted fw-semibold small">Step {step} of 6</span>
                      <span className="badge bg-light text-dark border">{Math.round((step / 6) * 100)}% Completed</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${(step / 6) * 100}%` }}></div>
                    </div>
                  </div>
                )}

                <div style={{ position: 'relative', minHeight: '300px' }}>
                  <AnimatePresence mode="wait">
                    
                    {step === 1 && (
                      <motion.div key="step1" variants={formVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                        <h4 className="fw-bold mb-4">Where does it hurt?</h4>
                        <div className="row g-3">
                          {['Back Pain', 'Neck Pain', 'Sports Injury', 'Shoulder/Arm', 'Hip/Leg', 'Other'].map((item) => (
                            <div className="col-6" key={item}>
                              <button 
                                type="button"
                                className={`btn w-100 py-3 ${formData.concern === item ? 'btn-primary' : 'btn-outline-secondary'}`}
                                onClick={() => {
                                  setFormData({...formData, concern: item});
                                  handleNext();
                                }}
                              >
                                {item}
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" variants={formVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                        <h4 className="fw-bold mb-4">What type of appointment?</h4>
                        <div className="d-grid gap-3">
                          {['Initial Consultation & Exam', 'Follow-up Treatment', 'Massage Therapy'].map((item) => (
                            <button 
                              key={item}
                              type="button"
                              className={`btn py-3 text-start px-4 ${formData.appointmentType === item ? 'btn-primary' : 'btn-outline-secondary'}`}
                              onClick={() => {
                                setFormData({...formData, appointmentType: item});
                                handleNext();
                              }}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-link text-muted px-0" onClick={handlePrev}>← Back</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" variants={formVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                        <h4 className="fw-bold mb-4">What's your name?</h4>
                        <div className="mb-4">
                          <label className="form-label text-muted">Full Name</label>
                          <input 
                            type="text" 
                            className="form-control form-control-lg bg-light" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <button className="btn btn-link text-muted px-0" onClick={handlePrev}>← Back</button>
                          <button className="btn btn-primary px-4 py-2" onClick={handleNext} disabled={!formData.name}>Next Step →</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div key="step4" variants={formVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                        <h4 className="fw-bold mb-4">How can we reach you?</h4>
                        <div className="mb-3">
                          <label className="form-label text-muted">Email Address</label>
                          <input 
                            type="email" 
                            className="form-control form-control-lg bg-light" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label text-muted">Phone Number</label>
                          <input 
                            type="tel" 
                            className="form-control form-control-lg bg-light" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <button className="btn btn-link text-muted px-0" onClick={handlePrev}>← Back</button>
                          <button className="btn btn-primary px-4 py-2" onClick={handleNext} disabled={!formData.email || !formData.phone}>Next Step →</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 5 && (
                      <motion.div key="step5" variants={formVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                        <h4 className="fw-bold mb-4">When works best for you?</h4>
                        <div className="row g-3 mb-4">
                          <div className="col-sm-6">
                            <label className="form-label text-muted">Preferred Date</label>
                            <input 
                              type="date" 
                              className="form-control form-control-lg bg-light" 
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label text-muted">Time of Day</label>
                            <select className="form-select form-select-lg bg-light" name="time" value={formData.time} onChange={handleChange}>
                              <option value="">Select Time...</option>
                              <option value="Morning">Morning (8am - 12pm)</option>
                              <option value="Afternoon">Afternoon (12pm - 4pm)</option>
                              <option value="Evening">Evening (4pm - 6pm)</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <button className="btn btn-link text-muted px-0" onClick={handlePrev}>← Back</button>
                          <button className="btn btn-primary px-4 py-2" onClick={handleNext} disabled={!formData.date || !formData.time}>Next Step →</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 6 && (
                      <motion.div key="step6" variants={formVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                        <h4 className="fw-bold mb-4">Review & Submit</h4>
                        <div className="bg-light p-4 rounded-3 mb-4">
                          <p className="mb-2"><strong>Concern:</strong> {formData.concern}</p>
                          <p className="mb-2"><strong>Type:</strong> {formData.appointmentType}</p>
                          <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
                          <p className="mb-2"><strong>Contact:</strong> {formData.email} | {formData.phone}</p>
                          <p className="mb-0"><strong>Time:</strong> {formData.date} - {formData.time}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <button className="btn btn-link text-muted px-0" onClick={handlePrev}>← Back</button>
                          <button className="btn btn-success px-4 py-2 fw-bold" onClick={handleSubmit}>Request Appointment</button>
                        </div>
                      </motion.div>
                    )}

                    {step === 7 && (
                      <motion.div key="step7" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring' }} className="text-center py-4">
                        <div className="mb-4">
                          <div className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle" style={{ width: '80px', height: '80px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                          </div>
                        </div>
                        <h3 className="fw-bold mb-3">Thank You, {formData.name.split(' ')[0]}!</h3>
                        <p className="text-muted mb-0">Your appointment request has been received. Our team will contact you shortly at {formData.phone} to confirm your booking.</p>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
