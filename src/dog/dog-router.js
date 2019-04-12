const express = require('express');
const dogRouter = express.Router();
const jsonBodyParser = express.json();
const dogs = require('./dog')

dogRouter.get('/', (req,res,next) => {
  res.json(dogs)
})

dogRouter.delete('/', jsonBodyParser,(req,res,next) => {
  const { id } = req.body;
  const deleted = dogs.splice(id, 1)
  
  if(deleted.length > 0){
    res.status(204).end()
  }
  else{
    res.status(404).send('Pet index is not found.')
  }

}) 

module.exports = dogRouter;