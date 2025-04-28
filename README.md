
# Shadow Man AI Application

A complete web application featuring a React frontend and Express/MongoDB backend.

## Project Structure

- `/client` - React frontend (this directory)
- `/server` - Express.js backend with MongoDB

## Features

- Dashboard with AI assistant metrics
- Notes management (CRUD operations)
- AI chat functionality
- Responsive UI with modern design

## Technologies Used

### Frontend
- React with TypeScript
- React Router for navigation
- TanStack Query for data fetching
- Tailwind CSS for styling
- Shadcn UI components

### Backend
- Node.js with Express
- MongoDB with Mongoose
- RESTful API architecture

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- MongoDB (running locally or accessible via connection string)

### Setup and Installation

1. Clone the repository
2. Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Start the MongoDB server (if running locally)

4. Start the backend server:

```bash
# In the server directory
npm run dev
```

5. Start the frontend development server:

```bash
# In the project root
npm run dev
```

6. Open your browser and navigate to http://localhost:8080

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build

In the server directory, you can run:
- `npm run dev` - Runs the server with nodemon for auto-reloading
- `npm start` - Runs the server in production mode
