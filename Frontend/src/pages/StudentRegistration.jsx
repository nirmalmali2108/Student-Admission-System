import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function StudentRegistration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        gender: "",

        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",

        fatherName: "",
        motherName: "",
        guardianMobile: "",

        tenthPercentage: "",

        twelfthPercentage: "",

        course: "",
        branch: "",
        admissionYear: "",
        enrollmentNumber: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        try {
            const response = await axios.post(
                "https://student-admission-system-8ixw.onrender.com/api/registration",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message);

            navigate("/dashboard");

        } catch (error) {
            console.log("Registration Error:", error);

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="container">

            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                <h3>Personal Information</h3>

                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />

                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>


                <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                />

                <hr />

                <h3>Parent Information</h3>

                <input
                    type="text"
                    name="fatherName"
                    placeholder="Father Name"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="motherName"
                    placeholder="Mother Name"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="guardianMobile"
                    placeholder="Guardian Mobile"
                    value={formData.guardianMobile}
                    onChange={handleChange}
                    required
                />

                <hr />

                <h3>10th Academic Information</h3>

                <input
                    type="number"
                    name="tenthYear"
                    placeholder="10th Passing Year"
                    value={formData.tenthYear}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    step="0.01"
                    name="tenthPercentage"
                    placeholder="10th Percentage"
                    value={formData.tenthPercentage}
                    onChange={handleChange}
                    required
                />

                <hr />

                <h3>12th Academic Information</h3>

                <input
                    type="number"
                    name="twelfthYear"
                    placeholder="12th Passing Year"
                    value={formData.twelfthYear}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    step="0.01"
                    name="twelfthPercentage"
                    placeholder="12th Percentage"
                    value={formData.twelfthPercentage}
                    onChange={handleChange}
                    required
                />

                <hr />

                <h3>Admission Information</h3>

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="branch"
                    placeholder="Branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="admissionYear"
                    placeholder="Admission Year"
                    value={formData.admissionYear}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="enrollmentNumber"
                    placeholder="Enrollment Number"
                    value={formData.enrollmentNumber}
                    onChange={handleChange}
                    required
                />

                <br />

                <button type="submit">
                    Submit Registration
                </button>

            </form>

            <p>
                <Link to="/dashboard">
                    Back to Dashboard
                </Link>
            </p>

        </div>
    );
}

export default StudentRegistration;