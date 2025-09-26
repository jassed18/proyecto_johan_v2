import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const availableDates = [
    { value: '2025-01-27', label: 'Lunes, 27 de Enero' },
    { value: '2025-01-28', label: 'Martes, 28 de Enero' },
    { value: '2025-01-29', label: 'Miércoles, 29 de Enero' },
    { value: '2025-01-30', label: 'Jueves, 30 de Enero' },
    { value: '2025-01-31', label: 'Viernes, 31 de Enero' }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const meetingTypes = [
    { value: 'video', label: 'Videollamada (Google Meet)' },
    { value: 'phone', label: 'Llamada Telefónica' },
    { value: 'in-person', label: 'Presencial (Bogotá)' }
  ];

  const serviceTypes = [
    { value: 'general', label: 'Consulta General' },
    { value: 'web-development', label: 'Desarrollo Web' },
    { value: 'automation', label: 'Automatización' },
    { value: 'mobile-apps', label: 'Apps Móviles' },
    { value: 'ai-consulting', label: 'Consultoría IA' }
  ];

  const handleBooking = async () => {
    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsBooking(false);
    setBookingSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedDate('');
      setSelectedTime('');
      setMeetingType('');
      setServiceType('');
    }, 4000);
  };

  if (bookingSuccess) {
    return (
      <div className="bg-surface rounded-lg p-8 elevation-2 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calendar" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          ¡Consulta Agendada!
        </h3>
        <p className="text-muted-foreground mb-4">
          Te hemos enviado los detalles de la reunión por email. Te contactaremos 15 minutos antes.
        </p>
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Calendar" size={16} />
            <span>{availableDates?.find(d => d?.value === selectedDate)?.label}</span>
            <span>•</span>
            <Icon name="Clock" size={16} />
            <span>{availableTimes?.find(t => t?.value === selectedTime)?.label}</span>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setBookingSuccess(false)}
        >
          Agendar Otra Consulta
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-lg p-6 elevation-2">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} color="var(--color-secondary)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            Agendar Consulta Gratuita
          </h3>
          <p className="text-sm text-muted-foreground">
            30 minutos para discutir tu proyecto
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Select
          label="Tipo de Consulta"
          placeholder="¿Sobre qué quieres hablar?"
          options={serviceTypes}
          value={serviceType}
          onChange={setServiceType}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Fecha Disponible"
            placeholder="Selecciona una fecha"
            options={availableDates}
            value={selectedDate}
            onChange={setSelectedDate}
            required
          />
          <Select
            label="Hora Preferida"
            placeholder="Selecciona una hora"
            options={availableTimes}
            value={selectedTime}
            onChange={setSelectedTime}
            required
          />
        </div>

        <Select
          label="Modalidad de Reunión"
          placeholder="¿Cómo prefieres la reunión?"
          options={meetingTypes}
          value={meetingType}
          onChange={setMeetingType}
          required
        />

        <div className="bg-accent/10 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} color="var(--color-accent)" className="mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-text-primary mb-1">
                ¿Qué incluye la consulta gratuita?
              </p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Análisis de tus necesidades tecnológicas</li>
                <li>• Recomendaciones personalizadas</li>
                <li>• Estimación de tiempos y costos</li>
                <li>• Hoja de ruta del proyecto</li>
              </ul>
            </div>
          </div>
        </div>

        <Button
          variant="default"
          fullWidth
          loading={isBooking}
          iconName="Calendar"
          iconPosition="left"
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime || !meetingType || !serviceType}
        >
          {isBooking ? 'Agendando...' : 'Agendar Consulta Gratuita'}
        </Button>
      </div>
    </div>
  );
};

export default ConsultationBooking;