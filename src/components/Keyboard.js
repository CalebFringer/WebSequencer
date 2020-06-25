import React from 'react';
import Key from './Key.js'
//import NoteTable from './NoteTable.js';

//let notes = NoteTable();

class KeyboardUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Keyboard">
				<Key note="c"/>
				<Key note="c#"/>
				<Key note="d"/>
				<Key note="d#"/>
				<Key note="e"/>
				<Key note="f"/>
				<Key note="f#"/>
				<Key note="g"/>
				<Key note="g#"/>
				<Key note="a"/>
				<Key note="a#"/>
				<Key note="b"/>
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

export { KeyboardUI, KeyboardEngine };