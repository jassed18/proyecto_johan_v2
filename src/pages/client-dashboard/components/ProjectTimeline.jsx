import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ project }) => {
  const timelineEvents = [
    {
      id: 1,
      title: 'Proyecto Iniciado',
      description: 'Se ha dado inicio oficial al proyecto con la firma del contrato',
      date: '2025-01-10',
      time: '09:00',
      status: 'completed',
      type: 'milestone',
      assignee: 'Carlos Rodríguez'
    },
    {
      id: 2,
      title: 'Análisis de Requerimientos',
      description: 'Reunión inicial para definir alcance y especificaciones técnicas',
      date: '2025-01-12',
      time: '14:30',
      status: 'completed',
      type: 'meeting',
      assignee: 'Ana García'
    },
    {
      id: 3,
      title: 'Diseño de Wireframes',
      description: 'Creación de prototipos y estructura visual del proyecto',
      date: '2025-01-15',
      time: '10:00',
      status: 'completed',
      type: 'deliverable',
      assignee: 'Luis Martínez'
    },
    {
      id: 4,
      title: 'Revisión de Propuesta',
      description: 'Presentación de la propuesta técnica y diseño inicial',
      date: '2025-01-18',
      time: '16:00',
      status: 'completed',
      type: 'review',
      assignee: 'Cliente'
    },
    {
      id: 5,
      title: 'Desarrollo Frontend',
      description: 'Implementación de la interfaz de usuario y componentes',
      date: '2025-01-20',
      time: '09:00',
      status: 'in-progress',
      type: 'development',
      assignee: 'Ana García'
    },
    {
      id: 6,
      title: 'Integración de APIs',
      description: 'Conexión con servicios externos y bases de datos',
      date: '2025-01-25',
      time: '11:00',
      status: 'upcoming',
      type: 'development',
      assignee: 'Luis Martínez'
    },
    {
      id: 7,
      title: 'Testing y QA',
      description: 'Pruebas de funcionalidad y control de calidad',
      date: '2025-01-30',
      time: '14:00',
      status: 'upcoming',
      type: 'testing',
      assignee: 'Carlos Rodríguez'
    },
    {
      id: 8,
      title: 'Entrega Final',
      description: 'Presentación del proyecto completado y documentación',
      date: '2025-02-05',
      time: '10:00',
      status: 'upcoming',
      type: 'milestone',
      assignee: 'Equipo Completo'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success';
      case 'in-progress':
        return 'text-warning bg-warning';
      case 'upcoming':
        return 'text-muted-foreground bg-muted';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'milestone':
        return 'Flag';
      case 'meeting':
        return 'Users';
      case 'deliverable':
        return 'Package';
      case 'review':
        return 'Eye';
      case 'development':
        return 'Code';
      case 'testing':
        return 'CheckCircle';
      default:
        return 'Circle';
    }
  };

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })?.format(new Date(dateString));
  };

  return (
    <div className="bg-surface rounded-lg p-6 elevation-1">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Cronograma del Proyecto</h3>
          <p className="text-sm text-muted-foreground">Seguimiento de hitos y entregas</p>
        </div>
      </div>
      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

        {/* Timeline Events */}
        <div className="space-y-6">
          {timelineEvents?.map((event, index) => (
            <div key={event?.id} className="relative flex items-start space-x-4">
              {/* Timeline Dot */}
              <div className={`
                relative z-10 w-12 h-12 rounded-full border-4 border-surface flex items-center justify-center
                ${getStatusColor(event?.status)}
              `}>
                <Icon 
                  name={getTypeIcon(event?.type)} 
                  size={16} 
                  color={event?.status === 'completed' ? 'white' : 'currentColor'} 
                />
              </div>

              {/* Event Content */}
              <div className="flex-1 min-w-0 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-medium text-text-primary">{event?.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{event?.time}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{event?.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} color="var(--color-muted-foreground)" />
                      <span className="text-muted-foreground">{formatDate(event?.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="User" size={14} color="var(--color-muted-foreground)" />
                      <span className="text-muted-foreground">{event?.assignee}</span>
                    </div>
                  </div>
                  
                  {event?.status === 'in-progress' && (
                    <div className="flex items-center space-x-1 text-warning">
                      <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">En Progreso</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Next Milestone Highlight */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Target" size={16} color="white" />
          </div>
          <div>
            <h4 className="font-medium text-primary">Próximo Hito</h4>
            <p className="text-sm text-text-secondary">
              Integración de APIs - 25 de enero, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;