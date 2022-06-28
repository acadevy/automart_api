const User = require("../models/user")

exports.createUser = async (req,res) => {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ status: 201,data:user});
    } catch (error) {
      res.status(400).json(error);
    }
}

exports.loginUser = async(req,res)=>{
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
}