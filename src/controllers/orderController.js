const Order = require("../models/Order");
const Car = require("../models/Car");


exports.create_order = async(req,res)=> {
    
            try{

                const {price_offered,car_id,status} = req.body;
                const car = await Car.findById(car_id)
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

exports.update_price = async(req,res)=>{

        const updates = Object.keys(req.body);
        const allowedUpdates = ['price'];
        const isValidOperation = updates.every(update =>
          allowedUpdates.includes(update)
        );

        if (!isValidOperation) {
            return res.status(400).json({ error: 'Invalid updates!' });
          }

        const {id} = req.params;
        const get_order_status = await Order.findById(id);
        const status = get_order_status.status;
        if(status != "pending"){
        return res.status(400).json({ error: 'It has already been sold' });
        }
    
        try {
            const order = await Order.findOne({
              _id: req.params.id,
              buyer: req.user._id
            });
      
            if (!order) {
              return res.status(404).json('Order does not exist!');
            }
      
            updates.forEach(update => (order[update] = req.body[update]));
            await order.save();
            res.status(200).json({status:200,order});
       
        }
        catch(err){
            res.status(404).json(err);
   }
}