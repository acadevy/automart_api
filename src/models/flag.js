const mongoose = require("mongoose");

const flagSchema = mongoose.schema({
    car_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    reason : {
        type: String,
        enum: ["pricing","weird demands","etc"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_on: {
        type: DateTime
    }
})






    