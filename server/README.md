
# Shadow Man AI Backend

This is a simple backend server for the "Shadow Man" AI personal assistant.

## Features

- REST API for chat functionality
- Express.js server
- Simple AI response generation (placeholder implementation)
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm start
```

Or for development with automatic reloading:
```
npm run dev
```

## API Endpoints

### POST /api/chat
Receives a user message and returns an AI-generated response.

**Request Body:**
```json
{
  "message": "Hello, Shadow Man!"
}
```

**Response:**
```json
{
  "message": "Hello! I'm Shadow Man, your AI assistant. How can I help you today?",
  "timestamp": "2023-04-04T12:34:56.789Z"
}
```

### GET /api/health
Health check endpoint to verify the server is running.

**Response:**
```json
{
  "status": "ok",
  "service": "Shadow Man AI Backend"
}
```

## Integration with Frontend

To integrate with a React frontend:

1. Ensure the backend server is running (default port: 5000)
2. Use the provided API client in your React components to communicate with the backend
3. Handle API responses and errors appropriately

## Environment Variables

- `PORT` - The port on which the server will run (default: 5000)

## License

MIT
