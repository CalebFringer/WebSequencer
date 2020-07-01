import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Keyboard from './components/Keyboard.js';
import AudioControls from './components/AudioControls.js'

class App extends React.Component {
	render() {
		return(
			<div id="App">
				<Keyboard />
				<AudioControls />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));