const express = require('express');
const router = new express.Router();
const carController = require('../controllers/carController');
const {auth} = require("../middleware/auth");

router.post('/car',auth, carController.create_car_sale_ad);
router.patch('/car/:id/status',auth,carController.update_car_status);
router.patch('/car/:id/price',auth,carController.update_car_price);
router.get('/car/:id/',carController.get_a_car);
router.get('/car/',carController.get_a_car_byQuery);
router.get('/cars/',carController.get_a_min_or_max_car);
router.delete('/car/:id',auth,carController.delete_a_car);
router.get('/cars/all',carController.get_all_car);
router.get('/carss/',carController.get_all_new_cars);
router.get('/carsss', carController.get_all_used_cars);


module.exports = router;