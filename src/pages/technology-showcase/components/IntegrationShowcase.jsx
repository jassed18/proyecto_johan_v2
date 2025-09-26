import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationShowcase = ({ integrations, onViewCase }) => {
  const [activeIntegration, setActiveIntegration] = useState(0);

  return (
    <div className="bg-surface rounded-xl p-6 elevation-1">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Integraciones Poderosas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre cómo combinamos diferentes tecnologías para crear soluciones completas y eficientes
        </p>
      </div>
      {/* Integration Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {integrations?.map((integration, index) => (
          <button
            key={integration?.id}
            onClick={() => setActiveIntegration(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeIntegration === index
                ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {integration?.title}
          </button>
        ))}
      </div>
      {/* Active Integration Content */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Integration Diagram */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              {integrations?.[activeIntegration]?.title}
            </h3>
            
            {/* Workflow Visualization */}
            <div className="space-y-4">
              {integrations?.[activeIntegration]?.workflow?.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name={step?.icon} size={16} color="var(--color-primary)" />
                      <span className="font-medium text-text-primary">{step?.technology}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step?.description}</p>
                  </div>
                  {index < integrations?.[activeIntegration]?.workflow?.length - 1 && (
                    <div className="absolute left-5 mt-10 w-0.5 h-6 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Details */}
        <div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-3">
              Beneficios de esta Integración
            </h4>
            <ul className="space-y-2">
              {integrations?.[activeIntegration]?.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-text-primary mb-3">Tecnologías Utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {integrations?.[activeIntegration]?.technologies?.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
                  <Icon name={tech?.icon} size={16} />
                  <span className="text-sm font-medium">{tech?.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Link */}
          <div className="bg-primary/5 rounded-lg p-4 mb-4">
            <h5 className="font-medium text-text-primary mb-2">Caso de Estudio:</h5>
            <p className="text-sm text-muted-foreground mb-3">
              {integrations?.[activeIntegration]?.caseStudy?.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-muted-foreground">Industria: </span>
                <span className="font-medium text-text-primary">
                  {integrations?.[activeIntegration]?.caseStudy?.industry}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onViewCase(integrations?.[activeIntegration])}
              >
                Ver Caso
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="default">
              <Icon name="MessageCircle" size={16} />
              Consultar Integración
            </Button>
            <Button variant="outline">
              <Icon name="FileText" size={16} />
              Documentación
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationShowcase;