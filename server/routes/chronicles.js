const express = require('express'); 
const router = express.Router(); 
const Chronicle = require('../models/Chronicles'); 

//GET all chronicles 
router.get('/', (req, res) => {
    res.json({mssg: 'GET all chronicles'}); 
})

//GET a single Chronicle 
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single chronicles'}); 
})

//Post a new Chroncile 
router.post('/', async (req, res) => {
    const { title, body } = req.body; 
    try {
        const chronicle = await Chronicle.create({ title, body }); 
        res.status(200).json(chronicle); 
    }
    catch(err) {
        res.status(400).json({err: err.message}); 
    } 
}); 

//DELETE a chronicle 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a Chronicle'}); 
})

//UPDATE a Chroncile 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a Chronicle'}); 
})

module.exports = router; 