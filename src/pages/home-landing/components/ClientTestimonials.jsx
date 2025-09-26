import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Directora de Operaciones",
      company: "TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `La implementación de automatización con N8N transformó completamente nuestros procesos. Redujimos el tiempo de procesamiento de pedidos en un 75% y eliminamos errores manuales. El equipo de AI Solutions Hub demostró un conocimiento excepcional y nos acompañó en cada paso del proyecto.`,
      project: "Automatización de Procesos de Ventas",
      results: ["75% reducción en tiempo", "0% errores manuales", "ROI del 300%"]
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "CEO",
      company: "Innovate Digital",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Necesitábamos una aplicación web compleja con integración de IA. El resultado superó nuestras expectativas. La plataforma desarrollada en React y Next.js es rápida, intuitiva y ha mejorado significativamente la experiencia de nuestros usuarios. Altamente recomendados.`,
      project: "Plataforma Web con IA Integrada",
      results: ["40% más usuarios activos", "95% satisfacción usuario", "50% menos tiempo de carga"]
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "Gerente de Tecnología",
      company: "DataFlow Corp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `La consultoría en IA que recibimos fue fundamental para nuestra transformación digital. Nos ayudaron a identificar oportunidades de mejora y implementaron soluciones con watsonx.ai que han optimizado nuestros análisis de datos. Profesionales excepcionales.`,
      project: "Consultoría e Implementación de IA",
      results: ["60% mejora en análisis", "Decisiones 3x más rápidas", "Ahorro de $50K anuales"]
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "Director de Sistemas",
      company: "EcoTech Industries",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `La integración de nuestros sistemas legacy con APIs modernas parecía imposible hasta que trabajamos con AI Solutions Hub. Su experiencia con FastAPI y Python nos permitió modernizar nuestra infraestructura sin interrumpir las operaciones.`,
      project: "Modernización de Sistemas Legacy",
      results: ["100% uptime durante migración", "API 5x más rápida", "Costos reducidos 30%"]
    }
  ];

  const trustSignals = [
    { icon: "Shield", label: "Certificación ISO 27001", value: "Seguridad Garantizada" },
    { icon: "Award", label: "Google Cloud Partner", value: "Partner Certificado" },
    { icon: "Users", label: "150+ Clientes Satisfechos", value: "Experiencia Comprobada" },
    { icon: "Clock", label: "Soporte 24/7", value: "Disponibilidad Total" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
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
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Testimonios reales de empresas que han transformado sus operaciones con nuestras soluciones de IA
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-surface rounded-3xl p-8 lg:p-12 elevation-3 border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} color="var(--color-accent)" className="fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-6 italic">
                    "{testimonials?.[currentTestimonial]?.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden elevation-1">
                      <Image
                        src={testimonials?.[currentTestimonial]?.avatar}
                        alt={testimonials?.[currentTestimonial]?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-lg">
                        {testimonials?.[currentTestimonial]?.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials?.[currentTestimonial]?.position}
                      </p>
                      <p className="text-primary font-medium">
                        {testimonials?.[currentTestimonial]?.company}
                      </p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h5 className="font-medium text-text-primary mb-2">
                      Proyecto: {testimonials?.[currentTestimonial]?.project}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {testimonials?.[currentTestimonial]?.results?.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="TrendingUp" size={14} color="var(--color-success)" />
                          <span className="text-sm text-text-secondary">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <Icon name="Quote" size={64} color="white" className="opacity-50" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center elevation-2">
                      <Icon name="Award" size={24} color="white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustSignals?.map((signal, index) => (
            <div key={index} className="bg-surface rounded-xl p-6 text-center elevation-1 hover:elevation-2 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={signal?.icon} size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">{signal?.label}</h4>
              <p className="text-sm text-muted-foreground">{signal?.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;