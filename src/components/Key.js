import React from 'react';

export default function Key(props) {
	const Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	// If its not an Natural key, itll have an index of -1
	let isAnAccidental = Naturals.indexOf(props.note) == -1;

	return (
		<button 
			className={"key " + (isAnAccidental ? "black" : "ivory") }
			id={props.note} 
		>
		</button>
	);
}