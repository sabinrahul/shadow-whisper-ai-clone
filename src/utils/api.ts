
/**
 * API client for the Shadow Man backend
 */

const API_URL = 'http://localhost:5000/api';

export interface ChatResponse {
  message: string;
  timestamp: string;
}

/**
 * Send a message to the Shadow Man AI and get a response
 * 
 * @param message - The user's message
 * @returns The AI's response
 */
export const sendMessage = async (message: string): Promise<ChatResponse> => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to get a response');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Check if the Shadow Man backend is available
 * 
 * @returns True if the backend is available
 */
export const checkBackendHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error('Backend health check failed:', error);
    return false;
  }
};
