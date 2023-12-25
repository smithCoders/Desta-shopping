const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'loginAttempts.log' }), // Log to a file
  ],
});

module.exports = logger;
