const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5001;

//DB
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend communication (Layer mta3 securité t5allina net7akmou chkoun ynajem y'accedi l backend )
app.use(express.json()); // Parse JSON bodies (Response tjina format JSON)
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies ( bch nesta3mou req.body )

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Start Server
app.listen(port, () => console.log(`Server started on port ${port}`));
