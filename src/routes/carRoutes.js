const express = require('express');
const router = new express.Router();
const carController = require('../controllers/carController');
const {auth} = require("../middleware/auth");

router.post('/car',auth, carController.create_car_sale_ad);
router.patch('/car/:id/status',auth,carController.update_car_status);
router.patch('/car/:id/price',auth,carController.update_car_price);
router.get('/car/:id/',carController.get_a_car);

module.exports = router;