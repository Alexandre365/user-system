const Person = require('../Models/Person')
const router = require('express').Router()

router.post('/', async (req,res)=>{
    const {id} = req.body
    Person.findById(id, (err, adventure) =>{
        res.status(200).json(adventure)  
    })

})

router.put('/updete/email', async (req,res)=>{
    const {id, email} = req.body
    Person.updateOne({_id: id},{Email: email}, (err, adventure) =>{
        res.status(200).json(adventure)  
    })
})
router.put('/updete/about', async (req,res)=>{
    const {id, sobre} = req.body
    Person.updateOne({_id: id},{Sobre: sobre}, (err, adventure) =>{
        res.status(200).json(adventure)  
    })
})

router.delete('/delete/:id', async (req,res)=>{
    const id = req.params.id
    Person.deleteOne({_id:id},(err, adventure) =>{
        res.status(200).json(adventure)  
    })
})

module.exports = router