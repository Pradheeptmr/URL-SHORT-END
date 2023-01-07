const {MongoClient,} = require("Mongodb");
const Mongoose = require("Mongoose");

module.exports={
    selecteddb:{},
    async connect() {
        try{
           const client= await MongoClient.connect("PROCESS.ENV.MONGODB_URL");
            this.selecteddb =client.db(pradheep_english);
            console.log(this.selecteddb);
        }catch(err){
            console.error(err);
        }
    },


async connectMongoose() {
    try{
        Mongoose.connect("PROCESS.env.MONGOOSE_URL");
        console.log("connected mongoose");
    } catch(err) {
        console.error(err);
    }

},
};
