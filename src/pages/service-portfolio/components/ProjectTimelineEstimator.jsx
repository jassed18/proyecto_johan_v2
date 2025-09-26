import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProjectTimelineEstimator = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [projectComplexity, setProjectComplexity] = useState('medium');
  const [additionalFeatures, setAdditionalFeatures] = useState([]);
  const [teamSize, setTeamSize] = useState('standard');
  const [estimatedTimeline, setEstimatedTimeline] = useState(null);
  const [estimatedCost, setEstimatedCost] = useState(null);

  const services = [
    {
      id: 'web-development',
      name: 'Desarrollo Web',
      baseWeeks: 4,
      baseCost: 2000000,
      icon: 'Globe'
    },
    {
      id: 'mobile-app',
      name: 'Aplicación Móvil',
      baseWeeks: 8,
      baseCost: 5000000,
      icon: 'Smartphone'
    },
    {
      id: 'automation',
      name: 'Automatización',
      baseWeeks: 3,
      baseCost: 1500000,
      icon: 'Zap'
    },
    {
      id: 'integrations',
      name: 'Integraciones',
      baseWeeks: 2,
      baseCost: 1000000,
      icon: 'Link'
    },
    {
      id: 'consulting',
      name: 'Consultoría',
      baseWeeks: 1,
      baseCost: 800000,
      icon: 'Users'
    }
  ];

  const complexityMultipliers = {
    simple: { weeks: 0.7, cost: 0.8, label: 'Simple' },
    medium: { weeks: 1.0, cost: 1.0, label: 'Medio' },
    complex: { weeks: 1.5, cost: 1.4, label: 'Complejo' },
    enterprise: { weeks: 2.2, cost: 1.8, label: 'Enterprise' }
  };

  const teamSizeMultipliers = {
    solo: { weeks: 1.8, cost: 0.9, label: 'Desarrollador Solo' },
    standard: { weeks: 1.0, cost: 1.0, label: 'Equipo Estándar (2-3)' },
    large: { weeks: 0.6, cost: 1.3, label: 'Equipo Grande (4-6)' }
  };

  const additionalFeaturesOptions = [
    { id: 'ai-integration', name: 'Integración IA', weeks: 2, cost: 800000 },
    { id: 'advanced-analytics', name: 'Analytics Avanzado', weeks: 1, cost: 500000 },
    { id: 'multi-language', name: 'Multi-idioma', weeks: 1.5, cost: 600000 },
    { id: 'advanced-security', name: 'Seguridad Avanzada', weeks: 2, cost: 700000 },
    { id: 'third-party-apis', name: 'APIs de Terceros', weeks: 1, cost: 400000 },
    { id: 'custom-dashboard', name: 'Dashboard Personalizado', weeks: 2.5, cost: 900000 },
    { id: 'real-time-features', name: 'Funciones en Tiempo Real', weeks: 1.5, cost: 650000 },
    { id: 'advanced-testing', name: 'Testing Avanzado', weeks: 1, cost: 300000 }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev?.includes(serviceId) 
        ? prev?.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleFeatureToggle = (featureId) => {
    setAdditionalFeatures(prev => 
      prev?.includes(featureId)
        ? prev?.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  useEffect(() => {
    if (selectedServices?.length === 0) {
      setEstimatedTimeline(null);
      setEstimatedCost(null);
      return;
    }

    // Calculate base timeline and cost
    const selectedServiceData = services?.filter(s => selectedServices?.includes(s?.id));
    const baseWeeks = selectedServiceData?.reduce((sum, service) => sum + service?.baseWeeks, 0);
    const baseCost = selectedServiceData?.reduce((sum, service) => sum + service?.baseCost, 0);

    // Apply complexity multiplier
    const complexityMultiplier = complexityMultipliers?.[projectComplexity];
    const adjustedWeeks = baseWeeks * complexityMultiplier?.weeks;
    const adjustedCost = baseCost * complexityMultiplier?.cost;

    // Apply team size multiplier
    const teamMultiplier = teamSizeMultipliers?.[teamSize];
    const finalWeeks = adjustedWeeks * teamMultiplier?.weeks;
    const finalCost = adjustedCost * teamMultiplier?.cost;

    // Add additional features
    const additionalWeeks = additionalFeaturesOptions?.filter(feature => additionalFeatures?.includes(feature?.id))?.reduce((sum, feature) => sum + feature?.weeks, 0);
    
    const additionalCost = additionalFeaturesOptions?.filter(feature => additionalFeatures?.includes(feature?.id))?.reduce((sum, feature) => sum + feature?.cost, 0);

    const totalWeeks = Math.ceil(finalWeeks + additionalWeeks);
    const totalCost = Math.round((finalCost + additionalCost) / 100000) * 100000;

    setEstimatedTimeline(totalWeeks);
    setEstimatedCost(totalCost);
  }, [selectedServices, projectComplexity, additionalFeatures, teamSize]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })?.format(amount);
  };

  const getTimelineRange = (weeks) => {
    const minWeeks = Math.max(1, weeks - 1);
    const maxWeeks = weeks + 2;
    return `${minWeeks}-${maxWeeks} semanas`;
  };

  const getCostRange = (cost) => {
    const minCost = cost * 0.9;
    const maxCost = cost * 1.2;
    return `${formatCurrency(minCost)} - ${formatCurrency(maxCost)}`;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Estimador de Proyecto
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Obtén una estimación personalizada de tiempo y costo para tu proyecto. 
          Selecciona los servicios y características que necesitas.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Services Selection */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Package" size={20} className="mr-2" />
              Servicios Requeridos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services?.map((service) => (
                <div
                  key={service?.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedServices?.includes(service?.id)
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleServiceToggle(service?.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={service?.icon} size={20} color="var(--color-primary)" />
                    <div className="flex-1">
                      <div className="font-medium text-text-primary">
                        {service?.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service?.baseWeeks} semanas base
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedServices?.includes(service?.id)
                        ? 'border-primary bg-primary' :'border-muted'
                    }`}>
                      {selectedServices?.includes(service?.id) && (
                        <Icon name="Check" size={12} color="white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Complexity */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Settings" size={20} className="mr-2" />
              Complejidad del Proyecto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(complexityMultipliers)?.map(([key, complexity]) => (
                <div
                  key={key}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    projectComplexity === key
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setProjectComplexity(key)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-text-primary">
                        {complexity?.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {complexity?.weeks}x tiempo, {complexity?.cost}x costo
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      projectComplexity === key
                        ? 'border-primary bg-primary' :'border-muted'
                    }`}>
                      {projectComplexity === key && (
                        <div className="w-full h-full rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Size */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Users" size={20} className="mr-2" />
              Tamaño del Equipo
            </h3>
            <div className="space-y-3">
              {Object.entries(teamSizeMultipliers)?.map(([key, team]) => (
                <div
                  key={key}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    teamSize === key
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setTeamSize(key)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-text-primary">
                        {team?.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {team?.weeks}x tiempo, {team?.cost}x costo
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      teamSize === key
                        ? 'border-primary bg-primary' :'border-muted'
                    }`}>
                      {teamSize === key && (
                        <div className="w-full h-full rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Plus" size={20} className="mr-2" />
              Características Adicionales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {additionalFeaturesOptions?.map((feature) => (
                <Checkbox
                  key={feature?.id}
                  label={feature?.name}
                  description={`+${feature?.weeks} semanas, +${formatCurrency(feature?.cost)}`}
                  checked={additionalFeatures?.includes(feature?.id)}
                  onChange={(e) => e?.target?.checked && handleFeatureToggle(feature?.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-lg p-6 elevation-1 sticky top-6">
            <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center">
              <Icon name="Calculator" size={20} className="mr-2" />
              Estimación del Proyecto
            </h3>

            {estimatedTimeline && estimatedCost ? (
              <div className="space-y-6">
                {/* Timeline */}
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">
                    Tiempo Estimado
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {getTimelineRange(estimatedTimeline)}
                  </div>
                </div>

                {/* Cost */}
                <div className="text-center p-4 bg-success/5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">
                    Costo Estimado
                  </div>
                  <div className="text-xl font-bold text-success">
                    {getCostRange(estimatedCost)}
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-medium text-text-primary">Desglose:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Servicios base:</span>
                      <span className="text-text-primary">{selectedServices?.length} servicios</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Complejidad:</span>
                      <span className="text-text-primary">{complexityMultipliers?.[projectComplexity]?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Equipo:</span>
                      <span className="text-text-primary">{teamSizeMultipliers?.[teamSize]?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Características extra:</span>
                      <span className="text-text-primary">{additionalFeatures?.length}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button variant="default" fullWidth>
                    Solicitar Cotización Detallada
                  </Button>
                  <Button variant="outline" fullWidth>
                    Agendar Consulta
                  </Button>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-muted-foreground text-center">
                  * Esta es una estimación preliminar. El costo y tiempo final pueden variar según los requerimientos específicos del proyecto.
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon name="Calculator" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Selecciona al menos un servicio para ver la estimación
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimelineEstimator;