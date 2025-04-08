
# Shadow Man Backend Server

A Node.js/Express backend with MongoDB integration for the Shadow Man application.

## Features

- REST API for CRUD operations on notes
- Chat API with AI response generation
- MongoDB database connection with Mongoose
- Express.js server

## Setup

1. Install MongoDB on your system if you haven't already
2. Make sure MongoDB is running on localhost:27017
3. Install dependencies:
```
npm install
```

4. Start the server:
```
npm start
```

For development with automatic reloading:
```
npm run dev
```

## API Endpoints

### Notes API

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

### Chat API

- `POST /api/chat` - Send a message to the AI assistant

### Misc

- `GET /api/health` - Health check endpoint
