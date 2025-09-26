import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationBadges = ({ certifications, partnerships }) => {
  return (
    <div className="bg-surface rounded-xl p-6 elevation-1">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Certificaciones y Alianzas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nuestras credenciales y partnerships que respaldan nuestra experiencia técnica
        </p>
      </div>
      {/* Certifications Section */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
          Certificaciones Técnicas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications?.map((cert) => (
            <div key={cert?.id} className="group text-center">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-3 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 mx-auto mb-3 bg-surface rounded-lg elevation-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert?.icon} size={32} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">
                  {cert?.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {cert?.issuer}
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <Icon name="Calendar" size={12} color="var(--color-muted-foreground)" />
                  <span className="text-xs text-muted-foreground">
                    {cert?.year}
                  </span>
                </div>
              </div>
              {cert?.verified && (
                <div className="flex items-center justify-center space-x-1">
                  <Icon name="ShieldCheck" size={14} color="var(--color-success)" />
                  <span className="text-xs text-success font-medium">Verificado</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Partnerships Section */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
          Partners Tecnológicos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerships?.map((partner) => (
            <div key={partner?.id} className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl p-6 hover:from-muted/50 hover:to-muted/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-surface rounded-lg elevation-1 flex items-center justify-center flex-shrink-0">
                  <Image 
                    src={partner?.logo} 
                    alt={`${partner?.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-text-primary">
                      {partner?.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      partner?.level === 'gold' ? 'bg-warning/10 text-warning' :
                      partner?.level === 'silver' ? 'bg-muted text-muted-foreground' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {partner?.level === 'gold' ? 'Gold Partner' :
                       partner?.level === 'silver'? 'Silver Partner' : 'Certified Partner'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {partner?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {partner?.services?.map((service, index) => (
                      <span key={index} className="bg-surface px-2 py-1 rounded text-xs text-text-secondary">
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} color="var(--color-muted-foreground)" />
                      <span className="text-xs text-muted-foreground">
                        Partner desde {partner?.since}
                      </span>
                    </div>
                    {partner?.website && (
                      <a 
                        href={partner?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        <Icon name="ExternalLink" size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Proyectos Completados</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">5</div>
            <div className="text-sm text-muted-foreground">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Certificaciones</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;