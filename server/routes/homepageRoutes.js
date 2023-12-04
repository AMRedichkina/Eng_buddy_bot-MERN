const express = require("express");
const router = express.Router();
const homapageController = require("../controllers/homepageController");

router.get('/', homapageController);

module.exports = router;