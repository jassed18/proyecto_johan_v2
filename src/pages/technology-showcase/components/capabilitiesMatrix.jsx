import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const CapabilitiesMatrix = ({ capabilities, onRequestConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const industries = [
    { value: 'all', label: 'Todas las Industrias' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'healthcare', label: 'Salud' },
    { value: 'finance', label: 'Finanzas' },
    { value: 'education', label: 'Educación' },
    { value: 'manufacturing', label: 'Manufactura' },
    { value: 'retail', label: 'Retail' }
  ];

  const complexityLevels = [
    { value: 'all', label: 'Todos los Niveles' },
    { value: 'basic', label: 'Básico' },
    { value: 'intermediate', label: 'Intermedio' },
    { value: 'advanced', label: 'Avanzado' },
    { value: 'enterprise', label: 'Empresarial' }
  ];

  const filteredCapabilities = capabilities?.filter(capability => {
    const industryMatch = selectedIndustry === 'all' || capability?.industries?.includes(selectedIndustry);
    const complexityMatch = selectedComplexity === 'all' || capability?.complexity === selectedComplexity;
    return industryMatch && complexityMatch;
  });

  const getComplexityColor = (complexity) => {
    const colors = {
      basic: 'bg-success/10 text-success',
      intermediate: 'bg-warning/10 text-warning',
      advanced: 'bg-error/10 text-error',
      enterprise: 'bg-secondary/10 text-secondary'
    };
    return colors?.[complexity] || 'bg-muted text-muted-foreground';
  };

  const getComplexityLabel = (complexity) => {
    const labels = {
      basic: 'Básico',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
      enterprise: 'Empresarial'
    };
    return labels?.[complexity] || complexity;
  };

  return (
    <div className="bg-surface rounded-xl p-6 elevation-1">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Matriz de Capacidades
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explora nuestras combinaciones tecnológicas para diferentes tipos de proyectos e industrias
        </p>
      </div>
      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Select
          label="Industria"
          options={industries}
          value={selectedIndustry}
          onChange={setSelectedIndustry}
        />
        <Select
          label="Complejidad"
          options={complexityLevels}
          value={selectedComplexity}
          onChange={setSelectedComplexity}
        />
        <div className="flex items-end">
          <div className="flex bg-muted rounded-lg p-1 w-full">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                viewMode === 'grid' ? 'bg-surface text-primary shadow-sm' : 'text-muted-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
              <span className="ml-2 hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                viewMode === 'list' ? 'bg-surface text-primary shadow-sm' : 'text-muted-foreground'
              }`}
            >
              <Icon name="List" size={16} />
              <span className="ml-2 hidden sm:inline">Lista</span>
            </button>
          </div>
        </div>
      </div>
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredCapabilities?.length} de {capabilities?.length} capacidades
        </p>
        <Button variant="outline" size="sm" onClick={() => {
          setSelectedIndustry('all');
          setSelectedComplexity('all');
        }}>
          <Icon name="RotateCcw" size={14} />
          Limpiar Filtros
        </Button>
      </div>
      {/* Capabilities Display */}
      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapabilities?.map((capability) => (
            <div key={capability?.id} className="bg-muted/30 rounded-lg p-5 hover:bg-muted/50 transition-colors duration-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-text-primary">{capability?.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(capability?.complexity)}`}>
                  {getComplexityLabel(capability?.complexity)}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {capability?.description}
              </p>

              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-text-primary mb-2 uppercase tracking-wide">
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-1">
                  {capability?.technologies?.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline & Cost */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Tiempo:</span>
                  <p className="font-medium text-text-primary">{capability?.timeline}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Desde:</span>
                  <p className="font-medium text-text-primary">{capability?.startingPrice}</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                fullWidth
                onClick={() => onRequestConsultation(capability)}
              >
                <Icon name="Calendar" size={14} />
                Consultar
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCapabilities?.map((capability) => (
            <div key={capability?.id} className="bg-muted/30 rounded-lg p-5 hover:bg-muted/50 transition-colors duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-text-primary">{capability?.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(capability?.complexity)}`}>
                      {getComplexityLabel(capability?.complexity)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {capability?.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {capability?.technologies?.map((tech, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:text-right">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Tiempo: </span>
                    <span className="font-medium text-text-primary">{capability?.timeline}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Desde: </span>
                    <span className="font-medium text-text-primary">{capability?.startingPrice}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onRequestConsultation(capability)}
                  >
                    <Icon name="Calendar" size={14} />
                    Consultar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredCapabilities?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-primary mb-2">
            No se encontraron capacidades
          </h3>
          <p className="text-muted-foreground mb-4">
            Intenta ajustar los filtros para ver más resultados
          </p>
          <Button variant="outline" onClick={() => {
            setSelectedIndustry('all');
            setSelectedComplexity('all');
          }}>
            Limpiar Filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default CapabilitiesMatrix;