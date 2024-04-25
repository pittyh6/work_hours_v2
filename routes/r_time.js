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
    day: '26/04/2024',
    weekDay: 'Friday',
    punchIn: '09:00',
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
                    breakStart: '',
                    breakEnd: '',
                    punchOut: '',
                })
            } catch (error) {
                console.log("Error add punchIn database: ", error)
            }
            console.log("Insert Punch In with success!")
        } else if (punch.punchIn == '') {
            console.log(day + " Punch In is NULL. There is another punch registered. Punch In can not be registered: ", punch)
        } else {
            console.log(day + " id: " + employeeId + " Punch Already exists")
        }
    })
})

router.post('/breakStart', async (req, res) => {
    const { employeeId } = req.body
    let todayDate = new Date()
    let day = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(todayDate)
    let weekDay = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(todayDate)
    let hour = new Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(todayDate)
    console.log("todayDate: ", hour)
    Punch.findOne({ employeeId: employeeId, day: day }).then((punch) => {
        if (!punch) {
            try {
                Punch.create({
                    employeeId: employeeId,
                    day: day,
                    weekDay: weekDay,
                    punchIn: '',
                    breakStart: hour,
                    breakEnd: '',
                    punchOut: '',
                })
            } catch (error) {
                console.error("Error to register break start: ", error)
            }
        } else {
            Punch.findOne({ employeeId: employeeId, day: day, breakStart: { $ne: null } }).then((foundBreak) => {
                if (!foundBreak) {
                    console.log("Did NOT found id: ", employeeId)
                } else if (foundBreak.breakStart == '' && foundBreak.breakEnd == '' && foundBreak.punchOut == '') {
                    try {
                        foundBreak.breakStart = hour
                        foundBreak.save().then(saveUpdate => {
                            console.log("Break start updated with success: ", foundBreak)
                        })
                    } catch (error) {
                        console.error("Error update break start: ", error)
                    }
                } else {
                    console.log("Founded break Start registered: ", foundBreak)
                }
            })
        }
    })
})

//Break End
router.post('/breakEnd', async (req, res) => {
    const { employeeId } = req.body
    let todayDate = new Date()
    let day = Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(todayDate)
    let weekDay = Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(todayDate)
    let hour = Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(todayDate)
    Punch.findOne({ employeeId: employeeId, day: day }).then(punch => {
        if (!punch) {
            try {
                Punch.create({
                    employeeId: employeeId,
                    day: day,
                    weekDay: weekDay,
                    punchIn: '',
                    breakStart: '',
                    breakEnd: hour,
                    punchOut: '',
                })
                console.log("Created break end register: ", punch)
            } catch (error) {
                console.error("Error to register break start: ", error)
            }
        } else {
            Punch.findOne({ employeeId: employeeId, day: day, breakEnd: { $ne: null } }).then(foundBreak => {
                if (foundBreak.breakEnd == '' && foundBreak.punchOut == '') {
                    try {
                        foundBreak.breakEnd = hour
                        foundBreak.save().then(breakSave => {
                            console.log("Break End Updated with success. ", foundBreak)
                        })
                    } catch (error) {
                        console.error("Error update break end: ", error)
                    }
                } else {
                    console.log("break End already exists: ", punch)
                }

            })
        }
    })
})


//clock out 
router.post('/clockOut', async (req, res) => {
    const { employeeId } = req.body
    let todayDate = new Date()
    let day = Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(todayDate)
    let weekDay = Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(todayDate)
    let hour = Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(todayDate)

    Punch.findOne({ employeeId: employeeId, day: day }).then(punch => {
        if (!punch) {
            Punch.create({
                employeeId: employeeId,
                day: day,
                weekDay: weekDay,
                punchIn: '',
                breakStart: '',
                breakEnd: '',
                punchOut: hour,
            })
            console.log("Clock Out created with success: ")
        } else {
            Punch.findOne({ employeeId: employeeId, day: day, punchOut: { $ne: null } }).then(foundClockOut => {
                try {
                    if (foundClockOut.punchOut == '') {
                        foundClockOut.punchOut = hour
                        foundClockOut.save().then(saveClockOut => {
                            console.log('Clock Out Updated with success. ', saveClockOut)
                        })
                    } else {
                        console.error("Clock Out Already exists: ", foundClockOut)
                    }
                } catch (error) {
                    console.error("Error update Clock Out: ", error)
                }
            })
        }
    })
})


//punch_log 
router.get('/punch_log/:employeeId', async (req, res) => {
    const employeeId = req.params.employeeId
    try {
        const workData = await Punch.find({ employeeId: employeeId }).sort({"day":-1 })
        //send all data
        res.json(workData)
    } catch (Error) {
        console.error(Error)
        res.status(500).send("Internal server error fetching work data")
    }
})

module.exports = router