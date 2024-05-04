
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
const Employee = require('./models/m_time').Employee;
const timeRouter = require('./routes/r_time')
const app = express()



//get the id and first name employee to send to header.ejs included in all pages
app.use(async function (req, res, next) {
    try {
        const employee = await Employee.findOne({ employeeId: 100001 })
        res.locals.employee = employee
        next()
    } catch (error) {
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

//Set the view Engine EJS
app.set('views', './views')
app.set('view engine', 'ejs')
//parse json bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/time', timeRouter)

//Server static files
app.use(express.static('public'))


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', username, password);
    const employeeData = Employee.findOne({ employeeId: username, employeePassword: password }).then((found) => {
        if (found) {
            console.log("employee founded: ", found)
            res.render('pages/index');
        } else {
            console.log("Employee Number or Password Wrong!!!")
            res.render('pages/login');
        }

    })
})





//Start Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})