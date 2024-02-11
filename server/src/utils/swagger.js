 const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'Documentation for your Express API',
    },
  },
  apis: [path.join(__dirname, 'Routes/*.js')],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
