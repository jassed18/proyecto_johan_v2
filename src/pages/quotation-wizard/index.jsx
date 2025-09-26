import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import InstagramChatWidget from '../../components/ui/InstagramChatWidget';
import ServiceSelectionStep from './components/ServiceSelectionStep';
import RequirementDetailsStep from './components/RequirementDetailsStep';
import ContactInformationStep from './components/ContactInformationStep';
import QuotationSummary from './components/QuotationSummary';
import StepNavigation from './components/StepNavigation';
import Icon from '../../components/AppIcon';

const QuotationWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 4;

  const steps = [
    { id: 1, title: 'Servicios', description: 'Selección de servicios' },
    { id: 2, title: 'Detalles', description: 'Requerimientos del proyecto' },
    { id: 3, title: 'Contacto', description: 'Información personal' },
    { id: 4, title: 'Resumen', description: 'Revisión final' },
  ];

  const serviceCategories = [
    {
      id: 'web-development',
      name: 'Desarrollo Web',
      description: 'Sitios web y aplicaciones web personalizadas',
      icon: 'Globe',
      services: [
        {
          id: 'landing-page',
          name: 'Landing Page',
          description: 'Página web de presentación optimizada para conversiones',
          basePrice: 1500,
          features: ['Diseño Responsivo', 'SEO Básico', 'Formularios', 'Analytics']
        },
        {
          id: 'corporate-website',
          name: 'Sitio Web Corporativo',
          description: 'Sitio web completo para empresas con múltiples secciones',
          basePrice: 3500,
          features: ['CMS', 'Blog', 'Galería', 'Contacto', 'Multiidioma']
        },
        {
          id: 'ecommerce',
          name: 'Tienda Online',
          description: 'Plataforma de comercio electrónico completa',
          basePrice: 5500,
          features: ['Carrito', 'Pagos', 'Inventario', 'Reportes', 'Admin Panel']
        },
        {
          id: 'web-app',
          name: 'Aplicación Web',
          description: 'Aplicación web personalizada con funcionalidades avanzadas',
          basePrice: 8000,
          features: ['Dashboard', 'Autenticación', 'Base de Datos', 'APIs', 'Tiempo Real']
        }
      ]
    },
    {
      id: 'automation',
      name: 'Automatización',
      description: 'Procesos automatizados para optimizar tu negocio',
      icon: 'Zap',
      services: [
        {
          id: 'workflow-automation',
          name: 'Automatización de Workflows',
          description: 'Automatiza procesos repetitivos de tu empresa',
          basePrice: 2500,
          features: ['N8N/Make', 'Integraciones', 'Triggers', 'Notificaciones']
        },
        {
          id: 'data-processing',
          name: 'Procesamiento de Datos',
          description: 'Automatización de análisis y procesamiento de información',
          basePrice: 3000,
          features: ['ETL', 'Reportes', 'Dashboards', 'Alertas']
        },
        {
          id: 'chatbot',
          name: 'Chatbot IA',
          description: 'Asistente virtual inteligente para atención al cliente',
          basePrice: 4000,
          features: ['NLP', 'Integración Web', 'WhatsApp', 'Analytics']
        }
      ]
    },
    {
      id: 'mobile-development',
      name: 'Desarrollo Móvil',
      description: 'Aplicaciones móviles nativas y multiplataforma',
      icon: 'Smartphone',
      services: [
        {
          id: 'mobile-app',
          name: 'App Móvil',
          description: 'Aplicación móvil nativa para iOS y Android',
          basePrice: 6500,
          features: ['React Native', 'Push Notifications', 'Offline Mode', 'App Store']
        },
        {
          id: 'pwa',
          name: 'Progressive Web App',
          description: 'Aplicación web que funciona como app móvil',
          basePrice: 4500,
          features: ['Offline', 'Push Notifications', 'Instalable', 'Responsive']
        }
      ]
    },
    {
      id: 'integrations',
      name: 'Integraciones',
      description: 'Conecta tus sistemas y herramientas existentes',
      icon: 'Link',
      services: [
        {
          id: 'api-integration',
          name: 'Integración de APIs',
          description: 'Conecta diferentes sistemas y servicios',
          basePrice: 2000,
          features: ['REST APIs', 'Webhooks', 'Autenticación', 'Sincronización']
        },
        {
          id: 'crm-integration',
          name: 'Integración CRM',
          description: 'Conecta tu CRM con otras herramientas',
          basePrice: 2800,
          features: ['Salesforce', 'HubSpot', 'Pipedrive', 'Automatización']
        },
        {
          id: 'payment-integration',
          name: 'Integración de Pagos',
          description: 'Implementa sistemas de pago seguros',
          basePrice: 1800,
          features: ['Stripe', 'PayPal', 'Mercado Pago', 'Seguridad']
        }
      ]
    },
    {
      id: 'consulting',
      name: 'Consultoría',
      description: 'Asesoramiento estratégico en tecnología',
      icon: 'Users',
      services: [
        {
          id: 'tech-audit',
          name: 'Auditoría Tecnológica',
          description: 'Evaluación completa de tu infraestructura tecnológica',
          basePrice: 1500,
          features: ['Análisis', 'Recomendaciones', 'Roadmap', 'Documentación']
        },
        {
          id: 'digital-strategy',
          name: 'Estrategia Digital',
          description: 'Plan estratégico para tu transformación digital',
          basePrice: 2500,
          features: ['Análisis', 'Estrategia', 'Implementación', 'Seguimiento']
        },
        {
          id: 'training',
          name: 'Capacitación',
          description: 'Entrenamiento en tecnologías y herramientas',
          basePrice: 1200,
          features: ['Workshops', 'Materiales', 'Certificación', 'Soporte']
        }
      ]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (selectedServices?.length === 0) {
          newErrors.services = 'Debes seleccionar al menos un servicio';
          return false;
        }
        break;

      case 2:
        if (!formData?.projectName?.trim()) {
          newErrors.projectName = 'El nombre del proyecto es requerido';
        }
        if (!formData?.projectDescription?.trim()) {
          newErrors.projectDescription = 'La descripción del proyecto es requerida';
        }
        if (!formData?.timeline) {
          newErrors.timeline = 'Debes seleccionar un cronograma';
        }
        if (!formData?.budget) {
          newErrors.budget = 'Debes seleccionar un rango de presupuesto';
        }
        if (!formData?.priority) {
          newErrors.priority = 'Debes seleccionar la prioridad del proyecto';
        }
        break;

      case 3:
        if (!formData?.firstName?.trim()) {
          newErrors.firstName = 'El nombre es requerido';
        }
        if (!formData?.lastName?.trim()) {
          newErrors.lastName = 'El apellido es requerido';
        }
        if (!formData?.email?.trim()) {
          newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
          newErrors.email = 'El email no es válido';
        }
        if (!formData?.phone?.trim()) {
          newErrors.phone = 'El teléfono es requerido';
        }
        if (!formData?.companyName?.trim()) {
          newErrors.companyName = 'El nombre de la empresa es requerido';
        }
        if (!formData?.companyType) {
          newErrors.companyType = 'Debes seleccionar el tipo de empresa';
        }
        if (!formData?.industry) {
          newErrors.industry = 'Debes seleccionar la industria';
        }
        if (!formData?.country) {
          newErrors.country = 'Debes seleccionar el país';
        }
        if (!formData?.preferredContact) {
          newErrors.preferredContact = 'Debes seleccionar un método de contacto';
        }
        if (!formData?.acceptTerms) {
          newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
        }
        if (!formData?.dataProcessing) {
          newErrors.dataProcessing = 'Debes autorizar el procesamiento de datos';
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepClick = (step) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));

      // In a real application, you would send the data to your backend
      const quotationData = {
        services: selectedServices,
        formData: formData,
        timestamp: new Date()?.toISOString(),
        estimatedCost: calculateTotalCost()
      };

      console.log('Quotation submitted:', quotationData);

      // Show success message and redirect
      alert('¡Cotización enviada exitosamente! Te contactaremos pronto.');
      navigate('/home-landing');

    } catch (error) {
      console.error('Error submitting quotation:', error);
      alert('Error al enviar la cotización. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateTotalCost = () => {
    const services = [];
    serviceCategories?.forEach(category => {
      category?.services?.forEach(service => {
        if (selectedServices?.includes(service?.id)) {
          services?.push(service);
        }
      });
    });

    const baseTotal = services?.reduce((total, service) => total + service?.basePrice, 0);
    
    let complexityMultiplier = 1;
    if (formData?.multiLanguage) complexityMultiplier += 0.2;
    if (formData?.mobileApp) complexityMultiplier += 0.3;
    if (formData?.adminPanel) complexityMultiplier += 0.25;
    if (formData?.analytics) complexityMultiplier += 0.15;
    
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

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedServices?.length > 0;
      case 2:
        return formData?.projectName && formData?.projectDescription && formData?.timeline && formData?.budget && formData?.priority;
      case 3:
        return formData?.firstName && formData?.lastName && formData?.email && formData?.phone && 
               formData?.companyName && formData?.companyType && formData?.industry && formData?.country &&
               formData?.preferredContact && formData?.acceptTerms && formData?.dataProcessing;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelectionStep
            selectedServices={selectedServices}
            onServiceChange={setSelectedServices}
            serviceCategories={serviceCategories}
          />
        );
      case 2:
        return (
          <RequirementDetailsStep
            formData={formData}
            onFormDataChange={setFormData}
            selectedServices={selectedServices}
            serviceCategories={serviceCategories}
          />
        );
      case 3:
        return (
          <ContactInformationStep
            formData={formData}
            onFormDataChange={setFormData}
            errors={errors}
          />
        );
      case 4:
        return (
          <QuotationSummary
            selectedServices={selectedServices}
            formData={formData}
            serviceCategories={serviceCategories}
            onEdit={setCurrentStep}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Icon name="Calculator" size={32} color="var(--color-primary)" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Asistente de Cotización
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te guiaremos paso a paso para crear una cotización personalizada para tu proyecto
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            steps={steps}
            onStepClick={handleStepClick}
          />
        </div>

        {/* Step Content */}
        <div className="bg-surface rounded-lg elevation-1 p-6 md:p-8 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="bg-surface rounded-lg elevation-1 p-6">
          <StepNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            canProceed={canProceed()}
            isSubmitting={isSubmitting}
          />
        </div>

        {/* Cost Summary (Mobile Sticky) */}
        {selectedServices?.length > 0 && currentStep !== 4 && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 elevation-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Estimado Total</p>
                <p className="text-lg font-semibold text-primary">
                  ${calculateTotalCost()?.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  {selectedServices?.length} servicio{selectedServices?.length !== 1 ? 's' : ''}
                </p>
                <p className="text-sm text-text-secondary">seleccionado{selectedServices?.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <InstagramChatWidget />
    </div>
  );
};

export default QuotationWizard;