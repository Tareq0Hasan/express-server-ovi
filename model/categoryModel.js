const mongoose= require('mongoose');
const categorySchema= mongoose.Schema({},
    
    {timestamps:true,versionKey:false})


    const cate= mongoose.model('Category',categorySchema);

    module.exports=cate;
