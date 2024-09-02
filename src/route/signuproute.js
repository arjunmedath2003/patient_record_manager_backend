const { Router } = require("express");
const signupcontrol = require("../controller/signup");

const route = Router();

route.post("/signup",signupcontrol);

module.exports = route;