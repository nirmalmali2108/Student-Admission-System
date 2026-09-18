const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authmiddleware");

const {
    protectedTest
} = require("../controllers/testcontroller");


router.get(
    "/protected",
    authMiddleware,
    protectedTest
);


module.exports = router;