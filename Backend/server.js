const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React Native / web frontend can make requests
app.use(cors());

// Parse incoming JSON request bodies (e.g., req.body in POST requests)
app.use(express.json());

// Health check endpoint — tests if backend is alive
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    message: 'Mission Unknown Backend is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`[HQ SERVER] Listening on http://localhost:${PORT}`);
});
