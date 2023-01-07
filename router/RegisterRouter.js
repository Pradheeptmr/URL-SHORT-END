const express=require("express");
const Router=express.Router;
const RegisterModule=("../modules/RegisterModules");

Router.post("/signup",RegisterModule.signup);
Router.post("/signin",RegisterModule.signin);



module.export=Router;