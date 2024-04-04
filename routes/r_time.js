const express = require('express')
const router = express.Router()

const Employee = require('../models/m_time')
const Punch = require('../models/m_time')
const Post = require('../models/m_time')

const bsRouter = require('./base_routes')

bsRouter.get('/', async function (req, res) {
    console.log("emtrouuuuuu")
    const employee = new Employee({
        employeeId: 100001,
        employeeFirstName: 'Millie',
        employeeLastName: 'Smith',
        employeePassword: 'temp',
    })
    try{
        await employee.save()
        res.status(201).send(employee)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports = router