import React from 'react';
import ReactDOM from 'react-dom';
import Sequencer from './components/Sequencer'
import './styles.css';

function App() {
	return (
		<div id='app'>
			<h1>WebSequencer - by Caleb Fringer</h1>
			<br/> <br/>
			<Sequencer />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));