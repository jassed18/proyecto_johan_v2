import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const ctaData = {
    title: "¿Listo para Transformar tu Negocio?",
    subtitle: "Comienza tu Proyecto de IA Hoy",
    description: "Únete a más de 150 empresas que ya han revolucionado sus operaciones con nuestras soluciones de inteligencia artificial y automatización.",
    primaryAction: {
      text: "Solicitar Cotización Gratuita",
      link: "/quotation-wizard",
      icon: "Calculator"
    },
    secondaryAction: {
      text: "Agendar Consulta",
      link: "/contact-hub",
      icon: "Calendar"
    },
    benefits: [
      "Consulta inicial gratuita",
      "Análisis personalizado de necesidades",
      "Propuesta técnica detallada",
      "ROI estimado del proyecto"
    ],
    stats: [
      { value: "48h", label: "Respuesta Garantizada" },
      { value: "0€", label: "Consulta Inicial" },
      { value: "24/7", label: "Soporte Incluido" }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-full"></div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              {ctaData?.title}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-semibold mb-6 text-white/90"
            >
              {ctaData?.subtitle}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-white/80 mb-8 leading-relaxed"
            >
              {ctaData?.description}
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3 mb-8"
            >
              {ctaData?.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to={ctaData?.primaryAction?.link}>
                <Button 
                  variant="outline" 
                  className="bg-white text-primary border-white hover:bg-gray-50 hover-lift"
                >
                  <Icon name={ctaData?.primaryAction?.icon} size={20} />
                  {ctaData?.primaryAction?.text}
                </Button>
              </Link>
              <Link to={ctaData?.secondaryAction?.link}>
                <Button 
                  variant="ghost" 
                  className="text-white border-white hover:bg-white/10 hover-lift"
                >
                  <Icon name={ctaData?.secondaryAction?.icon} size={20} />
                  {ctaData?.secondaryAction?.text}
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6"
            >
              {ctaData?.stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Rocket" size={32} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 right-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Star" size={24} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5], rotate: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 left-12 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Target" size={28} color="white" />
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 right-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Icon name="Zap" size={20} color="white" />
              </motion.div>

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                  <Icon name="Sparkles" size={48} color="white" />
                </motion.div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;