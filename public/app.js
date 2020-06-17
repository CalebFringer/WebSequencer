'use strict';
// for cross browser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();


function playSweep() {
	let osc = audioCtx.createOscillator();
	osc.type = 'sine';
	osc.frequency.value = 440;
	osc.connect(audioCtx.destination);
	osc.start();
}