
const mongo=require("../connect");
const bcrypt=require("bcrypt");
const joi= require("joi");
const jwt=require("jsonwebtoken");


module.exports.signup =async(req,res)=>{


    const userSchema= joi.object({
        name:joi.string().alphanum().min(3).max(50).trim(true).required(),
        username:joi.string().alphanum().min(3).max(50).trim(true).required()
    });
    const existUser=await mongo.selecteddb
    .collection("users")
    .findOne({email:request.body.user.email});
    if(existUser) return res.status(400).send({msg:"user already exists"})

    const issamepassword=checkpassword(
        req.body.user.password,
        req.body.user.confirmPassword,
      );
      if(!issamepassword) return res.status(400).send({msg:"password doesnot match"});
      else delete req.body.user.confirmPassword;

      const randomstring= await bcrypt.genSalt(10);
     req.body.user.password=await bcrypt.hash(req.body.user.password,randomstring);

     const insertedResponse = mongo.selecteddb
     .collection("users")
     .insertOne({...req.body.user});
     res.send(insertedResponse);

};
    

const checkpassword = (password,confirmPassword)=> {
    return password !=confirmPassword ? false:true;
}

module.exports.signin=async(req,res)=>{
    const existUser=await mongo.selecteddb
    .collection("users")
    .findOne({email:request.body.user.email});
    if(!existUser) return res.status(400).send({msg:"Email not exists"})

    const issamepassword=await bcrypt.compare(
        req.body.user.password,
        existUser.password);
    if(!issamepassword) return 
    res.status(400)
    .send({msg:"password doesnot match"});

    const token=jwt.sign(existUser,procees.env.SECRET_KEY,{
        expires:"1h",
    });
    res.send(token);
}

