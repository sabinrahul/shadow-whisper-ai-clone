
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Placeholder function for AI response generation
const generateAIResponse = (message) => {
  // In a real implementation, this would integrate with an AI service
  const responses = [
    "I'm Shadow Man, your AI assistant. How can I help you today?",
    "That's an interesting question. Let me think about that...",
    "I've analyzed your request and here's what I found.",
    "Based on my knowledge, I would suggest...",
    "I'm continuously learning to better assist you.",
  ];
  
  // Simple response logic based on message content
  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    return "Hello! I'm Shadow Man, your AI assistant. How can I help you today?";
  } else if (message.toLowerCase().includes('help')) {
    return "I'm here to help! You can ask me questions, request information, or just chat.";
  } else if (message.toLowerCase().includes('thank')) {
    return "You're welcome! Is there anything else I can assist you with?";
  } else {
    // Return a random response for other inputs
    return responses[Math.floor(Math.random() * responses.length)];
  }
};

// API Routes
app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Generate AI response
    const response = generateAIResponse(message);
    
    // Log interaction (in a real app, this might go to a database)
    console.log(`User: ${message}`);
    console.log(`Shadow Man: ${response}`);
    
    // Return the response with a slight delay to simulate processing
    setTimeout(() => {
      res.json({ 
        message: response,
        timestamp: new Date().toISOString()
      });
    }, 500);
    
  } catch (error) {
    console.error('Error processing chat:', error);
    res.status(500).json({ error: 'Failed to process your request' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Shadow Man AI Backend' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Shadow Man AI backend server running on port ${PORT}`);
});
