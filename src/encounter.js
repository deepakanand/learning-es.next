export class Encounter {
	constructor(introText = "") {
		this._introText = introText;
	}

	whenEnounter() {
		return this._introText;
	}
}


export class Bear extends Encounter {
	constructor(){
		super("grr, you encountered a bear!");
	}
}

export class Ghost extends Encounter {
	constructor(){
		super("Boooh, you encountered a Ghost!")
	}
}

export class Dog extends Encounter{
	constructor(){
		super("woof, you encountered a dog!")
	}
}


export function generate() {
  var number = Math.floor(Math.random() * (4 - 1)) + 1;

  if (number == 1) {
    return new Bear();
  } else if (number == 2) {
    return new Ghost();
  } else if (number == 3) {
    return new Dog();
  } else if (number == 4) {
    return new Encounter();
  }
}
