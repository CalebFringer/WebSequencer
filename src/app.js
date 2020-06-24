import React from 'react';
import ReactDOM from 'react-dom';
import {KeyboardUI, KeyboardEngine} from './components/Keyboard.js';
import SettingsBar from './components/SettingsBar.js'
class App extends React.Component {
	render() {
		return(
			<div>
				<KeyboardEngine />
				<KeyboardUI />
				<SettingsBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));