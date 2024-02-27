const { logReqRes } = require("./middleware")
const { connectMongoDb } = require("./connection")
const userRouter = require("./routes/user")
const express = require("express")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const app = express();
const PORT = 8000;

connectMongoDb('mongodb://127.0.0.1:27017/nodeDatabase').then(()=>{
    console.log("mongoDb connected")
})

app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"))

//Routers
app.use("/api/users", userRouter);

app.listen(PORT , ()=> console.log(`Server Started at port: ${PORT}`));
