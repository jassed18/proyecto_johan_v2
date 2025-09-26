import openai from './openaiClient';

/**
 * Generates a chat completion response based on user input.
 * @param {string} userMessage - The user's input message.
 * @param {string} systemMessage - System instructions for the AI.
 * @returns {Promise<string>} The assistant's response.
 */
export async function getBasicChatCompletion(userMessage, systemMessage = 'You are a helpful AI assistant for AI Solutions Hub, a company that specializes in AI development, web automation, mobile applications, and technology consulting. Provide helpful and professional responses in Spanish.') {
  try {
    const response = await openai?.chat?.completions?.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    return response?.choices?.[0]?.message?.content;
  } catch (error) {
    console.error('Error in basic chat completion:', error);
    throw error;
  }
}

/**
 * Streams a chat completion response chunk by chunk.
 * @param {string} userMessage - The user's input message.
 * @param {Function} onChunk - Callback to handle each streamed chunk.
 * @param {string} systemMessage - System instructions for the AI.
 */
export async function getStreamingChatCompletion(userMessage, onChunk, systemMessage = 'You are a helpful AI assistant for AI Solutions Hub, a company that specializes in AI development, web automation, mobile applications, and technology consulting. Provide helpful and professional responses in Spanish.') {
  try {
    const stream = await openai?.chat?.completions?.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userMessage },
      ],
      stream: true,
      max_tokens: 2000,
      temperature: 0.7,
    });

    for await (const chunk of stream) {
      const content = chunk?.choices?.[0]?.delta?.content || '';
      if (content) {
        onChunk(content);
      }
    }
  } catch (error) {
    console.error('Error in streaming chat completion:', error);
    throw error;
  }
}

/**
 * Analyzes an image using GPT-4 Vision.
 * @param {string} imageUrl - URL of the image to analyze.
 * @param {string} prompt - Analysis prompt.
 * @returns {Promise<string>} Image analysis result.
 */
export async function analyzeImage(imageUrl, prompt = 'Analiza esta imagen y describe lo que ves en detalle.') {
  try {
    const response = await openai?.chat?.completions?.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            { type: 'image_url', image_url: { url: imageUrl } },
          ],
        },
      ],
      max_tokens: 1000,
    });

    return response?.choices?.[0]?.message?.content;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}

/**
 * Moderates text content for policy violations.
 * @param {string} text - Text to moderate.
 * @returns {Promise<object>} Moderation results.
 */
export async function moderateText(text) {
  try {
    const response = await openai?.moderations?.create({
      model: 'text-moderation-latest',
      input: text,
    });

    return response?.results?.[0];
  } catch (error) {
    console.error('Error moderating text:', error);
    throw error;
  }
}