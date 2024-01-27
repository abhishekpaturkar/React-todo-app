const mongoose = require("mongoose");
require("dotenv").config();

const connectionDB =()=>  {mongoose.connect("mongodb://localhost:27017/ "|| process.env.MONGODB_URL)
    .then(()=> {console.log("Database connected")})
    .catch((e) => {console.log(e)})
}

const todo = new mongoose.Schema({
    todo : String, 
    status : {
        type : Boolean,
        default : false
    }
})

const Todo = mongoose.model("todo", todo);


module.exports = {
    connectionDB,
    Todo
}