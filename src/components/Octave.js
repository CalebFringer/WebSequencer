import React from 'react';
import Key from './Key.js';

export default function Octave(props) {
	return (
		<span className="octave">
			<Key note="A"/>
			<Key note="A#"/>
			<Key note="B"/>
			<Key note="C"/>
			<Key note="C#"/>
			<Key note="D"/>
			<Key note="D#"/>
			<Key note="E"/>
			<Key note="F"/>
			<Key note="F#"/>
			<Key note="G"/>
			<Key note="G#"/>
		</span>
	);
}