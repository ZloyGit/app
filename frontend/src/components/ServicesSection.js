import React from 'react';
import { 
  Database, 
  Server, 
  Network, 
  Monitor, 
  ArrowRight,
  Settings,
  Eye,
  Wrench,
  BarChart3
} from 'lucide-react';
import { Card } from './ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Database size={48} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxJVCUyMHNlcnZpY2VzfGVufDB8fHx8MTc1NDYxMzMyNHww&ixlib=rb-4.1.0&q=85",
      title: "Обслуживание 1С",
      description: "Полный цикл работ с системами 1С: обновления, доработки, создание обработок под ключ",
      features: [
        "Обновление конфигураций",
        "Разработка обработок",
        "Техническая поддержка",
        "Оптимизация работы"
      ]
    },
    {
      icon: <Server size={48} />,
      image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
      title: "Настройка серверов",
      description: "Профессиональная настройка и круглосуточный мониторинг серверной инфраструктуры",
      features: [
        "Установка и настройка",
        "24/7 мониторинг",
        "Резервное копирование",
        "Оптимизация производительности"
      ]
    },
    {
      icon: <Network size={48} />,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwYnVzaW5lc3N8ZW58MHx8fHwxNzU0NjEzMzI5fDA&ixlib=rb-4.1.0&q=85",
      title: "Монтаж сетей",
      description: "Проектирование и монтаж современных сетевых решений для вашего офиса",
      features: [
        "Структурированные кабельные системы",
        "Wi-Fi сети",
        "Настройка сетевого оборудования",
        "Документация проекта"
      ]
    },
    {
      icon: <Eye size={48} />,
      image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYnVzaW5lc3N8ZW58MHx8fHwxNzU0NjEzMzI5fDA&ixlib=rb-4.1.0&q=85",
      title: "Видеонаблюдение",
      description: "Установка и настройка современных систем видеонаблюдения любой сложности",
      features: [
        "IP-камеры высокого разрешения",
        "Удаленный просмотр",
        "Хранение архива",
        "Интеграция с охранными системами"
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="dark-content-container">
        <div className="section-header">
          <div className="section-badge">
            <Settings size={16} />
            <span>Наши услуги</span>
          </div>
          
          <h2 className="display-large section-title">
            Комплексные IT-решения для бизнеса
          </h2>
          
          <p className="body-large section-description">
            Мы предоставляем полный спектр IT-услуг, чтобы ваш бизнес работал 
            стабильно и эффективно
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              
              <div className="service-content">
                <h3 className="heading-2 service-title">{service.title}</h3>
                <p className="body-medium service-description">
                  {service.description}
                </p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <ArrowRight size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="service-cta">
                  Узнать подробнее
                  <ArrowRight size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;