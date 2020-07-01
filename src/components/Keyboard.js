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
							notePressedHandler  = {this.onNotePressed}
							noteReleasedHandler = {this.onNoteReleased}
						/>
					);
				}
			})
		});

		return keys;
	}

	onNotePressed() {
		this.setState({isPlaying: true});
		console.log(`${this.props.id} pressed`);
	}
	onNoteReleased() {
		if (this.state.isPlaying == true) {
			this.setState({isPlaying: false});
			console.log(`${this.props.id} released`);
		}
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