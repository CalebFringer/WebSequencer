import React from 'react';
import VolumeKnob from './VolumeKnob';
import Switch from './Switch';

export default function(props) {
	return (
		<div className="SettingsBar">
			<VolumeKnob/>
			<Switch />
		</div>
	)
}