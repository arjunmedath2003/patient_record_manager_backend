const LoginModel = require("../models/logsign");
const fs = require("node:fs");

const loginContol = (req,res) => {
    const email=req.body.email;
    const password = req.body.password;
    LoginModel.findOne({email:email})
    .then(result=>{
        if(result){
            if(result.password==password){
                res.json(result._id)           
            }
            else{
                res.json("wrong");
            }
        }else{
            res.json("empty");
        }
    })
}

module.exports = loginContol;