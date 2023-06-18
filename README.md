# javaScript
JavaScript Summary 
### Intro
-**Computer Program** : is a list of instructions to be executed by a computer. <br/>
-**java Script Program**: is a list of programming statements (executed by web browsers).<br/>
-**JavaScript Versions**
* The Original JavaScript ES1 ES2 ES3 (1997-1999)
* The First Main Revision ES5 (2009)
* The Second Revision ES6 (2015)
* All Yearly Additions (2016, 2017, 2018, 2019, 2020)
```js 
let a;   //declare variable
a = 10; // assign the of 10 to a 
```

-**JS Values** : literals(fixed numbers,Strings,...) , Variables (used to store data);

#### JavaScript Identifiers 
Identifiers are JavaScript names.

Identifiers are used to name variables and keywords, and functions.<br/>

A JavaScript name must begin with:<br/>

- A letter (A-Z or a-z)
- A dollar sign ($)
- Or an underscore (_)
-----------------------------------------------------------
### JavaScript code position

**3** position to put JS code :
- head  section of html 
- body  section of html
- external javaSript file <br/>
 The best practice is to put JavaScript <script> tags just before the closing </body> tag rather than in the <head> section of your HTML.
-------------------------------------------------------------
### Output to screen 
- window.alert()
- document.write()
- console.log()
------------------------------------------------------------
### variables Declarition (var , let ,const)
- The **var** keyword is used for declaring variables with function scope or global scope. Variables declared with var are not block-scoped and are accessible throughout the entire function or global scope. They are also subject to hoisting, which means you can access them before their declaration (although their value will be undefined).
- The **let** keyword allows you to declare a block-scoped variable that can be reassigned. Variables declared with let are limited to the block (a block is typically defined by curly braces {}). This means that the variable is only accessible within the block where it is defined or any nested blocks. let variables are not accessible before their declaration (hoisting doesn't occur).
- The **const** keyword is used to declare variables that are block-scoped and cannot be reassigned once they are defined. It creates a read-only reference to a value, meaning you cannot assign a new value to the variable. However, if the variable holds an object or an array, the properties or elements of the object or array can be modified.

------------------------------------------------------------------
### Number Methodes
``` js
console.log(("100").toString());
console.log(100.10.toString());
console.log((100.101222).toFixed(4));
console.log(parseInt(1000.20));
console.log(parseInt('100 ahmed'));
console.log(parseFloat(1000.20));
console.log(Number.isInteger(100));
```
