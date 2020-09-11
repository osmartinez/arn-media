const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('dashboard/index')
})

router.get('/video',(req,res)=>{
    res.render('dashboard/index')
})

module.exports = router