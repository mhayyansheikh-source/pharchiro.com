"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed-top w-100 transition-all ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}
      style={{ zIndex: 1050, transition: 'all 0.3s ease-in-out' }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid px-0">
            {/* Logo */}
            <Link href="/" className="navbar-brand fw-bold fs-3 text-decoration-none">
              <span style={{ color: '#0056b3' }}>Pharaoh</span>
              <span className="text-dark">Health</span>
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="navbar-toggler border-0 shadow-none" 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Desktop Menu */}
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show bg-white p-4 shadow mt-3 rounded-3 absolute-mobile-menu' : ''}`}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                {navLinks.map((link) => (
                  <li className="nav-item mx-2" key={link.name}>
                    <Link href={link.href} className="nav-link text-dark hover-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="d-flex">
                <Link href="#contact" className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .hover-primary:hover {
          color: #0d6efd !important;
        }
        @media (max-width: 991px) {
          .absolute-mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1060;
          }
        }
      `}</style>
    </motion.header>
  );
}
