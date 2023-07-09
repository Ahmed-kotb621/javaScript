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

let i=0;
for (;;) {
    if(i>3) break;
    console.log(i);
    i++;
  }
```
### Example

```js
let products =["Iphone","Samsung","oppo","Hp","Dell","Vivo"];
let colors =["Red","Green","Blue"];
let counter =4;

document.write(`<h1>Show ${counter} products</h1>`);
for(let i=0;i<counter;i++){
    document.write(`<div>`);
    document.write(`<h3>${products[i]}</h3>`);
    document.write(`${colors.join(" - ")}`); 
    document.write(`</div>`);
}

//Iphone
//Red - Green - Blue
```

### While Loop
```js
let i=0;
while(i<products.length){
    console.log(products[i]);
    i++;
}
```

### Looping Challange

```js

let admins =["Ahmed","Osama","Sayed","Stop","Samera"];

let employees=["Amged","Sameh","Ameer","Omar","Othman","Amany","Samia"];

let adminlength = 0;
 
for(i=0;i<admins.length;i++){

    if(admins[i] === "Stop") break;
    adminlength++;
}

document.write(`<h2>We Have X Admins </h2>`);
document.write(`<h2>We Have ${adminlength} Admins </h2>`);
document.write(`<hr>`);


for (let i = 0; i < adminlength; i++) {
    document.write(`<h2>The Admin For Team ${i+1} is ${admins[i]}</h2>`);
    document.write(`<h2>Team Members : </h2>`);
    for (let j = 0; j < employees.length; j++) {
        if(employees[j][0] === admins[i][0]){
            document.write(`<p>-${j+1} ${employees[j]}</p>`);
        }
    }
}

```
##### Output
We Have X Admins
We Have 3 Admins
The Admin For Team 1 is Ahmed
Team Members :
-1 Amged
-3 Ameer
-6 Amany
The Admin For Team 2 is Osama
Team Members :
-4 Omar
-5 Othman
The Admin For Team 3 is Sayed
Team Members :
-2 Sameh
-7 Samia

### Functions 
```js
function rangeYears(start,end){
    for(let i=start;i<end;i++){
        console.log(i);
    }
}

rangeYears(2000,2020);
```
#### Default Parametars
```js
function rangeYears(start = 20,end = 40){   // default parametars
    for(let i=start;i<end;i++){
        console.log(i);
    }
}

rangeYears();
```
### Function (rest parameters)
take any number of arguments (Array of arguments) </br>
only one rest parameter </br>

```js
function sumOfNumbers(...numbers){    
    let result=0;
    for(let i=0;i<numbers.length;i++){
        result += numbers[i];
    }    
    return result;
}

console.log(sumOfNumbers(10,20,30,10,20));
```
##### Random parameters
```js

function showDetails(...info){
    let name,age,status,available;
    for(let i=0;i<info.length;i++){

        typeof info[i] === "string" 
        ? name = info[i] 
        :typeof info[i] === "number"
        ? age = info[i] 
        : typeof info[i] === "boolean" 
        ? status =info[i] 
        : status === true 
        ? available = "Your are available" 
        :available = "Your are not available";
    }
    console.log(`hello, ${name}, Your age is ${age}, ${available}`);
}

showDetails("Osama",38,true);
showDetails(true,"osama",20);
showDetails(25,"osama",true);
showDetails(true,30,"ahmed");
```

### Anonymous Function 
function without name 
```html
<button id="show">Show</button>
```
```js
document.getElementById("show").onclick = function (){
    console.log("Show");
}
```
### Arrow Function
Regular Fuction 
```js
function count(num1,num2){
    return num1,num2;
}
```
Arrow Function
```js
let count =(num1,num2) => num1 + num2;
console.log(count(10,20));
```
Regular Function 
```js
let names = function (...name) {
   console.log(`String [${name.join(" ],[ ")}] => Done`);
};
```
Arrow Function 
```js
let names = (...name) => console.log(`String [${name.join(" ],[ ")}] => Done`);

console.log(names("osama", "mohamed", "ali", "ibrahim"));
```
output => String [osama ],[ mohamed ],[ ali ],[ ibrahim] => Done

### Higher Order Function 
#### Map Fuction 
Calls a defined callback function on each element of an array, and returns an array that contains the results.
```js
let numbers =[1,2,3,4,5,6];

let add = numbers.map(function (element,index,arr){
    return element + element;
},10);

console.log(add);
```
output=>  [2, 4, 6, 8, 10, 12];

##### Map To Arrow Function
```js
let numbers =[1,2,3,4,5,6];

let add = numbers.map((el) => el + el) ;

console.log(add);
```
##### Map Example (Swapping Cases) 
```js
let str = "aHmED";   // first convert String to Array
// maps work with array only 
let res = str.split("").map(function (el,ind,arr){
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
},10);

console.log(res.join(""));
```
#### Filter Function
return new Array
```js
let numbers =[1,2,3,4,5,6];

let filterNumbers = numbers.filter(function(el){
    return el % 2 == 0;
});

console.log(filterNumbers);
```

### Reduce Function 
return single value 
```js
let numbers =[10,20,15,30];

let reduceNumbers = numbers.reduce(function (acc,curr,ind,arr){
    return acc + curr;
},5);

console.log(reduceNumbers);
```
output=>80;   

### forEach Function
On li item click remove active class from all li items and add it to clicked item

```html
 <ul>
    <li class="active">One</li>
    <li>Two</li>
    <li>Three</li>
   </ul>

   <div class="content">
    <div>One</div>
   <div>Two</div>
   <div>Three</div>
   </div>
```
```js

allLis.forEach(function(el){
    el.onclick = function(){
        allLis.forEach(function(el){
            el.classList.remove("active");
        });
        this.classList.add("active");
    }
});
```
### Object
object is a javascript datatype contain properties and methods .
```js
let user ={
    theName:"Ahmed",
    theAge:23,
    sayhello:function(){
        return `welcome ${this.theName}`;
    }
};
console.log(user.theAge);
console.log(user.theName);
console.log(user.sayhello());
```
#### Accessing object 
If property name not valid (numbers , space,special chars,..) access by barcket notation not (.) notation
```js
let user ={
    theName:"Ahmed",
    theAge:23,
    "user name":"Ahmed kotb",   // not valid (number,space,etc..)
    sayhello:function(){
        return `welcome ${this.theName}`;
    }
};
console.log(user.theAge);        // dot notation
console.log(user.theName);
console.log(user["user name"]);  // bracket notation
console.log(user.sayhello());
```
### DOM (Document Object Model)
```html
<ul>
    <li class="active">One</li>
    <li>Two</li>
    <li>Three</li>
   </ul>

   <div class="content">
    <div>One</div>
   <div>Two</div>
   <div>Three</div>
   </div>
   <a href="http://www.google.com">google</a>
   <a href="http://www.facebook.com">facebook</a>
```
```js
console.log(document.querySelectorAll("ul")[0].innerHTML);
console.log(document.getElementsByClassName("active"));
console.log(document.title);
console.log(document.links[0].href = "https://www.facebook.com");
```
#### Create Elements using Dom
```js
let myDiv = document.createElement("div");
let myText =document.createTextNode("This is Paragraph");
let myAtrr =document.createAttribute("custom-data");
myDiv.appendChild(myText);
myDiv.setAttributeNode(myAtrr);
document.body.appendChild(myDiv);
console.log(myDiv)
```
