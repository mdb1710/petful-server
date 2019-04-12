const express = require('express');
const catRouter = express.Router();
const jsonBodyParser = express.json();
const cats = require('./cats')

catRouter.get('/', (req,res,next) => {
  res.json(cats)
})

catRouter.delete('/', jsonBodyParser,(req,res,next) => {
  const { id } = req.body;
  const deleted = cats.splice(id, 1)
  
  if(deleted.length > 0){
    res.status(204).end();
  }
  else{
    res.status(404).send('Pet index is not found.')
  }

}) 

module.exports = catRouter;