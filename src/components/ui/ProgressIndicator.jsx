import React from 'react';
import Icon from '../AppIcon';

const ProgressIndicator = ({ 
  currentStep = 1, 
  totalSteps = 4, 
  steps = [],
  onStepClick = null 
}) => {
  const defaultSteps = [
    { id: 1, title: 'Información Básica', description: 'Datos del proyecto' },
    { id: 2, title: 'Servicios', description: 'Selección de servicios' },
    { id: 3, title: 'Detalles', description: 'Especificaciones técnicas' },
    { id: 4, title: 'Confirmación', description: 'Revisión final' },
  ];

  const stepData = steps?.length > 0 ? steps : defaultSteps?.slice(0, totalSteps);
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const getStepStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'upcoming';
  };

  const getStepIcon = (stepNumber, status) => {
    if (status === 'completed') return 'Check';
    if (status === 'current') return 'Circle';
    return 'Circle';
  };

  const handleStepClick = (stepNumber) => {
    if (onStepClick && stepNumber <= currentStep) {
      onStepClick(stepNumber);
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Progress Indicator */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-muted">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {stepData?.map((step, index) => {
              const stepNumber = index + 1;
              const status = getStepStatus(stepNumber);
              const isClickable = onStepClick && stepNumber <= currentStep;

              return (
                <div 
                  key={step?.id}
                  className={`flex flex-col items-center ${isClickable ? 'cursor-pointer' : ''}`}
                  onClick={() => handleStepClick(stepNumber)}
                >
                  {/* Step Circle */}
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200
                    ${status === 'completed' 
                      ? 'bg-primary border-primary text-white' 
                      : status === 'current' ?'bg-surface border-primary text-primary ring-4 ring-primary/20' :'bg-surface border-muted text-muted-foreground'
                    }
                    ${isClickable ? 'hover:scale-110' : ''}
                  `}>
                    {status === 'completed' ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <span className="text-sm font-semibold">{stepNumber}</span>
                    )}
                  </div>
                  {/* Step Info */}
                  <div className="mt-3 text-center max-w-32">
                    <p className={`text-sm font-medium ${
                      status === 'current' ? 'text-primary' : 'text-text-secondary'
                    }`}>
                      {step?.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile Progress Indicator */}
      <div className="md:hidden">
        <div className="bg-surface rounded-lg p-4 elevation-1">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-text-secondary">
              Paso {currentStep} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {/* Current Step Info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">{currentStep}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-primary">
                {stepData?.[currentStep - 1]?.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {stepData?.[currentStep - 1]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;