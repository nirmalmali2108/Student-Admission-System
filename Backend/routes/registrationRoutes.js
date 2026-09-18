const express = require("express");

const router = express.Router();

const authMiddleware =
    require("../middleware/authMiddleware");

const {
    createRegistration,
    getRegistration,
    updateRegistration,
    deleteRegistration
} = require("../controllers/registrationController");


// CREATE
router.post(
    "/",
    authMiddleware,
    createRegistration
);


// READ
router.get(
    "/",
    authMiddleware,
    getRegistration
);


// UPDATE
router.put(
    "/",
    authMiddleware,
    updateRegistration
);


// DELETE
router.delete(
    "/",
    authMiddleware,
    deleteRegistration
);


module.exports = router;