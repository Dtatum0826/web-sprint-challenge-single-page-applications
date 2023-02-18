import React  from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div>
      <h1>Welcome to our pizza website!</h1>
      <p>Click the button below to order a pizza.</p>
      <button><Link to="/pizza" id="order-pizza">Order Pizza</Link></button>
    </div>
  );
}

export default HomePage;