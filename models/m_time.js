const mongoose = require('mongoose')
const Schema = mongoose.Schema

//staff table schema
const employeeSchema = new Schema({
    employeeId: {type: Number, required: true},
    employeeFirstName: {type: String,require: true},
    employeeLastName: {type: String,require: true},
    employeePassword: {type:String, require: true},
});
// punch hours table schema
const punchSchema = new Schema({
    employeeId:{type: Schema.Types.ObjectId, ref: 'Employee'},
    day: {type: String, default: () => moment().format('YYYY-MM-DD')},
    weekDay: String,
    punchIn: String,
    breakStart: String,
    breakEnd: String,
    punchOut: String,
});

// Post table schema 
const postSchema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    employeeName: {type: Schema.Types.String, ref: 'Employee'},
    post: String,
});

//create the variable reference
const Employee = mongoose.model('Employee', employeeSchema)
const Punch = mongoose.model('Punch', punchSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = {Employee, Punch, Post}