import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader2, Image } from 'lucide-react';
import { getStreamingChatCompletion, analyzeImage, moderateText } from '../../services/openaiService';

const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy tu asistente de IA de AI Solutions Hub. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const streamingMessageRef = useRef('');

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (event) => {
    const file = event?.target?.files?.[0];
    if (file && file?.type?.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e?.target?.result);
      };
      reader?.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef?.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData?.append('file', file);
    formData?.append('upload_preset', 'unsigned_preset'); // You'll need to configure this
    
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/demo/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response?.json();
      return data?.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return URL.createObjectURL(file); // Fallback to local URL
    }
  };

  const sendMessage = async () => {
    if ((!inputMessage?.trim() && !selectedImage) || isLoading) return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage?.trim(),
      sender: 'user',
      timestamp: new Date(),
      image: imagePreview,
    };

    setMessages(prev => [...prev, newMessage]);
    const userInput = inputMessage?.trim();
    setInputMessage('');
    setIsLoading(true);

    try {
      // Moderate user input
      if (userInput) {
        const moderation = await moderateText(userInput);
        if (moderation?.flagged) {
          const errorMessage = {
            id: Date.now() + 1,
            text: 'Lo siento, no puedo procesar ese mensaje. Por favor, mantén la conversación apropiada y profesional.',
            sender: 'ai',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, errorMessage]);
          setIsLoading(false);
          return;
        }
      }

      let prompt = userInput || 'Analiza esta imagen';
      
      // Handle image analysis
      if (selectedImage) {
        const imageUrl = await uploadImageToCloudinary(selectedImage);
        const imageAnalysis = await analyzeImage(imageUrl, prompt);
        
        const aiMessage = {
          id: Date.now() + 2,
          text: imageAnalysis,
          sender: 'ai',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, aiMessage]);
        removeImage();
      } else if (userInput) {
        // Handle text-only conversation with streaming
        setIsStreaming(true);
        streamingMessageRef.current = '';
        
        const aiMessagePlaceholder = {
          id: Date.now() + 3,
          text: '',
          sender: 'ai',
          timestamp: new Date(),
          isStreaming: true,
        };
        
        setMessages(prev => [...prev, aiMessagePlaceholder]);
        
        await getStreamingChatCompletion(
          userInput,
          (chunk) => {
            streamingMessageRef.current += chunk;
            setMessages(prev => 
              prev?.map(msg => 
                msg?.id === aiMessagePlaceholder?.id 
                  ? { ...msg, text: streamingMessageRef?.current }
                  : msg
              )
            );
          }
        );
        
        setMessages(prev => 
          prev?.map(msg => 
            msg?.id === aiMessagePlaceholder?.id 
              ? { ...msg, isStreaming: false }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 4,
        text: 'Lo siento, ocurrió un error. Por favor, intenta nuevamente más tarde.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      removeImage();
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp?.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
          aria-label="Abrir asistente de IA"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">AI Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-primary-dark p-1 rounded transition-colors"
          aria-label="Cerrar asistente"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages?.map((message) => (
          <div
            key={message?.id}
            className={`flex ${message?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message?.sender === 'user' ?'bg-primary text-white' :'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message?.sender === 'ai' && <Bot className="w-4 h-4 mt-1 flex-shrink-0" />}
                <div className="flex-1">
                  {message?.image && (
                    <img 
                      src={message?.image} 
                      alt="Imagen enviada" 
                      className="w-full rounded mb-2 max-w-48"
                    />
                  )}
                  <p className="text-sm whitespace-pre-wrap">{message?.text}</p>
                  {message?.isStreaming && (
                    <div className="inline-flex items-center ml-1">
                      <Loader2 className="w-3 h-3 animate-spin" />
                    </div>
                  )}
                </div>
                {message?.sender === 'user' && <User className="w-4 h-4 mt-1 flex-shrink-0" />}
              </div>
              <div className="text-xs opacity-70 mt-1">
                {formatTime(message?.timestamp)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Image Preview */}
      {imagePreview && (
        <div className="p-4 border-t bg-gray-50">
          <div className="relative inline-block">
            <img 
              src={imagePreview} 
              alt="Vista previa" 
              className="w-20 h-20 object-cover rounded border"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
      {/* Input */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-end space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef?.current?.click()}
            disabled={isLoading}
            className="p-2 text-gray-500 hover:text-primary transition-colors disabled:opacity-50"
            title="Subir imagen"
          >
            <Image className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e?.target?.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={1}
              disabled={isLoading}
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={(!inputMessage?.trim() && !selectedImage) || isLoading}
            className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            aria-label="Enviar mensaje"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantWidget;