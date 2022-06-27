const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid');
            }
        }
    },
    first_name:{
        type:String,
        required:true,
        trim:true
    },
    last_name: {
        type:String,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password');
            }
        }
    },
    address: {
        type: String,
        required:true,
        trim:true
    },
    is_admin:{
        required:true,
        default: false,
        type: Boolean
    }
})



userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new Error('Unable to login!');
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      throw new Error('Unable to login!');
    }
  
    return user;
  };


  // Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 8);
    }
    next();
  });



const User = mongoose.model('User',userSchema);

module.exports = User;