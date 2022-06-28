const express = require('express');
const router = new express.Router();
const carController = require('../controllers/carController');
const {auth} = require("../middleware/auth");

router.post('/cars',auth,carController.create_car_sale_ad);

module.exports = router;