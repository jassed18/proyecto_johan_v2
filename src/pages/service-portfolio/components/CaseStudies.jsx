import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState(null);

  const caseStudies = [
    {
      id: 'ecommerce-automation',
      title: 'Automatización E-commerce',
      client: 'TechStore Colombia',
      category: 'Automatización',
      duration: '6 semanas',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      challenge: `TechStore Colombia enfrentaba problemas con la gestión manual de inventarios, procesamiento de pedidos y comunicación con clientes. Los procesos manuales causaban retrasos de hasta 48 horas en el procesamiento de pedidos y errores frecuentes en el inventario.`,
      solution: `Implementamos un sistema de automatización completo usando N8N y Make.com que conecta su tienda online con sistemas de inventario, CRM y plataformas de envío. El sistema procesa automáticamente pedidos, actualiza inventarios en tiempo real y envía notificaciones personalizadas a clientes.`,
      results: [
        { metric: 'Tiempo de procesamiento', before: '48 horas', after: '15 minutos', improvement: '99.5%' },
        { metric: 'Errores de inventario', before: '15%', after: '0.2%', improvement: '98.7%' },
        { metric: 'Satisfacción del cliente', before: '72%', after: '94%', improvement: '30.6%' },
        { metric: 'Ahorro mensual', before: '$0', after: '$2,800,000', improvement: 'Nuevo beneficio' }
      ],
      technologies: ['N8N', 'Make.com', 'Shopify API', 'WhatsApp Business API', 'Google Sheets'],
      testimonial: {
        text: `La automatización transformó completamente nuestro negocio. Ahora podemos procesar 10 veces más pedidos con el mismo equipo y nuestros clientes están mucho más satisfechos con los tiempos de respuesta.`,
        author: 'Carlos Mendoza',
        position: 'CEO, TechStore Colombia'
      }
    },
    {
      id: 'healthcare-webapp',
      title: 'Plataforma Médica Digital',
      client: 'Clínica San Rafael',
      category: 'Desarrollo Web',
      duration: '12 semanas',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      challenge: `La Clínica San Rafael necesitaba digitalizar sus procesos de citas médicas, historiales clínicos y comunicación con pacientes. El sistema manual generaba largas esperas, pérdida de documentos y dificultades para el seguimiento de tratamientos.`,
      solution: `Desarrollamos una plataforma web completa con React y Node.js que incluye sistema de citas online, historiales clínicos digitales, telemedicina básica y portal del paciente. La plataforma se integra con sistemas existentes y cumple con normativas de protección de datos médicos.`,
      results: [
        { metric: 'Tiempo de agendamiento', before: '20 minutos', after: '3 minutos', improvement: '85%' },
        { metric: 'Cancelaciones de citas', before: '25%', after: '8%', improvement: '68%' },
        { metric: 'Acceso a historiales', before: '10 minutos', after: 'Instantáneo', improvement: '100%' },
        { metric: 'Satisfacción pacientes', before: '68%', after: '91%', improvement: '33.8%' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth', 'Socket.io', 'PDF Generator'],
      testimonial: {
        text: `La plataforma nos permitió modernizar completamente nuestros procesos. Los pacientes pueden agendar citas desde casa y nosotros tenemos toda la información organizada y accesible al instante.`,
        author: 'Dra. María González',
        position: 'Directora Médica, Clínica San Rafael'
      }
    },
    {
      id: 'logistics-mobile',
      title: 'App de Logística Móvil',
      client: 'TransCarga Express',
      category: 'App Móvil',
      duration: '16 semanas',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=800&h=400&fit=crop',
      challenge: `TransCarga Express necesitaba una solución móvil para que sus conductores pudieran gestionar entregas, actualizar estados en tiempo real y comunicarse eficientemente con la central de operaciones. Los procesos manuales causaban retrasos y falta de visibilidad en las entregas.`,
      solution: `Desarrollamos una aplicación móvil nativa con React Native que incluye GPS tracking, gestión de rutas optimizadas, captura de firmas digitales, chat en tiempo real y sincronización offline. La app se integra con el sistema central de la empresa.`,
      results: [
        { metric: 'Tiempo por entrega', before: '45 minutos', after: '28 minutos', improvement: '37.8%' },
        { metric: 'Entregas exitosas', before: '87%', after: '96%', improvement: '10.3%' },
        { metric: 'Visibilidad en tiempo real', before: '0%', after: '100%', improvement: 'Nueva funcionalidad' },
        { metric: 'Reducción de costos', before: '$0', after: '$1,200,000/mes', improvement: 'Ahorro mensual' }
      ],
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Socket.io', 'Redux', 'Offline Storage'],
      testimonial: {
        text: `La app móvil revolucionó nuestras operaciones. Ahora tenemos control total sobre nuestras entregas y nuestros clientes pueden seguir sus paquetes en tiempo real. La eficiencia mejoró dramáticamente.`,
        author: 'Roberto Silva',
        position: 'Gerente de Operaciones, TransCarga Express'
      }
    },
    {
      id: 'fintech-integration',
      title: 'Integración Fintech',
      client: 'PayFast Solutions',
      category: 'Integraciones',
      duration: '8 semanas',
      image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=400&fit=crop',
      challenge: `PayFast Solutions requería integrar múltiples pasarelas de pago, sistemas bancarios y plataformas de e-commerce para ofrecer una solución de pagos unificada. Las integraciones manuales eran propensas a errores y limitaban la escalabilidad.`,
      solution: `Creamos una arquitectura de microservicios con APIs personalizadas que conecta más de 15 pasarelas de pago diferentes, sistemas bancarios y plataformas de e-commerce. Implementamos webhooks, transformación de datos en tiempo real y sistema de fallback automático.`,
      results: [
        { metric: 'Tiempo de integración', before: '4 semanas', after: '2 días', improvement: '96.4%' },
        { metric: 'Tasa de éxito de pagos', before: '92%', after: '99.2%', improvement: '7.8%' },
        { metric: 'Tiempo de respuesta API', before: '2.5s', after: '0.3s', improvement: '88%' },
        { metric: 'Nuevos clientes/mes', before: '50', after: '300', improvement: '500%' }
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'AWS Lambda', 'Stripe API'],
      testimonial: {
        text: `Las integraciones que desarrollaron nos permitieron escalar nuestro negocio de manera exponencial. Ahora podemos conectar cualquier cliente en días en lugar de semanas, y la confiabilidad es excepcional.`,
        author: 'Ana Rodríguez',
        position: 'CTO, PayFast Solutions'
      }
    }
  ];

  const toggleExpanded = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Casos de Éxito
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre cómo hemos transformado negocios con nuestras soluciones tecnológicas. 
          Resultados reales, clientes satisfechos.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caseStudies?.map((caseStudy) => (
          <div
            key={caseStudy?.id}
            className="bg-surface rounded-lg elevation-1 overflow-hidden hover:elevation-2 transition-all duration-200"
          >
            {/* Case Study Header */}
            <div className="relative">
              <Image
                src={caseStudy?.image}
                alt={caseStudy?.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy?.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-surface/90 text-text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy?.duration}
                </span>
              </div>
            </div>

            {/* Case Study Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {caseStudy?.title}
                </h3>
                <p className="text-muted-foreground">
                  Cliente: {caseStudy?.client}
                </p>
              </div>

              {/* Quick Results Preview */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {caseStudy?.results?.slice(0, 2)?.map((result, index) => (
                  <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-primary">
                      {result?.improvement}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result?.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <Button
                variant="outline"
                fullWidth
                onClick={() => toggleExpanded(caseStudy?.id)}
                iconName={expandedCase === caseStudy?.id ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
              >
                {expandedCase === caseStudy?.id ? 'Ver Menos' : 'Ver Detalles Completos'}
              </Button>

              {/* Expanded Content */}
              {expandedCase === caseStudy?.id && (
                <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                      <Icon name="AlertTriangle" size={16} className="mr-2" color="var(--color-warning)" />
                      Desafío
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {caseStudy?.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                      <Icon name="Lightbulb" size={16} className="mr-2" color="var(--color-primary)" />
                      Solución
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {caseStudy?.solution}
                    </p>
                  </div>

                  {/* Complete Results */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-2" color="var(--color-success)" />
                      Resultados Detallados
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {caseStudy?.results?.map((result, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div>
                            <div className="font-medium text-text-primary text-sm">
                              {result?.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Antes: {result?.before} → Después: {result?.after}
                            </div>
                          </div>
                          <div className="text-success font-bold">
                            {result?.improvement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="Code" size={16} className="mr-2" color="var(--color-secondary)" />
                      Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                    <blockquote className="text-text-primary italic mb-3">
                      "{caseStudy?.testimonial?.text}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} color="white" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm">
                          {caseStudy?.testimonial?.author}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {caseStudy?.testimonial?.position}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <Button variant="default" className="flex-1">
                      Solicitar Proyecto Similar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Contactar Cliente
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;