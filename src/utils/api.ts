
/**
 * API client for the backend
 */

const API_URL = 'http://localhost:5000/api';

export interface ChatResponse {
  message: string;
  timestamp: string;
}

export interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

/**
 * Send a message to the AI and get a response
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
 * Check if the backend is available
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

/**
 * Get all notes
 * 
 * @returns Array of notes
 */
export const getNotes = async (): Promise<Note[]> => {
  try {
    const response = await fetch(`${API_URL}/notes`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch notes');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

/**
 * Get a single note by ID
 * 
 * @param id - The note ID
 * @returns The note
 */
export const getNoteById = async (id: string): Promise<Note> => {
  try {
    const response = await fetch(`${API_URL}/notes/${id}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch note');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching note:', error);
    throw error;
  }
};

/**
 * Create a new note
 * 
 * @param title - The note title
 * @param content - The note content
 * @returns The created note
 */
export const createNote = async (title: string, content: string): Promise<Note> => {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create note');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

/**
 * Update an existing note
 * 
 * @param id - The note ID
 * @param title - The updated title
 * @param content - The updated content
 * @returns The updated note
 */
export const updateNote = async (id: string, title: string, content: string): Promise<Note> => {
  try {
    const response = await fetch(`${API_URL}/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to update note');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

/**
 * Delete a note
 * 
 * @param id - The note ID
 * @returns Success message
 */
export const deleteNote = async (id: string): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${API_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to delete note');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};
