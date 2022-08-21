const Person = require('../Models/Person')
const router = require('express').Router()

router.post('/', async (req,res)=>{
    const {Nome,Sobrenome,Email,Idade,Senha} = req.body

    const newPerson = {
        Nome:Nome,
        Sobrenome:Sobrenome,
        Email:Email,
        Idade:Idade,
        Senha:Senha
    }

    try {
        await Person.create(newPerson)
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/', async (req,res)=>{
    try {
        const people = await Person.find()
        res.status(200).json(people)   
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.post('/Login', async (req,res)=>{
    const {Email} = req.body

    try {
        const people = await Person.find({
            Email: Email
        })
        res.status(200).json(people)    
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router