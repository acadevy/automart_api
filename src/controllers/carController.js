const Car = require("../models/Car");
const Order = require("../models/Order");

exports.create_car_sale_ad = async(req,res) => {
    const car_sale_ad = new Car({
        ...req.body,
        owner: req.user._id
    });

    try {
      await car_sale_ad.save();
      res.status(201).send({ status: 201, data: car_sale_ad});
    } catch (error) {
      res.status(400).json(error);
    }

}

exports.update_car_status = async(req,res)=>{
  const {id} = req.params
  try{
    const get_car_ad = await Car.findById(id);
    const get_order = await Order.findOne({car_id:id});
    const car_price = get_car_ad.price;
    const order_price = get_order.price_offered;
    if(car_price === order_price){
      get_car_ad.Status = "sold"
      await get_car_ad.save();
      const data = get_car_ad;
      res.status(200).json({
        status: 200,
        data
      })
    }

 }
  catch(err){
    res.status(404).json(err);
  }
  
}

exports.update_car_price = async(req,res)=>{
      const id = req.params.id
      const updated_price = req.body.price;
  try{
    const car = await Car.findById(id)
    if(!car) {
      res.status(404).json({message: "car_ad does not exist"});
    }
    car.price =  updated_price;
    await car.save();
    const data = car
    res.status(200).json({status: 200,
      data});
  }
  catch(err){
    res.status(404).json(err);
  }
}

exports.get_a_car = async(req,res)=>{
  const{id} = req.params
  try{
    const car = await Car.findById(id);
    console.log(car);
    if(car.length < 1){
      res.status(404).json({message: "car doesnot exist"});
    } else{
      res.status(200).json(car);
    }
   
  }
  catch(err){
    res.status(404).json(err);
  }
}

exports.get_a_car_byQuery = async(req,res)=>{
  const status=  Object.values(req.query);
 
  try{
    const car = await Car.find({Status:status});
    console.log(car);
    if(car.length < 1){
      res.status(404).json({message: "car does not exist"});
      }
      else{
        res.status(200).json(car);
      }
    }
  catch(err){
    res.status(404).json(err);
  }
}