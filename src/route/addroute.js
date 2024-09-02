const { Router } = require("express");
const addcontrol = require("../controller/add");

const route = Router();

route.post("/add",addcontrol);

module.exports = route;