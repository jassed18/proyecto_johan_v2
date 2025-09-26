import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'phone',
      title: 'Llamada Directa',
      description: 'Habla directamente con nuestro equipo',
      icon: 'Phone',
      value: '+57 301 216 9668',
      action: () => window.open('tel:+573012169668', '_self'),
      color: 'var(--color-primary)',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Chatea con nosotros en WhatsApp',
      icon: 'MessageCircle',
      value: 'Chat disponible 24/7',
      action: () => {
        const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios de IA.');
        window.open(`https://wa.me/573012169668?text=${message}`, '_blank');
      },
      color: 'var(--color-success)',
      bgColor: 'bg-success/10'
    },
    {
      id: 'email',
      title: 'Email Corporativo',
      description: 'Envíanos un email detallado',
      icon: 'Mail',
      value: 'aisolutionsauto20@gmail.com',
      action: () => window.open('mailto:aisolutionsauto20@gmail.com?subject=Consulta sobre servicios de IA', '_self'),
      color: 'var(--color-secondary)',
      bgColor: 'bg-secondary/10'
    },
    {
      id: 'instagram',
      title: 'Instagram Direct',
      description: 'Síguenos y envía un mensaje',
      icon: 'Instagram',
      value: '@aisolutionshub',
      action: () => window.open('https://instagram.com/aisolutionshub', '_blank'),
      color: 'var(--color-accent)',
      bgColor: 'bg-accent/10'
    }
  ];

  const businessHours = [
    { day: 'Lunes - Viernes', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sábados', hours: '9:00 AM - 2:00 PM' },
    { day: 'Domingos', hours: 'Cerrado' }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods?.map((method) => (
          <div
            key={method?.id}
            className="bg-surface rounded-lg p-6 elevation-1 hover:elevation-2 transition-all duration-200 hover-lift cursor-pointer"
            onClick={method?.action}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${method?.bgColor} rounded-lg flex items-center justify-center`}>
                <Icon name={method?.icon} size={24} color={method?.color} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary mb-1">
                  {method?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {method?.description}
                </p>
                <p className="text-sm font-medium text-text-secondary">
                  {method?.value}
                </p>
              </div>
              <Icon name="ExternalLink" size={16} color="var(--color-muted-foreground)" />
            </div>
          </div>
        ))}
      </div>
      {/* Business Hours */}
      <div className="bg-surface rounded-lg p-6 elevation-1">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">
              Horarios de Atención
            </h3>
            <p className="text-sm text-muted-foreground">
              Zona horaria: GMT-5 (Colombia)
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {businessHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="text-sm font-medium text-text-secondary">
                {schedule?.day}
              </span>
              <span className="text-sm text-muted-foreground">
                {schedule?.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-success/10 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">
              Disponible ahora - Tiempo de respuesta: &lt; 2 horas
            </span>
          </div>
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-error/10 to-warning/10 rounded-lg p-6 border border-error/20">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} color="var(--color-error)" />
          <div>
            <h3 className="font-semibold text-text-primary mb-2">
              Soporte de Emergencia
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Para proyectos críticos en producción, contáctanos inmediatamente.
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+573012169668', '_self')}
            >
              Llamar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;