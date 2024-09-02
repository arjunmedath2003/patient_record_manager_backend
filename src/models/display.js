const mongoose = require('mongoose');

const Display = mongoose.Schema({
    patientid:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    age:{
        type: String,
        required: true,
    },
    email: String,
    phone:{
        type: String,
        required: true,
    },
    blood:{
        type: String,
        required: true,
    },
    doctor:{
        type: String,
        required: true,
    },
    roomno:{
        type: String,
        required: true,
    },
    hid:{
        type: String,
        required: true,
    }
});

const DisplayModel = mongoose.model("details", Display);
module.exports = DisplayModel;