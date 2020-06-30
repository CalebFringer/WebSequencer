import React from 'react';
import Key from './Key.js';
import NoteTable from './NoteTable.js';
import '../styles/Keyboard.css';


class KeyboardUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	notePressed = () => {
		console.log('Note pressed!');
	}
	noteReleased = () => {
		console.log('Note released!');
	}
	render() {
		let keysToRender = []

		NoteTable.forEach(octave => {
			octave.forEach(note => {
				if (note.octave == 3 || note.octave == 4) {
					let currentKey = <Key 
						className="key" 
						note={note.name} 
						octave={note.octave} 
						frequency={note.freq} 
						onMouseDown={this.notePressed}
						onMouseUp={this.noteReleased}
						onMouseLeave={this.noteReleased}
					/>
					keysToRender.push(currentKey);
				}
			})
		});

		return (
			<div className="keyboard">
				{keysToRender}
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
	
	playTone(freq) {
		let osc = this.audioCtx.createOscillator();
		osc.connect(this.masterGainNode);
		osc.frequency.value = freq;

		osc.start()
	}
	render() {
		return null;
	}
}

export { KeyboardUI, KeyboardEngine };