import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="dark-content-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_65f90f92-7d11-4728-bbe9-414a443b150f/artifacts/dse4487x_80290118.png" 
                alt="IT-ВОСТОК" 
                className="footer-logo"
              />
            </div>
            <p className="body-medium footer-description">
              Профессиональные IT-услуги для развития вашего бизнеса. 
              Специализируемся на 1С и серверных решениях.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="heading-3 footer-title">Услуги</h4>
              <ul className="footer-menu">
                <li>
                  <button 
                    className="footer-link" 
                    onClick={() => scrollToSection('services')}
                  >
                    Обслуживание 1С
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection('services')}
                  >
                    Настройка серверов
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection('services')}
                  >
                    Монтаж сетей
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection('services')}
                  >
                    Видеонаблюдение
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="heading-3 footer-title">Компания</h4>
              <ul className="footer-menu">
                <li>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection('about')}
                  >
                    О нас
                  </button>
                </li>
                <li>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection('contact')}
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="heading-3 footer-title">Контакты</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>info@it-vostok.ru</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="body-small footer-copyright">
              © 2024 IT-Восток. Все права защищены.
            </p>
            <div className="footer-bottom-links">
              <button className="footer-bottom-link">
                Политика конфиденциальности
              </button>
              <button className="footer-bottom-link">
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;