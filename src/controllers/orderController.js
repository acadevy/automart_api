const Order = require("../models/Order");
const Car = require("../models/Car");


exports.create_order = async(req,res)=> {
    
            try{
                const {price_offered,car_id,status} = req.body;
                const car = await Car.findById(car_id)
                console.log(car);
                const order = new Order({
                    price_offered,
                    car_id,
                    status,
                    price: car.price,
                    buyer: req.user._id
                   })
                   await order.save();
                   res.status(201).json({status: 201, data: order});
                
            }
            catch(err){
                res.status(500).json(err)
            }
    }

