const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    buyer: {
        type: mongoose.Types.ObjectId,
        required:true,
        ref: "User"
    },
    car_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Car"
    },
    price: {
        type:Number,
        required: true
    },
    price_offered: {
        type: Number,
        required: true,
    },

    status: {
            type: String,
            enum: ["pending","accepted","rejected"]
    }
},
    {
        timestamps: true
    }

)


const Order = mongoose.model('Order',orderSchema);

module.exports = Order;