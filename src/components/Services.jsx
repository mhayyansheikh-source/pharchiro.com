"use client";

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Chiropractic Adjustments",
      desc: "Restore joint function, reduce pain, and improve overall nervous system communication with precise adjustments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
        </svg>
      )
    },
    {
      title: "Sports Rehabilitation",
      desc: "Recover faster and perform at your peak with targeted rehab protocols designed specifically for athletes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
          <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
        </svg>
      )
    },
    {
      title: "Dry Needling",
      desc: "Release deep muscle tension, trigger points, and myofascial pain with precise dry needling therapy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pin-angle" viewBox="0 0 16 16">
          <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12c-.283-.06-.654-.146-1.012-.15-1.025-.011-1.631.27-1.923.562l2.97 2.97c.292-.292.573-.898.562-1.922-.004-.358-.09-.73-.15-1.013a.5.5 0 0 1 .12-.511l3.536-3.535a.5.5 0 0 1 .51-.12c.358.059.73.145 1.012.149 1.025.011 1.631-.27 1.923-.562l-2.97-2.97c-.292.292-.573.898-.562 1.922.004.358.09.73.15 1.013z"/>
        </svg>
      )
    },
    {
      title: "Spinal Decompression",
      desc: "Non-surgical relief for bulging discs, herniations, and sciatica by gently stretching the spine.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrows-collapse" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8Zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0Zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793Z"/>
        </svg>
      )
    },
    {
      title: "Cupping Therapy",
      desc: "Promote blood flow, reduce inflammation, and enhance cellular repair with traditional cupping techniques.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cup-hot" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-1.002A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>
          <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
        </svg>
      )
    },
    {
      title: "Active Release Technique",
      desc: "Break up scar tissue and adhesions in muscles and fascia for improved mobility and reduced pain.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bandaid" viewBox="0 0 16 16">
          <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.707 3.05l6.243 6.242 1.171-1.171a3 3 0 0 0 0-4.242l-2-2zM3.05 8.707 1.879 9.879a3 3 0 1 0 4.242 4.242l1.171-1.171L3.05 8.707zM7.293 4.464 4.464 7.293l4.243 4.243 2.828-2.829L7.293 4.464z"/>
          <path d="M9.414 7.293a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm.707 1.414a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm1.414 1.414a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm-4.243-4.243a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm.707 1.414a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm1.414 1.414a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm-4.243-4.243a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm.707 1.414a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414z"/>
        </svg>
      )
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
              <motion.div variants={itemVariants} className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-2 p-md-3">
                <div className="card-body">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 mb-4" style={{ width: '64px', height: '64px' }}>
                    {service.icon}
                  </div>
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
