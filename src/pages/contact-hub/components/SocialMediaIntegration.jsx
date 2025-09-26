import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialMediaIntegration = () => {
  const [followedPlatforms, setFollowedPlatforms] = useState(new Set());

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@aisolutionshub',
      description: 'Síguenos para ver nuestros proyectos y casos de éxito',
      icon: 'Instagram',
      url: 'https://instagram.com/aisolutionshub',
      color: 'var(--color-accent)',
      bgColor: 'bg-accent/10',
      followers: '2.5K',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
          caption: 'Nuevo proyecto de automatización completado 🚀'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop',
          caption: 'Dashboard de analytics en tiempo real 📊'
        }
      ]
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'AI Solutions Hub',
      description: 'Conecta con nosotros profesionalmente',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/aisolutionshub',
      color: 'var(--color-primary)',
      bgColor: 'bg-primary/10',
      followers: '1.8K',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
          caption: 'Artículo: El futuro de la automatización empresarial'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop',
          caption: 'Webinar gratuito: Introducción a la IA para negocios'
        }
      ]
    },
    {
      id: 'twitter',
      name: 'Twitter',
      handle: '@aisolutionshub',
      description: 'Últimas noticias y actualizaciones tecnológicas',
      icon: 'Twitter',
      url: 'https://twitter.com/aisolutionshub',
      color: 'var(--color-secondary)',
      bgColor: 'bg-secondary/10',
      followers: '3.2K',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=300&fit=crop',
          caption: 'Thread: 10 herramientas de IA que todo empresario debe conocer 🧵'
        }
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: 'AI Solutions Hub',
      description: 'Tutoriales y casos de estudio en video',
      icon: 'Youtube',
      url: 'https://youtube.com/@aisolutionshub',
      color: 'var(--color-error)',
      bgColor: 'bg-error/10',
      followers: '892',
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop',
          caption: 'Cómo automatizar tu negocio en 30 días - Tutorial completo'
        }
      ]
    }
  ];

  const handleFollow = (platformId, url) => {
    window.open(url, '_blank');
    setFollowedPlatforms(prev => new Set([...prev, platformId]));
  };

  const handlePostClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Social Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialPlatforms?.map((platform) => (
          <div key={platform?.id} className="bg-surface rounded-lg p-6 elevation-1">
            {/* Platform Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${platform?.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon name={platform?.icon} size={24} color={platform?.color} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {platform?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform?.handle}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {platform?.followers} seguidores
                  </p>
                </div>
              </div>
              <Button
                variant={followedPlatforms?.has(platform?.id) ? "default" : "outline"}
                size="sm"
                onClick={() => handleFollow(platform?.id, platform?.url)}
                iconName={followedPlatforms?.has(platform?.id) ? "Check" : "Plus"}
                iconPosition="left"
              >
                {followedPlatforms?.has(platform?.id) ? 'Siguiendo' : 'Seguir'}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {platform?.description}
            </p>

            {/* Recent Posts */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-text-secondary">
                Publicaciones Recientes
              </h4>
              {platform?.posts?.map((post) => (
                <div
                  key={post?.id}
                  className="flex space-x-3 p-3 bg-muted/50 rounded-lg hover:bg-muted cursor-pointer transition-colors duration-200"
                  onClick={() => handlePostClick(platform?.url)}
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post?.image}
                      alt="Post preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/no_image.png';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {post?.caption}
                    </p>
                  </div>
                  <Icon name="ExternalLink" size={14} color="var(--color-muted-foreground)" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Social Media Feed Widget */}
      <div className="bg-surface rounded-lg p-6 elevation-1">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Hash" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">
                Feed Social en Vivo
              </h3>
              <p className="text-sm text-muted-foreground">
                Últimas actualizaciones de todas nuestras redes
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Ver Todo
          </Button>
        </div>

        {/* Mock Live Feed */}
        <div className="space-y-4">
          {[
            {
              platform: 'Instagram',
              icon: 'Instagram',
              color: 'var(--color-accent)',
              time: 'Hace 2 horas',
              content: 'Acabamos de lanzar una nueva automatización que reduce el tiempo de procesamiento de pedidos en un 75% 🚀 #Automatización #Eficiencia'
            },
            {
              platform: 'LinkedIn',
              icon: 'Linkedin',
              color: 'var(--color-primary)',
              time: 'Hace 5 horas',
              content: 'Artículo nuevo: "Cómo la IA está transformando el sector retail en Colombia". Link en comentarios 📖'
            },
            {
              platform: 'Twitter',
              icon: 'Twitter',
              color: 'var(--color-secondary)',
              time: 'Hace 1 día',
              content: 'Thread sobre las mejores prácticas para implementar chatbots con IA en tu negocio 🤖 (1/10)'
            }
          ]?.map((post, index) => (
            <div key={index} className="flex space-x-3 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors duration-200">
              <Icon name={post?.icon} size={20} color={post?.color} />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-text-primary">
                    {post?.platform}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post?.time}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  {post?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="Mail" size={24} color="var(--color-primary)" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary mb-2">
              Newsletter Tecnológico
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe las últimas tendencias en IA, automatización y desarrollo web directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <Button variant="default" size="sm">
                Suscribirse
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Sin spam. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIntegration;