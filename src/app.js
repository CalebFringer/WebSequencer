import React from 'react';
import ReactDOM from 'react-dom';
// Components
import { KeyboardUI, KeyboardEngine } from './components/Keyboard.js';
import SettingsBar from './components/SettingsBar.js'
// Master stylesheet
import './styles.css';

class App extends React.Component {
	render() {
		return(
			<div id="App">
				<KeyboardUI />
				<SettingsBar />
				<KeyboardEngine />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));