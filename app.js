
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
const Employee = require('./models/m_time').Employee;
const timeRouter = require('./routes/r_time')
const app = express()


const session = require('express-session');
// Use express-session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));


//get the id and first name employee to send to header.ejs included in all pages
app.use(async function (req, res, next) {
    try {
        // Access the username and password from the session
        const { username, password } = req.session;
        if (username && password) {
            const employee = await Employee.findOne({ employeeId: username, employeePassword: password });
            if (employee) {
                res.locals.employee = employee;
            }
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error header info employee");
    }
});

app.use('/:path(*)',async function (req, res, next) {
    if(req.params.path !== 'login'){
        const { username, password } = req.session;
        if(username != undefined && password != undefined){
            const employee = await Employee.findOne({ employeeId: username, employeePassword: password });
            const loginStatus = 'Log Out'
            if (employee) {
                res.locals.employee = employee;
                res.locals.loginStatus = loginStatus;
            }
            next()
        }else{
            try {
                const employee = await Employee.findOne({ employeeId: 000000 })
                const loginStatus = 'Log In'
                res.locals.employee = employee
                res.locals.loginStatus = loginStatus
                next()
            } catch (error) {
                console.error(error)
                res.status(500).send("Internal server error header info employee")
            }
        } 
    }else{
        try {
            const employee = await Employee.findOne({ employeeId: 000000 })
            const loginStatus = 'Log In'
            res.locals.employee = employee
            res.locals.loginStatus = loginStatus
            next()
        } catch (error) {
            console.error(error)
            res.status(500).send("Internal server error header info employee")
        } 
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
app.use('/change_password', baseRoutes)

//Set the view Engine EJS
app.set('views', './views')
app.set('view engine', 'ejs')
//parse json bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/time', timeRouter)

//Server static files
app.use(express.static('public'))

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const employee = await Employee.findOne({ employeeId: username, employeePassword: password });
        if (employee) {
            // Store the username and password in the session
            req.session.username = username;
            req.session.password = password;
            res.locals.employee = employee; // set employee data in res.locals
            const loginStatus = 'Log Out'
            res.locals.loginStatus = loginStatus
            res.render('pages/index', { employee});
        } else {
            const loginStatus = 'Log In'
            res.locals.loginStatus = loginStatus
            res.render('pages/login',{ alert: 'error', message: 'User Id or Password invalid. Please try again.' });
        }
    } catch (error) {
        console.error("Error finding employee:", error.message);
        res.status(500).send("Internal server error during login");
    }
});

app.post('/change_password', async (req, res) => {
    const {employeeIdNumber, old_password, new_password } = req.body
    try{
        const employee = await Employee.findOne({employeeId: employeeIdNumber, employeePassword: old_password})
        if(employee){
            await Employee.findOneAndUpdate({employeeId:employeeIdNumber},{employeePassword:new_password})
            res.render('pages/login', { alert: 'success', message: 'Password updated successfully. Please log in again.' })
        }else{
            res.render('pages/change_password', { alert: 'error', message: 'User Id or Password invalid. Please try again.' })
        }
    }catch(error){
        console.error("Error find Employee and/or Password", error.message)
        res.render('pages/change_password')
    }

})

//Start Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})