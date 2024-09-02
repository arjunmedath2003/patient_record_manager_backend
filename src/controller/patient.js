const DisplayModel = require("../models/display");
let value={};

const submit = (req, res) => {
    value = req.body;
    res.json("success");
}

const displaypatient = (req, res) => {
    DisplayModel.find({hid:value.value,patientid:value.id}).then(response => {
        res.send(response[0]);
    })
}

module.exports.submit = submit;
module.exports.displaypatient = displaypatient;