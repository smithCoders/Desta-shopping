const winston = require('winston');

const errorLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
  ],
});

module.exports = errorLogger;
