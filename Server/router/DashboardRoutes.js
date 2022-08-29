const Person = require('../Models/Person')
const router = require('express').Router()

router.post('/', async (req,res)=>{
    const {id} = req.body
    Person.findById(id, (err, adventure) =>{
        res.status(200).json(adventure)  
    })

    /*try {
        const people = await Person.findById(id).then((e)=>{

        })
        res.status(200).json(people)    
    } catch (error) {
        res.status(500).json({error: error})
    }*/
})

module.exports = router