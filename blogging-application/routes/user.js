const {Router}= require("express")
const User = require("../models/user")
const { 
    handleUserSignup,
    handleUserSignin,
} = require("../controllers/user")

const router = Router();

router.get("/signin", (req, res)=>{
    res.render("signin")
})
.post("/signin",handleUserSignin)

router.get("/signup", (req, res)=>{
    return res.render("signup")
})
.post("/signup", handleUserSignup);
router.get("/logout" ,(req, res)=>{
    res.clearCookie("token").redirect("/")    

})


module.exports= router;