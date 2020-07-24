import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Home from './Home'
import char3D from './char3D.js'
import char2D from './char2D.js'
import Contact from './contact.js'
import Profile from './profile.js'

//import Schedule from './Schedule'
const Container = () => (
	 <div className ="container">
			<Switch>
				<Route  path="/" exact component={char3D} />
				<Route path="/2d" component={char2D} />
				<Route path="/contact" component={Contact} />
				<Route path="/profile" component={Profile} />
			 </Switch>
    </div>
);
export default Container;
