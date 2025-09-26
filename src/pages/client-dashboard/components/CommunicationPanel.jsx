import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunicationPanel = ({ isOpen, onClose, project }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Carlos Rodríguez',
      role: 'Project Manager',
      content: `Hola! Te escribo para informarte sobre el progreso del proyecto "${project?.name}". Hemos completado la fase de diseño y estamos avanzando con el desarrollo.`,
      timestamp: new Date(Date.now() - 3600000),
      isClient: false,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      sender: 'Tú',
      role: 'Cliente',
      content: 'Perfecto! Me alegra saber que todo va según lo planeado. ¿Cuándo podré ver los primeros avances?',
      timestamp: new Date(Date.now() - 1800000),
      isClient: true,
      avatar: null
    },
    {
      id: 3,
      sender: 'Ana García',
      role: 'Developer',
      content: 'Hemos subido los primeros prototipos al área de documentos. Puedes revisarlos y dejarnos tus comentarios.',
      timestamp: new Date(Date.now() - 900000),
      isClient: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    }
  ]);

  const handleSendMessage = () => {
    if (message?.trim()) {
      const newMessage = {
        id: messages?.length + 1,
        sender: 'Tú',
        role: 'Cliente',
        content: message,
        timestamp: new Date(),
        isClient: true,
        avatar: null
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit'
    })?.format(date);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-surface border-l border-border elevation-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Chat del Proyecto</h3>
              <p className="text-sm text-muted-foreground">{project?.name}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(100vh - 140px)' }}>
          {messages?.map((msg) => (
            <div
              key={msg?.id}
              className={`flex ${msg?.isClient ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex space-x-2 max-w-xs ${msg?.isClient ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  {msg?.avatar ? (
                    <img 
                      src={msg?.avatar} 
                      alt={msg?.sender}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <Icon name="User" size={16} color="white" />
                  )}
                </div>

                {/* Message */}
                <div className={`${msg?.isClient ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-medium text-text-primary">{msg?.sender}</span>
                    <span className="text-xs text-muted-foreground">{msg?.role}</span>
                  </div>
                  <div className={`
                    p-3 rounded-lg text-sm
                    ${msg?.isClient 
                      ? 'bg-primary text-white' :'bg-muted text-text-primary'
                    }
                  `}>
                    {msg?.content}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatTime(msg?.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              variant="default" 
              size="icon"
              onClick={handleSendMessage}
              disabled={!message?.trim()}
            >
              <Icon name="Send" size={16} />
            </Button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex space-x-2 mt-3">
            <Button variant="outline" size="sm" iconName="Paperclip">
              Archivo
            </Button>
            <Button variant="outline" size="sm" iconName="Calendar">
              Reunión
            </Button>
            <Button variant="outline" size="sm" iconName="Phone">
              Llamar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;