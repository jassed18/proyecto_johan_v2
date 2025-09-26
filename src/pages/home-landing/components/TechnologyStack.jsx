import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyStack = () => {
  const technologies = [
    {
      name: 'N8N',
      category: 'Automatización',
      description: 'Plataforma de automatización de flujos de trabajo',
      icon: 'Workflow',
      color: 'from-purple-500 to-purple-600',
      expertise: 95
    },
    {
      name: 'Make',
      category: 'Integración',
      description: 'Herramienta de integración visual sin código',
      icon: 'Link2',
      color: 'from-blue-500 to-blue-600',
      expertise: 90
    },
    {
      name: 'watsonx.ai',
      category: 'IA Empresarial',
      description: 'Plataforma de IA empresarial de IBM',
      icon: 'Brain',
      color: 'from-indigo-500 to-indigo-600',
      expertise: 85
    },
    {
      name: 'OpenAI GPT',
      category: 'IA Generativa',
      description: 'Modelos de lenguaje avanzados',
      icon: 'MessageSquare',
      color: 'from-green-500 to-green-600',
      expertise: 92
    },
    {
      name: 'React',
      category: 'Frontend',
      description: 'Biblioteca para interfaces de usuario',
      icon: 'Code',
      color: 'from-cyan-500 to-cyan-600',
      expertise: 98
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'Entorno de ejecución JavaScript',
      icon: 'Server',
      color: 'from-emerald-500 to-emerald-600',
      expertise: 94
    },
    {
      name: 'Next.js',
      category: 'Full-Stack',
      description: 'Framework React para producción',
      icon: 'Globe',
      color: 'from-gray-700 to-gray-800',
      expertise: 96
    },
    {
      name: 'Python',
      category: 'IA & Backend',
      description: 'Lenguaje para IA y desarrollo backend',
      icon: 'Code2',
      color: 'from-yellow-500 to-yellow-600',
      expertise: 89
    },
    {
      name: 'FastAPI',
      category: 'API Development',
      description: 'Framework moderno para APIs Python',
      icon: 'Zap',
      color: 'from-teal-500 to-teal-600',
      expertise: 87
    }
  ];

  const categories = [
    { name: 'IA & Machine Learning', count: 3, icon: 'Brain' },
    { name: 'Desarrollo Web', count: 3, icon: 'Globe' },
    { name: 'Automatización', count: 2, icon: 'Zap' },
    { name: 'Backend & APIs', count: 1, icon: 'Server' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Utilizamos las tecnologías más avanzadas y confiables del mercado para garantizar soluciones robustas y escalables
          </p>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {categories?.map((category, index) => (
            <div key={index} className="bg-surface rounded-xl p-6 text-center elevation-1 hover:elevation-2 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={category?.icon} size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{category?.name}</h3>
              <p className="text-sm text-muted-foreground">{category?.count} Tecnologías</p>
            </div>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies?.map((tech, index) => (
            <motion.div
              key={tech?.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-surface rounded-2xl p-6 h-full elevation-1 hover:elevation-3 transition-all duration-300 hover-lift border border-border">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${tech?.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={tech?.icon} size={28} color="white" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {tech?.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {tech?.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tech?.description}
                </p>

                {/* Expertise Level */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-text-secondary">Experiencia</span>
                    <span className="text-xs font-semibold text-primary">{tech?.expertise}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech?.expertise}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className={`h-2 bg-gradient-to-r ${tech?.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-primary">
                    <Icon name="ArrowRight" size={16} />
                    <span className="text-sm font-medium">Ver proyectos</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-surface rounded-2xl p-8 elevation-2 border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              ¿Quieres conocer más sobre nuestras tecnologías?
            </h3>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              Descubre cómo implementamos estas tecnologías en proyectos reales y los resultados que hemos obtenido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/technology-showcase">
                <Button variant="default" className="hover-lift">
                  <Icon name="Eye" size={20} />
                  Ver Showcase Técnico
                </Button>
              </Link>
              <Link to="/service-portfolio">
                <Button variant="outline" className="hover-lift">
                  <Icon name="Briefcase" size={20} />
                  Ver Portafolio
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;