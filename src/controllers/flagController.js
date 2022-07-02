const Flag = require("../models/Flag");
const Car = require("../models/Car");

exports.register_flag = async(req,res)=>{
    const {car_id,reason,description} = req.body;
    try{
      const flag = await new Flag({
        ...req.body,
        user_id : req.user._id
      })
        await flag.save();
        res.status(200).json(flag);

    }
    catch(err){
        res.status(500).json(err);
    }
}