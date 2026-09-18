const express = require("express");

const router = express.Router();

const authMiddleware =
    require("../middleware/authmiddleware");

const {
    createRegistration,
    getRegistration,
    updateRegistration,
    deleteRegistration
} = require("../controllers/registrationcontroller");


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