import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState([0, 1]);

  const comparisonData = [
    {
      id: 'web-basic',
      category: 'Desarrollo Web',
      name: 'Básico',
      price: '$1,200,000',
      timeline: '2-3 semanas',
      features: {
        'Páginas incluidas': '1-3',
        'Diseño responsive': true,
        'SEO básico': true,
        'Formulario contacto': true,
        'CMS personalizado': false,
        'E-commerce': false,
        'Integración APIs': false,
        'Analytics avanzado': false,
        'Soporte post-lanzamiento': '30 días',
        'Revisiones incluidas': '3',
        'Hosting incluido': false,
        'SSL certificado': true
      }
    },
    {
      id: 'web-pro',
      category: 'Desarrollo Web',
      name: 'Profesional',
      price: '$2,800,000',
      timeline: '4-6 semanas',
      features: {
        'Páginas incluidas': '5-10',
        'Diseño responsive': true,
        'SEO básico': true,
        'Formulario contacto': true,
        'CMS personalizado': true,
        'E-commerce': 'Básico',
        'Integración APIs': true,
        'Analytics avanzado': true,
        'Soporte post-lanzamiento': '90 días',
        'Revisiones incluidas': '5',
        'Hosting incluido': '6 meses',
        'SSL certificado': true
      }
    },
    {
      id: 'web-enterprise',
      category: 'Desarrollo Web',
      name: 'Enterprise',
      price: '$5,500,000',
      timeline: '8-12 semanas',
      features: {
        'Páginas incluidas': 'Ilimitadas',
        'Diseño responsive': true,
        'SEO básico': true,
        'Formulario contacto': true,
        'CMS personalizado': true,
        'E-commerce': 'Completo',
        'Integración APIs': true,
        'Analytics avanzado': true,
        'Soporte post-lanzamiento': '1 año',
        'Revisiones incluidas': 'Ilimitadas',
        'Hosting incluido': '1 año',
        'SSL certificado': true
      }
    },
    {
      id: 'automation-starter',
      category: 'Automatización',
      name: 'Starter',
      price: '$800,000',
      timeline: '1-2 semanas',
      features: {
        'Workflows incluidos': '3',
        'Integración email': true,
        'CRM integration': false,
        'Reportes automáticos': false,
        'IA integration': false,
        'Dashboard personalizado': false,
        'API personalizada': false,
        'Webhooks': false,
        'Soporte post-lanzamiento': '30 días',
        'Revisiones incluidas': '2',
        'Documentación': 'Básica',
        'Training incluido': false
      }
    },
    {
      id: 'automation-business',
      category: 'Automatización',
      name: 'Business',
      price: '$2,200,000',
      timeline: '3-4 semanas',
      features: {
        'Workflows incluidos': '10',
        'Integración email': true,
        'CRM integration': true,
        'Reportes automáticos': true,
        'IA integration': false,
        'Dashboard personalizado': 'Básico',
        'API personalizada': true,
        'Webhooks': true,
        'Soporte post-lanzamiento': '90 días',
        'Revisiones incluidas': '5',
        'Documentación': 'Completa',
        'Training incluido': '2 horas'
      }
    }
  ];

  const allFeatures = [
    'Páginas incluidas', 'Workflows incluidos', 'Diseño responsive', 'SEO básico',
    'Formulario contacto', 'CMS personalizado', 'E-commerce', 'Integración APIs',
    'Integración email', 'CRM integration', 'Reportes automáticos', 'IA integration',
    'Dashboard personalizado', 'API personalizada', 'Webhooks', 'Analytics avanzado',
    'Soporte post-lanzamiento', 'Revisiones incluidas', 'Hosting incluido', 'SSL certificado',
    'Documentación', 'Training incluido'
  ];

  const handleServiceToggle = (index) => {
    if (selectedServices?.includes(index)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(i => i !== index));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, index]);
      }
    }
  };

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={16} color="var(--color-success)" />
      ) : (
        <Icon name="X" size={16} color="var(--color-error)" />
      );
    }
    return <span className="text-sm text-text-secondary">{value}</span>;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Comparar Servicios
        </h2>
        <p className="text-muted-foreground mb-6">
          Selecciona hasta 3 servicios para comparar características y precios
        </p>
        
        {/* Service Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {comparisonData?.map((service, index) => (
            <button
              key={service?.id}
              onClick={() => handleServiceToggle(index)}
              disabled={!selectedServices?.includes(index) && selectedServices?.length >= 3}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedServices?.includes(index)
                  ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-muted/80'
              } ${
                !selectedServices?.includes(index) && selectedServices?.length >= 3
                  ? 'opacity-50 cursor-not-allowed' :''
              }`}
            >
              {service?.category} - {service?.name}
            </button>
          ))}
        </div>
      </div>
      {/* Desktop Comparison Table */}
      <div className="hidden lg:block bg-surface rounded-lg elevation-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium text-text-primary">
                  Características
                </th>
                {selectedServices?.map((serviceIndex) => {
                  const service = comparisonData?.[serviceIndex];
                  return (
                    <th key={service?.id} className="text-center p-4 min-w-48">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                          {service?.category}
                        </div>
                        <div className="font-semibold text-text-primary">
                          {service?.name}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {service?.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service?.timeline}
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {allFeatures?.map((feature, index) => {
                const hasFeature = selectedServices?.some(serviceIndex => 
                  comparisonData?.[serviceIndex]?.features?.hasOwnProperty(feature)
                );
                
                if (!hasFeature) return null;

                return (
                  <tr key={feature} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-surface'}>
                    <td className="p-4 font-medium text-text-secondary">
                      {feature}
                    </td>
                    {selectedServices?.map((serviceIndex) => {
                      const service = comparisonData?.[serviceIndex];
                      const value = service?.features?.[feature];
                      return (
                        <td key={service?.id} className="p-4 text-center">
                          {value !== undefined ? renderFeatureValue(value) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex justify-center space-x-4">
            {selectedServices?.map((serviceIndex) => {
              const service = comparisonData?.[serviceIndex];
              return (
                <Button
                  key={service?.id}
                  variant="default"
                  className="min-w-32"
                >Seleccionar {service?.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile Comparison Cards */}
      <div className="lg:hidden space-y-4">
        {selectedServices?.map((serviceIndex) => {
          const service = comparisonData?.[serviceIndex];
          return (
            <div key={service?.id} className="bg-surface rounded-lg p-6 elevation-1">
              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground mb-1">
                  {service?.category}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service?.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-1">
                  {service?.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {service?.timeline}
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {Object.entries(service?.features)?.map(([feature, value]) => (
                  <div key={feature} className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">{feature}</span>
                    <div className="flex items-center">
                      {renderFeatureValue(value)}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="default" fullWidth>
                Seleccionar {service?.name}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceComparison;