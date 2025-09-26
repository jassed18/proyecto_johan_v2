import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ServiceCustomization = () => {
  const [selectedService, setSelectedService] = useState('web-development');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [customizationLevel, setCustomizationLevel] = useState('standard');

  const services = {
    'web-development': {
      name: 'Desarrollo Web',
      icon: 'Globe',
      basePrice: 2000000,
      description: 'Personaliza tu sitio web según tus necesidades específicas',
      categories: [
        {
          name: 'Diseño y UI/UX',
          features: [
            { id: 'custom-design', name: 'Diseño Personalizado', price: 500000, description: 'Diseño único adaptado a tu marca' },
            { id: 'responsive-design', name: 'Diseño Responsive', price: 200000, description: 'Optimizado para todos los dispositivos' },
            { id: 'animations', name: 'Animaciones Avanzadas', price: 300000, description: 'Micro-interacciones y transiciones' },
            { id: 'dark-mode', name: 'Modo Oscuro', price: 150000, description: 'Tema claro y oscuro' }
          ]
        },
        {
          name: 'Funcionalidades',
          features: [
            { id: 'cms', name: 'Sistema de Gestión de Contenido', price: 800000, description: 'Panel admin para gestionar contenido' },
            { id: 'ecommerce', name: 'E-commerce Básico', price: 1200000, description: 'Tienda online con carrito y pagos' },
            { id: 'user-auth', name: 'Sistema de Usuarios', price: 600000, description: 'Registro, login y perfiles' },
            { id: 'search', name: 'Búsqueda Avanzada', price: 400000, description: 'Filtros y búsqueda inteligente' }
          ]
        },
        {
          name: 'Integraciones',
          features: [
            { id: 'analytics', name: 'Google Analytics', price: 100000, description: 'Seguimiento y métricas' },
            { id: 'social-media', name: 'Redes Sociales', price: 150000, description: 'Integración con plataformas sociales' },
            { id: 'email-marketing', name: 'Email Marketing', price: 250000, description: 'Newsletter y automatización' },
            { id: 'crm', name: 'Integración CRM', price: 500000, description: 'Conexión con sistemas CRM' }
          ]
        }
      ]
    },
    'automation': {
      name: 'Automatización',
      icon: 'Zap',
      basePrice: 1500000,
      description: 'Configura workflows personalizados para tu negocio',
      categories: [
        {
          name: 'Workflows Básicos',
          features: [
            { id: 'email-automation', name: 'Automatización de Email', price: 200000, description: 'Respuestas automáticas y secuencias' },
            { id: 'data-sync', name: 'Sincronización de Datos', price: 300000, description: 'Mantén datos actualizados entre sistemas' },
            { id: 'notifications', name: 'Notificaciones Automáticas', price: 150000, description: 'Alertas por WhatsApp, SMS, email' },
            { id: 'file-processing', name: 'Procesamiento de Archivos', price: 250000, description: 'Automatizar manejo de documentos' }
          ]
        },
        {
          name: 'Integraciones Avanzadas',
          features: [
            { id: 'crm-integration', name: 'Integración CRM', price: 500000, description: 'Conectar con Salesforce, HubSpot, etc.' },
            { id: 'ecommerce-sync', name: 'Sincronización E-commerce', price: 400000, description: 'Inventarios, pedidos, clientes' },
            { id: 'social-media-auto', name: 'Automatización Redes Sociales', price: 300000, description: 'Publicaciones y respuestas automáticas' },
            { id: 'payment-processing', name: 'Procesamiento de Pagos', price: 600000, description: 'Automatizar facturación y cobros' }
          ]
        },
        {
          name: 'IA y Machine Learning',
          features: [
            { id: 'chatbot', name: 'Chatbot Inteligente', price: 800000, description: 'Atención al cliente automatizada' },
            { id: 'document-ai', name: 'Procesamiento de Documentos IA', price: 700000, description: 'Extraer datos de documentos automáticamente' },
            { id: 'predictive-analytics', name: 'Análisis Predictivo', price: 900000, description: 'Predicciones basadas en datos históricos' },
            { id: 'sentiment-analysis', name: 'Análisis de Sentimientos', price: 500000, description: 'Analizar feedback y comentarios' }
          ]
        }
      ]
    },
    'mobile-app': {
      name: 'Aplicación Móvil',
      icon: 'Smartphone',
      basePrice: 5000000,
      description: 'Crea una app móvil con las características que necesitas',
      categories: [
        {
          name: 'Funcionalidades Core',
          features: [
            { id: 'user-profiles', name: 'Perfiles de Usuario', price: 600000, description: 'Registro, login y gestión de perfiles' },
            { id: 'push-notifications', name: 'Notificaciones Push', price: 400000, description: 'Alertas y mensajes en tiempo real' },
            { id: 'offline-mode', name: 'Modo Offline', price: 800000, description: 'Funcionalidad sin conexión a internet' },
            { id: 'camera-integration', name: 'Integración de Cámara', price: 300000, description: 'Captura de fotos y videos' }
          ]
        },
        {
          name: 'Características Avanzadas',
          features: [
            { id: 'gps-location', name: 'GPS y Geolocalización', price: 500000, description: 'Mapas y servicios basados en ubicación' },
            { id: 'payment-gateway', name: 'Pasarela de Pagos', price: 700000, description: 'Pagos seguros dentro de la app' },
            { id: 'social-login', name: 'Login Social', price: 200000, description: 'Acceso con Google, Facebook, Apple' },
            { id: 'biometric-auth', name: 'Autenticación Biométrica', price: 400000, description: 'Huella dactilar y reconocimiento facial' }
          ]
        },
        {
          name: 'Integraciones y APIs',
          features: [
            { id: 'third-party-apis', name: 'APIs de Terceros', price: 600000, description: 'Integración con servicios externos' },
            { id: 'cloud-storage', name: 'Almacenamiento en la Nube', price: 300000, description: 'Sincronización de datos en la nube' },
            { id: 'analytics-tracking', name: 'Analytics y Tracking', price: 250000, description: 'Métricas de uso y comportamiento' },
            { id: 'crash-reporting', name: 'Reporte de Errores', price: 150000, description: 'Monitoreo y reporte automático de fallos' }
          ]
        }
      ]
    }
  };

  const customizationLevels = {
    basic: { name: 'Básico', multiplier: 0.8, description: 'Configuración estándar con personalización mínima' },
    standard: { name: 'Estándar', multiplier: 1.0, description: 'Personalización moderada según necesidades' },
    premium: { name: 'Premium', multiplier: 1.3, description: 'Personalización completa y características únicas' },
    enterprise: { name: 'Enterprise', multiplier: 1.6, description: 'Solución completamente personalizada y escalable' }
  };

  const currentService = services?.[selectedService];

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures(prev => 
      prev?.includes(featureId)
        ? prev?.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculateTotalPrice = () => {
    const basePrice = currentService?.basePrice;
    const featuresPrice = selectedFeatures?.reduce((total, featureId) => {
      const feature = currentService?.categories?.flatMap(cat => cat?.features)?.find(f => f?.id === featureId);
      return total + (feature ? feature?.price : 0);
    }, 0);
    
    const subtotal = basePrice + featuresPrice;
    const customizationMultiplier = customizationLevels?.[customizationLevel]?.multiplier;
    
    return Math.round(subtotal * customizationMultiplier);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Personalización de Servicios
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Configura tu proyecto exactamente como lo necesitas. Selecciona características 
          específicas y obtén una cotización personalizada.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Service Selector */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-lg p-4 elevation-1 sticky top-6">
            <h3 className="font-semibold text-text-primary mb-4">Seleccionar Servicio</h3>
            <div className="space-y-2">
              {Object.entries(services)?.map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedService(key);
                    setSelectedFeatures([]);
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                    selectedService === key
                      ? 'bg-primary text-white' :'hover:bg-muted text-text-primary'
                  }`}
                >
                  <Icon name={service?.icon} size={20} />
                  <span className="text-sm font-medium">{service?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Service Info */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={currentService?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {currentService?.name}
                </h3>
                <p className="text-muted-foreground">
                  {currentService?.description}
                </p>
                <div className="mt-2">
                  <span className="text-sm text-muted-foreground">Precio base: </span>
                  <span className="font-semibold text-primary">
                    {formatCurrency(currentService?.basePrice)}
                  </span>
                </div>
              </div>
            </div>

            {/* Customization Level */}
            <div className="mb-6">
              <h4 className="font-medium text-text-primary mb-3">Nivel de Personalización</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(customizationLevels)?.map(([key, level]) => (
                  <div
                    key={key}
                    className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      customizationLevel === key
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setCustomizationLevel(key)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-text-primary">{level?.name}</span>
                      <span className="text-sm text-primary">{level?.multiplier}x</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{level?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Selection */}
          {currentService?.categories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-surface rounded-lg p-6 elevation-1">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Package" size={18} className="mr-2" />
                {category?.name}
              </h4>
              <div className="space-y-3">
                {category?.features?.map((feature) => (
                  <div
                    key={feature?.id}
                    className={`p-4 border rounded-lg transition-all duration-200 ${
                      selectedFeatures?.includes(feature?.id)
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Checkbox
                          label={feature?.name}
                          description={feature?.description}
                          checked={selectedFeatures?.includes(feature?.id)}
                          onChange={(e) => e?.target?.checked && handleFeatureToggle(feature?.id)}
                        />
                      </div>
                      <div className="ml-4 text-right">
                        <div className="font-semibold text-primary">
                          +{formatCurrency(feature?.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Panel */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-lg p-6 elevation-1 sticky top-6">
            <h3 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Receipt" size={18} className="mr-2" />
              Resumen del Proyecto
            </h3>

            <div className="space-y-4">
              {/* Service Base */}
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-text-secondary">{currentService?.name} (Base)</span>
                <span className="font-medium">{formatCurrency(currentService?.basePrice)}</span>
              </div>

              {/* Selected Features */}
              {selectedFeatures?.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-medium text-text-primary">Características:</div>
                  {selectedFeatures?.map(featureId => {
                    const feature = currentService?.categories?.flatMap(cat => cat?.features)?.find(f => f?.id === featureId);
                    return feature ? (
                      <div key={featureId} className="flex justify-between text-sm">
                        <span className="text-text-secondary">{feature?.name}</span>
                        <span>+{formatCurrency(feature?.price)}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              )}

              {/* Customization Level */}
              <div className="flex justify-between items-center py-2 border-t border-border">
                <span className="text-text-secondary">
                  Nivel {customizationLevels?.[customizationLevel]?.name}
                </span>
                <span className="text-sm">
                  {customizationLevels?.[customizationLevel]?.multiplier}x
                </span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-2 border-t-2 border-primary">
                <span className="font-semibold text-text-primary">Total Estimado:</span>
                <span className="text-xl font-bold text-primary">
                  {formatCurrency(calculateTotalPrice())}
                </span>
              </div>

              {/* Selected Features Count */}
              <div className="text-center text-sm text-muted-foreground">
                {selectedFeatures?.length} características seleccionadas
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button variant="default" fullWidth>
                  Solicitar Cotización
                </Button>
                <Button variant="outline" fullWidth>
                  Guardar Configuración
                </Button>
                <Button variant="ghost" fullWidth>
                  Agendar Consulta
                </Button>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-muted-foreground text-center pt-2">
                * Precio estimado. La cotización final puede variar según requerimientos específicos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCustomization;