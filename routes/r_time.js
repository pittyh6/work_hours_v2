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
   try{
    const {employeeId} = req.body;
    console.log('employeeId: ', employeeId)
   }catch(err){
    console.log("error fetch /punchIn: ", err)
    res.status(500).send("internal Server error: ")
   }
})





module.exports = router