const express = require('express')
const server = express()
const mongoose = require('mongoose')


const yachtroutes = require('./routes/yachtroutes')
// const demoroutes = require('./routes/demoroutes')



mongoose.connect('mongodb+srv://amaljithmk123:8086171296@yacht.xvqgon2.mongodb.net/yacht', {
    usenewUrlParser: true,
    UseUnifiedTopology: true,

}).then(() => {
    console.log('Database Connected')
}).catch((error) => {
    console.log(error)
})


server.use(express.json())
server.use(express.urlencoded({ extended: true }))



server.use(express.static('./public'))

server.set('view engine', 'ejs')


server.use('/api/yacht', yachtroutes)

// server.use('/api/demo', demoroutes)




server.get('/home', (req, res) => {
    res.render('home')
})
server.get('/edit', (req, res) => {
    res.render('edit')
})
server.get('/make', (req, res) => {
    res.render('make')
})
// server.get('/history', (req, res) => {
//     res.render('history')
// })
server.get('/about', (req, res) => {
    res.render('about')
})
server.get('/viewone', (req, res) => {
    res.render('viewone')
})

const port = 2222;
server.listen(port, () => {
    console.log(`server started on port ${port}`)
})