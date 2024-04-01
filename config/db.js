const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/workJamy", { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error',console.error.bind(console, 'MongoDB connection Error'))
db.once('open', ()=>{
    console.log('MongoDB connected successfully')
})