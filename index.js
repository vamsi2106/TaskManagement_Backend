const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();
require("./config/db");

const PORT = 8000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Task Management" });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
