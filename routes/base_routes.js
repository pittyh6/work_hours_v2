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

//Define History Log route
router.get('/punch_log', (req, res) => {
    res.render('pages/punch_log')
})

//Define Login route
router.get('/login', (req, res) => {
    res.render('pages/login')
})

//Define home route
router.get('/punch', (req, res) => {
    res.render('pages/punch')
})
//Define change password route
router.get('/change_password', (req,res) => {
    res.render('pages/change_password')
})

module.exports = router;

