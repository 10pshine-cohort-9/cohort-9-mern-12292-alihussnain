const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const noteRoutes = require('./src/routes/noteRoutes');
const errorHandler = require('./src/middleware/errorHandler');
const logger = require('./src/config/logger');
const pinoHttp = require('pino-http');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttp({ logger }));

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.get('/api/health', (req, res) => {
  logger.info('Health check endpoint called');
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});