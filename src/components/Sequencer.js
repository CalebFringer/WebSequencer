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
			<div className="sequencer">
				<Controls />	
				<ChannelStrip />
			</div>
		)
	}
}

export default Sequencer;