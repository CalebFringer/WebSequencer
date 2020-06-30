import React from 'react';
let Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		}
	}

	notePressed = () => {
		this.setState({isPlaying: true})
		console.log('Note pressed!');
	}

	noteReleased = () => {
		if (this.state.isPlaying == true) {
			this.setState({isPlaying: false})
			console.log('Note released!');
		}
	}
	
	render() {
		// If its not an Natural key, itll have an index of -1
		let	isAnAccidental = Naturals.indexOf(this.props.note) == -1

		return <button 
			className={"key " + (isAnAccidental ? "black" : "ivory") }
			onMouseDown={this.notePressed}
			onMouseLeave={this.noteReleased}
			onMouseUp={this.noteReleased}
		/>
	}
}

export default Key;