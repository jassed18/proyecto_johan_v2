import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import InstagramChatWidget from '../../components/ui/InstagramChatWidget';
import AIAssistantWidget from '../../components/ui/AIAssistantWidget';
import HeroSection from './components/HeroSection';
import ServicesShowcase from './components/ServicesShowcase';
import TechnologyStack from './components/TechnologyStack';
import ClientTestimonials from './components/ClientTestimonials';
import CallToAction from './components/CallToAction';

const HomeLanding = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Solutions Hub - Transformamos tu Negocio con Inteligencia Artificial</title>
        <meta 
          name="description" 
          content="Especialistas en desarrollo web, automatización de procesos, aplicaciones móviles e integración de sistemas con IA. Soluciones tecnológicas avanzadas para impulsar tu empresa." 
        />
        <meta name="keywords" content="inteligencia artificial, desarrollo web, automatización, aplicaciones móviles, React, Node.js, Python, IA empresarial" />
        <meta property="og:title" content="AI Solutions Hub - Transformamos tu Negocio con IA" />
        <meta property="og:description" content="Soluciones tecnológicas avanzadas que impulsan el crecimiento de tu empresa con IA de última generación." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Solutions Hub - Transformamos tu Negocio con IA" />
        <meta name="twitter:description" content="Especialistas en desarrollo web, automatización de procesos y aplicaciones móviles con IA." />
        <link rel="canonical" href="https://aisolutionshub.com/home-landing" />
      </Helmet>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Showcase */}
        <ServicesShowcase />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Client Testimonials */}
        <ClientTestimonials />

        {/* Call to Action */}
        <CallToAction />
      </main>
      {/* Instagram Chat Widget */}
      <InstagramChatWidget />
      {/* AI Assistant Widget */}
      <AIAssistantWidget />
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold">AI Solutions Hub</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Transformamos empresas con soluciones de inteligencia artificial y automatización de procesos. 
                Especialistas en tecnologías de vanguardia para impulsar tu crecimiento digital.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/aisolutionshub" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-400 hover:bg-white rounded transition-colors"></div>
                </a>
                <a href="https://linkedin.com/company/aisolutionshub" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-400 hover:bg-white rounded transition-colors"></div>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/service-portfolio" className="hover:text-white transition-colors">Desarrollo Web</a></li>
                <li><a href="/service-portfolio" className="hover:text-white transition-colors">Automatización</a></li>
                <li><a href="/service-portfolio" className="hover:text-white transition-colors">Apps Móviles</a></li>
                <li><a href="/ai-consultation" className="hover:text-white transition-colors">Consultoría IA</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="tel:+573012169668" className="hover:text-white transition-colors">
                    +57 301 216 9668
                  </a>
                </li>
                <li>
                  <a href="mailto:aisolutionsauto20@gmail.com" className="hover:text-white transition-colors">
                    aisolutionsauto20@gmail.com
                  </a>
                </li>
                <li>
                  <a href="/contact-hub" className="hover:text-white transition-colors">
                    Centro de Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} AI Solutions Hub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLanding;