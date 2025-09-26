import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentManager = ({ project }) => {
  const [activeTab, setActiveTab] = useState('documents');
  
  const documents = [
    {
      id: 1,
      name: 'Propuesta_Inicial_v2.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadDate: '2025-01-15',
      status: 'approved',
      version: '2.0',
      comments: 3,
      uploadedBy: 'Carlos Rodríguez'
    },
    {
      id: 2,
      name: 'Wireframes_Desktop.fig',
      type: 'figma',
      size: '15.8 MB',
      uploadDate: '2025-01-18',
      status: 'pending',
      version: '1.0',
      comments: 1,
      uploadedBy: 'Ana García'
    },
    {
      id: 3,
      name: 'Especificaciones_Técnicas.docx',
      type: 'document',
      size: '1.2 MB',
      uploadDate: '2025-01-20',
      status: 'revision',
      version: '1.3',
      comments: 5,
      uploadedBy: 'Luis Martínez'
    },
    {
      id: 4,
      name: 'Prototipo_Mobile_v1.mp4',
      type: 'video',
      size: '45.2 MB',
      uploadDate: '2025-01-22',
      status: 'new',
      version: '1.0',
      comments: 0,
      uploadedBy: 'Ana García'
    }
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return 'FileText';
      case 'figma':
        return 'Figma';
      case 'document':
        return 'FileText';
      case 'video':
        return 'Video';
      case 'image':
        return 'Image';
      default:
        return 'File';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-success bg-success/10 border-success/20';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'revision':
        return 'text-error bg-error/10 border-error/20';
      case 'new':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Aprobado';
      case 'pending':
        return 'Pendiente';
      case 'revision':
        return 'En Revisión';
      case 'new':
        return 'Nuevo';
      default:
        return 'Sin Estado';
    }
  };

  return (
    <div className="bg-surface rounded-lg elevation-1">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FolderOpen" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Documentos del Proyecto</h3>
              <p className="text-sm text-muted-foreground">{documents?.length} archivos disponibles</p>
            </div>
          </div>
          
          <Button variant="default" iconName="Upload">
            Subir Archivo
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mt-4 bg-muted p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('documents')}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'documents'
                ? 'bg-surface text-primary shadow-sm' :'text-muted-foreground hover:text-text-primary'
            }`}
          >
            Documentos
          </button>
          <button
            onClick={() => setActiveTab('versions')}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'versions' ?'bg-surface text-primary shadow-sm' :'text-muted-foreground hover:text-text-primary'
            }`}
          >
            Versiones
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {activeTab === 'documents' && (
          <div className="space-y-4">
            {documents?.map((doc) => (
              <div key={doc?.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
                {/* File Icon */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={getFileIcon(doc?.type)} size={24} color="var(--color-text-secondary)" />
                </div>

                {/* File Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-text-primary">{doc?.name}</h4>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(doc?.status)}`}>
                      {getStatusText(doc?.status)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{doc?.size}</span>
                    <span>v{doc?.version}</span>
                    <span>Subido el {doc?.uploadDate}</span>
                    <span>por {doc?.uploadedBy}</span>
                  </div>
                  
                  {doc?.comments > 0 && (
                    <div className="flex items-center space-x-1 mt-1">
                      <Icon name="MessageCircle" size={14} color="var(--color-muted-foreground)" />
                      <span className="text-xs text-muted-foreground">{doc?.comments} comentarios</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" iconName="Download">
                    Descargar
                  </Button>
                  <Button variant="ghost" size="sm" iconName="MessageSquare">
                    Comentar
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="MoreVertical" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'versions' && (
          <div className="space-y-4">
            <div className="text-center py-8">
              <Icon name="GitBranch" size={48} color="var(--color-muted-foreground)" />
              <h3 className="text-lg font-medium text-text-primary mt-4">Control de Versiones</h3>
              <p className="text-muted-foreground mt-2">
                Aquí podrás ver el historial de versiones de cada documento
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentManager;