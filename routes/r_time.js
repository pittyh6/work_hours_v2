const express = require('express')
const router = express.Router()
const Time = require('../models/m_time')
var mongoose = require('mongoose');

const { Employee, Punch } = require('../models/m_time')

const employee = new Employee({
    employeeId: 100002,
    employeeFirstName: 'Elisabeth',
    employeeLastName: 'Donna',
    employeePassword: 'temp',
})
//employee.save()

router.post('/punchIn', async (req, res) => {
    const { employeeId } = req.body
    console.log('employeeId: ', employeeId)


    //maybe find it first in employee and then check it on punch
    const findEmp = Employee.findOne({ employeeId: employeeId}).then(found=>{
        if(found) {
            console.log("founded: ", found.employeeId)
            Punch.findOne({employeeId: found.employeeId}).then(foundPunch=>{
                if(foundPunch){
                    console.log("foundPunch: ")
                }else{
                    console.log("did not foundPunch: ")
                }
            })
        }else{
            console.log("did not found: ", found)
        }
    })
    
    
   

   /* try {
        const findEmployeeId = await Punch.findOne({ employeeId: employeeId });
        if (objectId.isValid(findEmployeeId)) {
            console.log("uhuuuuu.. Employee Id already exists: ", findEmployeeId)
        } else {
            console.log('Did not find employee id: ', employeeId)
        }
    } catch (error) {
        console.error("Error find employee id in punch table: ", error)
        res.status(500).send("Internal Server Error.")
    }*/

})





module.exports = router