import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import InstagramChatWidget from '../../components/ui/InstagramChatWidget';
import ServiceCategoryTabs from './components/ServiceCategoryTabs';
import ServiceComparison from './components/ServiceComparison';
import CaseStudies from './components/CaseStudies';
import ProjectTimelineEstimator from './components/ProjectTimelineEstimator';
import ServiceCustomization from './components/ServiceCustomization';
import ServiceFAQ from './components/ServiceFAQ';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServicePortfolio = () => {
  const [activeSection, setActiveSection] = useState('services');

  const navigationSections = [
    { id: 'services', name: 'Servicios', icon: 'Package' },
    { id: 'comparison', name: 'Comparar', icon: 'BarChart3' },
    { id: 'cases', name: 'Casos de Éxito', icon: 'Trophy' },
    { id: 'estimator', name: 'Estimador', icon: 'Calculator' },
    { id: 'customization', name: 'Personalización', icon: 'Settings' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServiceSelection = (serviceData) => {
    console.log('Service selected:', serviceData);
    // Here you could navigate to quotation wizard or handle service selection
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portafolio de Servicios - AI Solutions Hub</title>
        <meta name="description" content="Explora nuestros servicios de desarrollo web, automatización, apps móviles, integraciones y consultoría tecnológica. Casos de éxito y estimaciones personalizadas." />
        <meta name="keywords" content="desarrollo web, automatización, apps móviles, integraciones, consultoría tecnológica, IA, React, Node.js" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Portafolio de Servicios
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Descubre nuestras soluciones tecnológicas personalizadas. Desde desarrollo web hasta 
              automatización con IA, tenemos la experiencia para transformar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => scrollToSection('services')}
                iconName="ArrowDown"
                iconPosition="right"
              >
                Explorar Servicios
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('estimator')}
                iconName="Calculator"
                iconPosition="left"
              >
                Calcular Presupuesto
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-surface border-b border-border elevation-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4">
            <div className="flex space-x-1 min-w-max">
              {navigationSections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => scrollToSection(section?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === section?.id
                      ? 'bg-primary text-white' :'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon name={section?.icon} size={16} />
                  <span>{section?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Section */}
        <section id="services" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones tecnológicas completas adaptadas a las necesidades específicas de tu negocio
            </p>
          </div>
          <ServiceCategoryTabs onServiceSelect={handleServiceSelection} />
        </section>

        {/* Service Comparison Section */}
        <section id="comparison" className="mb-20">
          <ServiceComparison />
        </section>

        {/* Case Studies Section */}
        <section id="cases" className="mb-20">
          <CaseStudies />
        </section>

        {/* Project Timeline Estimator Section */}
        <section id="estimator" className="mb-20">
          <ProjectTimelineEstimator />
        </section>

        {/* Service Customization Section */}
        <section id="customization" className="mb-20">
          <ServiceCustomization />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-20">
          <ServiceFAQ />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Nuestro equipo de expertos está preparado para llevar tu proyecto al siguiente nivel. 
              Obtén una consulta gratuita y descubre cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Icon name="MessageCircle" size={20} />
                Consulta Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Icon name="FileText" size={20} />
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-primary">AI Solutions Hub</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transformamos negocios con tecnología de vanguardia y soluciones de IA personalizadas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-primary mb-4">Servicios</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Desarrollo Web</a></li>
                <li><a href="#" className="hover:text-primary">Automatización</a></li>
                <li><a href="#" className="hover:text-primary">Apps Móviles</a></li>
                <li><a href="#" className="hover:text-primary">Integraciones</a></li>
                <li><a href="#" className="hover:text-primary">Consultoría</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-primary mb-4">Contacto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+57 301 216 9668</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@aisolutionshub.co</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Bogotá, Colombia</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} AI Solutions Hub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <InstagramChatWidget />
    </div>
  );
};

export default ServicePortfolio;