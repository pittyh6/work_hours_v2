const express = require('express')
const router = express.Router()
const Time = require('../models/m_time')

const {Employee} = require('../models/m_time')

const employee = new Employee({
    employeeId: 100002,
    employeeFirstName: 'Nina',
    employeeLastName: 'Pta',
    employeePassword: 'temp',
})
//employee.save()

router.post('/punchIn', async (req, res) => {
    console.log("r_time entered.")
})





module.exports = router