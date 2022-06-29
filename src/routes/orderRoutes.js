const express = require('express');
const router = new express.Router();
const orderController = require('../controllers/orderController');
const {auth} = require("../middleware/auth");

router.post('/orders',auth, orderController.create_order);

module.exports = router;