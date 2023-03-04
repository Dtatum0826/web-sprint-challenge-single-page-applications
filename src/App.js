import React from "react";
import './styles.css';

import { BrowserRouter ,  Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';


export default function App(){
return(
  <div>
  
 <nav>
  <Link to= "/"><button>Home Page</button></Link>
  <Link to= "/pizza"><button>Order Pizza</button></Link>
 </nav>
<Route path = "/" element= {<HomePage/>}/>
<Route path ="/pizza" element = {<PizzaForm/>}/>

<HomePage/>
<PizzaForm/>

  </div>
)

}



