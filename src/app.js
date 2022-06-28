const express = require('express');
require('./db/mongoose');
require("dotenv").config();
const userRoute = require('./routes/userRoutes');



const app = express();

app.use(express.json());
app.use(userRoute);


app.use((req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ error: 'Internal error' });
});

module.exports = app;


