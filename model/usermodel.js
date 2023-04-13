
const mongoose= require('mongoose');
const validator= require('validator');
const cripto= require('crypto');
const bcrypt= require('bcryptjs');

const userschema= mongoose.Schema({
name:{type:String,
required:[true,"please add name"]
},
role:{type:String},
email:{
    type:String
    

}


},
    
    {timestamps:true,versionKey:false})

    const User= mongoose.model('User',userschema);

    module.exports= User;