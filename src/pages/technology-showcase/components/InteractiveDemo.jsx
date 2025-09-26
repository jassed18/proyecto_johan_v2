import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = ({ demos, onRequestDemo }) => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="bg-surface rounded-xl p-6 elevation-1">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Demos Interactivos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experimenta con nuestras tecnologías a través de ejemplos prácticos y código en vivo
        </p>
      </div>
      {/* Demo Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {demos?.map((demo, index) => (
          <button
            key={demo?.id}
            onClick={() => setActiveDemo(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeDemo === index
                ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={demo?.icon} size={16} />
            <span>{demo?.title}</span>
          </button>
        ))}
      </div>
      {/* Active Demo */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Demo Interface */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary">
              {demos?.[activeDemo]?.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                En Vivo
              </span>
              <Button variant="ghost" size="sm">
                <Icon name="RotateCcw" size={14} />
              </Button>
            </div>
          </div>

          {/* Demo Content */}
          <div className="bg-surface rounded-lg p-4 mb-4 min-h-64">
            {demos?.[activeDemo]?.type === 'api' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Zap" size={16} color="var(--color-primary)" />
                  <span className="font-medium text-text-primary">API Response Demo</span>
                </div>
                <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                  <div className="text-success mb-2">GET /api/v1/analyze</div>
                  <div className="text-muted-foreground">
                    {`{
  "status": "success",
  "data": {
    "sentiment": "positive",
    "confidence": 0.89,
    "keywords": ["innovación", "tecnología", "IA"]
  },
  "processing_time": "0.23s"
}`}
                  </div>
                </div>
              </div>
            )}

            {demos?.[activeDemo]?.type === 'workflow' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="GitBranch" size={16} color="var(--color-primary)" />
                  <span className="font-medium text-text-primary">Workflow Automation</span>
                </div>
                <div className="space-y-3">
                  {demos?.[activeDemo]?.steps?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-text-primary">{step?.title}</p>
                        <p className="text-sm text-muted-foreground">{step?.description}</p>
                      </div>
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {demos?.[activeDemo]?.type === 'ui' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Palette" size={16} color="var(--color-primary)" />
                  <span className="font-medium text-text-primary">UI Component Demo</span>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="bg-surface rounded-lg p-4 elevation-1">
                    <h4 className="font-semibold text-text-primary mb-2">Dashboard Widget</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary">1,234</div>
                        <div className="text-sm text-muted-foreground">Usuarios Activos</div>
                      </div>
                      <div className="bg-success/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-success">89%</div>
                        <div className="text-sm text-muted-foreground">Satisfacción</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Demo Controls */}
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Play" size={14} />
              Ejecutar
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsCodeVisible(!isCodeVisible)}>
              <Icon name="Code" size={14} />
              {isCodeVisible ? 'Ocultar' : 'Ver'} Código
            </Button>
          </div>
        </div>

        {/* Demo Information */}
        <div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-3">
              Sobre esta Demo
            </h4>
            <p className="text-muted-foreground mb-4">
              {demos?.[activeDemo]?.description}
            </p>

            {/* Technologies Used */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-text-primary mb-2">Tecnologías:</h5>
              <div className="flex flex-wrap gap-2">
                {demos?.[activeDemo]?.technologies?.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-text-primary mb-2">Casos de Uso:</h5>
              <ul className="space-y-1">
                {demos?.[activeDemo]?.useCases?.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                    <Icon name="ArrowRight" size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Code Snippet */}
          {isCodeVisible && (
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 text-sm font-medium">Código de Ejemplo</span>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Copy" size={14} />
                  Copiar
                </Button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{demos?.[activeDemo]?.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              variant="default" 
              fullWidth
              onClick={() => onRequestDemo(demos?.[activeDemo])}
            >
              <Icon name="Calendar" size={16} />
              Solicitar Demo Personalizada
            </Button>
            <Button variant="outline" fullWidth>
              <Icon name="Download" size={16} />
              Descargar Código
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;