import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceRequestForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    priority: '',
    title: '',
    description: '',
    budget: '',
    timeline: '',
    attachments: []
  });

  const serviceOptions = [
    { value: 'web-development', label: 'Desarrollo Web' },
    { value: 'mobile-app', label: 'Aplicación Móvil' },
    { value: 'automation', label: 'Automatización de Procesos' },
    { value: 'ai-integration', label: 'Integración de IA' },
    { value: 'consulting', label: 'Consultoría Técnica' },
    { value: 'maintenance', label: 'Mantenimiento y Soporte' },
    { value: 'other', label: 'Otro Servicio' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Baja - No urgente' },
    { value: 'medium', label: 'Media - Importante' },
    { value: 'high', label: 'Alta - Urgente' },
    { value: 'critical', label: 'Crítica - Inmediata' }
  ];

  const timelineOptions = [
    { value: '1-week', label: '1 semana' },
    { value: '2-weeks', label: '2 semanas' },
    { value: '1-month', label: '1 mes' },
    { value: '2-months', label: '2 meses' },
    { value: '3-months', label: '3+ meses' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSubmit(formData);
    setFormData({
      serviceType: '',
      priority: '',
      title: '',
      description: '',
      budget: '',
      timeline: '',
      attachments: []
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-4 md:inset-8 lg:inset-16 bg-surface rounded-lg elevation-4 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Plus" size={20} color="var(--color-primary)" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Nueva Solicitud de Servicio</h3>
                <p className="text-sm text-muted-foreground">Describe tu nueva necesidad o proyecto</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type & Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Tipo de Servicio"
                  placeholder="Selecciona un servicio"
                  options={serviceOptions}
                  value={formData?.serviceType}
                  onChange={(value) => handleInputChange('serviceType', value)}
                  required
                />
                
                <Select
                  label="Prioridad"
                  placeholder="Selecciona la prioridad"
                  options={priorityOptions}
                  value={formData?.priority}
                  onChange={(value) => handleInputChange('priority', value)}
                  required
                />
              </div>

              {/* Title */}
              <Input
                label="Título del Proyecto"
                type="text"
                placeholder="Ej: Rediseño de sitio web corporativo"
                value={formData?.title}
                onChange={(e) => handleInputChange('title', e?.target?.value)}
                required
              />

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Descripción Detallada *
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={6}
                  placeholder="Describe en detalle lo que necesitas, objetivos, funcionalidades específicas, etc."
                  value={formData?.description}
                  onChange={(e) => handleInputChange('description', e?.target?.value)}
                  required
                />
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Presupuesto Estimado"
                  type="text"
                  placeholder="Ej: $5,000 - $10,000 USD"
                  value={formData?.budget}
                  onChange={(e) => handleInputChange('budget', e?.target?.value)}
                  description="Opcional - nos ayuda a preparar una propuesta adecuada"
                />
                
                <Select
                  label="Tiempo Esperado"
                  placeholder="¿Cuándo lo necesitas?"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  required
                />
              </div>

              {/* File Upload Area */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Archivos Adjuntos
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-200">
                  <Icon name="Upload" size={32} color="var(--color-muted-foreground)" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Arrastra archivos aquí o haz clic para seleccionar
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Documentos, imágenes, referencias (máx. 10MB cada uno)
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Seleccionar Archivos
                  </Button>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} color="var(--color-primary)" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">¿Qué sucede después?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Revisaremos tu solicitud en 24 horas</li>
                      <li>• Te contactaremos para aclarar detalles</li>
                      <li>• Prepararemos una propuesta personalizada</li>
                      <li>• Programaremos una reunión para discutir el proyecto</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between p-6 border-t border-border">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <div className="flex space-x-3">
              <Button variant="ghost">
                Guardar Borrador
              </Button>
              <Button variant="default" onClick={handleSubmit}>
                Enviar Solicitud
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestForm;