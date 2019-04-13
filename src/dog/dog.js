const Queue = require('../Queue')

const data = [ 
  {
    id: 1,
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopted: "Tom"
  },
  {
    id: 2,
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopted: ""
  },
  {
    id: 3,
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    adopted: "Tom"
  }
]

function q(arr){
  let dQ = new Queue();

  for(let i = 0; i < arr.length; i++) {
    dQ.enqueue(arr[i])
  }
  return dQ;
}

const dog = q(data)
module.exports = dog;


