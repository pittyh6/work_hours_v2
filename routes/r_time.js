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
    day: '15/04/2024',
    weekDay: 'Friday',
    punchIn: '15:19',
    breakStart: '12:30',
    breakEnd: '13:00',
    punchOut: '17:00',
})
//punch.save()

//PunchIn hour
router.post('/punchIn', async (req, res) => {
    const { employeeId } = req.body
    let todayDate = new Date()
    let day = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(todayDate)
    let weekDay = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(todayDate)
    let hour = new Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(todayDate)
   
    Punch.findOne({ employeeId: employeeId, day: day, punchIn: { $ne: null } }).then((punch) => {
        if (!punch) {
            try {
                Punch.create({
                    employeeId: employeeId,
                    day: day,
                    weekDay: weekDay,
                    punchIn: hour,
                })
            } catch (error) {
                console.log("Error add punchIn database: ", error)
            }
            console.log("Insert Punch In with success!")
        } else if (punch.punchIn == '') {
            console.log(day + " Punch In is NULL.")
        } else {
            console.log(day + " id: " + employeeId + " Punch Already exists")
        }
    })
})

router.post('/breakStart', async (req, res) => {
    const {employeeId} = req.body
    let todayDate = new Date()
    console.log("todayDate: ", todayDate)
    
    Punch.findOne({ employeeId: employeeId, day: todayDate, breakStart: {$ne: null} }).then((foundBreak) => {
        if(!foundBreak){
            console.log("Did NOT found id: ", employeeId)
        }else if(foundBreak.breakStart == ''){
            console.log(day + " BreakStart In is NULL.")
        }else{
            console.log("Founded id: ", foundBreak)
        }
    })
})




module.exports = router