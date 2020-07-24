import React, { Component } from 'react';
import './App.css';
class AboutUs extends Component {
	componentDidMount()
	{
		if(typeof window.vhsshtml5_loadcharacter != "undefined")
		{
			window.vhsshtml5_loadcharacter();
		}
		if(typeof window.stopSpeech != "undefined")
		{
			window.stopSpeech(); 
		}
	}
	render() {
	var divStyle = {
	  'color': 'white'
	};
	return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to react
        </p>
		<div id="vhssHTML-character">
			<script type="text/javascript" src="//vhss-d.oddcast.com/vhost_embed_functions_v2.php?acc=5626448&js=1"></script><script type="text/javascript">AC_VHost_Embed(5626448,300,400,'',1,1, 2624431, 0,1,0,'f177ff6dd8bfec0b2f7c80a42c77ad56',8);</script>
		</div>
		<a style={divStyle} href="javascript:sayText('I can say anything you like for this 2D character, in over 25 languages',3,1,3);">Click here to say something!(SayText)</a>
		<a style={divStyle} href="javascript:sayAudio('Russian Melina');">Click here to say something!(SayAudio)</a>
      </header>
    </div>
  );
}
}

export default AboutUs;