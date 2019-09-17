const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Api Routes
router.use("/api", apiRoutes);

//If no Api routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/inde.html"));
});

module.exports = router;