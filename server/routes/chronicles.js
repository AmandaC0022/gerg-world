const express = require('express'); 
const router = express.Router(); 

//GET all chronicles 
router.get('/', (req, res) => {
    res.json({mssg: 'GET all chronicles'}); 
})

//GET a single Chronicle 
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single chronicles'}); 
})

//Post a new Chroncile 
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new Chronicle'}); 
})

//DELETE a chronicle 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a Chronicle'}); 
})

//UPDATE a Chroncile 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a Chronicle'}); 
})

module.exports = router; 