import React from 'react';
import Octave from './Octave.js';
//import NoteTable from './NoteTable.js';
import SettingsBar from './SettingsBar.js'

//let notes = NoteTable();

class KeyboardUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="Keyboard">
					<Octave id={4} />
					<Octave id={5} />
				</div>
				<SettingsBar />
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
		 this.masterGainNode = this.audioCtx.createGain();
		 this.masterGainNode.connect(this.audioCtx.destination);
	}

	componentWillUnmount() {
		this.audioCtx.close();
	}
	
	render() {
		return null;
	}
}

export {KeyboardUI, KeyboardEngine};