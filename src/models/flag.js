const mongoose = require("mongoose");

const flagSchema = mongoose.Schema({
    car_id : {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Car"
    },
    user_id : {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
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
    },
    {
        timestamps: true
    },

    )


const Flag = mongoose.model('Flag',flagSchema);

module.exports = Flag;



    