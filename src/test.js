import {Environment} from './environment.js'
import {Bear} from './encounter.js';
import {options, print} from './additions.js';

const defaultLine = "Start your journey now...";
const BR = '<br />';

let env = new Environment('Forest - ');

function main() {
	const enterElt = document.querySelector('#enter');

	enterElt.addEventListener('click', onClickEnter);

	addToOutput();


}

function addToOutput(newLine = defaultLine) {
	const outputElt = document.querySelector('#output');

	output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
	const commands = document.querySelector('#commands');

	if (commands.value === 'help') {
		options.outputOptions();
	} else if(commands.value === 'left') {
		addToOutput(env.stumbleUpon());
	} else if(commands.value === 'right'){
		addToOutput(env.stumbleUpon());
	}else if(commands.value === 'down'){
		addToOutput(env.stumbleUpon());
	} else {
		addToOutput(commands.value);
	}

	addToOutput(commands.value);
}

main();