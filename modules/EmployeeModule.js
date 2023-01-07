const mongo = require("../connect");
const { ObjectId } = require('mongoDb')

module.exports.getEmployee=async(req,res,next)=>{
    try{
    const employeeData=awaitMongo.selecteddb
    .collection("employee")
    .find().toarray()
    res.send(employeeData)
    }catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
},    

module.exports.updateEmployee=async(req,res,next)=>{
    try{
    const updateEmployee=await mongo.selecteddb
    .collection("employee")
    .findOneandUpdate({_id:ObjectId(req.params.employeeid)},
    {$set:{...req.body.employee}},
    {returnOriginal:true});
    res.send(updateEmployee)
    } catch(err) {
      res.status(500).send(err);
    }

},
module.exports.createEmployee=async(req,res,next)=>{
    try{

    const insertedResponse=await mongo.selecteddb
    .collection("employee")
    .insertone(req.body.employee)
    res.send(insertedResponse)
    } catch(err){
        console.error(err);
        res.status(500).send(err)
    }
    
},
module.exports.deleteEmployee=async(req,res,next)=>{
    try{
    const deleteEmployee=await mongo.selecteddb
    .collection("employee")
    .remove({_id:ObjectId(req.params.employeeid)});
    res.send(deleteEmployee)
    } catch(err) {
        res.status(500).send(err);
    }

}