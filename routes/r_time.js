const express = require('express')
const router = express.Router()
const Time = require('../models/m_time')

const { Employee} = require('../models/m_time')
const { Punch} = require('../models/m_time')

const employee = new Employee({
    employeeId: 100002,
    employeeFirstName: 'Elisabeth',
    employeeLastName: 'Donna',
    employeePassword: 'temp',
})
//employee.save()

router.post('/punchIn', async (req, res) => {
    const { employeeId } = req.body;
    console.log('employeeId: ', employeeId)

    const findEmployeeId = Punch.findOne({ employeeId: employeeId })
    if (findEmployeeId) {
        console.log("uhuuuuu.. Employee Id already exist: ", findEmployeeId)
    } else {
        console.log('Did not find employee id: ', findEmployeeId.employeeId)
    }

})





module.exports = router