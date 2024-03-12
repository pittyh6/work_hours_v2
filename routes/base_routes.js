const express = require('express')
const router = express.Router()


//Define home route
router.get('/', (req, res) => {
    res.render('pages/index')
})

module.exports = router;