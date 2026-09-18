const DocumentTrack = require("../models/documenttrack");

const uploadDocument = async (req, res) => {
    try {
        const studentid = req.student.studentid;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a document"
            });
        }

        const documentType = req.body.documentType;

        if (!documentType) {
            return res.status(400).json({
                success: false,
                message: "Document type is required"
            });
        }

        const document = await DocumentTrack.create({
            studentId: studentid,
            documentType: documentType,
            fileName: req.file.originalname,
            filePath: req.file.path,
            status: "Uploaded"
        });

        res.status(201).json({
            success: true,
            message: "Document uploaded successfully",
            document
        });

    } catch (error) {
        console.log("Document Upload Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Document upload failed",
            error: error.message
        });
    }
};

const getDocuments = async (req, res) => {
    try {
        const studentid = req.student.studentid;

        const documents = await DocumentTrack.find({
            studentId: studentid
        });

        res.status(200).json({
            success: true,
            documents
        });

    } catch (error) {
        console.log("Get Documents Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to get documents"
        });
    }
};

module.exports = {
    uploadDocument,
    getDocuments
};