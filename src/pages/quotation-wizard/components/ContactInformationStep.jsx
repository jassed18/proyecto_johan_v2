import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactInformationStep = ({ formData, onFormDataChange, errors }) => {
  const companyTypeOptions = [
    { value: 'startup', label: 'Startup' },
    { value: 'small-business', label: 'Pequeña Empresa (1-50 empleados)' },
    { value: 'medium-business', label: 'Mediana Empresa (51-250 empleados)' },
    { value: 'large-business', label: 'Gran Empresa (250+ empleados)' },
    { value: 'freelancer', label: 'Freelancer/Independiente' },
    { value: 'non-profit', label: 'Organización sin fines de lucro' },
    { value: 'government', label: 'Entidad Gubernamental' },
    { value: 'other', label: 'Otro' }
  ];

  const industryOptions = [
    { value: 'technology', label: 'Tecnología' },
    { value: 'healthcare', label: 'Salud y Medicina' },
    { value: 'finance', label: 'Finanzas y Banca' },
    { value: 'education', label: 'Educación' },
    { value: 'retail', label: 'Retail y E-commerce' },
    { value: 'manufacturing', label: 'Manufactura' },
    { value: 'real-estate', label: 'Bienes Raíces' },
    { value: 'consulting', label: 'Consultoría' },
    { value: 'marketing', label: 'Marketing y Publicidad' },
    { value: 'food-beverage', label: 'Alimentos y Bebidas' },
    { value: 'transportation', label: 'Transporte y Logística' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'other', label: 'Otro' }
  ];

  const countryOptions = [
    { value: 'colombia', label: 'Colombia' },
    { value: 'mexico', label: 'México' },
    { value: 'spain', label: 'España' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'chile', label: 'Chile' },
    { value: 'peru', label: 'Perú' },
    { value: 'venezuela', label: 'Venezuela' },
    { value: 'ecuador', label: 'Ecuador' },
    { value: 'usa', label: 'Estados Unidos' },
    { value: 'other', label: 'Otro' }
  ];

  const preferredContactOptions = [
    { value: 'email', label: 'Correo Electrónico' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'video-call', label: 'Videollamada' }
  ];

  const handleInputChange = (field, value) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Información de Contacto
        </h2>
        <p className="text-muted-foreground">
          Completa tus datos para que podamos enviarte la cotización
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-surface rounded-lg p-6 elevation-1">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="User" size={20} className="mr-2" />
            Información Personal
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData?.firstName || ''}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                error={errors?.firstName}
                required
              />

              <Input
                label="Apellido"
                type="text"
                placeholder="Tu apellido"
                value={formData?.lastName || ''}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                error={errors?.lastName}
                required
              />
            </div>

            <Input
              label="Correo Electrónico"
              type="email"
              placeholder="tu@email.com"
              value={formData?.email || ''}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />

            <Input
              label="Número de Teléfono"
              type="tel"
              placeholder="+57 300 123 4567"
              value={formData?.phone || ''}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
            />

            <Input
              label="Cargo/Posición"
              type="text"
              placeholder="Ej: CEO, CTO, Gerente de Proyectos"
              value={formData?.position || ''}
              onChange={(e) => handleInputChange('position', e?.target?.value)}
            />

            <Select
              label="País"
              options={countryOptions}
              value={formData?.country || ''}
              onChange={(value) => handleInputChange('country', value)}
              placeholder="Selecciona tu país"
              required
              error={errors?.country}
            />
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-surface rounded-lg p-6 elevation-1">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Building" size={20} className="mr-2" />
            Información de la Empresa
          </h3>

          <div className="space-y-4">
            <Input
              label="Nombre de la Empresa"
              type="text"
              placeholder="Nombre de tu empresa u organización"
              value={formData?.companyName || ''}
              onChange={(e) => handleInputChange('companyName', e?.target?.value)}
              error={errors?.companyName}
              required
            />

            <Select
              label="Tipo de Empresa"
              options={companyTypeOptions}
              value={formData?.companyType || ''}
              onChange={(value) => handleInputChange('companyType', value)}
              placeholder="Selecciona el tipo de empresa"
              required
              error={errors?.companyType}
            />

            <Select
              label="Industria"
              options={industryOptions}
              value={formData?.industry || ''}
              onChange={(value) => handleInputChange('industry', value)}
              placeholder="Selecciona tu industria"
              required
              error={errors?.industry}
            />

            <Input
              label="Sitio Web"
              type="url"
              placeholder="https://tuempresa.com"
              value={formData?.website || ''}
              onChange={(e) => handleInputChange('website', e?.target?.value)}
            />

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Dirección de la Empresa
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={3}
                placeholder="Dirección completa de tu empresa"
                value={formData?.companyAddress || ''}
                onChange={(e) => handleInputChange('companyAddress', e?.target?.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Communication Preferences */}
      <div className="bg-surface rounded-lg p-6 elevation-1">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MessageCircle" size={20} className="mr-2" />
          Preferencias de Comunicación
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Select
              label="Método de Contacto Preferido"
              options={preferredContactOptions}
              value={formData?.preferredContact || ''}
              onChange={(value) => handleInputChange('preferredContact', value)}
              placeholder="¿Cómo prefieres que te contactemos?"
              required
              error={errors?.preferredContact}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Mejor Horario para Contactarte
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="time"
                value={formData?.contactTimeFrom || ''}
                onChange={(e) => handleInputChange('contactTimeFrom', e?.target?.value)}
                placeholder="Desde"
              />
              <Input
                type="time"
                value={formData?.contactTimeTo || ''}
                onChange={(e) => handleInputChange('contactTimeTo', e?.target?.value)}
                placeholder="Hasta"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <label className="block text-sm font-medium text-text-primary">
            Preferencias de Comunicación
          </label>
          
          <Checkbox
            label="Recibir actualizaciones del proyecto por email"
            checked={formData?.emailUpdates || false}
            onChange={(e) => handleInputChange('emailUpdates', e?.target?.checked)}
          />
          
          <Checkbox
            label="Recibir newsletter con tips y tendencias tecnológicas"
            checked={formData?.newsletter || false}
            onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
          />
          
          <Checkbox
            label="Permitir contacto por WhatsApp"
            checked={formData?.whatsappContact || false}
            onChange={(e) => handleInputChange('whatsappContact', e?.target?.checked)}
          />
        </div>
      </div>
      {/* Terms and Conditions */}
      <div className="bg-surface rounded-lg p-6 elevation-1">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Shield" size={20} className="mr-2" />
          Términos y Condiciones
        </h3>

        <div className="space-y-4">
          <Checkbox
            label="Acepto los términos y condiciones de servicio"
            description="Al marcar esta casilla, aceptas nuestros términos de servicio y política de privacidad."
            checked={formData?.acceptTerms || false}
            onChange={(e) => handleInputChange('acceptTerms', e?.target?.checked)}
            error={errors?.acceptTerms}
            required
          />
          
          <Checkbox
            label="Autorizo el procesamiento de mis datos personales"
            description="Necesitamos procesar tus datos para enviarte la cotización y comunicarnos contigo sobre el proyecto."
            checked={formData?.dataProcessing || false}
            onChange={(e) => handleInputChange('dataProcessing', e?.target?.checked)}
            error={errors?.dataProcessing}
            required
          />
          
          <Checkbox
            label="Acepto recibir comunicaciones comerciales (opcional)"
            description="Podrás darte de baja en cualquier momento."
            checked={formData?.marketingCommunications || false}
            onChange={(e) => handleInputChange('marketingCommunications', e?.target?.checked)}
          />
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <Icon name="Info" size={16} className="inline mr-2" />
            Tu información será utilizada únicamente para procesar tu solicitud de cotización 
            y comunicarnos contigo sobre el proyecto. No compartimos datos con terceros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformationStep;