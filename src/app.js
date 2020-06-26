import React from 'react';
import ReactDOM from 'react-dom';
// Components
import { KeyboardUI, KeyboardEngine } from './components/Keyboard.js';
import AudioControls from './components/AudioControls.js'

class App extends React.Component {
	render() {
		return(
			<div id="App">
				<KeyboardUI />
				<AudioControls />
				<KeyboardEngine />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));