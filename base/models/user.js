const mongoose = require('mongoose')
const UserSchema= mongoose.Schema({
    name :{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})

const userModel = mongoose.model("user001",UserSchema)
module.exports= userModel;