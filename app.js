
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
const Employee = require('./models/m_time').Employee; 
const timeRouter = require('./routes/r_time')
const app = express()

//get the id and first name employee to send to header.ejs included in all pages
app.use( async function (req, res, next) {
    try{
        const employee = await Employee.findOne({employeeId: 100001})
        console.log("employee.employeeId: ", employee.employeeId)
        res.locals.employee = employee
        next()
    }catch(error){
        console.error(error)
        res.status(500).send("Internal server error header info employee")
    }
})

//import base routes
const baseRoutes = require('./routes/base_routes')
const { time } = require('console')
app.use('/', baseRoutes)
app.use('/post', baseRoutes)
app.use('/punch_log', baseRoutes)
app.use('/login', baseRoutes)
app.use('/punch', baseRoutes)
app.use('/api/time', timeRouter)
//Set the view Engine EJS
app.set('views','./views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended:true}))

//Server static files
app.use(express.static('public'))



//Start Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})