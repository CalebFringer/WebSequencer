import React from 'react';
import Pads from './Pads'; 

class ChannelStrip extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="tracks">
				<section className="track-one">
					<h2>Sweep</h2>
					<section className="controls">
					<label htmlFor="attack">Att</label>
					<input name="attack" id="attack" type="range" min="0" max="1" value="0.2" step="0.1"/>
					<label htmlFor="release">Rel</label>
					<input name="release" id="release" type="range" min="0" max="1" value="0.5" step="0.1"/>
					</section>

					<Pads />
				</section>

				<section className="track-two">
					<h2>Pulse</h2>
					<section className="controls">
					<label htmlFor="hz">Hz</label>
					<input name="hz" id="hz" type="range" min="660" max="1320" value="880" step="1"/>
					<label htmlFor="lfo">LFO</label>
					<input name="lfo" id="lfo" type="range" min="20" max="40" value="30" step="1"/>
					</section>

					<Pads />
				</section>

				<section className="track-three">
					<h2>Noise</h2>
					<section className="controls">
					<label htmlFor="duration">Dur</label>
					<input name="duration" id="duration" type="range" min="0" max="2" value="1" step="0.1"/>
					<label htmlFor="band">Band</label>
					<input name="band" id="band" type="range" min="400" max="1200" value="1000" step="5"/>
					</section>

					<Pads />
				</section>

				<section className="track-four">
					<h2>DTMF</h2>
					<section className="controls">
					<label htmlFor="rate">Rate</label>
					<input name="rate" id="rate" type="range" min="0.1" max="2" value="1" step="0.1"/>
					</section>

					<Pads />
				</section>
			</div>
		)
	}
}

export default ChannelStrip;