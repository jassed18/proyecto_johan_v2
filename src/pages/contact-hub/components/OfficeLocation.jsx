import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const officeInfo = {
    address: 'Carrera 15 #93-47, Oficina 501',
    city: 'Bogotá, Colombia',
    zipCode: '110221',
    neighborhood: 'Chapinero Norte',
    coordinates: {
      lat: 4.6751,
      lng: -74.0621
    }
  };

  const businessHours = [
    { day: 'Lunes', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Martes', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Miércoles', hours: '8:00 AM - 6:00 PM', isToday: true },
    { day: 'Jueves', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Viernes', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Sábado', hours: '9:00 AM - 2:00 PM', isToday: false },
    { day: 'Domingo', hours: 'Cerrado', isToday: false }
  ];

  const nearbyLandmarks = [
    { name: 'Centro Comercial Andino', distance: '0.5 km', icon: 'ShoppingBag' },
    { name: 'Estación TransMilenio Calle 85', distance: '0.8 km', icon: 'Train' },
    { name: 'Zona Rosa', distance: '1.2 km', icon: 'MapPin' },
    { name: 'Universidad del Rosario', distance: '1.5 km', icon: 'GraduationCap' }
  ];

  const handleGetDirections = () => {
    const { lat, lng } = officeInfo?.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const handleCallOffice = () => {
    window.open('tel:+573012169668', '_self');
  };

  return (
    <div className="space-y-6">
      {/* Office Information Card */}
      <div className="bg-surface rounded-lg p-6 elevation-2">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Nuestra Oficina
            </h3>
            <p className="text-sm text-muted-foreground">
              Visítanos en el corazón de Bogotá
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Address Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Icon name="Building" size={16} color="var(--color-muted-foreground)" className="mt-1" />
                <div>
                  <p className="font-medium text-text-primary">
                    {officeInfo?.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {officeInfo?.neighborhood}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {officeInfo?.city} {officeInfo?.zipCode}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                size="sm"
                iconName="Navigation"
                iconPosition="left"
                onClick={handleGetDirections}
              >
                Cómo Llegar
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                onClick={handleCallOffice}
              >
                Llamar
              </Button>
            </div>

            {/* Nearby Landmarks */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-text-primary mb-3">
                Referencias Cercanas
              </h4>
              <div className="space-y-2">
                {nearbyLandmarks?.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <Icon name={landmark?.icon} size={14} color="var(--color-muted-foreground)" />
                    <span className="text-text-secondary">{landmark?.name}</span>
                    <span className="text-muted-foreground">• {landmark?.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">
              Horarios de Atención
            </h4>
            <div className="space-y-2">
              {businessHours?.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                    schedule?.isToday ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'
                  }`}
                >
                  <span className={`text-sm font-medium ${
                    schedule?.isToday ? 'text-primary' : 'text-text-secondary'
                  }`}>
                    {schedule?.day}
                    {schedule?.isToday && (
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                        Hoy
                      </span>
                    )}
                  </span>
                  <span className={`text-sm ${
                    schedule?.hours === 'Cerrado' ? 'text-error' : 'text-muted-foreground'
                  }`}>
                    {schedule?.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success">
                  Abierto ahora
                </span>
                <span className="text-xs text-muted-foreground">
                  • Cierra a las 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Interactive Map */}
      <div className="bg-surface rounded-lg overflow-hidden elevation-2">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Map" size={20} color="var(--color-primary)" />
              <h3 className="font-semibold text-text-primary">
                Ubicación en el Mapa
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}`, '_blank')}
            >
              Ver en Google Maps
            </Button>
          </div>
        </div>
        
        <div className="relative h-80 w-full">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="AI Solutions Hub Office Location"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}&z=16&output=embed`}
            className="border-0"
          />
        </div>
      </div>
      {/* Transportation Options */}
      <div className="bg-surface rounded-lg p-6 elevation-1">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Car" size={20} color="var(--color-secondary)" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">
              Opciones de Transporte
            </h3>
            <p className="text-sm text-muted-foreground">
              Cómo llegar a nuestra oficina
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Car" size={16} color="var(--color-primary)" />
              <span className="font-medium text-text-primary">En Carro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Parqueadero disponible en el edificio. Tarifa: $5,000/hora.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Train" size={16} color="var(--color-success)" />
              <span className="font-medium text-text-primary">TransMilenio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Estación Calle 85 a 800m. Líneas troncales y alimentadoras.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Smartphone" size={16} color="var(--color-accent)" />
              <span className="font-medium text-text-primary">Uber/Taxi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Zona de fácil acceso para servicios de transporte privado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;