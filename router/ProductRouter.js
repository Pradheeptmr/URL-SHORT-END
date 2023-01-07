const express = require("express");
const router = express.Router();
const ProductModule = require("../modules/ProductModule");

router.get("/get",ProductModule.getProduct);
router.put("/update/:productid",ProductModule.updateProduct);
router.post("/post",ProductModule.createProduct);
router.delete("/delete/:productid",ProductModule.deleteProduct);

module.export=router;