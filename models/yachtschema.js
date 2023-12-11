const mongoose = require('mongoose')
const yachtschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    image:{
        type:String,
        
    }
})
module.exports = mongoose.model('details', yachtschema)