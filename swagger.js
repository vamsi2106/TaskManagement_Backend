const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.yaml'); // Assuming you save the YAML above as swagger.yaml

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));