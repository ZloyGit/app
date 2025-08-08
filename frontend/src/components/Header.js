import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`dark-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="dark-header-content">
          <div className="dark-logo-container" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://customer-assets.emergentagent.com/job_65f90f92-7d11-4728-bbe9-414a443b150f/artifacts/dse4487x_80290118.png" 
              alt="IT-ВОСТОК" 
              className="dark-logo"
            />
          </div>
          
          <nav className="dark-nav">
            <button 
              className="dark-nav-link"
              onClick={() => scrollToSection('services')}
            >
              Услуги
            </button>
            <button 
              className="dark-nav-link"
              onClick={() => scrollToSection('about')}
            >
              О нас
            </button>
            <button 
              className="dark-nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Контакты
            </button>
          </nav>

          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            Связаться с нами
          </button>

          <button 
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('services')}
          >
            Услуги
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('about')}
          >
            О нас
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Контакты
          </button>
          <button className="btn-primary mobile-cta" onClick={() => scrollToSection('contact')}>
            Связаться с нами
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;