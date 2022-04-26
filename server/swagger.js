const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Coala API',
      version: '1.0.0',
      description: 'Coala API with express',
    },
    servers: [
      {
        url: 'http://localhost:4000', // 요청 URL
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'jwt',
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js'],
};

const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
