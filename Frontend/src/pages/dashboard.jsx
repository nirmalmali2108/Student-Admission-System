import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const student = JSON.parse(
        localStorage.getItem("student")
    );

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("student");

        alert("Logout successful");

        navigate("/login");
    };

    return (
        <div className="container">

            <h2>Student Dashboard</h2>

            <hr />

            <h3>Welcome, {student?.studentname}</h3>

            <p>
                <strong>Student ID:</strong>{" "}
                {student?.studentid}
            </p>

            <p>
                <strong>Email:</strong>{" "}
                {student?.email}
            </p>

            <p>
                <strong>Mobile:</strong>{" "}
                {student?.mobile}
            </p>

            <hr />

            <h3>Student Services</h3>

            <p>
                <Link to="/registration">
                    <button>
                        Student Registration
                    </button>
                </Link>
            </p>

            <p>
                <Link to="/upload-documents">
                    <button>
                        Upload Documents
                    </button>
                </Link>
            </p>

            <p>
                <Link to="/edit-profile">
                    <button>
                        Edit Current Profile
                    </button>
                </Link>
            </p>

            <hr />

            <button onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;