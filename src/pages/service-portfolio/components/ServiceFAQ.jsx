import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ServiceFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqCategories = {
    general: {
      name: 'General',
      icon: 'HelpCircle',
      faqs: [
        {
          id: 'general-1',
          question: '¿Cuánto tiempo toma desarrollar un proyecto?',
          answer: `El tiempo de desarrollo varía según la complejidad del proyecto:\n\n• Sitios web básicos: 2-4 semanas\n• Aplicaciones web complejas: 6-12 semanas\n• Apps móviles: 8-16 semanas\n• Sistemas de automatización: 2-6 semanas\n\nProporcionamos un cronograma detallado después de la consulta inicial.`
        },
        {
          id: 'general-2',
          question: '¿Ofrecen soporte post-lanzamiento?',
          answer: `Sí, ofrecemos diferentes niveles de soporte:\n\n• Soporte básico: 30 días incluidos\n• Soporte extendido: 90 días disponible\n• Soporte anual: Mantenimiento completo\n• Soporte 24/7: Para proyectos enterprise\n\nIncluye corrección de bugs, actualizaciones de seguridad y soporte técnico.`
        },
        {
          id: 'general-3',
          question: '¿Cómo manejan los cambios durante el desarrollo?',
          answer: `Utilizamos metodología ágil que permite flexibilidad:\n\n• Revisiones semanales del progreso\n• Hasta 3 rondas de revisiones incluidas\n• Cambios menores sin costo adicional\n• Cambios mayores se evalúan y cotizan\n• Comunicación constante durante todo el proceso`
        },
        {
          id: 'general-4',
          question: '¿Qué incluye el precio de un proyecto?',
          answer: `Nuestros precios incluyen:\n\n• Análisis y planificación del proyecto\n• Diseño UI/UX personalizado\n• Desarrollo completo\n• Testing y control de calidad\n• Documentación técnica\n• Capacitación básica del sistema\n• Soporte inicial post-lanzamiento`
        }
      ]
    },
    'web-development': {
      name: 'Desarrollo Web',
      icon: 'Globe',
      faqs: [
        {
          id: 'web-1',
          question: '¿Qué tecnologías utilizan para desarrollo web?',
          answer: `Utilizamos tecnologías modernas y probadas:\n\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Python, FastAPI\n• Bases de datos: PostgreSQL, MongoDB\n• Hosting: AWS, Vercel, Netlify\n• CMS: Strapi, Sanity, WordPress (cuando es necesario)\n\nSeleccionamos la mejor tecnología según las necesidades del proyecto.`
        },
        {
          id: 'web-2',
          question: '¿Los sitios web son responsive?',
          answer: `Absolutamente. Todos nuestros sitios web son:\n\n• 100% responsive en todos los dispositivos\n• Optimizados para móviles (mobile-first)\n• Compatibles con todos los navegadores modernos\n• Optimizados para velocidad de carga\n• Accesibles según estándares WCAG\n\nProbamos en múltiples dispositivos antes del lanzamiento.`
        },
        {
          id: 'web-3',
          question: '¿Incluyen SEO en el desarrollo?',
          answer: `Sí, incluimos SEO técnico básico:\n\n• Estructura HTML semántica\n• Meta tags optimizados\n• URLs amigables\n• Sitemap XML\n• Optimización de velocidad\n• Schema markup básico\n\nPara SEO avanzado ofrecemos servicios adicionales de marketing digital.`
        },
        {
          id: 'web-4',
          question: '¿Puedo actualizar el contenido yo mismo?',
          answer: `Sí, ofrecemos diferentes opciones:\n\n• CMS personalizado fácil de usar\n• Panel de administración intuitivo\n• Capacitación incluida\n• Documentación detallada\n• Soporte para dudas iniciales\n\nDiseñamos interfaces que cualquier persona puede usar sin conocimientos técnicos.`
        }
      ]
    },
    automation: {
      name: 'Automatización',
      icon: 'Zap',
      faqs: [
        {
          id: 'auto-1',
          question: '¿Qué procesos se pueden automatizar?',
          answer: `Podemos automatizar una amplia variedad de procesos:\n\n• Gestión de emails y comunicaciones\n• Procesamiento de pedidos y facturación\n• Sincronización de datos entre sistemas\n• Reportes automáticos\n• Gestión de inventarios\n• Seguimiento de leads y CRM\n• Publicaciones en redes sociales\n• Respaldo y mantenimiento de datos`
        },
        {
          id: 'auto-2',
          question: '¿Qué herramientas de automatización usan?',
          answer: `Trabajamos con las mejores herramientas del mercado:\n\n• N8N (automatización open-source)\n• Make.com (anteriormente Integromat)\n• Zapier para integraciones simples\n• APIs personalizadas cuando es necesario\n• Webhooks para comunicación en tiempo real\n\nSeleccionamos la herramienta más adecuada para cada caso.`
        },
        {
          id: 'auto-3',
          question: '¿Cuánto puedo ahorrar con automatización?',
          answer: `Los ahorros varían según el proceso, pero típicamente:\n\n• Reducción de 70-90% en tiempo de tareas manuales\n• Eliminación de errores humanos\n• Disponibilidad 24/7 sin intervención\n• ROI típico de 300-500% en el primer año\n• Liberación de personal para tareas estratégicas\n\nRealizamos un análisis de ROI antes de cada proyecto.`
        },
        {
          id: 'auto-4',
          question: '¿Qué pasa si cambian mis sistemas?',
          answer: `Diseñamos automatizaciones flexibles:\n\n• Arquitectura modular y adaptable\n• Fácil integración con nuevos sistemas\n• Documentación completa de workflows\n• Soporte para migraciones\n• Actualizaciones incluidas en planes de mantenimiento\n\nLa flexibilidad es clave en nuestros diseños.`
        }
      ]
    },
    'mobile-apps': {
      name: 'Apps Móviles',
      icon: 'Smartphone',
      faqs: [
        {
          id: 'mobile-1',
          question: '¿Desarrollan para iOS y Android?',
          answer: `Sí, ofrecemos diferentes opciones:\n\n• Apps nativas (iOS y Android por separado)\n• Apps híbridas con React Native (una app para ambas plataformas)\n• Progressive Web Apps (PWAs)\n\nRecomendamos React Native para la mayoría de proyectos por su eficiencia y calidad.`
        },
        {
          id: 'mobile-2',
          question: '¿Ayudan con la publicación en las tiendas?',
          answer: `Absolutamente, manejamos todo el proceso:\n\n• Preparación de assets y metadata\n• Cumplimiento de guidelines de Apple y Google\n• Envío y seguimiento de la revisión\n• Resolución de problemas de aprobación\n• Configuración de actualizaciones automáticas\n\nTenemos experiencia con los procesos de ambas tiendas.`
        },
        {
          id: 'mobile-3',
          question: '¿Las apps funcionan sin internet?',
          answer: `Podemos implementar funcionalidad offline:\n\n• Almacenamiento local de datos críticos\n• Sincronización automática cuando hay conexión\n• Funciones básicas disponibles offline\n• Notificaciones de estado de conexión\n• Optimización para conexiones lentas\n\nLa funcionalidad offline se diseña según las necesidades específicas.`
        },
        {
          id: 'mobile-4',
          question: '¿Cómo manejan las actualizaciones?',
          answer: `Ofrecemos diferentes estrategias de actualización:\n\n• Actualizaciones automáticas para contenido\n• Actualizaciones manuales para funciones nuevas\n• Sistema de versionado claro\n• Testing exhaustivo antes de cada release\n• Rollback automático en caso de problemas\n• Notificaciones a usuarios sobre nuevas versiones`
        }
      ]
    },
    integrations: {
      name: 'Integraciones',
      icon: 'Link',
      faqs: [
        {
          id: 'int-1',
          question: '¿Qué sistemas pueden integrar?',
          answer: `Podemos integrar prácticamente cualquier sistema:\n\n• CRMs (Salesforce, HubSpot, Pipedrive)\n• E-commerce (Shopify, WooCommerce, Magento)\n• ERPs (SAP, Oracle, Microsoft Dynamics)\n• Herramientas de marketing (Mailchimp, ActiveCampaign)\n• Sistemas de pago (Stripe, PayPal, PSE)\n• APIs personalizadas y legacy systems`
        },
        {
          id: 'int-2',
          question: '¿Cómo garantizan la seguridad de los datos?',
          answer: `La seguridad es nuestra prioridad:\n\n• Encriptación end-to-end de todas las comunicaciones\n• Autenticación OAuth 2.0 y JWT tokens\n• Cumplimiento con GDPR y regulaciones locales\n• Auditorías de seguridad regulares\n• Logs detallados de todas las transacciones\n• Respaldos automáticos y seguros\n• Certificados SSL en todas las conexiones`
        },
        {
          id: 'int-3',
          question: '¿Qué pasa si una API externa cambia?',
          answer: `Estamos preparados para cambios:\n\n• Monitoreo constante de APIs utilizadas\n• Versionado de APIs para compatibilidad\n• Notificaciones automáticas de cambios\n• Actualizaciones proactivas\n• Planes de contingencia para cada integración\n• Documentación actualizada constantemente`
        },
        {
          id: 'int-4',
          question: '¿Pueden crear APIs personalizadas?',
          answer: `Sí, desarrollamos APIs completamente personalizadas:\n\n• APIs RESTful y GraphQL\n• Documentación completa con Swagger\n• Autenticación y autorización robusta\n• Rate limiting y throttling\n• Versionado y backward compatibility\n• Testing automatizado\n• Monitoreo y analytics integrados`
        }
      ]
    },
    consulting: {
      name: 'Consultoría',
      icon: 'Users',
      faqs: [
        {
          id: 'cons-1',
          question: '¿Qué incluye una consultoría tecnológica?',
          answer: `Nuestras consultorías incluyen:\n\n• Análisis completo de la situación actual\n• Identificación de oportunidades de mejora\n• Roadmap tecnológico personalizado\n• Recomendaciones de herramientas y tecnologías\n• Estimaciones de costos y ROI\n• Plan de implementación por fases\n• Presentación ejecutiva con hallazgos`
        },
        {
          id: 'cons-2',
          question: '¿Realizan auditorías de sistemas existentes?',
          answer: `Sí, ofrecemos auditorías completas:\n\n• Revisión de arquitectura y código\n• Análisis de performance y escalabilidad\n• Evaluación de seguridad\n• Identificación de deuda técnica\n• Recomendaciones de optimización\n• Plan de modernización\n• Documentación de hallazgos y soluciones`
        },
        {
          id: 'cons-3',
          question: '¿Ayudan con la selección de tecnologías?',
          answer: `Absolutamente, es una de nuestras especialidades:\n\n• Análisis de requerimientos específicos\n• Evaluación de opciones disponibles\n• Comparación de costos y beneficios\n• Consideración de escalabilidad futura\n• Evaluación de curva de aprendizaje del equipo\n• Recomendaciones basadas en experiencia práctica`
        },
        {
          id: 'cons-4',
          question: '¿Ofrecen capacitación a equipos internos?',
          answer: `Sí, ofrecemos programas de capacitación:\n\n• Workshops técnicos personalizados\n• Capacitación en nuevas tecnologías\n• Best practices de desarrollo\n• Metodologías ágiles\n• Capacitación en herramientas específicas\n• Mentoring continuo\n• Materiales de referencia y documentación`
        }
      ]
    }
  };

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const currentCategory = faqCategories?.[activeCategory];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Encuentra respuestas a las preguntas más comunes sobre nuestros servicios. 
          Si no encuentras lo que buscas, no dudes en contactarnos.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Category Selector */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-lg p-4 elevation-1 sticky top-6">
            <h3 className="font-semibold text-text-primary mb-4">Categorías</h3>
            <div className="space-y-2">
              {Object.entries(faqCategories)?.map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                    activeCategory === key
                      ? 'bg-primary text-white' :'hover:bg-muted text-text-primary'
                  }`}
                >
                  <Icon name={category?.icon} size={18} />
                  <span className="text-sm font-medium">{category?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-3">
          <div className="bg-surface rounded-lg elevation-1 overflow-hidden">
            {/* Category Header */}
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={currentCategory?.icon} size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {currentCategory?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentCategory?.faqs?.length} preguntas frecuentes
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="divide-y divide-border">
              {currentCategory?.faqs?.map((faq, index) => (
                <div key={faq?.id} className="p-6">
                  <button
                    onClick={() => toggleFAQ(faq?.id)}
                    className="w-full flex items-center justify-between text-left hover:text-primary transition-colors duration-200"
                  >
                    <h4 className="text-lg font-medium text-text-primary pr-4">
                      {faq?.question}
                    </h4>
                    <Icon 
                      name={expandedFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="flex-shrink-0"
                      color="var(--color-muted-foreground)"
                    />
                  </button>

                  {expandedFAQ === faq?.id && (
                    <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                      <div className="prose prose-sm max-w-none">
                        {faq?.answer?.split('\n')?.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-text-secondary leading-relaxed mb-3 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="p-6 border-t border-border bg-muted/30">
              <div className="text-center">
                <h4 className="font-medium text-text-primary mb-2">
                  ¿No encontraste tu respuesta?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Nuestro equipo está listo para resolver todas tus dudas específicas
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="default">
                    <Icon name="MessageCircle" size={16} />
                    Contactar Soporte
                  </Button>
                  <Button variant="outline">
                    <Icon name="Calendar" size={16} />
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;