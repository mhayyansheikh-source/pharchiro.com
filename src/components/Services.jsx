"use client";

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Chiropractic Adjustments",
      desc: "Restore joint function, reduce pain, and improve overall nervous system communication with precise adjustments.",
      image: "https://pharchiro.com/wp-content/uploads/chiropractic-adjustement-on-back-300x300.jpg"
    },
    {
      title: "Sports Rehabilitation",
      desc: "Recover faster and perform at your peak with targeted rehab protocols designed specifically for athletes.",
      image: "https://pharchiro.com/wp-content/uploads/sports-injury-chiropractic-care-550x550.jpg"
    },
    {
      title: "Dry Needling",
      desc: "Release deep muscle tension, trigger points, and myofascial pain with precise dry needling therapy.",
      image: "https://pharchiro.com/wp-content/uploads/dry-needling-services-300x200.jpg"
    },
    {
      title: "Functional Movement",
      desc: "Identify movement dysfunctions and imbalances to prevent injuries and optimize athletic performance.",
      image: "https://pharchiro.com/wp-content/uploads/screening.jpg"
    },
    {
      title: "Cupping Therapy",
      desc: "Promote blood flow, reduce inflammation, and enhance cellular repair with traditional cupping techniques.",
      image: "https://pharchiro.com/wp-content/uploads/cupping-services-550x550.jpg"
    },
    {
      title: "Manual Therapy",
      desc: "Break up scar tissue and adhesions in muscles and fascia for improved mobility and reduced pain.",
      image: "https://pharchiro.com/wp-content/uploads/manual-300x300.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-uppercase text-primary fw-bold" 
            style={{ letterSpacing: '2px' }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="display-5 fw-bold mt-2 text-dark"
          >
            Comprehensive Treatment Options
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="lead text-secondary mt-3 mx-auto" 
            style={{ maxWidth: '700px' }}
          >
            We utilize a multi-disciplinary approach to heal your body and prevent future injuries. Discover how we can help you thrive.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="row g-4"
        >
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <motion.div variants={itemVariants} className="card h-100 border-0 shadow-sm rounded-4 hover-lift overflow-hidden">
                <img src={service.image} alt={service.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-muted mb-0">{service.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
      `}</style>
    </section>
  );
}
