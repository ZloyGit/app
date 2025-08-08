import React from 'react';
import { ArrowRight, Shield, Server, Network, Monitor } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="dark-content-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Shield size={16} />
              <span>Надежные IT-решения</span>
            </div>
            
            <h1 className="display-huge hero-title">
              Профессиональное 
              <span className="accent-text"> IT-обслуживание</span> для вашего бизнеса
            </h1>
            
            <p className="body-large hero-description">
              Мы обеспечиваем полный цикл технической поддержки: от настройки 1С 
              до мониторинга серверов и установки систем видеонаблюдения
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">лет опыта</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">довольных клиентов</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">поддержка</div>
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('services')}
              >
                Наши услуги
                <ArrowRight size={20} />
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Получить консультацию
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxJVCUyMHNlcnZpY2VzfGVufDB8fHx8MTc1NDYxMzMyNHww&ixlib=rb-4.1.0&q=85"
                alt="IT консультации и услуги"
                className="hero-main-image"
              />
              <div className="hero-image-overlay">
                <div className="tech-grid">
                  <div className="tech-card">
                    <Server size={28} />
                    <span>Серверы</span>
                  </div>
                  <div className="tech-card">
                    <Network size={28} />
                    <span>Сети</span>
                  </div>
                  <div className="tech-card">
                    <Monitor size={28} />
                    <span>1С</span>
                  </div>
                  <div className="tech-card">
                    <Shield size={28} />
                    <span>Безопасность</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;