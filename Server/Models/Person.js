const mongoose = require('mongoose')

const Person = mongoose.model('Person',{
    Nome:{
        type: String,
        required: true
    },
    Sobrenome:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Idade:{
        type: Number,
        required: true
    },
    Senha:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    Sobre:{
        type: String,
        required: true
    },
})

module.exports = Person