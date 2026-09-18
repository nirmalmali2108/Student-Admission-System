const express = require("express");

const router = express.Router();

const authMiddleware =
    require("../middleware/authMiddleware");

const upload =
    require("../middleware/uploadmiddleware");

const {
    uploadDocument,
    getDocuments
} = require("../controllers/documentcontroller");


router.post(
    "/upload",
    authMiddleware,
    upload.single("document"),
    uploadDocument
);


router.get(
    "/",
    authMiddleware,
    getDocuments
);


module.exports = router;