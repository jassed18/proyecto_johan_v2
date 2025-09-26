import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const ServiceNavigationTabs = ({ 
  services = [],
  activeTab = 0,
  onTabChange = () => {},
  className = ""
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const defaultServices = [
    {
      id: 'ai-development',
      title: 'Desarrollo IA',
      description: 'Soluciones personalizadas de inteligencia artificial',
      icon: 'Brain',
      content: 'Contenido de desarrollo IA...',
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      id: 'automation',
      title: 'Automatización',
      description: 'Procesos automatizados para tu negocio',
      icon: 'Zap',
      content: 'Contenido de automatización...',
      features: ['RPA', 'Workflows', 'Integrations', 'APIs']
    },
    {
      id: 'consulting',
      title: 'Consultoría',
      description: 'Asesoramiento estratégico en tecnología',
      icon: 'Users',
      content: 'Contenido de consultoría...',
      features: ['Strategy', 'Implementation', 'Training', 'Support']
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Análisis de datos y business intelligence',
      icon: 'BarChart3',
      content: 'Contenido de analytics...',
      features: ['Data Analysis', 'Dashboards', 'Reports', 'Insights']
    }
  ];

  const serviceData = services?.length > 0 ? services : defaultServices;

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    onTabChange(index, serviceData?.[index]);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Tabs */}
      <div className="hidden md:block">
        {/* Tab Headers */}
        <div className="flex space-x-1 bg-muted p-1 rounded-lg mb-6">
          {serviceData?.map((service, index) => (
            <button
              key={service?.id}
              onClick={() => handleTabClick(index)}
              className={`
                flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200
                ${activeTabIndex === index
                  ? 'bg-surface text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-text-primary hover:bg-surface/50'
                }
              `}
            >
              <Icon name={service?.icon} size={16} />
              <span>{service?.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-surface rounded-lg p-6 elevation-1">
          {serviceData?.map((service, index) => (
            <div
              key={service?.id}
              className={`${activeTabIndex === index ? 'block' : 'hidden'}`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={service?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {service?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service?.description}
                  </p>
                </div>
              </div>

              {service?.features && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex space-x-3">
                <Button variant="default">
                  Solicitar Cotización
                </Button>
                <Button variant="outline">
                  Más Información
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Accordion */}
      <div className="md:hidden space-y-3">
        {serviceData?.map((service, index) => (
          <div key={service?.id} className="bg-surface rounded-lg elevation-1 overflow-hidden">
            <button
              onClick={() => handleTabClick(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={service?.icon} size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">{service?.title}</h3>
                  <p className="text-sm text-muted-foreground">{service?.description}</p>
                </div>
              </div>
              <Icon 
                name={activeTabIndex === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="var(--color-muted-foreground)"
              />
            </button>

            {activeTabIndex === index && (
              <div className="px-4 pb-4 border-t border-border">
                {service?.features && (
                  <div className="grid grid-cols-1 gap-2 mb-4 mt-4">
                    {service?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} color="var(--color-success)" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col space-y-2">
                  <Button variant="default" size="sm" fullWidth>
                    Solicitar Cotización
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    Más Información
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceNavigationTabs;