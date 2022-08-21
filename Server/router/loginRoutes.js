const Person = require('../Models/Person')
const router = require('express').Router()

router.post('/', async (req,res)=>{
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