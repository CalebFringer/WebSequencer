import React from 'react';
import Key from './Key.js';
import NoteTable from './NoteTable.js';
import '../styles/Keyboard.css';

class Keyboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oscillators: {},
			masterGainNode: null,
			keys: this.initKeys(),
		}
	}

	initKeys() {
		let keys = [];
		let range = NoteTable.slice(3,5); // Select the range of the piano you want to render

		range.forEach(octave => {
			octave.forEach(note => {
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
			})
		});

		return keys;
	}

	componentDidMount() {
		this.audioCtx = new AudioContext();
		this.masterGainNode = this.audioCtx.createGain();
		this.masterGainNode.connect(this.audioCtx.destination);
	}

	componentWillUnmount() {
		this.audioCtx.close();
	}
	
	onNotePressed = (note) => {
		console.log(`${note.id} pressed`);
		let osc = this.playTone(note.frequency);
		// create a reference to the current oscillator that we can call
		// in `onNoteReleased()`
		this.setState({
			oscillators: { 
				[note.id]: osc
			}
		});
	}

	onNoteReleased = (note) => {
		console.log(`${note.id} released`);
		this.state.oscillators[note.id].stop();
	}

	playTone(freq) {
		let osc = new OscillatorNode(this.audioCtx, {frequency: freq}); 
		osc.connect(this.masterGainNode);

		osc.start();
		return osc;
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