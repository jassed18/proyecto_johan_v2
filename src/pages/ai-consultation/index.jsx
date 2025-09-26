import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AIConsultationForm from '../../components/ui/AIConsultationForm';
import AIAssistantWidget from '../../components/ui/AIAssistantWidget';
import { Bot, Brain, Zap, Target, Users, TrendingUp } from 'lucide-react';
import Icon from '../../components/AppIcon';


const AIConsultation = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Brain,
      title: 'Análisis Inteligente',
      description: 'IA avanzada analiza tu proyecto y proporciona recomendaciones técnicas precisas',
    },
    {
      icon: Zap,
      title: 'Resultados Instantáneos',
      description: 'Obtén un análisis completo en menos de 2 minutos, sin esperas',
    },
    {
      icon: Target,
      title: 'Recomendaciones Personalizadas',
      description: 'Cada análisis se adapta específicamente a tu proyecto y necesidades',
    },
    {
      icon: Users,
      title: 'Sin Compromiso',
      description: 'Consultoría gratuita sin necesidad de registro o compromiso',
    },
    {
      icon: TrendingUp,
      title: 'Tecnologías Actuales',
      description: 'Recomendaciones basadas en las últimas tendencias tecnológicas',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Consultoría IA Gratuita - AI Solutions Hub</title>
        <meta 
          name="description" 
          content="Obtén un análisis inteligente y gratuito de tu proyecto tecnológico. IA avanzada te proporciona recomendaciones personalizadas en minutos." 
        />
        <meta name="keywords" content="consultoría IA, análisis proyecto, inteligencia artificial, desarrollo web, apps móviles, automatización" />
        <meta property="og:title" content="Consultoría IA Gratuita - AI Solutions Hub" />
        <meta property="og:description" content="Análisis inteligente y gratuito de tu proyecto con IA avanzada. Recomendaciones personalizadas en minutos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aisolutionshub.com/ai-consultation" />
      </Helmet>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Bot className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consultoría <span className="text-accent">IA Gratuita</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-light mb-8 leading-relaxed">
              Obtén un análisis inteligente de tu proyecto tecnológico en minutos. 
              Nuestra IA te proporciona recomendaciones personalizadas sin costo alguno.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                ✨ <strong>Completamente gratis</strong> • 🚀 <strong>Resultados en 2 minutos</strong> • 🎯 <strong>Análisis personalizado</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestra Consultoría IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos tecnología de inteligencia artificial de última generación para analizar tu proyecto
              y proporcionarte insights valiosos que te ayudarán a tomar mejores decisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits?.map((benefit, index) => {
              const Icon = benefit?.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-primary rounded-lg p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Main Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comienza tu Análisis IA
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y recibe un análisis detallado al instante
            </p>
          </div>

          <AIConsultationForm />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesitas más que una consultoría?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Nuestro equipo de expertos puede llevar tu proyecto del concepto a la realidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-hub"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contactar Expertos
            </a>
            <a
              href="/service-portfolio"
              className="border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>
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

export default AIConsultation;