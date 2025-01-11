const mongoose = require("mongoose")


//schema of data
const usersSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    jobTitle:{
        type: String,
        
    },
    gender:{
        type: String,
    },
});

const User = mongoose.model("project1", usersSchema);
module.exports = User;