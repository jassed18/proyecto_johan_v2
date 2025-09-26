import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyCard = ({ technology, onInquire }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-surface rounded-xl p-6 elevation-2 hover:elevation-3 transition-all duration-300 hover-lift group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Technology Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
          }`}>
            <Icon name={technology?.icon} size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{technology?.name}</h3>
            <p className="text-sm text-muted-foreground">{technology?.category}</p>
          </div>
        </div>
        {technology?.isPartner && (
          <div className="bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
            Partner
          </div>
        )}
      </div>
      {/* Technology Description */}
      <p className="text-text-secondary mb-4 line-clamp-3">
        {technology?.description}
      </p>
      {/* Use Cases */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-text-primary mb-2">Casos de Uso:</h4>
        <div className="flex flex-wrap gap-2">
          {technology?.useCases?.slice(0, 3)?.map((useCase, index) => (
            <span 
              key={index}
              className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
            >
              {useCase}
            </span>
          ))}
          {technology?.useCases?.length > 3 && (
            <span className="text-xs text-primary font-medium">
              +{technology?.useCases?.length - 3} más
            </span>
          )}
        </div>
      </div>
      {/* Hover Details */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-border pt-4 mb-4">
          <h4 className="text-sm font-medium text-text-primary mb-2">Beneficios Clave:</h4>
          <ul className="space-y-1">
            {technology?.benefits?.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Integration Info */}
        {technology?.integrations && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-text-primary mb-2">Se Integra Con:</h4>
            <div className="flex flex-wrap gap-1">
              {technology?.integrations?.map((integration, index) => (
                <span 
                  key={index}
                  className="bg-secondary/10 text-secondary px-2 py-1 rounded-md text-xs"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Action Buttons */}
      <div className="flex space-x-2 mt-4">
        <Button 
          variant="outline" 
          size="sm" 
          fullWidth
          onClick={() => onInquire(technology)}
        >
          <Icon name="MessageCircle" size={14} />
          Consultar
        </Button>
        {technology?.demoUrl && (
          <Button variant="ghost" size="sm">
            <Icon name="ExternalLink" size={14} />
            Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default TechnologyCard;