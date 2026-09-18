const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");

const connectdb=require("./config/db");
dotenv.config();
connectdb();

const app=express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testroutes");
const registrationRoutes=require("./routes/registrationRoutes")
const documentRoutes=require("./routes/documentRoutes");


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
app.use("/api/auth",authRoutes);

app.use("/uploads",express.static("uploads"));

app.get("/",(req,res)=>{
    res.send("Student Admission Backend is Running");
});

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is Running on Port${port}`);
});