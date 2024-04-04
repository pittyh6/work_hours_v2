
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
const timeRouter = require('./routes/r_time')
const app = express()


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