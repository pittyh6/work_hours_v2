const express = require('express')
const router = express.Router()


//Define home route
router.get('/', (req, res) => {
    res.render('pages/index')
})

//Define posts route
router.get('/post', (req,res) => {
    res.render('pages/post')
})




module.exports = router;