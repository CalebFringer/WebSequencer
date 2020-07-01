import React from 'react';
import Key from './Key.js';
import NoteTable from './NoteTable.js';
import '../styles/Keyboard.css';

class Keyboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oscList: [],
			masterGainNode: null,
			keys: this.initKeys(),
		}
	}

	initKeys() {
		let keys = [];
		NoteTable.forEach(octave => {
			octave.forEach(note => {
				if (note.octave == 3 || note.octave == 4) {
					keys.push( 
						<Key 
							note      = {note.name} 
							octave    = {note.octave}
							frequency = {note.freq} 
							id        = {note.name + note.octave} 
							onNotePressed  = {this.onNotePressed}
							onNoteReleased = {this.onNoteReleased}
						/>
					);
				}
			})
		});

		return keys;
	}

	onNotePressed = (note) => {
		console.log(`${note.id} pressed`);
		this.playTone(note.frequency);
	}

	onNoteReleased = (note) => {
		console.log(`${note.id} released`);
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
		return (
			<div className="keyboard">
				{this.state.keys}
			</div>
		);
	}
}

export default Keyboard;