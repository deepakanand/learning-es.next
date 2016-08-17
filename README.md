# learning-es.next
My code samples and notes on ES6/7/n features

# Before starting to code...
- Set up some tools to transpile JavaScript
- What's a transpiler ?
- Its a Source-to-source compiler. In this case, I want to transpile ES2015+ code to ES5 because not all new features are immediately available in browsers

# Tooling
Pre-requisites: NodeJS (and npm)

1. Create package.json either directly or preferably via npm init
2. Install Babel cli tool to transpile JS files

  npm install --save-dev babel-cli 
3. Install Babel's ES2015 preset to be able to transpile ES2015 features

  npm install --save-dev babel-preset-es2015
4. Update package.json's "script" key to have a build key that triggers the babel compiler

	"build": "babel src -d lib"
5. Create a src directory to save source files 
6. Create a test.js with some sample JavaScript code...say console.log('foo)
7. Transpile away !

	npm run build
	
8. Creates a lib directory and adds "use strict" pragma at the top of the file