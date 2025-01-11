const express = require("express");
const path = require("path");
const signRouter = require("./routes/user");
const {connectToMongoDB} = require("./connect");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middleware/authentication");
const blogRouter = require("./routes/blog")
const Blogs = require("./models/blog")

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToMongoDB("mongodb://127.0.0.1:27017/Blogify").then(()=>{
    console.log("connected To MongoDB");
})

app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve("./public")))


app.get("/", async (req, res)=>{
    const allBlogs = await Blogs.find({}).sort({createdAt: -1})
    res.render("home" , {
        user : req.user,
        blogs : allBlogs,
    })
})


app.use("/user", signRouter)
app.use("/blog",blogRouter)

app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})