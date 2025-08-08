import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Мокируем отправку формы
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Телефон",
      content: "+7 (XXX) XXX-XX-XX",
      description: "Звоните в рабочее время"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "info@it-vostok.ru",
      description: "Ответим в течение часа"
    },
    {
      icon: <MapPin size={24} />,
      title: "Адрес",
      content: "г. Москва, ул. Примерная, д. 1",
      description: "Приезжайте на консультацию"
    },
    {
      icon: <Clock size={24} />,
      title: "Режим работы",
      content: "Пн-Пт: 9:00-18:00",
      description: "Экстренная поддержка 24/7"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="dark-content-container">
        <div className="section-header">
          <div className="section-badge">
            <MessageCircle size={16} />
            <span>Контакты</span>
          </div>
          
          <h2 className="display-large section-title">
            Свяжитесь с нами
          </h2>
          
          <p className="body-large section-description">
            Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <Card key={index} className="contact-card">
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h3 className="heading-3 contact-title">{info.title}</h3>
                  <p className="body-large contact-content">{info.content}</p>
                  <p className="body-small contact-description">{info.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="contact-form-card">
            <div className="form-header">
              <h3 className="heading-2">Оставить заявку</h3>
              <p className="body-medium">Опишите вашу задачу, и мы предложим оптимальное решение</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Имя</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Телефон</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Сообщение</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={4}
                  placeholder="Опишите вашу задачу..."
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary form-submit">
                Отправить заявку
                <Send size={16} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;