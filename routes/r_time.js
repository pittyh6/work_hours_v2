const express = require('express')
const router = express.Router()
const Time = require('../models/m_time')
var mongoose = require('mongoose');

const { Employee } = require('../models/m_time')
const { Punch } = require('../models/m_time')

const employee = new Employee({
    employeeId: 100002,
    employeeFirstName: 'Elisabeth',
    employeeLastName: 'Donna',
    employeePassword: 'temp',
})
//employee.save()

const punch = new Punch({
    employeeId: 100001,
    day: '2024-04-12',
    weekDay: 'Friday',
    punchIn: '8:23',
    breakStart: '12:30',
    breakEnd: '13:00',
    punchOut: '17:00',
})
//punch.save()

router.post('/punchIn', async (req, res) => {
    const { employeeId } = req.body
    console.log('employeeId: ', employeeId)
    
    Punch.findOne({ employeeId: employeeId}).then((punch) => {
        if(!punch){
            console.log("Did not find Id in Punch: ", punch)
        }else{
            console.log("Founded id in Punch: ", punch)
        }
    })

    //maybe find it first in employee and then check it on punch
    /*const findEmp = Employee.findOne({ employeeId: employeeId }).then(found => {
        if (found) {
            const id = found.employeeId
            console.log("founded Employee: ", found)
            console.log("get only the id from EMployee table: ", id)
            Punch.find({ employeeId: id }).then(foundPunch => {
                if (foundPunch) {
                    console.log("foundPunch Punch: ", foundPunch)
                } else {
                    console.log("did not foundPunch Punch: ", foundPunch)
                }
            })
        } else {
            console.log("did not found Employee: ", found)
        }
    })*/



})





module.exports = router