const mongoose = require('mongoose')
const Schema = mongoose.Schema

//staff table schema
const employeeSchema = new Schema({
    employeeId: {type: Number, unique: true, required: true},
    employeeFirstName: {type: String,require: true},
    employeeLastName: {type: String,require: true},
    employeePassword: {type:String, require: true},
    employeeType: {type:String, require: true, enum: ["Staff", "Manager"]},
});
// punch hours table schema
const punchSchema = new mongoose.Schema({
    //employeeId:{type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    employeeId: {type: Number, required: true},
    day: {type: String, default: () => moment().format('DD/MM/YYYY')},
    weekDay: String,
    punchIn: String,
    breakStart: String,
    breakEnd: String,
    punchOut: String,
});

// Post table schema 
const postSchema = new mongoose.Schema({
    //employeeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    employeeId: {type: Number, required: true},
    employeeName: {type: Schema.Types.String, ref: 'Employee'},
    post: String,
});

//create the variable reference
const Employee = mongoose.model('Employee', employeeSchema)
const Punch = mongoose.model('Punch', punchSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = {Employee, Punch, Post}