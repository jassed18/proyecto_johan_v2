import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StepNavigation = ({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrevious, 
  onSubmit,
  canProceed = true,
  isSubmitting = false,
  nextButtonText = "Siguiente",
  submitButtonText = "Enviar Cotización"
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-border">
      {/* Previous Button */}
      <div>
        {!isFirstStep && (
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isSubmitting}
          >
            <Icon name="ChevronLeft" size={16} />
            Anterior
          </Button>
        )}
      </div>

      {/* Step Indicator (Mobile) */}
      <div className="flex items-center space-x-2 md:hidden">
        <span className="text-sm text-muted-foreground">
          {currentStep} de {totalSteps}
        </span>
        <div className="flex space-x-1">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index + 1 <= currentStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Next/Submit Button */}
      <div>
        {isLastStep ? (
          <Button
            variant="default"
            onClick={onSubmit}
            disabled={!canProceed || isSubmitting}
            loading={isSubmitting}
          >
            <Icon name="Send" size={16} />
            {submitButtonText}
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={onNext}
            disabled={!canProceed || isSubmitting}
          >
            {nextButtonText}
            <Icon name="ChevronRight" size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepNavigation;