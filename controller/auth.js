exports.greetings=(async(req,res)=>{

    res.send("<h1>hello</h1>")
})


exports.overview=(async(req,res)=>{

    res.json({status:"success",message:"the practice is growing"})
})