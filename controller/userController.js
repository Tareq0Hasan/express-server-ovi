const usermodel= require('../model/usermodel')



exports.createuser=async(req,res)=>{
try{
    const insert= await usermodel.create(req.body);
    res.status(200).json(insert);
}catch(err){
res.status(500).json({msg:err.message})
}


}