import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const heroData = {
    title: "Transformamos tu Negocio con Inteligencia Artificial",
    subtitle: "Soluciones tecnológicas avanzadas que impulsan el crecimiento de tu empresa",
    description: "Especialistas en desarrollo web, automatización de procesos, aplicaciones móviles e integración de sistemas con IA de última generación.",
    primaryCta: "Solicitar Cotización",
    secondaryCta: "Ver Servicios",
    stats: [
      { number: "150+", label: "Proyectos Completados" },
      { number: "98%", label: "Satisfacción Cliente" },
      { number: "24/7", label: "Soporte Técnico" }
    ]
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
            >
              {heroData?.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-text-secondary mb-8 leading-relaxed"
            >
              {heroData?.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              {heroData?.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link to="/quotation-wizard">
                <Button variant="default" className="hover-lift">
                  <Icon name="Calculator" size={20} />
                  {heroData?.primaryCta}
                </Button>
              </Link>
              <Link to="/service-portfolio">
                <Button variant="outline" className="hover-lift">
                  <Icon name="ArrowRight" size={20} />
                  {heroData?.secondaryCta}
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-8"
            >
              {heroData?.stats?.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {stat?.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary to-secondary rounded-2xl elevation-4 overflow-hidden">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Brain" size={32} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 right-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Zap" size={24} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 left-12 w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Smartphone" size={28} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 right-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Globe" size={20} color="white" />
              </motion.div>

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-white/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Cpu" size={40} color="white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <Icon name="ChevronDown" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;