import React from 'react';
import VolumeKnob from './VolumeKnob';
import Switch from './Switch';
import '../styles/AudioControls.css';

export default function(props) {
	return (
		<div className="audio-controls">
			<VolumeKnob/>
			<Switch />
		</div>
	)
} 