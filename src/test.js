const defaultLine = "Start your journey now...";
const BR = '<br />';

const print = (...args) => console.log(args[0] + ':' + args[1]);

var options = {
	_intro: "You can type",
	_options: ['left', 'right', 'up', 'down', 'help'],
	outputOptions() {
		this._options.forEach(f =>
			addToOutput(this._intro + " " + f));
	}
}

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
	} else {
		addToOutput(commands.value);
	}

	addToOutput(commands.value);
}

main();