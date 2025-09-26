import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import InstagramChatWidget from '../../components/ui/InstagramChatWidget';
import ContactForm from './components/ContactForm';
import ConsultationBooking from './components/ConsultationBooking';
import ContactMethods from './components/ContactMethods';
import FAQSection from './components/FAQSection';
import SocialMediaIntegration from './components/SocialMediaIntegration';
import OfficeLocation from './components/OfficeLocation';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ContactHub = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const tabs = [
    { id: 'contact', label: 'Contacto', icon: 'MessageSquare', description: 'Formularios y métodos de contacto' },
    { id: 'booking', label: 'Agendar', icon: 'Calendar', description: 'Consultas y reuniones' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle', description: 'Preguntas frecuentes' },
    { id: 'social', label: 'Social', icon: 'Share2', description: 'Redes sociales y newsletter' },
    { id: 'location', label: 'Ubicación', icon: 'MapPin', description: 'Oficina y direcciones' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return (
          <div className="space-y-8">
            <ContactMethods />
            <ContactForm />
          </div>
        );
      case 'booking':
        return <ConsultationBooking />;
      case 'faq':
        return <FAQSection />;
      case 'social':
        return <SocialMediaIntegration />;
      case 'location':
        return <OfficeLocation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Centro de Contacto - AI Solutions Hub</title>
        <meta name="description" content="Contacta con AI Solutions Hub. Múltiples canales de comunicación, consultas gratuitas, FAQ y ubicación de oficina en Bogotá, Colombia." />
        <meta name="keywords" content="contacto, consulta gratuita, soporte, AI Solutions Hub, Bogotá, Colombia, automatización, desarrollo web" />
      </Helmet>
      <Header />
      <InstagramChatWidget />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="MessageCircle" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Centro de Contacto</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Hablemos de tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ml-2">
              Proyecto
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Múltiples canales de comunicación para que puedas contactarnos de la manera que prefieras. 
            Estamos aquí para ayudarte a transformar tu negocio con tecnología.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="default"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+573012169668', '_self')}
            >
              Llamar Ahora
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => {
                const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios de IA.');
                window.open(`https://wa.me/573012169668?text=${message}`, '_blank');
              }}
            >
              WhatsApp
            </Button>
            <Button
              variant="secondary"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => setActiveTab('booking')}
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: 'Tiempo de Respuesta', value: '< 2 horas', icon: 'Clock' },
              { label: 'Consultas Gratuitas', value: '100%', icon: 'Gift' },
              { label: 'Canales Disponibles', value: '6+', icon: 'MessageSquare' },
              { label: 'Soporte', value: '24/7', icon: 'Shield' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name={stat?.icon} size={20} color="var(--color-primary)" />
                </div>
                <div className="text-lg font-semibold text-text-primary">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          {/* Desktop Tabs */}
          <div className="hidden md:flex bg-surface rounded-lg p-2 elevation-1 mb-6">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-text-primary hover:bg-muted/50'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-6">
            <div className="bg-surface rounded-lg elevation-1 overflow-hidden">
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <Icon name={tabs?.find(t => t?.id === activeTab)?.icon} size={20} color="var(--color-primary)" />
                  <div>
                    <h3 className="font-medium text-text-primary">
                      {tabs?.find(t => t?.id === activeTab)?.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tabs?.find(t => t?.id === activeTab)?.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 p-2">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab?.id
                        ? 'bg-primary text-white' :'text-muted-foreground hover:text-text-primary hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={14} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {renderTabContent()}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={32} color="var(--color-primary)" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              No esperes más. Agenda una consulta gratuita y descubre cómo la tecnología 
              puede impulsar tu empresa al siguiente nivel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => setActiveTab('booking')}
              >
                Agendar Consulta Gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={() => setActiveTab('contact')}
              >
                Enviar Mensaje
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Consulta gratuita • Sin compromiso • Respuesta garantizada en 24 horas
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-primary">AI Solutions Hub</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transformando negocios con tecnología inteligente
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => window.open('https://instagram.com/aisolutionshub', '_blank')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </button>
              <button
                onClick={() => window.open('https://linkedin.com/company/aisolutionshub', '_blank')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </button>
              <button
                onClick={() => window.open('https://twitter.com/aisolutionshub', '_blank')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </button>
              <button
                onClick={() => window.open('mailto:aisolutionsauto20@gmail.com', '_self')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={20} />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              © {new Date()?.getFullYear()} AI Solutions Hub. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactHub;