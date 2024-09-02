const DisplayModel = require("../models/display");
const fs = require("node:fs");

const adddetails=(req,res)=>{
    try {
        DisplayModel.create(req.body);
        res.json("yes");
    } catch (error) {
        console.log(error);
        res.json("error");
    }
}

module.exports = adddetails;