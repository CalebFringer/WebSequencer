import React from 'react';

class Controls extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="controls-main">
				<h1>ModemDN</h1>
				<label htmlFor="bpm">BPM</label>
				<input 
					name="bpm" id="bpm" type="range" min="60" max="180" value="120" step="1"
				/>
				<span id="bpmval">120</span>
				<button data-playing="false">Play</button>
		    </section>
		)
	}
}

export default Controls;