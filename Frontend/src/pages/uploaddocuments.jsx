import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UploadDocuments() {

    const [documentType, setDocumentType] = useState("");
    const [document, setDocument] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!documentType || !document) {
            setMessage("Please select document type and file");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            setMessage("Please login first");
            return;
        }

        const formData = new FormData();

        formData.append("documentType", documentType);
        formData.append("document", document);

        try {

            const response = await axios.post(
                "https://student-admission-system-8ixw.onrender.com",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage(response.data.message);

            setDocumentType("");
            setDocument(null);

        } catch (error) {

            console.log(
                "Upload Error:",
                error
            );

            setMessage(
                error.response?.data?.message ||
                "Document upload failed"
            );
        }
    };

    return (
        <div className="container">

            <h2>Upload Documents</h2>

            <form onSubmit={handleUpload}>

                <label>
                    Select Document
                </label>

                <select
                    value={documentType}
                    onChange={(e) =>
                        setDocumentType(e.target.value)
                    }
                    required
                >
                    <option value="">
                        Select Document Type
                    </option>

                    <option value="10th Marksheet">
                        10th Marksheet
                    </option>

                    <option value="12th Marksheet">
                        12th Marksheet
                    </option>

                    <option value="ID Proof">
                        ID Proof
                    </option>

                    <option value="Passport Photo">
                        Passport Photo
                    </option>

                    <option value="Other">
                        Other
                    </option>
                </select>

                <br />
                <br />

                <input
                    id="document"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) =>
                        setDocument(e.target.files[0])
                    }
                    required
                />

                <p>
                    Allowed: JPG, PNG, PDF
                </p>

                <p>
                    Maximum size: 5 MB
                </p>

                <button type="submit">
                    Upload Document
                </button>

            </form>

            {message && (
                <p>
                    {message}
                </p>
            )}

            <hr />

            <p>
                <Link to="/dashboard">
                    Back to Dashboard
                </Link>
            </p>

        </div>
    );
}

export default UploadDocuments;