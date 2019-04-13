const express = require('express');
const dogRouter = express.Router();
const jsonBodyParser = express.json();
const dog = require('./dog')

dogRouter.get('/', (req,res,next) => {
  let dogs = []
  
  if(!dog.first) {
    return [];
  }

  let currNode = dog.first;
  while(currNode !== null){
    dogs.push(currNode.value)
    currNode = currNode.next;
  }

  res.status(200).json(dogs)

})

dogRouter.delete('/', jsonBodyParser,(req,res,next) => {
 dog.dequeue()
 res.status(204).end()
}) 

module.exports = dogRouter;