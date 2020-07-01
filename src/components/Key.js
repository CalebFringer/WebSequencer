import React from 'react';
let Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		}
	}

	onMouseDownHandler = (event) => {
		let note = {id: this.props.id, frequency: this.props.frequency}
		this.props.onNotePressed(note);
	}
	onMouseLeaveHandler = (event) => {
		let note = {id: this.props.id, frequency: this.props.frequency}
		this.props.onNoteReleased(note);
	}
	onMouseUpHandler = (event) => {
		let note = {id: this.props.id, frequency: this.props.frequency}
		this.props.onNoteReleased(note);
	}
	
	render() {
		// If its not an Natural key, itll have an index of -1
		let	isAnAccidental = Naturals.indexOf(this.props.note) == -1

		return <button 
			className    = {"key " + (isAnAccidental ? "black" : "ivory") }
			id 				   = {this.props.id}
			onMouseDown  = {this.onMouseDownHandler}
			onMouseLeave = {this.onMouseLeaveHandler}
			onMouseUp    = {this.onMouseUpHandler}
		/>
	}
}

export default Key;