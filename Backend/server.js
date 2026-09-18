const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const authroutes=require("./routes/authroutes");

const connectdb=require("./config/db");
dotenv.config();
connectdb();

const app=express();

app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");

const authRoutes = require("./routes/authroutes");
const testRoutes = require("./routes/testroutes");
const registrationRoutes=require("./routes/registrationroutes")
const documentRoutes=require("./routes/documentroutes");

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/registration",registrationRoutes);
app.use("/api/documents",documentRoutes)

app.get("/", (req, res) => {
    res.send("Student Admission Backend is Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.use("/api/auth",authroutes);

app.use("/uploads",express.static("uploads"));

app.get("/",(req,res)=>{
    res.send("Student Admission Backend is Running");
});

const port=process.env.port;
app.listen(port,()=>{
    console.log(`Server is Running on Port${port}`);
});