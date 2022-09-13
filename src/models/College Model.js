const mongoose = require('mongoose')
const moment = require('moment')



const collegeschema = new mongoose.Schema({

    name: {
        type: String,
        unique : true ,
        required: "Name is required",
    },
    fullName: {
        type: String,
        required: "FullName is required",
    },
    logoLink: {
        type: String,
        required: "LogoLink is required",
    },
    isDeleted: { type: boolean, default: false },

    createdAt: moment().format("DD-MM-YYYY  h:mm:ss a"),
    updatedAt: moment().format("DD-MM-YYYY  h:mm:ss a")
})

module.exports = mongoose.model("college", collegeschema)