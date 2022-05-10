import img5 from './img/hamburgerimage.jpg'
import img6 from './img/pizzaimage.jpg'
import img7 from './img/pastaimage.jpg'
import img8 from './img/pancakesimage.jpg'
import img9 from './img/cheeseburgerimage.jpg'
import img10 from './img/fishimage.jpg'
import img11 from './img/friesimage.jpg'
import img12 from './img/sandwich.jpg'



const data={
  products: [
    {
      id: '1',
      name: 'Hamburger',
      price: 15,
      image: img5,
      description: 'Chicken burger with fries',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '2',
      name: 'Pasta',
      price: 10,
      image: img7,
      description: 'Macaroni in red sauce',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '3',
      name: 'Pizza',
      price: 9,
      image: img6,
      description: 'Pizza with salami',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '4',
      name: 'Pancakes',
      price: 3,
      image: img8,
      description: 'American pancakes',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '5',
      name: 'Cheeseburger',
      price: 5,
      image: img9,
      description: 'Double cheeseburger',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '6',
      name: 'Fish',
      price: 9,
      image: img10,
      description: 'Fish with green sauce',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '7',
      name: 'Fries',
      price: 3,
      image: img11,
      description: 'Golden fries with sauce',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '8',
      name: 'Sandwich',
      price: 2.5,
      image: img12,
      description: 'Chicken sandwich',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
    {
      id: '9',
      name: 'Cake',
      price: 3.5,
      image: img12,
      description: 'Chocolate cake',
      sides: [{
        sidename: 'Ketchup',
      },{
        sidename: 'Mayonnaise',
    },{
      sidename: 'Chilli',
    },{
      sidename: 'Mustard',
        }],
    },
  ],
};
export default data;
