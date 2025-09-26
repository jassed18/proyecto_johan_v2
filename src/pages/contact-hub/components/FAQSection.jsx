import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqCategories = [
    {
      id: 'general',
      title: 'Preguntas Generales',
      icon: 'HelpCircle',
      questions: [
        {
          id: 'q1',
          question: '¿Qué servicios ofrece AI Solutions Hub?',
          answer: `Ofrecemos una amplia gama de servicios tecnológicos incluyendo:\n• Desarrollo web personalizado con React y Next.js\n• Automatización de procesos con N8N y Make\n• Aplicaciones móviles nativas e híbridas\n• Integraciones de sistemas y APIs\n• Consultoría en inteligencia artificial\n• Soluciones de machine learning y análisis de datos`
        },
        {
          id: 'q2',
          question: '¿Cuánto tiempo toma desarrollar un proyecto?',
          answer: `Los tiempos varían según la complejidad:\n• Sitios web básicos: 2-4 semanas\n• Aplicaciones web complejas: 6-12 semanas\n• Apps móviles: 8-16 semanas\n• Automatizaciones: 1-4 semanas\n• Proyectos de IA: 4-20 semanas\n\nTe proporcionamos un cronograma detallado después de la consulta inicial.`
        },
        {
          id: 'q3',
          question: '¿Ofrecen soporte post-lanzamiento?',
          answer: `Sí, ofrecemos diferentes niveles de soporte:\n• Soporte básico: 3 meses incluidos\n• Soporte extendido: 6-12 meses\n• Mantenimiento continuo: Planes mensuales\n• Actualizaciones y mejoras\n• Monitoreo 24/7 para proyectos críticos`
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Precios y Pagos',
      icon: 'DollarSign',
      questions: [
        {
          id: 'q4',
          question: '¿Cómo manejan los precios de los proyectos?',
          answer: `Nuestros precios se basan en:\n• Complejidad técnica del proyecto\n• Tiempo estimado de desarrollo\n• Recursos necesarios\n• Tecnologías a implementar\n\nOfrecemos cotizaciones gratuitas y transparentes. Los pagos se estructuran en hitos del proyecto.`
        },
        {
          id: 'q5',
          question: '¿Qué métodos de pago aceptan?',
          answer: `Aceptamos múltiples formas de pago:\n• Transferencias bancarias\n• Pagos con tarjeta de crédito/débito\n• PayPal para clientes internacionales\n• Criptomonedas (Bitcoin, Ethereum)\n• Financiamiento para proyectos grandes`
        },
        {
          id: 'q6',
          question: '¿Ofrecen descuentos para startups?',
          answer: `Sí, tenemos programas especiales:\n• 15% de descuento para startups verificadas\n• Planes de pago flexibles\n• Equity partnerships para proyectos prometedores\n• Descuentos por volumen para múltiples proyectos\n• Precios especiales para ONGs y educación`
        }
      ]
    },
    {
      id: 'technical',
      title: 'Aspectos Técnicos',
      icon: 'Code',
      questions: [
        {
          id: 'q7',
          question: '¿Qué tecnologías utilizan?',
          answer: `Trabajamos con tecnologías modernas:\n• Frontend: React, Next.js, Vue.js\n• Backend: Node.js, Python, FastAPI\n• Bases de datos: PostgreSQL, MongoDB, Redis\n• Cloud: AWS, Google Cloud, Azure\n• IA: OpenAI GPT, watsonx.ai, TensorFlow\n• Automatización: N8N, Make, Zapier`
        },
        {
          id: 'q8',
          question: '¿Proporcionan el código fuente?',
          answer: `Absolutamente. Al finalizar el proyecto:\n• Entregamos todo el código fuente\n• Documentación técnica completa\n• Guías de despliegue y mantenimiento\n• Transferencia de repositorios\n• Capacitación para tu equipo técnico`
        },
        {
          id: 'q9',
          question: '¿Cómo garantizan la seguridad?',
          answer: `La seguridad es nuestra prioridad:\n• Auditorías de seguridad regulares\n• Encriptación de datos en tránsito y reposo\n• Autenticación multifactor\n• Cumplimiento con GDPR y normativas locales\n• Backups automáticos y recuperación\n• Monitoreo continuo de vulnerabilidades`
        }
      ]
    }
  ];

  const toggleExpanded = (questionId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded?.has(questionId)) {
      newExpanded?.delete(questionId);
    } else {
      newExpanded?.add(questionId);
    }
    setExpandedItems(newExpanded);
  };

  const filteredCategories = faqCategories?.map(category => ({
    ...category,
    questions: category?.questions?.filter(q =>
      q?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      q?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
  }))?.filter(category => category?.questions?.length > 0);

  return (
    <div className="bg-surface rounded-lg p-6 elevation-2">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="HelpCircle" size={20} color="var(--color-accent)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            Preguntas Frecuentes
          </h3>
          <p className="text-sm text-muted-foreground">
            Encuentra respuestas rápidas a tus dudas
          </p>
        </div>
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Buscar en preguntas frecuentes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="w-full"
        />
      </div>
      {/* FAQ Categories */}
      <div className="space-y-6">
        {filteredCategories?.map((category) => (
          <div key={category?.id}>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name={category?.icon} size={18} color="var(--color-primary)" />
              <h4 className="font-semibold text-text-primary">
                {category?.title}
              </h4>
              <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                {category?.questions?.length}
              </span>
            </div>

            <div className="space-y-3">
              {category?.questions?.map((faq) => (
                <div
                  key={faq?.id}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpanded(faq?.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors duration-200"
                  >
                    <span className="font-medium text-text-primary pr-4">
                      {faq?.question}
                    </span>
                    <Icon
                      name={expandedItems?.has(faq?.id) ? "ChevronUp" : "ChevronDown"}
                      size={16}
                      color="var(--color-muted-foreground)"
                    />
                  </button>

                  {expandedItems?.has(faq?.id) && (
                    <div className="px-4 pb-4 border-t border-border">
                      <div className="pt-3 text-sm text-muted-foreground whitespace-pre-line">
                        {faq?.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {filteredCategories?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
          <p className="text-muted-foreground">
            No se encontraron preguntas que coincidan con tu búsqueda.
          </p>
        </div>
      )}
      {/* Contact for More Help */}
      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">
              ¿No encuentras lo que buscas?
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Nuestro equipo está listo para ayudarte con cualquier pregunta específica.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => window.open('https://wa.me/573012169668', '_blank')}
                className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-primary/90 transition-colors"
              >
                WhatsApp
              </button>
              <button
                onClick={() => window.open('mailto:aisolutionsauto20@gmail.com', '_self')}
                className="text-xs bg-secondary text-white px-3 py-1 rounded-full hover:bg-secondary/90 transition-colors"
              >
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;