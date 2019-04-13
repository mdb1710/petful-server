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
    imageURL: 'https://d4ougc3s3r7jj.cloudfront.net/images/design-assets/testimonials-dog-taller.png',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Happy',
    sex: 'Male',
    age: 3,
    breed: 'Corgi',
    story: 'Ate owner',
    adopted: ""
  },
  {
    id: 3,
    imageURL: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Doug',
    sex: 'Male',
    age: 3,
    breed: 'Pug',
    story: 'Was humam but became dog',
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


