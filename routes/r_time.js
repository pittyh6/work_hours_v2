const express = require('express')
const router = express.Router()
const Employee = require('../models/m_time')
const Punch = require('../models/m_time')
const Post = require('../models/m_time')

const employee = new Employee({
    employeeId: 100001,
    employeeFirstName: 'Millie',
    employeeLastName: 'Smith',
    employeePassword: 'temp',
})
await employee.save()