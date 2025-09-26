import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCategoryTabs = ({ onServiceSelect = () => {} }) => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'web-development',
      title: 'Desarrollo Web',
      icon: 'Globe',
      description: 'Sitios web modernos y aplicaciones web personalizadas',
      features: ['React & Next.js', 'Responsive Design', 'SEO Optimizado', 'E-commerce'],
      packages: [
        {
          name: 'Básico',
          price: '$1,200,000',
          timeline: '2-3 semanas',
          features: ['Landing Page', 'Diseño Responsive', 'Formulario de Contacto', 'SEO Básico']
        },
        {
          name: 'Profesional',
          price: '$2,800,000',
          timeline: '4-6 semanas',
          features: ['Sitio Multi-página', 'CMS Personalizado', 'Integración APIs', 'Analytics']
        },
        {
          name: 'Enterprise',
          price: '$5,500,000',
          timeline: '8-12 semanas',
          features: ['Aplicación Web Completa', 'Panel Admin', 'Integraciones Avanzadas', 'Soporte 24/7']
        }
      ]
    },
    {
      id: 'automation',
      title: 'Automatización',
      icon: 'Zap',
      description: 'Procesos automatizados para optimizar tu negocio',
      features: ['N8N Workflows', 'Make.com', 'APIs Personalizadas', 'Integraciones'],
      packages: [
        {
          name: 'Starter',
          price: '$800,000',
          timeline: '1-2 semanas',
          features: ['3 Workflows Básicos', 'Integración Email', 'Documentación', 'Soporte 30 días']
        },
        {
          name: 'Business',
          price: '$2,200,000',
          timeline: '3-4 semanas',
          features: ['10 Workflows Complejos', 'CRM Integration', 'Reportes Automáticos', 'Soporte 90 días']
        },
        {
          name: 'Enterprise',
          price: '$4,800,000',
          timeline: '6-8 semanas',
          features: ['Workflows Ilimitados', 'IA Integration', 'Dashboard Personalizado', 'Soporte Anual']
        }
      ]
    },
    {
      id: 'mobile-apps',
      title: 'Apps Móviles',
      icon: 'Smartphone',
      description: 'Aplicaciones móviles nativas y multiplataforma',
      features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Support'],
      packages: [
        {
          name: 'MVP',
          price: '$3,500,000',
          timeline: '6-8 semanas',
          features: ['App Básica', 'Una Plataforma', 'Funciones Core', 'Testing Básico']
        },
        {
          name: 'Pro',
          price: '$6,800,000',
          timeline: '10-12 semanas',
          features: ['App Completa', 'iOS & Android', 'Push Notifications', 'Analytics']
        },
        {
          name: 'Premium',
          price: '$12,000,000',
          timeline: '16-20 semanas',
          features: ['App Avanzada', 'Backend Completo', 'IA Features', 'Mantenimiento 1 año']
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integraciones',
      icon: 'Link',
      description: 'Conecta tus sistemas y herramientas existentes',
      features: ['API Development', 'Third-party APIs', 'Database Sync', 'Real-time Updates'],
      packages: [
        {
          name: 'Simple',
          price: '$600,000',
          timeline: '1 semana',
          features: ['2 Integraciones', 'API REST', 'Documentación', 'Testing']
        },
        {
          name: 'Advanced',
          price: '$1,800,000',
          timeline: '2-3 semanas',
          features: ['5 Integraciones', 'Webhooks', 'Data Transformation', 'Monitoring']
        },
        {
          name: 'Complex',
          price: '$3,800,000',
          timeline: '4-6 semanas',
          features: ['Integraciones Ilimitadas', 'Custom APIs', 'Real-time Sync', 'Dashboard']
        }
      ]
    },
    {
      id: 'consulting',
      title: 'Consultoría',
      icon: 'Users',
      description: 'Asesoramiento estratégico en tecnología e IA',
      features: ['Estrategia Digital', 'Auditoría Técnica', 'Roadmap Tecnológico', 'Training'],
      packages: [
        {
          name: 'Consulta',
          price: '$400,000',
          timeline: '1 semana',
          features: ['Sesión 2 horas', 'Análisis Inicial', 'Recomendaciones', 'Reporte Básico']
        },
        {
          name: 'Auditoría',
          price: '$1,200,000',
          timeline: '2 semanas',
          features: ['Auditoría Completa', 'Roadmap Detallado', 'Presentación', 'Seguimiento 30 días']
        },
        {
          name: 'Estrategia',
          price: '$2,800,000',
          timeline: '4 semanas',
          features: ['Estrategia Completa', 'Plan de Implementación', 'Training Team', 'Soporte 90 días']
        }
      ]
    }
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
    onServiceSelect(services?.[index]);
  };

  const currentService = services?.[activeTab];

  return (
    <div className="w-full">
      {/* Desktop Tabs */}
      <div className="hidden lg:block">
        <div className="flex space-x-1 bg-muted p-1 rounded-lg mb-8">
          {services?.map((service, index) => (
            <button
              key={service?.id}
              onClick={() => handleTabChange(index)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-surface text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-text-primary hover:bg-surface/50'
              }`}
            >
              <Icon name={service?.icon} size={16} />
              <span>{service?.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Mobile Dropdown */}
      <div className="lg:hidden mb-6">
        <div className="relative">
          <select
            value={activeTab}
            onChange={(e) => handleTabChange(parseInt(e?.target?.value))}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary appearance-none"
          >
            {services?.map((service, index) => (
              <option key={service?.id} value={index}>
                {service?.title}
              </option>
            ))}
          </select>
          <Icon 
            name="ChevronDown" 
            size={20} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground"
          />
        </div>
      </div>
      {/* Service Content */}
      <div className="bg-surface rounded-lg p-6 lg:p-8 elevation-1">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={currentService?.icon} size={32} color="var(--color-primary)" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              {currentService?.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              {currentService?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentService?.features?.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentService?.packages?.map((pkg, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 transition-all duration-200 hover:elevation-2 ${
                index === 1 
                  ? 'border-primary bg-primary/5 relative' :'border-border bg-surface'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {pkg?.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {pkg?.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {pkg?.timeline}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg?.features?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={index === 1 ? "default" : "outline"}
                fullWidth
                onClick={() => onServiceSelect({ service: currentService, package: pkg })}
              >
                Seleccionar Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoryTabs;