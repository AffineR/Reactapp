import React from 'react';
import './App.css';
import ReactDOMServer from "react-dom/server";
import { BrowserRouter,Link } from 'react-router-dom';

import Container from './Container.js';
const App = () => (
  <BrowserRouter basename='/react-common'>
		<ul>
			<li><Link to="/">3D</Link></li>
			<li><Link to="/2D">2D</Link></li>	
			<li><Link to="/contact">Contact</Link></li>
			<li><Link to="/profile">Profile</Link></li>
		</ul>
		<Container />
  </BrowserRouter>
)

export default App;
