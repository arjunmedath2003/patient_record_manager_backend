const { Router } = require("express");
const patient = require("../controller/patient");
const display = patient.displaypatient;

const route = Router();

route.get("/displaypatient",display);

module.exports = route;