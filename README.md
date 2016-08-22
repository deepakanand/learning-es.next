# learning-es.next
My code samples and notes on ES6/7/n features.
I am taking a 2-pronged approach to learning the new JavaScript language features:

1. Read Understanding ES6(by Nicholas Zakas) and make notes. 

Books notes are in the directory named as such.

2. Work on a project by following a tutorial/blog article etc

Most of the rest of this repo is project related

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

4. Create a .babelrc file to specify the es2015 preset that babel should use.
(preset is a bundle of plugins)

5. Update package.json's "script" property to trigger the babel compiler

	"build": "babel src -d lib --source-maps"

	The source maps options generates a .js.map file that helps debug source files.
	
6. Create a src directory to save source files 
7. Create a test.js with some sample JavaScript code...say console.log('foo)
8. Transpile away !

	npm run build
	
9. Creates a lib directory and adds "use strict" pragma at the top of the file

## Resources
- https://www.safaribooksonline.com/library/view/learning-ecmascript-6
- https://www.packtpub.com/code_download/26340