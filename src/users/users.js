const Queue = require('../Queue')

const data = [ 
  {
    name: 'Matt'
  },
  {
    name: 'Mike'
  }
  
]

function catQ(arr){
  let catQue = new Queue()

  for(let i = 0; i < arr.length; i++) {
    catQue.enqueue(arr[i])
  }
  return catQue
}

const UserQueue = catQ(data)
module.exports = UserQueue;