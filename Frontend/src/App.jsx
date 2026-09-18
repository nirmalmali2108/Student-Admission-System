import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/forgotpassword";
import StudentRegistration from "./pages/StudentRegistration";
import Dashboard from "./pages/dashboard";
import UploadDocuments from "./pages/uploaddocuments";
import EditProfile from "./pages/editprofile";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Signup />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/login" element={<Login />} />

                <Route path="/registration" element={<StudentRegistration/>}/>

                <Route path="/forgot-password" element={<ForgotPassword />}/>

                <Route path="/dashboard" element={<Dashboard/>}/>

                <Route path="/upload-documents" element={<UploadDocuments/>}/>

                <Route path="/edit-profile" element={<EditProfile/>}/>

            </Routes>

        </BrowserRouter>
    );
}

export default App;