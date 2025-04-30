
// API configuration
const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.VITE_API_URL || 'https://your-deployed-api-url.com/api'
  : 'http://localhost:5000/api';

export default API_URL;
