const mongoose = require("mongoose");

const studentRegistrationSchema = new mongoose.Schema(
    {
        studentid: {
            type: String,
            unique: true,
            required: true
        },

        // Personal Information
        firstname: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
            required: true
        },

        dob: {
            type: Date,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        bloodGroup: {
            type: String
        },

        mobile: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        pincode: {
            type: String,
            required: true
        },

        // Parent Information
        fatherName: {
            type: String,
            required: true
        },

        motherName: {
            type: String,
            required: true
        },

        guardianMobile: {
            type: String,
            required: true
        },

        // 10th Academic Information

        tenthYear: {
            type: Number,
            required: true
        },

        tenthPercentage: {
            type: Number,
            required: true
        },

        twelfthYear: {
            type: Number,
            required: true
        },

        twelfthPercentage: {
            type: Number,
            required: true
        },

        // Admission Information
        course: {
            type: String,
            required: true
        },

        branch: {
            type: String,
            required: true
        },

        admissionYear: {
            type: Number,
            required: true
        },

        enrollmentNumber: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const StudentRegistration = mongoose.model(
    "StudentRegistration",
    studentRegistrationSchema
);

module.exports = StudentRegistration;