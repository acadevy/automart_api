const express = require('express');
const router = new express.Router();
const orderController = require('../controllers/orderController');
const {auth} = require("../middleware/auth");

router.post('/order',auth, orderController.create_order);
router.patch('/order/:id/price',auth, orderController.update_price);


module.exports = router;