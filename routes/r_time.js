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
var todayDate = new Date().toISOString().substr(0, 10);

router.post('/punchIn', async (req, res) => {
  
    const { employeeId } = req.body
    console.log('employeeId: ', employeeId)
    console.log("todayDate: ",todayDate )
    
    Punch.findOne({ employeeId: employeeId, day: todayDate}).then((punch) => {
        if(!punch){
            console.log("Did not find Id in Punch: ", punch)
        }else{
            console.log("Founded id in Punch: ", punch)
        }
    })

})





module.exports = router