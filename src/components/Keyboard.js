import React from 'react';
import SettingsBar from './SettingsBar.js'

class KeyboardUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="keyboard">
					<SettingsBar />
				</div>
			</div>
		);
	}
}

class KeyboardEngine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oscList: [],
			masterGainNode: null,
		};
	}

	componentDidMount() {
		 this.audioCtx = new AudioContext();
		 	//new (window.AudioContext || window.webkitAudioContext)();
	}
	
	render() {
		return null;
	}
}

export {KeyboardUI, KeyboardEngine};