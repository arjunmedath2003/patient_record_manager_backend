const { Router } = require("express");
const loginContol = require("../controller/login");

const route = Router();

route.post("/login",loginContol);

module.exports = route;