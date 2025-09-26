import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuotationSummary = ({ 
  selectedServices, 
  formData, 
  serviceCategories,
  onEdit,
  isSubmitting 
}) => {
  const getSelectedServiceDetails = () => {
    const services = [];
    serviceCategories?.forEach(category => {
      category?.services?.forEach(service => {
        if (selectedServices?.includes(service?.id)) {
          services?.push({
            ...service,
            categoryName: category?.name,
            categoryIcon: category?.icon
          });
        }
      });
    });
    return services;
  };

  const calculateTotalCost = () => {
    const services = getSelectedServiceDetails();
    const baseTotal = services?.reduce((total, service) => total + service?.basePrice, 0);
    
    // Apply complexity multipliers based on form data
    let complexityMultiplier = 1;
    
    if (formData?.multiLanguage) complexityMultiplier += 0.2;
    if (formData?.mobileApp) complexityMultiplier += 0.3;
    if (formData?.adminPanel) complexityMultiplier += 0.25;
    if (formData?.analytics) complexityMultiplier += 0.15;
    
    // Timeline urgency multiplier
    const timelineMultipliers = {
      '1-2-weeks': 1.5,
      '3-4-weeks': 1.2,
      '1-2-months': 1,
      '3-6-months': 0.9,
      'flexible': 0.85
    };
    
    const timelineMultiplier = timelineMultipliers?.[formData?.timeline] || 1;
    
    return Math.round(baseTotal * complexityMultiplier * timelineMultiplier);
  };

  const getEstimatedTimeline = () => {
    const timelineLabels = {
      '1-2-weeks': '1-2 semanas',
      '3-4-weeks': '3-4 semanas',
      '1-2-months': '1-2 meses',
      '3-6-months': '3-6 meses',
      'flexible': 'Flexible'
    };
    return timelineLabels?.[formData?.timeline] || 'No especificado';
  };

  const getPriorityLabel = () => {
    const priorityLabels = {
      'low': 'Baja',
      'medium': 'Media',
      'high': 'Alta',
      'urgent': 'Urgente'
    };
    return priorityLabels?.[formData?.priority] || 'No especificada';
  };

  const selectedServiceDetails = getSelectedServiceDetails();
  const totalCost = calculateTotalCost();

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Resumen de Cotización
        </h2>
        <p className="text-muted-foreground">
          Revisa todos los detalles antes de enviar tu solicitud
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Services Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selected Services */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary flex items-center">
                <Icon name="Package" size={20} className="mr-2" />
                Servicios Seleccionados
              </h3>
              <Button variant="ghost" size="sm" onClick={() => onEdit(0)}>
                <Icon name="Edit" size={16} />
                Editar
              </Button>
            </div>

            <div className="space-y-4">
              {selectedServiceDetails?.map((service) => (
                <div key={service?.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={service?.categoryIcon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">{service?.name}</h4>
                      <p className="text-sm text-muted-foreground">{service?.categoryName}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-primary">
                    ${service?.basePrice?.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary flex items-center">
                <Icon name="FileText" size={20} className="mr-2" />
                Detalles del Proyecto
              </h3>
              <Button variant="ghost" size="sm" onClick={() => onEdit(1)}>
                <Icon name="Edit" size={16} />
                Editar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Nombre del Proyecto</label>
                <p className="text-text-primary">{formData?.projectName || 'No especificado'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Cronograma</label>
                <p className="text-text-primary">{getEstimatedTimeline()}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Prioridad</label>
                <p className="text-text-primary">{getPriorityLabel()}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Presupuesto</label>
                <p className="text-text-primary">{formData?.budget || 'No especificado'}</p>
              </div>
            </div>

            {formData?.projectDescription && (
              <div className="mt-4">
                <label className="text-sm font-medium text-muted-foreground">Descripción</label>
                <p className="text-text-primary text-sm mt-1 line-clamp-3">
                  {formData?.projectDescription}
                </p>
              </div>
            )}

            {/* Additional Features */}
            <div className="mt-4">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Características Adicionales
              </label>
              <div className="flex flex-wrap gap-2">
                {formData?.multiLanguage && (
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    <Icon name="Globe" size={12} className="mr-1" />
                    Multiidioma
                  </span>
                )}
                {formData?.mobileApp && (
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    <Icon name="Smartphone" size={12} className="mr-1" />
                    App Móvil
                  </span>
                )}
                {formData?.adminPanel && (
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    <Icon name="Settings" size={12} className="mr-1" />
                    Panel Admin
                  </span>
                )}
                {formData?.analytics && (
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    <Icon name="BarChart3" size={12} className="mr-1" />
                    Analytics
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary flex items-center">
                <Icon name="User" size={20} className="mr-2" />
                Información de Contacto
              </h3>
              <Button variant="ghost" size="sm" onClick={() => onEdit(2)}>
                <Icon name="Edit" size={16} />
                Editar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Nombre Completo</label>
                <p className="text-text-primary">
                  {`${formData?.firstName || ''} ${formData?.lastName || ''}`?.trim() || 'No especificado'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-text-primary">{formData?.email || 'No especificado'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Teléfono</label>
                <p className="text-text-primary">{formData?.phone || 'No especificado'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Empresa</label>
                <p className="text-text-primary">{formData?.companyName || 'No especificado'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Summary Sidebar */}
        <div className="space-y-6">
          {/* Cost Breakdown */}
          <div className="bg-surface rounded-lg p-6 elevation-1 sticky top-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Calculator" size={20} className="mr-2" />
              Resumen de Costos
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Servicios Base:</span>
                <span className="text-text-primary">
                  ${selectedServiceDetails?.reduce((total, service) => total + service?.basePrice, 0)?.toLocaleString()}
                </span>
              </div>

              {formData?.multiLanguage && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Multiidioma (+20%):</span>
                  <span className="text-text-primary">Incluido</span>
                </div>
              )}

              {formData?.mobileApp && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">App Móvil (+30%):</span>
                  <span className="text-text-primary">Incluido</span>
                </div>
              )}

              {formData?.adminPanel && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Panel Admin (+25%):</span>
                  <span className="text-text-primary">Incluido</span>
                </div>
              )}

              {formData?.analytics && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Analytics (+15%):</span>
                  <span className="text-text-primary">Incluido</span>
                </div>
              )}

              <hr className="border-border" />

              <div className="flex justify-between font-semibold text-lg">
                <span className="text-text-primary">Total Estimado:</span>
                <span className="text-primary">${totalCost?.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <Icon name="Info" size={14} className="inline mr-1" />
                Este es un estimado inicial. El costo final puede variar según los requerimientos específicos del proyecto.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
              <Icon name="CheckCircle" size={20} className="mr-2" />
              Próximos Pasos
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Icon name="Mail" size={16} color="var(--color-primary)" className="mt-0.5" />
                <span className="text-text-secondary">
                  Recibirás la cotización detallada en tu email
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Phone" size={16} color="var(--color-primary)" className="mt-0.5" />
                <span className="text-text-secondary">
                  Te contactaremos en 24-48 horas para discutir detalles
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Calendar" size={16} color="var(--color-primary)" className="mt-0.5" />
                <span className="text-text-secondary">
                  Programaremos una reunión para definir el alcance
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Rocket" size={16} color="var(--color-primary)" className="mt-0.5" />
                <span className="text-text-secondary">
                  ¡Comenzamos a trabajar en tu proyecto!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSubmitting && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-surface rounded-lg p-8 elevation-3 text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Send" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Enviando Cotización...
            </h3>
            <p className="text-muted-foreground">
              Estamos procesando tu solicitud. Te contactaremos pronto.
            </p>
            <div className="mt-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationSummary;