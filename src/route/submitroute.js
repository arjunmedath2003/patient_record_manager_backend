const { Router } = require("express");
const patient = require("../controller/patient");
const submit = patient.submit;

const route = Router();

route.post("/submitpatient",submit);

module.exports = route;