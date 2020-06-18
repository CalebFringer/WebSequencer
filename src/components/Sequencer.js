import React from 'react';
import Controls from './Controls';
import ChannelStrip from './ChannelStrip';

class Sequencer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Controls />	
				<ChannelStrip />
			</div>
		)
	}
}

export default Sequencer;