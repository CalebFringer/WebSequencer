import React from 'react';
import ReactDOM from 'react-dom';
import {KeyboardUI, KeyboardEngine} from './components/Keyboard.js';

class App extends React.Component {
	render() {
		return(
			<div id="App">
				<KeyboardEngine />
				<KeyboardUI />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));