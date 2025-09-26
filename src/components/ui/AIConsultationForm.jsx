import React, { useState } from 'react';
import { Bot, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { getBasicChatCompletion, moderateText } from '../../services/openaiService';

const AIConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    budget: '',
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState({});

  const projectTypes = [
    'Desarrollo Web',
    'Aplicación Móvil',
    'Automatización de Procesos',
    'Chatbot con IA',
    'Análisis de Datos',
    'E-commerce',
    'Sistema de Gestión',
    'Consultoría IA',
    'Otro',
  ];

  const budgetRanges = [
    'Menos de $1,000 USD',
    '$1,000 - $5,000 USD',
    '$5,000 - $15,000 USD',
    '$15,000 - $50,000 USD',
    'Más de $50,000 USD',
    'Por definir',
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData?.email?.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData?.projectType) newErrors.projectType = 'Selecciona el tipo de proyecto';
    if (!formData?.description?.trim()) newErrors.description = 'La descripción es requerida';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const generateAIConsultation = async () => {
    if (!validateForm()) return;

    setIsAnalyzing(true);
    setShowResults(false);

    try {
      // Moderate the project description
      const moderation = await moderateText(formData?.description);
      if (moderation?.flagged) {
        setAiResponse('Lo siento, no puedo procesar la descripción del proyecto. Por favor, revisa el contenido y asegúrate de que sea apropiado.');
        setShowResults(true);
        setIsAnalyzing(false);
        return;
      }

      const consultationPrompt = `
        Como experto consultor en tecnología y desarrollo de AI Solutions Hub, analiza esta solicitud de proyecto:

        Cliente: ${formData?.name}
        Empresa: ${formData?.company || 'No especificada'}
        Tipo de proyecto: ${formData?.projectType}
        Presupuesto: ${formData?.budget || 'No especificado'}
        
        Descripción del proyecto:
        ${formData?.description}

        Por favor proporciona:
        1. Análisis técnico del proyecto
        2. Recomendaciones de tecnologías
        3. Estimación de tiempo de desarrollo
        4. Consideraciones importantes
        5. Próximos pasos recomendados

        Responde de manera profesional y en español, como si fueras un consultor senior de AI Solutions Hub.
      `;

      const response = await getBasicChatCompletion(consultationPrompt);
      setAiResponse(response);
      setShowResults(true);

    } catch (error) {
      console.error('Error generating AI consultation:', error);
      setAiResponse('Lo siento, ocurrió un error al generar la consultoría. Por favor, intenta nuevamente más tarde.');
      setShowResults(true);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      description: '',
      budget: '',
    });
    setAiResponse('');
    setShowResults(false);
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary text-white p-6">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Consultoría IA Gratuita</h2>
            <p className="text-primary-light">Obtén un análisis inteligente de tu proyecto en minutos</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        {!showResults ? (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors?.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors?.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors?.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors?.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors?.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors?.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de proyecto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData?.projectType}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors?.projectType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona un tipo</option>
                  {projectTypes?.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors?.projectType && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors?.projectType}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Presupuesto estimado
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData?.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecciona un rango</option>
                  {budgetRanges?.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción del proyecto *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData?.description}
                onChange={handleInputChange}
                rows={10}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                  errors?.description ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Describe tu proyecto en detalle: objetivos, funcionalidades requeridas, tecnologías preferidas, etc."
              />
              {errors?.description && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors?.description}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Mientras más detalles proporciones, mejor será el análisis de IA.
              </p>
            </div>
          </div>
        ) : (
          /* Results Section */
          (<div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Análisis Completado</h3>
              </div>
              <button
                onClick={resetForm}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Nueva Consultoría
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Análisis de IA - AI Solutions Hub</h4>
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {aiResponse}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">¿Te gustó el análisis?</h4>
              <p className="text-blue-800 mb-3">
                Contacta con nosotros para una consultoría personalizada y cotización detallada.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact-hub"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Contactar Ahora
                </a>
                <a
                  href="/quotation-wizard"
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Obtener Cotización
                </a>
              </div>
            </div>
          </div>)
        )}

        {/* Action Buttons */}
        {!showResults && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={generateAIConsultation}
              disabled={isAnalyzing}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analizando proyecto...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Generar Consultoría IA</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIConsultationForm;