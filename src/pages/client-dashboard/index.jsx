import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import InstagramChatWidget from '../../components/ui/InstagramChatWidget';

// Import components
import ProjectCard from './components/ProjectCard';
import CommunicationPanel from './components/CommunicationPanel';
import DocumentManager from './components/DocumentManager';
import ProjectTimeline from './components/ProjectTimeline';
import ServiceRequestForm from './components/ServiceRequestForm';
import InvoiceTracker from './components/InvoiceTracker';

const ClientDashboard = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isCommunicationOpen, setIsCommunicationOpen] = useState(false);
  const [isServiceRequestOpen, setIsServiceRequestOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock user data
  const userData = {
    name: 'María González',
    email: 'maria.gonzalez@empresa.com',
    company: 'Innovación Digital SAS',
    memberSince: '2024-08-15',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  };

  // Mock projects data
  const projects = [
    {
      id: 1,
      name: 'Plataforma E-commerce',
      type: 'Desarrollo Web',
      status: 'En Progreso',
      priority: 'Alta',
      progress: 75,
      startDate: '10/01/2025',
      endDate: '05/02/2025',
      icon: 'ShoppingCart',
      nextMilestone: {
        title: 'Integración de Pagos',
        date: '28/01/2025'
      },
      team: [
        { name: 'Carlos Rodríguez', role: 'PM' },
        { name: 'Ana García', role: 'Developer' },
        { name: 'Luis Martínez', role: 'Designer' }
      ],
      messagesCount: 12
    },
    {
      id: 2,
      name: 'Automatización CRM',
      type: 'Automatización',
      status: 'Revisión',
      priority: 'Media',
      progress: 90,
      startDate: '05/01/2025',
      endDate: '25/01/2025',
      icon: 'Zap',
      nextMilestone: {
        title: 'Testing Final',
        date: '24/01/2025'
      },
      team: [
        { name: 'Carlos Rodríguez', role: 'PM' },
        { name: 'Luis Martínez', role: 'Developer' }
      ],
      messagesCount: 8
    },
    {
      id: 3,
      name: 'App Móvil Corporativa',
      type: 'Desarrollo Móvil',
      status: 'Completado',
      priority: 'Baja',
      progress: 100,
      startDate: '15/12/2024',
      endDate: '15/01/2025',
      icon: 'Smartphone',
      nextMilestone: null,
      team: [
        { name: 'Ana García', role: 'Lead Developer' },
        { name: 'Luis Martínez', role: 'UI/UX' }
      ],
      messagesCount: 25
    }
  ];

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
    
    // Set first project as active by default
    if (projects?.length > 0) {
      setActiveProject(projects?.[0]);
    }
  }, []);

  const handleProjectDetails = (project) => {
    setActiveProject(project);
    setActiveTab('timeline');
  };

  const handleCommunicate = (project) => {
    setActiveProject(project);
    setIsCommunicationOpen(true);
  };

  const handleServiceRequest = (formData) => {
    console.log('Nueva solicitud de servicio:', formData);
    setIsServiceRequestOpen(false);
    // Here you would typically send the data to your backend
  };

  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  // Redirigir automáticamente a home-landing si no está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.replace('/home-landing');
    }
  }, [isAuthenticated]);
  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={userData?.avatar} 
                  alt={userData?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-text-primary">
                  {getGreeting()}, {userData?.name}
                </h1>
                <p className="text-muted-foreground">
                  {userData?.company} • Cliente desde {new Intl.DateTimeFormat('es-ES', { 
                    month: 'long', 
                    year: 'numeric' 
                  })?.format(new Date(userData.memberSince))}
                </p>
              </div>
            </div>
            
            <Button 
              variant="default" 
              iconName="Plus"
              onClick={() => setIsServiceRequestOpen(true)}
            >
              Nueva Solicitud
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Briefcase" size={20} color="var(--color-primary)" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Proyectos Activos</p>
                <p className="text-2xl font-bold text-text-primary">
                  {projects?.filter(p => p?.status !== 'Completado')?.length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" size={20} color="var(--color-success)" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completados</p>
                <p className="text-2xl font-bold text-text-primary">
                  {projects?.filter(p => p?.status === 'Completado')?.length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" size={20} color="var(--color-warning)" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mensajes</p>
                <p className="text-2xl font-bold text-text-primary">
                  {projects?.reduce((sum, p) => sum + p?.messagesCount, 0)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-lg p-6 elevation-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={20} color="var(--color-secondary)" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Progreso Promedio</p>
                <p className="text-2xl font-bold text-text-primary">
                  {Math.round(projects?.reduce((sum, p) => sum + p?.progress, 0) / projects?.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg overflow-x-auto">
            {[
              { id: 'overview', label: 'Resumen', icon: 'LayoutDashboard' },
              { id: 'timeline', label: 'Cronograma', icon: 'Calendar' },
              { id: 'documents', label: 'Documentos', icon: 'FolderOpen' },
              { id: 'invoices', label: 'Facturación', icon: 'CreditCard' }
            ]?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab?.id
                    ? 'bg-surface text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleProjectDetails}
                  onCommunicate={handleCommunicate}
                />
              ))}
            </div>
          )}

          {activeTab === 'timeline' && activeProject && (
            <ProjectTimeline project={activeProject} />
          )}

          {activeTab === 'documents' && activeProject && (
            <DocumentManager project={activeProject} />
          )}

          {activeTab === 'invoices' && (
            <InvoiceTracker />
          )}
        </div>

        {/* Empty State for Timeline/Documents without active project */}
        {(activeTab === 'timeline' || activeTab === 'documents') && !activeProject && (
          <div className="text-center py-12">
            <Icon name="FolderOpen" size={48} color="var(--color-muted-foreground)" />
            <h3 className="text-lg font-medium text-text-primary mt-4">Selecciona un Proyecto</h3>
            <p className="text-muted-foreground mt-2">
              Elige un proyecto desde la pestaña "Resumen" para ver su {activeTab === 'timeline' ? 'cronograma' : 'documentación'}.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveTab('overview')}
            >
              Ver Proyectos
            </Button>
          </div>
        )}
      </div>
      {/* Communication Panel */}
      <CommunicationPanel
        isOpen={isCommunicationOpen}
        onClose={() => setIsCommunicationOpen(false)}
        project={activeProject}
      />
      {/* Service Request Form */}
      <ServiceRequestForm
        isOpen={isServiceRequestOpen}
        onClose={() => setIsServiceRequestOpen(false)}
        onSubmit={handleServiceRequest}
      />
      {/* Instagram Chat Widget */}
      <InstagramChatWidget />
    </div>
  );
};

export default ClientDashboard;