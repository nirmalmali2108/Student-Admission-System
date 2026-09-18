import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EditProfile() {

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        try {
            const response = await axios.get(
                "https://student-admission-system-8ixw.onrender.com",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = response.data.registration;

            setFormData({
                firstname: data.firstname || "",
                lastname: data.lastname || "",
                dob: data.dob
                    ? data.dob.substring(0, 10)
                    : "",
                gender: data.gender || "",
                bloodGroup: data.bloodGroup || "",
                mobile: data.mobile || "",
                email: data.email || "",
                address: data.address || "",
                city: data.city || "",
                state: data.state || "",
                pincode: data.pincode || "",
                fatherName: data.fatherName || "",
                motherName: data.motherName || "",
                guardianMobile: data.guardianMobile || "",
                tenthSchool: data.tenthSchool || "",
                tenthBoard: data.tenthBoard || "",
                tenthYear: data.tenthYear || "",
                tenthPercentage: data.tenthPercentage || "",
                twelfthSchool: data.twelfthSchool || "",
                twelfthBoard: data.twelfthBoard || "",
                twelfthYear: data.twelfthYear || "",
                twelfthPercentage: data.twelfthPercentage || "",
                course: data.course || "",
                branch: data.branch || "",
                admissionYear: data.admissionYear || "",
                enrollmentNumber: data.enrollmentNumber || ""
            });

        } catch (error) {
            console.log("Get Profile Error:", error);
            setMessage(
                error.response?.data?.message ||
                "Failed to load profile"
            );
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                "https://student-admission-system-8ixw.onrender.com",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage(response.data.message);

        } catch (error) {
            console.log("Update Profile Error:", error);

            setMessage(
                error.response?.data?.message ||
                "Profile update failed"
            );
        }
    };

    return (
        <div className="container">

            <h2>Edit Current Profile</h2>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>

                <h3>Personal Information</h3>

                <input
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="dob"
                    value={formData.dob || ""}
                    onChange={handleChange}
                    required
                />

                <select
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    name="bloodGroup"
                    placeholder="Blood Group"
                    value={formData.bloodGroup || ""}
                    onChange={handleChange}
                />

                <input
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                />

                <h3>Address</h3>

                <input
                    name="address"
                    placeholder="Address"
                    value={formData.address || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="city"
                    placeholder="City"
                    value={formData.city || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="state"
                    placeholder="State"
                    value={formData.state || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode || ""}
                    onChange={handleChange}
                    required
                />

                <h3>Parent Information</h3>

                <input
                    name="fatherName"
                    placeholder="Father Name"
                    value={formData.fatherName || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="motherName"
                    placeholder="Mother Name"
                    value={formData.motherName || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="guardianMobile"
                    placeholder="Guardian Mobile"
                    value={formData.guardianMobile || ""}
                    onChange={handleChange}
                    required
                />

                <h3>10th Information</h3>

               <input
                    type="number"
                    name="tenthYear"
                    placeholder="10th Passing Year"
                    value={formData.tenthYear || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="tenthPercentage"
                    placeholder="10th Percentage"
                    value={formData.tenthPercentage || ""}
                    onChange={handleChange}
                    required
                />

                <h3>12th Information</h3>

                <input
                    type="number"
                    name="twelfthYear"
                    placeholder="12th Passing Year"
                    value={formData.twelfthYear || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="twelfthPercentage"
                    placeholder="12th Percentage"
                    value={formData.twelfthPercentage || ""}
                    onChange={handleChange}
                    required
                />

                <h3>Admission Information</h3>

                <input
                    name="course"
                    placeholder="Course"
                    value={formData.course || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="branch"
                    placeholder="Branch"
                    value={formData.branch || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="admissionYear"
                    placeholder="Admission Year"
                    value={formData.admissionYear || ""}
                    onChange={handleChange}
                    required
                />

                <input
                    name="enrollmentNumber"
                    placeholder="Enrollment Number"
                    value={formData.enrollmentNumber || ""}
                    onChange={handleChange}
                    required
                />

                <br />
                <br />

                <button type="submit">
                    Update Profile
                </button>

            </form>

            <hr />

            <p>
                <Link to="/dashboard">
                    Back to Dashboard
                </Link>
            </p>

        </div>
    );
}

export default EditProfile;