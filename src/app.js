import React from 'react';
import ReactDOM from 'react-dom';

class Sequencer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<h1>WebSequencer - by Caleb Fringer</h1>
		)
	}
}

ReactDOM.render(<Sequencer />, document.getElementById('root') );