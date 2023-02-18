import React from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';
const App = () => {
  return (


    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pizza" id="order-pizza">Order Pizza</Link></li>
        </ul>
      </nav>

      <Route exact path="/" component={HomePage} />
      <Route path="/pizza" component={PizzaForm} />
    </Router>
  );
};
export default App;
