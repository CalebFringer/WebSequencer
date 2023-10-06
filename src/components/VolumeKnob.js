import React from 'react';

class VolumeKnob extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="left">
				<span>Volume: </span>
				<input 
					type="range" min="0.0" max="1.0" step="0.01" value={this.props.volume} defaultValue="0.5" list="volumes" name="volume" onChange={this.props.volumeHandler} />
				<datalist id="volumes">
					<option value="0.0" label="Mute" />
					<option value="1.0" label="100%" />
				</datalist>
			</div>
		);
	}
}

export default VolumeKnob;