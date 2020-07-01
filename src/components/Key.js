import React from 'react';
let Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		}
	}
	
	render() {
		// If its not an Natural key, itll have an index of -1
		let	isAnAccidental = Naturals.indexOf(this.props.note) == -1

		return <button 
			className    = {"key " + (isAnAccidental ? "black" : "ivory") }
			onMouseDown  = {this.props.notePressedHandler.bind(this)}
			onMouseLeave = {this.props.noteReleasedHandler.bind(this)}
			onMouseUp    = {this.props.noteReleasedHandler.bind(this)}
		/>
	}
}

export default Key;