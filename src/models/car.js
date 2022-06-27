const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const carSchema = mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    State: {
        type: String,
        required: true,
        enum: ["used","new"]
    },
    Status: {
        Type: String,
        default: "available",
        enum: ["available","sold"]
    },
    price: {
        type: Number,
        required:true

    },
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    body_type: {
            type: String,
            required: true,
            enum: ["car","truck","trailer","van"]
    }

})

const Car = mongoose.model('Car',carSchema);

module.exports = Car;