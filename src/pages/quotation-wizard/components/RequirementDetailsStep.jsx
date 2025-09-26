import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RequirementDetailsStep = ({ 
  formData, 
  onFormDataChange, 
  selectedServices,
  serviceCategories 
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const timelineOptions = [
    { value: '1-2-weeks', label: '1-2 semanas' },
    { value: '3-4-weeks', label: '3-4 semanas' },
    { value: '1-2-months', label: '1-2 meses' },
    { value: '3-6-months', label: '3-6 meses' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const budgetOptions = [
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000-50000', label: '$25,000 - $50,000' },
    { value: '50000+', label: '$50,000+' },
    { value: 'custom', label: 'Presupuesto personalizado' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Baja - Proyecto a largo plazo' },
    { value: 'medium', label: 'Media - Importante pero no urgente' },
    { value: 'high', label: 'Alta - Necesario pronto' },
    { value: 'urgent', label: 'Urgente - Lo antes posible' }
  ];

  const handleInputChange = (field, value) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event?.target?.files);
    const newFiles = files?.map(file => ({
      id: Date.now() + Math.random(),
      name: file?.name,
      size: file?.size,
      type: file?.type,
      file: file
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(uploadedFiles?.filter(file => file?.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  const getSelectedServiceNames = () => {
    const services = [];
    serviceCategories?.forEach(category => {
      category?.services?.forEach(service => {
        if (selectedServices?.includes(service?.id)) {
          services?.push(service?.name);
        }
      });
    });
    return services;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Detalles del Proyecto
        </h2>
        <p className="text-muted-foreground">
          Proporciona información específica sobre tus requerimientos
        </p>
      </div>
      {/* Selected Services Summary */}
      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
        <h3 className="font-medium text-primary mb-2">Servicios Seleccionados:</h3>
        <div className="flex flex-wrap gap-2">
          {getSelectedServiceNames()?.map((serviceName, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {serviceName}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Information */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="FileText" size={20} className="mr-2" />
              Información del Proyecto
            </h3>

            <div className="space-y-4">
              <Input
                label="Nombre del Proyecto"
                type="text"
                placeholder="Ej: Sistema de Gestión Empresarial"
                value={formData?.projectName || ''}
                onChange={(e) => handleInputChange('projectName', e?.target?.value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Descripción Detallada *
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Describe tu proyecto, objetivos, funcionalidades esperadas..."
                  value={formData?.projectDescription || ''}
                  onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
                  required
                />
              </div>

              <Select
                label="Cronograma Preferido"
                options={timelineOptions}
                value={formData?.timeline || ''}
                onChange={(value) => handleInputChange('timeline', value)}
                placeholder="Selecciona el tiempo estimado"
                required
              />

              <Select
                label="Rango de Presupuesto"
                options={budgetOptions}
                value={formData?.budget || ''}
                onChange={(value) => handleInputChange('budget', value)}
                placeholder="Selecciona tu rango de presupuesto"
                required
              />

              <Select
                label="Prioridad del Proyecto"
                options={priorityOptions}
                value={formData?.priority || ''}
                onChange={(value) => handleInputChange('priority', value)}
                placeholder="¿Qué tan urgente es tu proyecto?"
                required
              />
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Settings" size={20} className="mr-2" />
              Requerimientos Técnicos
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Tecnologías Específicas
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Ej: React, Node.js, PostgreSQL, AWS..."
                  value={formData?.technologies || ''}
                  onChange={(e) => handleInputChange('technologies', e?.target?.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Integraciones Requeridas
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Ej: APIs de pago, CRM, sistemas existentes..."
                  value={formData?.integrations || ''}
                  onChange={(e) => handleInputChange('integrations', e?.target?.value)}
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-text-primary">
                  Características Adicionales
                </label>
                
                <Checkbox
                  label="Soporte multiidioma"
                  checked={formData?.multiLanguage || false}
                  onChange={(e) => handleInputChange('multiLanguage', e?.target?.checked)}
                />
                
                <Checkbox
                  label="Aplicación móvil"
                  checked={formData?.mobileApp || false}
                  onChange={(e) => handleInputChange('mobileApp', e?.target?.checked)}
                />
                
                <Checkbox
                  label="Panel de administración"
                  checked={formData?.adminPanel || false}
                  onChange={(e) => handleInputChange('adminPanel', e?.target?.checked)}
                />
                
                <Checkbox
                  label="Análisis y reportes"
                  checked={formData?.analytics || false}
                  onChange={(e) => handleInputChange('analytics', e?.target?.checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* File Upload and Additional Info */}
        <div className="space-y-6">
          {/* File Upload */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Upload" size={20} className="mr-2" />
              Documentos del Proyecto
            </h3>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-200">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Icon name="Upload" size={32} color="var(--color-muted-foreground)" />
                  <p className="text-muted-foreground mt-2">
                    Arrastra archivos aquí o <span className="text-primary">haz clic para seleccionar</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC, imágenes, ZIP (máx. 10MB cada uno)
                  </p>
                </label>
              </div>

              {uploadedFiles?.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-text-primary">
                    Archivos Subidos ({uploadedFiles?.length})
                  </h4>
                  {uploadedFiles?.map((file) => (
                    <div
                      key={file?.id}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name="File" size={16} color="var(--color-muted-foreground)" />
                        <div>
                          <p className="text-sm font-medium text-text-primary truncate max-w-48">
                            {file?.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(file?.size)}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(file?.id)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Información Adicional
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Referencias o Inspiración
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={3}
                  placeholder="URLs de sitios web, aplicaciones o proyectos similares..."
                  value={formData?.references || ''}
                  onChange={(e) => handleInputChange('references', e?.target?.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Comentarios Especiales
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Cualquier información adicional que consideres importante..."
                  value={formData?.specialComments || ''}
                  onChange={(e) => handleInputChange('specialComments', e?.target?.value)}
                />
              </div>

              <Input
                label="¿Cómo nos conociste?"
                type="text"
                placeholder="Ej: Google, redes sociales, referencia..."
                value={formData?.referralSource || ''}
                onChange={(e) => handleInputChange('referralSource', e?.target?.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementDetailsStep;