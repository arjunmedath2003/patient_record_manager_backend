const fs = require("node:fs");
const DisplayModel = require("../models/display");

const displaycontrol = async (req, res) => {
    DisplayModel.find({hid:req.body.data},{patientid:1,name:1,age:1}).then(response => {
        res.send(response);
    })
};

module.exports = displaycontrol;
