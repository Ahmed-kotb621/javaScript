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
a = 10; // assign the value of 10 to a 
```

-**JS Values** : literals(fixed numbers,Strings,...) , Variables (used to store data);

#### JavaScript Identifiers 
Identifiers are JavaScript names.

Identifiers are used to name variables , keywords and functions.<br/>

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
### Number Methods
``` js
console.log(("100").toString());
console.log(100.10.toString());
console.log((100.101222).toFixed(4));
console.log(parseInt(1000.20));
console.log(parseInt('100 ahmed'));
console.log(parseFloat(1000.20));
console.log(Number.isInteger(100));
```
-----------------------------------------------------------
### Math object 
``` js
console.log(Math.round(10.5));
console.log(Math.floor(10.5));
console.log(Math.ceil(10.5));
console.log(Math.random());
console.log(Math.min(10,5,6,22,7));
console.log(Math.max(10,5,6,22,7));
console.log(Math.trunc(22.5));
console.log(Math.pow(2, 5));
```
---------------------------------------------------------
### String methods
```js
let myName = "  Ahmed  ";

console.log(myName[2]);               // return char at 2
console.log(myName.charAt(2));        // cahr at index 2
console.log(myName.trim());           // remove all spaces 
console.log(myName.length);           // string length
console.log(myName.toLowerCase());    // string to lower case
console.log(myName.toUpperCase());    // string to upper case
console.log(myName.indexOf("A"));     // output -1 not found
console.log(myName.lastIndexOf("d")); // begin from the end 
console.log(myName.slice(0,3));       // start , end
console.log(myName.repeat(3));        // repeat string 3 times
console.log(myName.split(""));        //separator[optional], limit[optional]

let a = "Ahmed Sayed";

console.log(a.substring(0,5));           // from index 0 to 5 (not including end)
console.log(a.substring(5,0));           // swape index
console.log(a.substring(a.length - 5));  // from end 
console.log(a.substr(0,5));              // start , no. char 
console.log(a.includes("Ahmed"));        // return boolean [ES6]
console.log(a.startsWith("A"));          // start with A [ES6]
console.log(a.startsWith("h",1));        // index 1 start with h 
console.log(a.endsWith("d"));            // end with s  
console.log(a.endsWith("d",5));          // length 5 end with d [ES6]
```
----------------------------------------------------------
### Comparison Operators
```js
==    // Equal (compare value only)
!=    // not Equal
===   // Identical Equal (compare value and type )
```
### Logiacl Operators
```js
!    // Not
&&   // And (all terms should achieved)
||   // one or two terms achieved 
```
---------------------------------------------------------------
### If Condition
```js
if(condition){
 // block of code 
} else if (condition){
 // block of code
}else {
 // else statement
}
```
### Conditional Ternary Operator 
```js
let gender="Male";
let age = 10;

if (gender === "Male"){
    console.log("Mr");
}else
{
    console.log("Mrs");
};

gender === "Male" ? console.log("Mr"): console.log("Mrs");
 
let result = age <20 
    ? "<20" 
    :age >20 && age <40 
    ? "between"
    : "greater than 20";
console.log(result);
```
-------------------------------------------------------------------
### Logical OR || 
return specific value if value is falsy (null,undefined,falsy)
```js
let price = 0;
console.log(`${price || 200}`);  // return 200 if value is falsy
```
### Nullish Coalescing operator ??
return specific value if value is (null,undefined) only 
```js
let price = -1;
console.log(`${price ??= 200}`);  // return -1  
```
--------------------------------------------------------------------
### Switch statement
```js
let day= 2;

switch(day){
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:  // multiple cases 
    case 3:
        console.log("Monday");
        break;   
    default:
        console.log("Weeeek end");
}
```
-----------------------------------------------------------------------
### Array 
```js
let nums = [1,2,3,4,5];  // default array
let names = ["Ahmed","Sayed",["Moahmed","kotb"]];  // nested array

console.log(nums[2]);         // access element
console.log(names[1][0]);     // index 1 first char
console.log(names[2][1][0]);  // index 1 first char in nested array 
names[1] = "Ali";             // change element 1
console.log(Array.isArray(nums));  // check array
console.log(nums.length);     // 5

let names2 = ["Ahmed","Sayed","Mohamed"];

names2.unshift("kotb");   // insert element at the first
names2.push("kotb");      // insert element at the end 

names2.shift();           // remove first element
names2.pop();             // remove last element

console.log(names2);
// Array Methods [search]

console.log(names.indexOf("Ahmed"));     // 0
console.log(names.lastIndexOf("Ahmed")); // 0 from end 
console.log(names.includes("Ahmed"));    // true

console.log(names2.sort());              // Function used to determine the order of the elements
console.log(names2.reverse());           // Reverses the elements in an array in place.

console.log(names2.slice(1));             // return array from index 1 to the end
console.log(names2.slice(1,2));           
console.log(names2.splice(1,0,"Kotb"));   // add new element from index 1 and delete 0 elements( changes the contents of an array by removing or replacing existing elements)


let allNames = names.concat(names2,"Alaa");

console.log(allNames);      
console.log(names2.join());       // return string seperated by comma ,
console.log(names2.join(" | "));  // return string seperated by | 
```
-------------------------------------------------------------------
### Loops
#### For Loop
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons.
```js
for (let i = 0; i < 9; i++) {
  console.log(i); // 1-8
}

loop on seqeunes
let allElements =[1,2,3,"Ahmed","Ali",4,5,"Mohamed",6];
let namesOnly =[];

 
for(let i=0;i< allElements.length ;i++){
     
    if (typeof allElements[i] === "string"){
        namesOnly.push(allElements[i]);
    }

};
console.log(namesOnly);
```
### Break & Continue
```js
for(let i=0;i< allElements.length ;i++){
     
    if (typeof allElements[i] === "number"){
        continue;
    }
    console.log(allElements[i]);      //Ahmed,Ali,Mohamed
};


 
for(let i=0;i< allElements.length ;i++){
     
    if (allElements[i] === "Ali"){
        break;
    }
    console.log(allElements[i]);     //1,2,3,Ahmed
};

```
