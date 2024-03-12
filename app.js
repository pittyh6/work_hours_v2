
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//import base routes
const baseRoutes = require('./routes/base_routes')
app.use('/', baseRoutes)
app.use('/post', baseRoutes)

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