import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesShowcase = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y aplicaciones web progresivas con tecnologías de vanguardia.',
      icon: 'Globe',
      features: ['React & Next.js', 'Responsive Design', 'SEO Optimizado', 'Performance'],
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      id: 'process-automation',
      title: 'Automatización de Procesos',
      description: 'Optimiza tus flujos de trabajo con automatización inteligente y RPA.',
      icon: 'Zap',
      features: ['N8N Workflows', 'Make Integration', 'RPA Solutions', 'API Automation'],
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      id: 'mobile-apps',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas para iOS y Android con experiencia excepcional.',
      icon: 'Smartphone',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'Cross-Platform'],
      color: 'from-green-500 to-green-600',
      delay: 0.3
    },
    {
      id: 'integrations',
      title: 'Integraciones',
      description: 'Conecta tus sistemas y herramientas para un flujo de datos sin interrupciones.',
      icon: 'Link',
      features: ['API Development', 'Third-party APIs', 'Database Sync', 'Cloud Integration'],
      color: 'from-orange-500 to-orange-600',
      delay: 0.4
    },
    {
      id: 'ai-consulting',
      title: 'Consultoría IA',
      description: 'Estrategias personalizadas para implementar IA en tu organización.',
      icon: 'Brain',
      features: ['AI Strategy', 'Implementation', 'Training', 'Support'],
      color: 'from-red-500 to-red-600',
      delay: 0.5
    },
    {
      id: 'data-analytics',
      title: 'Análisis de Datos',
      description: 'Transforma tus datos en insights accionables con IA y machine learning.',
      icon: 'BarChart3',
      features: ['Data Visualization', 'ML Models', 'Predictive Analytics', 'Dashboards'],
      color: 'from-teal-500 to-teal-600',
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones tecnológicas integrales que transforman la manera en que tu empresa opera y crece
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service?.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-surface rounded-2xl p-8 h-full elevation-2 hover:elevation-4 transition-all duration-300 hover-lift border border-border">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={32} color="white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  {service?.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <Link to="/quotation-wizard" className="flex-1">
                    <Button variant="default" size="sm" fullWidth>
                      Cotizar
                    </Button>
                  </Link>
                  <Link to="/service-portfolio">
                    <Button variant="outline" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Contáctanos para soluciones personalizadas adaptadas a tus necesidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-hub">
                <Button variant="outline" className="bg-white text-primary border-white hover:bg-gray-50">
                  <Icon name="MessageCircle" size={20} />
                  Contactar Ahora
                </Button>
              </Link>
              <Link to="/service-portfolio">
                <Button variant="ghost" className="text-white border-white hover:bg-white/10">
                  <Icon name="Eye" size={20} />
                  Ver Portafolio
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;