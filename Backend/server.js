const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testroutes");
const registrationRoutes = require("./routes/registrationRoutes");
const documentRoutes = require("./routes/documentRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/registration", registrationRoutes);
app.use("/api/documents", documentRoutes);

// Uploaded files
app.use("/uploads", express.static("uploads"));

// Home route
app.get("/", (req, res) => {
    res.send("Student Admission Backend is Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});