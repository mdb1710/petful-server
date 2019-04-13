const Queue = require('../Queue')

const data = [ 
  {
    user: 'Matt'
  },
  {
    user: 'Mike'
  },
  {
    user: 'Mack'
  },
  {
    user: 'Maddie'
  },
  {
    user: 'Matty'
  },
  {
    user: 'Mark'
  },
  {
    user: 'Doug'
  },
  {
    user: 'Greg'
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