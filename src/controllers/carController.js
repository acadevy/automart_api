const Car = require("../models/Car");

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