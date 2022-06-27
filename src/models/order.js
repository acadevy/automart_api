const mongoose = require("mongoose");

const orderSchema = mongoose.schema({
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
    amount: {
        type: float,
        required: true,
    },

    status: {
            type: String,
            enum: ["pending","accepted","rejected"]
    }

})


    