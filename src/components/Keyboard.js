import React from 'react';
import Octave from './Octave.js';
import NoteTable from './NoteTable.js';

let notes = NoteTable();

class KeyboardUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="keyboard">
					<Octave />
					<Octave />
					<Octave />
					<Octave />
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