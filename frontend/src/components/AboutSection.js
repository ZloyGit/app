import React from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Star,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const AboutSection = () => {
  const advantages = [
    {
      icon: <Award size={24} />,
      title: "Экспертиза",
      description: "Более 5 лет успешной работы в сфере IT"
    },
    {
      icon: <Clock size={24} />,
      title: "Оперативность", 
      description: "Быстрое реагирование на заявки клиентов"
    },
    {
      icon: <Shield size={24} />,
      title: "Надежность",
      description: "Гарантия качества выполненных работ"
    },
    {
      icon: <Target size={24} />,
      title: "Индивидуальный подход",
      description: "Решения, адаптированные под ваш бизнес"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="dark-content-container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-badge">
              <Users size={16} />
              <span>О компании</span>
            </div>
            
            <h2 className="display-large section-title">
              IT-Восток — ваш надежный 
              <span className="accent-text"> технологический партнер</span>
            </h2>
            
            <p className="body-large about-description">
              Мы специализируемся на комплексном IT-обслуживании предприятий 
              с особым фокусом на системах 1С. Наша команда профессионалов 
              обеспечивает стабильную работу вашей IT-инфраструктуры.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>Сертифицированные специалисты</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>Современные технологии</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                <span>Прозрачная отчетность</span>
              </div>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <Zap size={24} />
                <div className="stat-content">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime серверов</div>
                </div>
              </div>
              <div className="about-stat">
                <Star size={24} />
                <div className="stat-content">
                  <div className="stat-number">4.9/5</div>
                  <div className="stat-label">Рейтинг клиентов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxJVCUyMHNlcnZpY2VzfGVufDB8fHx8MTc1NDYxMzMyNHww&ixlib=rb-4.1.0&q=85"
                alt="Команда IT-Восток"
                className="about-main-image"
              />
              <div className="about-image-stats">
                <div className="image-stat">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="image-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-card">
                  <div className="advantage-icon">
                    {advantage.icon}
                  </div>
                  <h3 className="heading-3 advantage-title">{advantage.title}</h3>
                  <p className="body-medium advantage-description">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;