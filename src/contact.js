import React, { Component } from 'react';
import './App.css';
class Contact extends Component {
	componentDidMount()
	{
		if(typeof window.stopSpeech != "undefined")
		{
			window.stopSpeech(); 
		}
	}
	render() {
	return (
    <div>
        <p>
          This is contact page
        </p>
    </div>
  );
}
}

export default Contact;