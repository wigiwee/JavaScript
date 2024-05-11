const User = require("../models/user");

async function handleUserSignup  (req, res){
    const  { fullName, email, password} = req.body;
    await User.create({
        fullName:fullName,
        email: email,
        password: password,
    });
    return res.redirect("/")
}
async function handleUserSignin(req, res){
    try {
        const {email, password} = req.body;

        const token = await User.matchPasswordAndGenerateToken(email,password)

        return res.cookie("token", token).redirect("/")
    } catch (error) {
        return res.render("signin",{
            error: "incorrect email or password"            
        })
    }


}

module.exports = {
    handleUserSignup,
    handleUserSignin,
}