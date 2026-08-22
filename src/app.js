const express = require("express");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "API is working!!",
  });
});

module.exports = app;
