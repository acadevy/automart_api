const express = require('express');
require('./db/mongoose');
require("dotenv").config();
const user_route = require('./routes/userRoutes');
const car_sale_route = require("./routes/carRoutes");
const order_route = require("./routes/orderRoutes");
const flag_route = require("./routes/flagRoutes");



const app = express();

app.use(express.json());
app.use(user_route);
app.use(car_sale_route);
app.use(order_route);
app.use(flag_route);



app.use((req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ error: 'Internal error' });
});

module.exports = app;


