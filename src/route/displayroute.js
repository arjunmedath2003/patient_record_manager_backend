const { Router } = require("express");
const displaycontrol = require("../controller/display");

const route = Router();

route.post("/display",displaycontrol);

module.exports = route;