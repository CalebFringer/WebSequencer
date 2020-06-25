import React from 'react';

export default function Key(props) {
	let whiteKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	let isBlackKey = (whiteKeys.indexOf(props.note) == -1);

	return (
		<button className={isBlackKey ? "black-key" : "white-key"}>{props.key}</button>
	);
}