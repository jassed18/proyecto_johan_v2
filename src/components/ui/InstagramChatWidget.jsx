import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const InstagramChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '3012169668';
  const instagramUsername = 'aisolutionshub';

  const handleInstagramChat = () => {
    window.open(`https://instagram.com/${instagramUsername}`, '_blank');
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios de IA.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.open(`tel:+57${phoneNumber}`, '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-150">
      {/* Expanded Chat Options */}
      {isExpanded && (
        <div className="mb-4 space-y-2 animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-surface rounded-lg elevation-3 p-4 max-w-xs">
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              ¡Hablemos de tu proyecto!
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={handleInstagramChat}
                className="justify-start"
              >
                <Icon name="Instagram" size={16} />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={handleWhatsAppChat}
                className="justify-start"
              >
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={handlePhoneCall}
                className="justify-start"
              >
                <Icon name="Phone" size={16} />
                Llamar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Button */}
      <Button
        variant="default"
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-secondary to-primary hover:scale-110 transition-all duration-300 elevation-3 hover:elevation-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Icon 
          name={isExpanded ? "X" : "MessageCircle"} 
          size={24} 
          color="white" 
        />
      </Button>

      {/* Pulse Animation Ring */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping"></div>
      )}
    </div>
  );
};

export default InstagramChatWidget;