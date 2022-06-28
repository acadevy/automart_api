const User = require("../controllers/userController")

exports.createUser = async () => {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ status: 201,data:user, token });
    } catch (error) {
      res.status(400).json(error);
    }
}