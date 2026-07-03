"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: 'https://pharchiro.com/about-us/',
      dropdown: [
        { name: 'Meet The Team', href: 'https://pharchiro.com/meet-the-team/' },
        { name: 'Contact Us', href: 'https://pharchiro.com/contact-us/' }
      ]
    },
    { 
      name: 'Services', 
      href: 'https://pharchiro.com/services/',
      dropdown: [
        { name: 'Chiropractic Care', href: 'https://pharchiro.com/chiropractic-care/' },
        { name: 'Sports Chiropractic', href: 'https://pharchiro.com/sports-chiropractic/' },
        { name: 'Functional Movement Screening', href: 'https://pharchiro.com/functional-movement-screening/' },
        { name: 'Electric Stimulation', href: 'https://pharchiro.com/electric-stimulation/' },
        { name: 'Shockwave', href: 'https://pharchiro.com/shockwave/' },
        { name: 'Manual Therapy', href: 'https://pharchiro.com/manual-therapy/' },
        { name: 'Physical Rehab', href: 'https://pharchiro.com/physical-rehab/' },
        { name: 'Taping', href: 'https://pharchiro.com/taping/' },
        { name: 'Myofascial Decompression / Cupping', href: 'https://pharchiro.com/myofascial-decompression-cupping/' },
        { name: 'Dry Needling', href: 'https://pharchiro.com/dry-needling/' },
        { name: 'Spinal Decompression Therapy', href: 'https://pharchiro.com/spinal-decompression-therapy/' }
      ]
    },
    { name: 'Conditions', href: 'https://pharchiro.com/conditions/' },
    { 
      name: 'Resources', 
      href: 'https://pharchiro.com/first-visit/',
      dropdown: [
        { name: 'First Visit', href: 'https://pharchiro.com/first-visit/' },
        { name: 'Blog', href: 'https://pharchiro.com/chiropractic-blog/' },
        { name: 'Videos', href: 'https://www.youtube.com/@PHaRChiroSport' },
        { name: 'Insurance', href: 'https://pharchiro.com/insurance/' }
      ]
    }
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
              <span style={{ color: '#946c44' }}>Pharaoh</span>
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
                  <li 
                    className={`nav-item mx-2 ${link.dropdown ? 'dropdown' : ''}`} 
                    key={link.name}
                    onMouseEnter={() => window.innerWidth > 991 && setActiveDropdown(link.name)}
                    onMouseLeave={() => window.innerWidth > 991 && setActiveDropdown(null)}
                  >
                    <Link 
                      href={link.href} 
                      className={`nav-link text-dark hover-primary ${link.dropdown ? 'dropdown-toggle' : ''}`}
                      onClick={(e) => {
                        if (link.dropdown && window.innerWidth <= 991) {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === link.name ? null : link.name);
                        } else if (!link.dropdown) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      data-bs-toggle={link.dropdown ? "dropdown" : ""}
                    >
                      {link.name}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {(activeDropdown === link.name) && (
                          <motion.ul
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className={`dropdown-menu border-0 shadow-sm rounded-3 p-2 m-0 ${isMobileMenuOpen ? 'd-block position-relative shadow-none bg-light mt-2' : 'd-block position-absolute'}`}
                          >
                            {link.dropdown.map((subItem) => (
                              <li key={subItem.name}>
                                <Link 
                                  href={subItem.href} 
                                  className="dropdown-item rounded-2 py-2 px-3 custom-dropdown-item"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
                <Link 
                  href="https://ca.clinicdr.com/website-forms/?uid=93e0c214e39d0426d934f52975f48f9530186500e13d9a589579f38fbd3e6b83&tg=m04" 
                  className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm"
                  target="_blank"
                >
                  Book Now!
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .hover-primary:hover, .nav-link:hover {
          color: #946c44 !important;
        }
        .custom-dropdown-item {
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .custom-dropdown-item:hover {
          background-color: #f8f9fa;
          color: #946c44;
          padding-left: 1.25rem !important;
        }
        .dropdown-toggle::after {
          vertical-align: 0.15em;
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
