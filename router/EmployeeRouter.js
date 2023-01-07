const express = require("express");
const router = express.Router();
const EmployeeModule = require("../modules/EmployeeModule");
const AuthModule=("../module/AuthModule");

router.get("/get",EmployeeModule.getEmployee);
router.put("/update/:id",
AuthModule.authorizeuser,
EmployeeModule.updateEmployee);
router.post("/post",
AuthModule.authorizeuser,
EmployeeModule.createEmployee);
router.delete("/delete/:id",
AuthModule.authorizeuser,
EmployeeModule.deleteEmployee);

module.export=router;