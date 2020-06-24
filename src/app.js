import React from 'react';
import ReactDOM from 'react-dom';
import {KeyboardUI, KeyboardEngine} from './components/Keyboard.js';
import Clock from './components/Clock.js';

class App extends React.Component {
	render() {
		return(
			<div>
				<KeyboardUI />
				<KeyboardEngine />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));