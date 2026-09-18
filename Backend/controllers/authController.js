const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const studentlogin = require("../models/studentlogin");

const signup = async (req, res) => {
    try {
        const {
            studentname,
            email,
            mobile,
            username,
            password
        } = req.body;

        if (
            !studentname ||
            !email ||
            !mobile ||
            !username ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        
        const existingEmail = await studentlogin.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        const existingUsername = await studentlogin.findOne({
            username
        });

        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: "Username already exists"
            });
        }

        const studentid =
            "STU" + Date.now().toString().slice(-6);

        const hashedPassword = await bcrypt.hash(password, 10);


        const student = new studentlogin({
            studentid,
            studentname,
            email,
            mobile,
            username,
            password: hashedPassword
        });

        await student.save();

        res.status(201).json({
            success: true,
            message: "Student signup successful",
            studentid
        });

    } catch (error) {

        console.log("Signup Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        // Check fields
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            });
        }

        // Find student
        const student = await studentlogin.findOne({
            username
        });

        if (!student) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        // Compare password
        const isPasswordCorrect =
            await bcrypt.compare(
                password,
                student.password
            );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        // Create JWT token
        const token = jwt.sign(
            {
                studentid: student.studentid,
                username: student.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // Send response
        res.status(200).json({
            success: true,
            message: "Login successful",

            token,

            student: {
                studentid: student.studentid,
                studentname: student.studentname,
                email: student.email,
                mobile: student.mobile,
                username: student.username
            }
        });

    } catch (error) {

        console.log("Login Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports={signup,login};