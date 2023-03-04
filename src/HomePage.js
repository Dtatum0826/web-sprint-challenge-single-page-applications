import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to our pizza restaurant!</h1>
      <p>Choose from our delicious selection of pizzas:</p>
      <ul>
        <li>Pepperoni</li>
        <li>Extra Cheese</li>
        <li>Hawaiian</li>
        <li>Meat Lover's</li>
      </ul>
      <Link to="/pizza" id="order-pizza">
      <button>Order now!</button>
      </Link>
    </div>
  );
};

export default Homepage;