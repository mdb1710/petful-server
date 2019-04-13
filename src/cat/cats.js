const Queue = require('../Queue')

const data = [ 
  {
    id:1,
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: ''
  },
  {
    id: 2,
    imageURL: 'https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Big Boss Cat',
    story: 'No story',
    adopted: ''
  },
  {
    id: 3,
    imageURL: 'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Cool Cat',
    sex: 'Male',
    age: 3,
    breed: 'Cool Cat',
    story: 'Owner Passed away',
    adopted:'Sally'
  }
]

function catQ(arr){
  let catQue = new Queue()

  for(let i = 0; i < arr.length; i++) {
    catQue.enqueue(arr[i])
  }
  return catQue
}

const CatQueue = catQ(data)
module.exports = CatQueue;


