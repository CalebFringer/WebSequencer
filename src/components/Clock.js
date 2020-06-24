import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		}
	}

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<h2>Today's date is {this.state.date.toLocaleTimeString()}.
				</h2>
			</div>
		)
	}

	// Called after Clock is rendered
	componentDidMount() {
		setInterval(() => this.tick(), 1000); // set up a timer
	}
	
	// Destructor, basically
	componentWillUnmount() {
		clearInterval(this.timerID); 
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
}

export default Clock;