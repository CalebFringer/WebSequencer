import React from 'react';

class Switch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="right">
				<span>Current waveform: </span>
				<select name="waveform" defaultValue="sine">
					<option value="sine"    >Sine    </option>
					<option value="square"  >Square  </option>
					<option value="sawtooth">Sawtooth</option>
					<option value="triangle">Triangle</option>
					<option value="custom"  >Custom  </option>
				</select>
			</div>
		);
	}
}

export default Switch;