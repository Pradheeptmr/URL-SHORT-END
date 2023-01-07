const jwt=require("jsonwebtoken");

module.exports.authenticateUser=(req,res,next)=>{
     if(!req.headers["access-token"])
     return res.status(400).send({msg:"Token not found"});
    try{ 
      req.body.currentuser=jwt.verify
     (req.headers["access-token"],
     process.env.SECRET_KEY);
     next();
    } catch(err) {
        console.error(err);
        return res.status(400).send({msg:"un authorised"});
    }

};

module.exports.authorizeuser=(req,res,next)=>{
    if(req.body.currentuser.role=="admin")next();
    else return res.status(400).send({msg:"Forbidden:Nopermisson"});
};