import React, { Component } from 'react';
import './App.css';
class Profile extends Component {
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
          This is profile page
        </p>
    </div>
  );
}
}

export default Profile;