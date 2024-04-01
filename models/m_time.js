const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    employeeID: {type: Number, required: true},
    employeeName: {type: String,require: true},
    employeePassword: {type:String, require: true},
});