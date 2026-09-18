const protectedTest = (req, res) => {

    res.json({
        success: true,
        message: "Protected API working",
        student: req.student
    });

};

module.exports = {
    protectedTest
};