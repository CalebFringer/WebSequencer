import React from 'react';
import Key from './Key.js';
import NoteTable from './NoteTable.js';
import '../styles/Keyboard.css';
import VolumeKnob from './VolumeKnob.js';

class Keyboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oscillators: {},
			masterGainNode: null,
			keys: this.initKeys(),
			volume: 0.5
		}
	}

	initKeys() {
		let keys = [];
		let range = new NoteTable(4,6); // Select the range of the piano you want to render

		range.forEach(octave => {
			octave.forEach(note => {
				let props = {
					note      : note.name,
					octave    : note.octave,
					frequency : note.freq,
					id        : note.name + note.octave,
					noteDownHandler : this.onNotePressed,
					noteUpHandler   : this.onNoteReleased
				}

				keys.push(<Key {...props}/>);
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

	onVolumeChange = (event) => {
		this.volume = Math.fround(event.target.value);
		this.masterGainNode.gain.value = this.volume;
		console.log(`Volume: ${this.volume}, Gain: ${this.masterGainNode.gain}`);
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
				<VolumeKnob volume={this.volume} volumeHandler={this.onVolumeChange}/>
			</div>
		);
	}
}

export default Keyboard;