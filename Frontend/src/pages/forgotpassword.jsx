import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Password reset request submitted");
    };

    return (
        <div className="container">

            <h2>Forgot Password</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">
                    Reset Password
                </button>

            </form>

            <p>
                Remember your password?{" "}
                <Link to="/login">
                    Login
                </Link>
            </p>

        </div>
    );
}

export default ForgotPassword;