const mongoose=require("mongoose");
const documenttrackschema=new mongoose.Schema(
    {
        studentId: {
            type: String,
            required: true
        },

        documentType: {
            type: String,
            required: true
        },

        fileName: {
            type: String,
            required: true
        },

        filePath: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: [
                "Not Uploaded",
                "Uploaded",
                "Verified",
                "Rejected"
            ],
            default: "Uploaded"
        },

        uploadedAt: {
            type: Date,
            default: Date.now
        },

        verifiedAt: {
            type: Date
        }
    },
    {
        timestamps:true
    }
);
const documenttrack=mongoose.model(
    "documenttrack",
    documenttrackschema
);
module.exports=documenttrack;