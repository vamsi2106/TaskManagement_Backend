const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');

const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const app = express();

// Load the Swagger YAML file
const swaggerFilePath = path.join(__dirname, 'swagger.yaml');
const swaggerFile = fs.readFileSync(swaggerFilePath, 'utf8');
const swaggerDocument = YAML.parse(swaggerFile);

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();
require("./config/db");

const PORT = 8000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Task Management" });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
