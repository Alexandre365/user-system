const express = require('express')
const app = express()
var cors = require('cors')
app.use(express.json())
const mongoose = require('mongoose')

const personRoutes = require('../Server/router/personRoutes')
const loginRoutes = require('../Server/router/loginRoutes')
const dashboardRoutes = require('../Server/router/DashboardRoutes')


app.use(cors())

// Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/UserSystem').then(()=>{
        console.log('conectado ao monge')
    }).catch((err)=>{
        console.log(`Erro ao se conectar: ${err}`)
    })


// Rotas da API 
    app.use('/Person', personRoutes)
    app.use('/Login',loginRoutes)
    app.use('/Dashboard',dashboardRoutes)

// Servidor
app.listen(8800, () => console.log('Servidor está rodando http://localhost:8800/'))
