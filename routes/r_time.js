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
    day: '2024-04-14',
    weekDay: 'Friday',
    punchIn: '',
    breakStart: '12:30',
    breakEnd: '13:00',
    punchOut: '17:00',
})
//punch.save()


router.post('/punchIn', async (req, res) => {
    const { employeeId } = req.body
    //let todayDate = new Date().toISOString().substr(0, 10);
    //let todayDate = new Date().toLocaleString(undefined, {timeZone: "Australia/Sydney"})
    let todayDate = new Date()
    let day = new Intl.DateTimeFormat(['ban', 'id']).format(todayDate);
console.log("day: ", day)
    let fullDate = new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Australia/Sydney',
    }).format(todayDate)
    console.log("fullDate: ", fullDate)

    Punch.findOne({ employeeId: employeeId, day: todayDate, punchIn: { $ne: null } }).then((punch) => {
        if (!punch) {
            console.log("Did not find Id in Punch: ", punch)
        } else if (punch.punchIn == '') {
            console.log("Punch day: " + todayDate + " Punch In is NULL.")
        } else {
            console.log("Punch day: " + todayDate + " id: " + employeeId + " Already exists")
        }
    })

})





module.exports = router