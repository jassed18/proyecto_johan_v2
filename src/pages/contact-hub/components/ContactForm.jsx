import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    urgency: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceOptions = [
    { value: 'web-development', label: 'Desarrollo Web' },
    { value: 'automation', label: 'Automatización de Procesos' },
    { value: 'mobile-apps', label: 'Aplicaciones Móviles' },
    { value: 'integrations', label: 'Integraciones' },
    { value: 'consulting', label: 'Consultoría Tecnológica' },
    { value: 'ai-solutions', label: 'Soluciones de IA' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Baja - Más de 3 meses' },
    { value: 'medium', label: 'Media - 1-3 meses' },
    { value: 'high', label: 'Alta - Menos de 1 mes' },
    { value: 'urgent', label: 'Urgente - Inmediato' }
  ];

  const budgetOptions = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: 'Más de $50,000' },
    { value: 'discuss', label: 'Prefiero discutirlo' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        urgency: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-surface rounded-lg p-8 elevation-2 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-muted-foreground mb-4">
          Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitSuccess(false)}
        >
          Enviar Otro Mensaje
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-lg p-6 elevation-2">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            Formulario de Contacto
          </h3>
          <p className="text-sm text-muted-foreground">
            Cuéntanos sobre tu proyecto
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Nombre Completo"
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData?.name}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={formData?.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Teléfono"
            type="tel"
            name="phone"
            placeholder="+57 300 123 4567"
            value={formData?.phone}
            onChange={handleInputChange}
          />
          <Input
            label="Empresa"
            type="text"
            name="company"
            placeholder="Nombre de tu empresa"
            value={formData?.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Tipo de Servicio"
            placeholder="Selecciona un servicio"
            options={serviceOptions}
            value={formData?.serviceType}
            onChange={(value) => handleSelectChange('serviceType', value)}
            required
          />
          <Select
            label="Urgencia del Proyecto"
            placeholder="¿Cuándo necesitas el proyecto?"
            options={urgencyOptions}
            value={formData?.urgency}
            onChange={(value) => handleSelectChange('urgency', value)}
            required
          />
        </div>

        <Select
          label="Presupuesto Estimado"
          placeholder="Selecciona un rango de presupuesto"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => handleSelectChange('budget', value)}
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Descripción del Proyecto *
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Describe tu proyecto, objetivos y cualquier requerimiento específico..."
            value={formData?.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;