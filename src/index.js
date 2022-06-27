const express = require("express");
const app = express();
require("./db/mongoose");
require("dotenv").config();


app.listen(process.env.PORT,()=>{
    console.log(`Server is up on ${process.env.PORT}`)
})