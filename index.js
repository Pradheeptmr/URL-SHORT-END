const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./connect");
const EmployeeRouter = require("./router/EmployeeRouter");
const ProductRouter = require("./router/ProductRouter");
const RegisterRouter = require("./router/RegisterRouter");
const AuthModule = require("./modules/AuthModule");

dotenv.config();
mongo.connect();
require("./connect").connectMongoose();



const app = express();
app.use(express.json());




app.use("/",AuthModule.authenticateUser);
app.use("/Register",RegisterRouter);
app.use("/employee",EmployeeRouter);
app.use("/product",ProductRouter);









app.listen(PROCESS.ENV.PORT);