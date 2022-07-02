const express = require('express');
const router = new express.Router();
const flagController = require('../controllers/flagController');
const {auth} = require("../middleware/auth");


router.post('/flag',auth, flagController.register_flag);

module.exports = router;