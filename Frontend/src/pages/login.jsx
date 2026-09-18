import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:8000/api/auth/login",
                formData
            );

            // Save token
            localStorage.setItem(
                "token",
                response.data.token
            );

            // Save student information
            localStorage.setItem(
                "student",
                JSON.stringify(response.data.student)
            );

            alert(response.data.message);

            navigate("/dashboard");

        } catch (error) {

            console.log("Login Error:", error);

            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="container">

            <h2>Student Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>
                <Link to="/forgot-password">
                    Forgot Password?
                </Link>
            </p>

            <p>
                Don't have an account?{" "}
                <Link to="/signup">
                    Sign Up
                </Link>
            </p>

        </div>
    );
}

export default Login;