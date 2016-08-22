import * as encounter from './encounter.js'

export class Environment{


	constructor(name){
		this._name = name;
		
	}
	
	stumbleUpon(){

		this._encounter = encounter.generate();

		let interaction =  this._name + 'You just stumbled upon a '+ this._encounter.whenEnounter();
		return interaction
	}
}