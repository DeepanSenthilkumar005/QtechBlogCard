const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Successfully Connected"))
    .catch((e)=>console.log("Error in the connecting DB "+e))
}
module.exports=connectDB;