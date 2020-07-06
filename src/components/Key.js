import React from 'react';
let Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		}
	}

	onTouchStartHandler = (event) => {
		this.onMouseDownHandler(event);
	}
	onTouchEndHandler = (event) => {
		this.onMouseUpHandler(event);
	}
	onMouseDownHandler = (event) => {
		this.props.onNotePressed({
			id: this.props.id,
			frequency: this.props.frequency
		});
		this.setState({isPlaying: true})
	}
	onMouseLeaveHandler = (event) => {
		if (this.state.isPlaying) {
			this.props.onNoteReleased({
				id: this.props.id,
				frequency: this.props.frequency
			});
			this.setState({isPlaying: false})
		}
	}
	onMouseUpHandler = (event) => {
		if (this.state.isPlaying) {
			this.props.onNoteReleased({
				id: this.props.id,
				frequency: this.props.frequency
			});
			this.setState({isPlaying: false})
		}
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
			onTouchStart = {this.onTouchStartHandler}
			onTouchEnd   = {this.onTouchEndHandler}
		/>
	}
}

export default Key;