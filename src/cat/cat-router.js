const express = require('express');
const catRouter = express.Router();
const jsonBodyParser = express.json();
const cats = require('./cats')

catRouter.get('/', (req,res,next) => {
  let cat = []
  
  if(!cats.first) {
    return [];
  }

  let currNode = cats.first;
  while(currNode !== null){
    cat.push(currNode.value)
    currNode = currNode.next;
  }

  res.status(200).json(cat)
})

catRouter.delete('/', jsonBodyParser,(req,res,next) => {
  cats.dequeue()
  res.status(204).end()

}) 

module.exports = catRouter;