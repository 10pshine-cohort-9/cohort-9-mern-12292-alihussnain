const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const noteRoutes = require('./src/routes/noteRoutes');
const errorHandler = require('./src/middleware/errorHandler');
const logger = require('./src/config/logger');
const pinoHttp = require('pino-http');

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// Logger Middleware (must be before other middleware)
app.use(pinoHttp({ logger }));

// Other Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.get('/api/health', (req, res) => {
  logger.info('Health check endpoint called');
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
  });
});

// Error Handler
app.use(errorHandler);

// Server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});