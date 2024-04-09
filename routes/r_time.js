const express = require('express')
const router = express.Router()
const Time = require('../models/m_time')

const { Employee, Punch } = require('../models/m_time')

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
   
    try {
        const findEmployeeId = await Punch.findOne({ employeeId: ememployeeIdployee });
        if (findEmployeeIdPunch) {
            console.log("uhuuuuu.. Employee Id already exists: ", findEmployeeId)
        } else {
            console.log('Did not find employee id: ', employeeId)
        }
    } catch (error) {
        console.error("Error find employee id in punch table: ", error)
        res.status(500).send("Internal Server Error.")
    }

})





module.exports = router