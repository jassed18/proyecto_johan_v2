import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onCommunicate }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'en progreso':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'completado':
        return 'text-success bg-success/10 border-success/20';
      case 'pendiente':
        return 'text-error bg-error/10 border-error/20';
      case 'revisión':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'alta':
        return { icon: 'AlertTriangle', color: 'var(--color-error)' };
      case 'media':
        return { icon: 'Clock', color: 'var(--color-warning)' };
      case 'baja':
        return { icon: 'CheckCircle', color: 'var(--color-success)' };
      default:
        return { icon: 'Circle', color: 'var(--color-muted-foreground)' };
    }
  };

  const priorityConfig = getPriorityIcon(project?.priority);

  return (
    <div className="bg-surface rounded-lg p-6 elevation-2 hover:elevation-3 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={project?.icon} size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">{project?.name}</h3>
              <p className="text-sm text-muted-foreground">{project?.type}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
            {project?.status}
          </div>
          <Icon name={priorityConfig?.icon} size={16} color={priorityConfig?.color} />
        </div>
      </div>
      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-secondary">Progreso</span>
          <span className="text-sm font-semibold text-primary">{project?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${project?.progress}%` }}
          />
        </div>
      </div>
      {/* Timeline */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Fecha de Inicio</p>
          <p className="text-sm font-medium text-text-primary">{project?.startDate}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Fecha de Entrega</p>
          <p className="text-sm font-medium text-text-primary">{project?.endDate}</p>
        </div>
      </div>
      {/* Next Milestone */}
      {project?.nextMilestone && (
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <Icon name="Target" size={14} color="var(--color-primary)" />
            <span className="text-xs font-medium text-primary">Próximo Hito</span>
          </div>
          <p className="text-sm text-text-primary">{project?.nextMilestone?.title}</p>
          <p className="text-xs text-muted-foreground">{project?.nextMilestone?.date}</p>
        </div>
      )}
      {/* Team */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Equipo:</span>
          <div className="flex -space-x-1">
            {project?.team?.slice(0, 3)?.map((member, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full bg-secondary border-2 border-surface flex items-center justify-center"
                title={member?.name}
              >
                <span className="text-xs font-medium text-white">
                  {member?.name?.charAt(0)}
                </span>
              </div>
            ))}
            {project?.team?.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-muted border-2 border-surface flex items-center justify-center">
                <span className="text-xs text-muted-foreground">+{project?.team?.length - 3}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <Icon name="MessageCircle" size={14} color="var(--color-muted-foreground)" />
          <span className="text-xs text-muted-foreground">{project?.messagesCount}</span>
        </div>
      </div>
      {/* Actions */}
      <div className="flex space-x-2">
        <Button 
          variant="default" 
          size="sm" 
          fullWidth
          onClick={() => onViewDetails(project)}
        >
          Ver Detalles
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          iconName="MessageCircle"
          onClick={() => onCommunicate(project)}
        >
          Chat
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;