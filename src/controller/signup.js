const LoginModel = require("../models/logsign");

const signupcontol = (req,res) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    if(name==="" || email==="" || password=="") {
        res.json("Error");
        console.log("Error");
    }else{
        res.json("set");
        LoginModel.create(req.body);
    }
}

module.exports = signupcontol;