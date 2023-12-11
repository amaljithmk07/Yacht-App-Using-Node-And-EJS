const express = require('express')
const demoroutes = express.Router()

demoroutes.get('/about',(req,res)=>{
    res.send("<h1>This is index page</h1>")
})

module.exports = demoroutes