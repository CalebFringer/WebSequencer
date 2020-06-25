import React from 'react';
import ReactDOM from 'react-dom';
// Components
import {KeyboardUI, KeyboardEngine} from './components/Keyboard.js';
import Clock from './components/Clock.js';
// Master stylesheet
import './styles.css';

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