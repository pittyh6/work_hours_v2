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
    const {employeeId} = req.body;
    console.log('employeeId: ', employeeId)
   
})





module.exports = router