import React from 'react';
import Keyboard from './components/Keyboard.js';
import AudioControls from './components/AudioControls.js'

class App extends React.Component {
	render() {
		return(
			<div id="App">
				<Keyboard />
			</div>
		);
	}
}

export default App;