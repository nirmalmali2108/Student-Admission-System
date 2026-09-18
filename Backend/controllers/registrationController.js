const StudentRegistration = require("../models/StudentRegistration");

// ================= CREATE REGISTRATION =================

const createRegistration = async (req, res) => {
    try {

        const studentid = req.student.studentid;

        const existingRegistration =
            await StudentRegistration.findOne({ studentid });

        if (existingRegistration) {
            return res.status(400).json({
                success: false,
                message: "Student registration already exists"
            });
        }

        const registrationData = {
            ...req.body,
            studentid
        };

        const registration =
            await StudentRegistration.create(registrationData);

        res.status(201).json({
            success: true,
            message: "Student registration successful",
            registration
        });

    } catch (error) {

        console.log("Registration Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });
    }
};


// ================= GET REGISTRATION =================

const getRegistration = async (req, res) => {
    try {

        const studentid = req.student.studentid;

        const registration =
            await StudentRegistration.findOne({ studentid });

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: "Registration not found"
            });
        }

        res.status(200).json({
            success: true,
            registration
        });

    } catch (error) {

        console.log("Get Registration Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to get registration"
        });
    }
};


// ================= UPDATE REGISTRATION =================

const updateRegistration = async (req, res) => {
    try {
        const studentid = req.student.studentid;

        const updateData = {
            ...req.body
        };

        if (req.body.firstName) {
            updateData.firstname = req.body.firstName;
        }

        if (req.body.lastName) {
            updateData.lastname = req.body.lastName;
        }

        delete updateData.firstName;
        delete updateData.lastName;

        const registration =
            await StudentRegistration.findOneAndUpdate(
                { studentid },
                updateData,
                {
                    returnDocument: "after",
                    runValidators: true
                }
            );

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: "Registration not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Registration updated successfully",
            registration
        });

    } catch (error) {
        console.log("Update Registration Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Registration update failed",
            error: error.message
        });
    }
};

// ================= DELETE REGISTRATION =================

const deleteRegistration = async (req, res) => {
    try {

        const studentid = req.student.studentid;

        const registration =
            await StudentRegistration.findOneAndDelete({
                studentid
            });

        if (!registration) {
            return res.status(404).json({
                success: false,
                message: "Registration not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Registration deleted successfully"
        });

    } catch (error) {

        console.log("Delete Registration Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Registration deletion failed"
        });
    }
};


module.exports = {
    createRegistration,
    getRegistration,
    updateRegistration,
    deleteRegistration
};