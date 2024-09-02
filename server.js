const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const loginroute = require("./src/route/loginroute");
const signuproute = require('./src/route/signuproute');
const displayroute = require("./src/route/displayroute");
const addroute = require("./src/route/addroute");
const submitroute = require("./src/route/submitroute");
const displaypatientroute = require("./src/route/displaypatientroute");

mongoose.connect("mongodb://localhost:27017/hospitalmanagement");

const app = express();
app.use(cors());
app.use(express.json());

app.use(loginroute);
app.use(signuproute);
app.use(displayroute);
app.use(addroute);
app.use(submitroute);
app.use(displaypatientroute);

app.listen(8010, (req,res)=>{
    console.log("connection completed");
})