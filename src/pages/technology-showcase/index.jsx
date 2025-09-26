import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import InstagramChatWidget from '../../components/ui/InstagramChatWidget';
import TechnologyCard from './components/TechnologyCard';
import IntegrationShowcase from './components/IntegrationShowcase';
import CapabilitiesMatrix from './components/CapabilitiesMatrix';
import InteractiveDemo from './components/InteractiveDemo';
import CertificationBadges from './components/CertificationBadges';

const TechnologyShowcase = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  // Mock data for technologies
  const technologies = [
    {
      id: 'n8n',
      name: 'N8N',
      category: 'Automatización',
      icon: 'Zap',
      description: `Plataforma de automatización de flujos de trabajo de código abierto que permite conectar diferentes servicios y aplicaciones sin necesidad de programación compleja.`,
      useCases: ['Automatización de procesos', 'Integración de APIs', 'Workflows empresariales', 'Sincronización de datos'],
      benefits: [
        'Interfaz visual intuitiva para crear workflows',
        'Más de 200 integraciones predefinidas',
        'Código abierto y altamente personalizable',
        'Escalable para empresas de cualquier tamaño'
      ],
      integrations: ['Make', 'OpenAI', 'React', 'FastAPI'],
      isPartner: true,
      demoUrl: '#'
    },
    {
      id: 'make',
      name: 'Make',
      category: 'Automatización',
      icon: 'Settings',
      description: `Plataforma de automatización visual que conecta aplicaciones y servicios para automatizar procesos empresariales complejos de manera eficiente.`,
      useCases: ['Marketing automation', 'CRM integration', 'Data processing', 'E-commerce automation'],
      benefits: [
        'Interfaz drag-and-drop fácil de usar',
        'Integración con más de 1000 aplicaciones',
        'Ejecución en tiempo real',
        'Monitoreo avanzado de workflows'
      ],
      integrations: ['N8N', 'watsonx.ai', 'Node.js', 'Python'],
      isPartner: true,
      demoUrl: '#'
    },
    {
      id: 'watsonx',
      name: 'watsonx.ai',
      category: 'Inteligencia Artificial',
      icon: 'Brain',
      description: `Plataforma de IA empresarial de IBM que proporciona herramientas avanzadas para el desarrollo, entrenamiento y despliegue de modelos de machine learning.`,
      useCases: ['Machine Learning', 'Análisis predictivo', 'Procesamiento de lenguaje natural', 'Computer Vision'],
      benefits: [
        'Modelos de IA pre-entrenados',
        'Herramientas de MLOps integradas',
        'Escalabilidad empresarial',
        'Gobernanza de IA incorporada'
      ],
      integrations: ['OpenAI GPT', 'Python', 'FastAPI', 'React'],
      isPartner: false,
      demoUrl: '#'
    },
    {
      id: 'openai',
      name: 'OpenAI GPT',
      category: 'Inteligencia Artificial',
      icon: 'MessageSquare',
      description: `Modelos de lenguaje avanzados que permiten crear aplicaciones inteligentes con capacidades de comprensión y generación de texto natural.`,
      useCases: ['Chatbots inteligentes', 'Generación de contenido', 'Análisis de texto', 'Asistentes virtuales'],
      benefits: [
        'Comprensión contextual avanzada',
        'Generación de texto de alta calidad',
        'API fácil de integrar',
        'Modelos especializados disponibles'
      ],
      integrations: ['watsonx.ai', 'React', 'Node.js', 'Python'],
      isPartner: false,
      demoUrl: '#'
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      icon: 'Code',
      description: `Biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas con un enfoque basado en componentes reutilizables.`,
      useCases: ['Aplicaciones web', 'SPAs', 'Dashboards', 'E-commerce'],
      benefits: [
        'Componentes reutilizables',
        'Virtual DOM para rendimiento óptimo',
        'Ecosistema robusto',
        'Comunidad activa y soporte'
      ],
      integrations: ['Node.js', 'Next.js', 'FastAPI', 'OpenAI GPT'],
      isPartner: false,
      demoUrl: '#'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Backend',
      icon: 'Server',
      description: `Entorno de ejecución de JavaScript del lado del servidor que permite construir aplicaciones escalables y de alto rendimiento.`,
      useCases: ['APIs REST', 'Microservicios', 'Aplicaciones en tiempo real', 'Servidores web'],
      benefits: [
        'JavaScript en frontend y backend',
        'Alto rendimiento con I/O no bloqueante',
        'NPM con millones de paquetes',
        'Ideal para aplicaciones en tiempo real'
      ],
      integrations: ['React', 'Next.js', 'Python', 'Make'],
      isPartner: false,
      demoUrl: '#'
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'Full-Stack',
      icon: 'Globe',
      description: `Framework de React para producción que proporciona renderizado híbrido, optimización automática y herramientas de desarrollo avanzadas.`,
      useCases: ['Sitios web estáticos', 'Aplicaciones full-stack', 'E-commerce', 'Blogs y CMS'],
      benefits: [
        'Renderizado híbrido (SSR/SSG)',
        'Optimización automática de imágenes',
        'API routes integradas',
        'Despliegue simplificado'
      ],
      integrations: ['React', 'Node.js', 'FastAPI', 'N8N'],
      isPartner: false,
      demoUrl: '#'
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Backend/IA',
      icon: 'Code2',
      description: `Lenguaje de programación versátil y potente, ideal para desarrollo web, ciencia de datos, inteligencia artificial y automatización.`,
      useCases: ['Machine Learning', 'Data Science', 'APIs backend', 'Automatización'],
      benefits: [
        'Sintaxis clara y legible',
        'Amplia biblioteca estándar',
        'Excelente para IA y ML',
        'Comunidad global activa'
      ],
      integrations: ['FastAPI', 'watsonx.ai', 'OpenAI GPT', 'Make'],
      isPartner: false,
      demoUrl: '#'
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'Backend',
      icon: 'Rocket',
      description: `Framework moderno y rápido para construir APIs con Python, con documentación automática y validación de tipos integrada.`,
      useCases: ['APIs REST', 'Microservicios', 'Backends para ML', 'Servicios web'],
      benefits: [
        'Alto rendimiento comparable a NodeJS',
        'Documentación automática con OpenAPI',
        'Validación automática de datos',
        'Soporte nativo para async/await'
      ],
      integrations: ['Python', 'React', 'Next.js', 'watsonx.ai'],
      isPartner: false,
      demoUrl: '#'
    }
  ];

  // Mock data for integrations
  const integrations = [
    {
      id: 'ai-automation',
      title: 'IA + Automatización',
      workflow: [
        {
          technology: 'OpenAI GPT',
          icon: 'MessageSquare',
          description: 'Procesa y analiza datos de entrada'
        },
        {
          technology: 'N8N',
          icon: 'Zap',
          description: 'Automatiza el flujo de trabajo'
        },
        {
          technology: 'FastAPI',
          icon: 'Rocket',
          description: 'Expone APIs para integración'
        },
        {
          technology: 'React',
          icon: 'Code',
          description: 'Presenta resultados al usuario'
        }
      ],
      benefits: [
        'Procesamiento inteligente de datos',
        'Automatización de decisiones complejas',
        'Reducción del 80% en tiempo de procesamiento',
        'Escalabilidad automática'
      ],
      technologies: [
        { name: 'OpenAI GPT', icon: 'MessageSquare' },
        { name: 'N8N', icon: 'Zap' },
        { name: 'FastAPI', icon: 'Rocket' },
        { name: 'React', icon: 'Code' }
      ],
      caseStudy: {
        description: 'Sistema de atención al cliente automatizado con IA',
        industry: 'E-commerce'
      }
    },
    {
      id: 'full-stack-ml',
      title: 'Full-Stack + ML',
      workflow: [
        {
          technology: 'React',
          icon: 'Code',
          description: 'Interfaz de usuario interactiva'
        },
        {
          technology: 'Next.js',
          icon: 'Globe',
          description: 'Server-side rendering y APIs'
        },
        {
          technology: 'Python',
          icon: 'Code2',
          description: 'Modelos de machine learning'
        },
        {
          technology: 'watsonx.ai',
          icon: 'Brain',
          description: 'Entrenamiento y despliegue de modelos'
        }
      ],
      benefits: [
        'Aplicaciones inteligentes end-to-end',
        'Modelos ML integrados nativamente',
        'Experiencia de usuario optimizada',
        'Despliegue y monitoreo automatizado'
      ],
      technologies: [
        { name: 'React', icon: 'Code' },
        { name: 'Next.js', icon: 'Globe' },
        { name: 'Python', icon: 'Code2' },
        { name: 'watsonx.ai', icon: 'Brain' }
      ],
      caseStudy: {
        description: 'Plataforma de análisis predictivo para retail',
        industry: 'Retail'
      }
    },
    {
      id: 'enterprise-automation',
      title: 'Automatización Empresarial',
      workflow: [
        {
          technology: 'Make',
          icon: 'Settings',
          description: 'Orquesta procesos empresariales'
        },
        {
          technology: 'Node.js',
          icon: 'Server',
          description: 'APIs y microservicios'
        },
        {
          technology: 'N8N',
          icon: 'Zap',
          description: 'Workflows internos'
        },
        {
          technology: 'React',
          icon: 'Code',
          description: 'Dashboard de monitoreo'
        }
      ],
      benefits: [
        'Integración completa de sistemas',
        'Monitoreo en tiempo real',
        'Reducción de errores manuales',
        'Escalabilidad empresarial'
      ],
      technologies: [
        { name: 'Make', icon: 'Settings' },
        { name: 'Node.js', icon: 'Server' },
        { name: 'N8N', icon: 'Zap' },
        { name: 'React', icon: 'Code' }
      ],
      caseStudy: {
        description: 'Automatización de procesos financieros',
        industry: 'Finanzas'
      }
    }
  ];

  // Mock data for capabilities
  const capabilities = [
    {
      id: 'web-app-basic',
      title: 'Aplicación Web Básica',
      description: 'Desarrollo de aplicaciones web responsivas con funcionalidades estándar',
      complexity: 'basic',
      industries: ['retail', 'education', 'healthcare'],
      technologies: ['React', 'Node.js', 'FastAPI'],
      timeline: '4-6 semanas',
      startingPrice: '$2,500 USD'
    },
    {
      id: 'ai-chatbot',
      title: 'Chatbot con IA',
      description: 'Asistente virtual inteligente con procesamiento de lenguaje natural',
      complexity: 'intermediate',
      industries: ['ecommerce', 'healthcare', 'finance'],
      technologies: ['OpenAI GPT', 'React', 'FastAPI', 'Python'],
      timeline: '6-8 semanas',
      startingPrice: '$4,000 USD'
    },
    {
      id: 'automation-platform',
      title: 'Plataforma de Automatización',
      description: 'Sistema completo de automatización de procesos empresariales',
      complexity: 'advanced',
      industries: ['manufacturing', 'finance', 'retail'],
      technologies: ['N8N', 'Make', 'Node.js', 'React', 'Python'],
      timeline: '10-14 semanas',
      startingPrice: '$8,000 USD'
    },
    {
      id: 'ml-analytics',
      title: 'Analytics con ML',
      description: 'Plataforma de análisis predictivo y business intelligence',
      complexity: 'advanced',
      industries: ['finance', 'retail', 'manufacturing'],
      technologies: ['watsonx.ai', 'Python', 'React', 'FastAPI'],
      timeline: '12-16 semanas',
      startingPrice: '$10,000 USD'
    },
    {
      id: 'enterprise-solution',
      title: 'Solución Empresarial',
      description: 'Sistema integral con IA, automatización y analytics avanzados',
      complexity: 'enterprise',
      industries: ['finance', 'manufacturing', 'healthcare'],
      technologies: ['All Stack', 'Custom Integrations', 'Cloud Infrastructure'],
      timeline: '16-24 semanas',
      startingPrice: '$25,000 USD'
    },
    {
      id: 'ecommerce-ai',
      title: 'E-commerce Inteligente',
      description: 'Plataforma de comercio electrónico con recomendaciones por IA',
      complexity: 'intermediate',
      industries: ['ecommerce', 'retail'],
      technologies: ['Next.js', 'OpenAI GPT', 'Node.js', 'Python'],
      timeline: '8-12 semanas',
      startingPrice: '$6,500 USD'
    }
  ];

  // Mock data for demos
  const demos = [
    {
      id: 'api-demo',
      title: 'API con IA',
      icon: 'Zap',
      type: 'api',
      description: 'Demostración de una API que utiliza inteligencia artificial para análisis de sentimientos en tiempo real.',
      technologies: ['FastAPI', 'OpenAI GPT', 'Python'],
      useCases: [
        'Análisis de comentarios de clientes',
        'Moderación automática de contenido',
        'Clasificación de tickets de soporte'
      ],
      codeSnippet: `from fastapi import FastAPI
import openai

app = FastAPI()

@app.post("/analyze-sentiment")
async def analyze_sentiment(text: str):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Analyze sentiment: {text}",
        max_tokens=50
    )
    return {"sentiment": response.choices[0].text}`
    },
    {
      id: 'workflow-demo',
      title: 'Workflow Automation',
      icon: 'GitBranch',
      type: 'workflow',
      description: 'Ejemplo de automatización de procesos empresariales usando N8N y Make.',
      technologies: ['N8N', 'Make', 'Node.js'],
      useCases: [
        'Automatización de marketing',
        'Sincronización de datos',
        'Notificaciones automáticas'
      ],
      steps: [
        {
          title: 'Trigger',
          description: 'Nuevo cliente registrado'
        },
        {
          title: 'Validación',
          description: 'Verificar datos del cliente'
        },
        {
          title: 'Acción',
          description: 'Enviar email de bienvenida'
        },
        {
          title: 'Seguimiento',
          description: 'Programar follow-up'
        }
      ],
      codeSnippet: `// N8N Workflow Configuration
{
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook"
    },
    {
      "name": "Email",
      "type": "n8n-nodes-base.emailSend"
    }
  ]
}`
    },
    {
      id: 'ui-demo',
      title: 'Dashboard React',
      icon: 'BarChart3',
      type: 'ui',
      description: 'Componente de dashboard interactivo construido con React y visualizaciones en tiempo real.',
      technologies: ['React', 'Next.js', 'Recharts'],
      useCases: [
        'Dashboards ejecutivos',
        'Monitoreo de KPIs',
        'Reportes interactivos'
      ],
      codeSnippet: `import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};`
    }
  ];

  // Mock data for certifications
  const certifications = [
    {
      id: 'aws-certified',
      name: 'AWS Certified',
      issuer: 'Amazon Web Services',
      icon: 'Cloud',
      year: '2023',
      verified: true
    },
    {
      id: 'google-cloud',
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      icon: 'CloudCog',
      year: '2023',
      verified: true
    },
    {
      id: 'microsoft-azure',
      name: 'Azure Solutions Architect',
      issuer: 'Microsoft',
      icon: 'Server',
      year: '2022',
      verified: true
    },
    {
      id: 'openai-certified',
      name: 'OpenAI API Specialist',
      issuer: 'OpenAI',
      icon: 'Brain',
      year: '2024',
      verified: true
    },
    {
      id: 'react-advanced',
      name: 'React Advanced Developer',
      issuer: 'Meta',
      icon: 'Code',
      year: '2023',
      verified: true
    },
    {
      id: 'python-expert',
      name: 'Python Expert',
      issuer: 'Python Institute',
      icon: 'Code2',
      year: '2022',
      verified: true
    },
    {
      id: 'scrum-master',
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      icon: 'Users',
      year: '2023',
      verified: true
    },
    {
      id: 'security-plus',
      name: 'Security+ Certified',
      issuer: 'CompTIA',
      icon: 'Shield',
      year: '2023',
      verified: true
    }
  ];

  // Mock data for partnerships
  const partnerships = [
    {
      id: 'ibm-partner',
      name: 'IBM',
      level: 'gold',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
      description: 'Partner oficial para soluciones de IA empresarial con watsonx.ai',
      services: ['watsonx.ai', 'Cloud Solutions', 'AI Consulting'],
      since: '2022',
      website: 'https://ibm.com'
    },
    {
      id: 'microsoft-partner',
      name: 'Microsoft',
      level: 'silver',
      logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center',
      description: 'Partner certificado para Azure Cloud Services y desarrollo .NET',
      services: ['Azure Cloud', 'Power Platform', 'Office 365'],
      since: '2021',
      website: 'https://microsoft.com'
    },
    {
      id: 'openai-partner',
      name: 'OpenAI',
      level: 'certified',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center',
      description: 'Desarrollador certificado para integración de APIs de OpenAI',
      services: ['GPT Integration', 'AI Development', 'Custom Models'],
      since: '2023',
      website: 'https://openai.com'
    },
    {
      id: 'n8n-partner',
      name: 'N8N',
      level: 'certified',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center',
      description: 'Partner especializado en automatización de workflows empresariales',
      services: ['Workflow Automation', 'Custom Nodes', 'Enterprise Setup'],
      since: '2023',
      website: 'https://n8n.io'
    }
  ];

  const handleTechnologyInquire = (technology) => {
    setSelectedTechnology(technology);
    // Here you would typically open a modal or navigate to inquiry form
    console.log('Inquiring about:', technology?.name);
  };

  const handleViewCase = (integration) => {
    console.log('Viewing case study for:', integration?.title);
  };

  const handleRequestConsultation = (capability) => {
    console.log('Requesting consultation for:', capability?.title);
  };

  const handleRequestDemo = (demo) => {
    console.log('Requesting demo for:', demo?.title);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Tecnologías de Vanguardia</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Nuestro Stack
              <span className="text-primary"> Tecnológico</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Descubre las tecnologías avanzadas que utilizamos para crear soluciones innovadoras 
              y transformar tu negocio con inteligencia artificial y automatización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quotation-wizard">
                <Button variant="default" size="lg">
                  <Icon name="Rocket" size={20} />
                  Solicitar Cotización
                </Button>
              </Link>
              <Link to="/contact-hub">
                <Button variant="outline" size="lg">
                  <Icon name="MessageCircle" size={20} />
                  Consultoría Técnica
                </Button>
              </Link>
            </div>
          </div>

          {/* Technology Cards Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Tecnologías Principales
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada tecnología ha sido seleccionada por su capacidad de crear soluciones robustas y escalables
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies?.map((technology) => (
                <TechnologyCard
                  key={technology?.id}
                  technology={technology}
                  onInquire={handleTechnologyInquire}
                />
              ))}
            </div>
          </section>

          {/* Integration Showcase */}
          <section className="mb-20">
            <IntegrationShowcase
              integrations={integrations}
              onViewCase={handleViewCase}
            />
          </section>

          {/* Capabilities Matrix */}
          <section className="mb-20">
            <CapabilitiesMatrix
              capabilities={capabilities}
              onRequestConsultation={handleRequestConsultation}
            />
          </section>

          {/* Interactive Demos */}
          <section className="mb-20">
            <InteractiveDemo
              demos={demos}
              onRequestDemo={handleRequestDemo}
            />
          </section>

          {/* Certifications and Partnerships */}
          <section className="mb-20">
            <CertificationBadges
              certifications={certifications}
              partnerships={partnerships}
            />
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está preparado para ayudarte a implementar 
              las mejores tecnologías para tu proyecto específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quotation-wizard">
                <Button variant="secondary" size="lg">
                  <Icon name="Calculator" size={20} />
                  Obtener Cotización
                </Button>
              </Link>
              <Link to="/service-portfolio">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  <Icon name="Briefcase" size={20} />
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <InstagramChatWidget />
    </div>
  );
};

export default TechnologyShowcase;