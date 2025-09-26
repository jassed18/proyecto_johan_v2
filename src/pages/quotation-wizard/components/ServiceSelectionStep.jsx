import React from 'react';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ServiceSelectionStep = ({ 
  selectedServices, 
  onServiceChange, 
  serviceCategories 
}) => {
  const handleServiceToggle = (serviceId, isChecked) => {
    if (isChecked) {
      onServiceChange([...selectedServices, serviceId]);
    } else {
      onServiceChange(selectedServices?.filter(id => id !== serviceId));
    }
  };

  const calculateCategoryTotal = (services) => {
    return services?.filter(service => selectedServices?.includes(service?.id))?.reduce((total, service) => total + service?.basePrice, 0);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Selecciona los Servicios
        </h2>
        <p className="text-muted-foreground">
          Elige los servicios que necesitas para tu proyecto
        </p>
      </div>
      {serviceCategories?.map((category) => (
        <div key={category?.id} className="bg-surface rounded-lg p-6 elevation-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={category?.icon} size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {category?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category?.description}
              </p>
            </div>
            {calculateCategoryTotal(category?.services) > 0 && (
              <div className="ml-auto bg-primary/10 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-primary">
                  ${calculateCategoryTotal(category?.services)?.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category?.services?.map((service) => (
              <div
                key={service?.id}
                className={`border rounded-lg p-4 transition-all duration-200 ${
                  selectedServices?.includes(service?.id)
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={selectedServices?.includes(service?.id)}
                    onChange={(e) => handleServiceToggle(service?.id, e?.target?.checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-text-primary">
                        {service?.name}
                      </h4>
                      <span className="text-sm font-semibold text-primary">
                        ${service?.basePrice?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {service?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service?.features?.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                        >
                          <Icon name="Check" size={12} className="mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedServices?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="AlertCircle" size={48} color="var(--color-muted-foreground)" />
          <p className="text-muted-foreground mt-4">
            Selecciona al menos un servicio para continuar
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceSelectionStep;