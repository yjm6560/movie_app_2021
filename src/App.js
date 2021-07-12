import React from 'react';
import PropTypes from 'prop-types';

function App() {
  return (
    <div>
      {foodLike.map(food => <Food key={food.id} name={food.name} image={food.image} rating={food.rating} />)};
    </div>
  )
}
const foodLike = [
  {
    id      : 0,
    name    : 'Kimchi',
    image   : 'https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg',
    rating  : 5.0,
  },
  {
    id      : 1,
    name    : 'Potato',
    image   : 'https://ctftime.org/media/team/save.jpg',
    rating  : 4.0,
  },
]

function Food({name, image, rating}){
    return (
      <div>
        <h3>I love {name}</h3>
        <h4>Rating : {rating}/5.0</h4>
        <img src={image} style={{width : 300 + "px"}} alt={name}></img>
      </div>
    );
}

Food.propTypes = {
  name    : PropTypes.string.isRequired,
  image   : PropTypes.string.isRequired,
  rating  : PropTypes.number.isRequired,
};

export default App;
