## Block bindings

 - var declarations are hoisted
	 - regardless of where the variable is declared in user code, its treated as if its at the top of the function
	 - so, a var declaration results in the variable being accessible from any part of the function
 - let and const provide block-level scoping
  - i.e. inside a function / inside a pair of curly braces
 - let declarations 
  - are not hoisted, so its better to place them at the top of the scope where they are meant to be used
 - Redeclaration throws errors
 ```
  var count = 30;
 // syntax error
 let count = 35;
 
 ```
 - const declarations
 -  cannot be changed after init and so must be init at time of declaration
 - const prevents modification of the binding and not the value.
  ```
  const obj = { 
      foo: "bar"
  }
  // valid
  obj.foo = "baz"
  // error
  obj = { }; 
  
  ```
 - Temporal Dead Zone(TDZ)
  - a variable declared using let/const is not available until after the declaration. the area before the decl is known as the TDZ
 - Loops
  - Good to declare indexing variables in loops using let because thats the idea with which code is written, but not what actually happens when you use var
  -  With let you dont need IIFEs to create functions in a loop that depend on a value from the looping business logic . On each iteration there is a new binding created and initialized. This is an important special behavior of let
```javascript

  var funcs=[];
  for(let i=0; i<10; i++) {
   funcs.push(function() {
      console.log(i);});
   }
   funcs.forEach(function(func) {
     func();// outputs 0, then 1, then 2, up to 9
   })
```   
 
  - Each time through the loop, a new key binding is created, and so each function has its own copy of the key variable.The result is that each function outputs a different value
   - const: const works exactly like let in for-of , for-in loops, but errors out on the second iteration of a regular for loop because the code attempts to re-initialize the same binding to a different value.
 -  If you use let and const in global scope, these do not get added as a property to the window object. as a result, you cannot overrite window builtins but only shadow them


## Excerpts from Kyle Simpson’s [article](https://davidwalsh.name/for-and-against-let) 
JS variables have always behaved in this hoisting manner, so many developers choose to automatically put their var declarations at the top of each (function) scope, so as to match code style to its behavior. And it's a perfectly valid way of going about things
In the absence of block scoping, devs still do stuff like

```javascript
for (var i=..) ..
  
  // OR
  
var a, b;
// other code
// later, swap `a` and `b`
if (a && b) {
    var tmp = a;
    a = b;
    b = tmp;
}
```
Stylistically, we're saying: "don't use the variable anywhere else but right here".
But…
not every variable declaration ends up block scoped.
Example:  Function parameters. Those are variables that exist for the entire function's scope. 
Block scoping and function scoping are both valid and both useful

Cons of let: 

 -  It is an implicit scoping mechanism i.e. being inside an if block for example, means that the block also becomes a scope. Otherwise, if let was not there, the { .. } block is not a scope.
 - if let is buried way down deep in the middle of all that code, it becomes much harder to know if any given block is scoped or not.
 - Conversely, if you find a let declaration somewhere in the code, and you want to know to which block it belongs, instead of just visually scanning upwards to the nearest functionkeyword, you now need to visually scan to the nearest { opening curly brace
 - TDZ “behavior” can be annoying
Use let as appropriate but be more explicit
```javascript
function foo (){
 var a = 1;
 {
  let b = 2;
  console.log("b "+ b);
 }
 console.log("b "+ b);
}
```

###Summary
Block scoping is cool, and let gives us that. But be explicit about your block scopes. Avoid implicit let declarations strewn about.
let improves scoping options in JS, not replaces. var is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce
