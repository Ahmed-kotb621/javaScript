// Output 
// window.alert("Welcome to js");
// document.write("<h1>Welcome to java file</h1>");
// console.log("Welcome to java file");

//////////////////////////////////////////////////////////
// template literals (String literals)
/*
let a = "Ahmed";
let b = "Sayed";

console.log(`Welcome ${a} ${b}`);
*/
////////////////////////////////////////////////////
/*
let cardTitle ="Elzero",cardDesc="Elzero Web School",cardDate ="25/10";

let card = `<div class="card">
    <h3>Hello ${cardTitle}</h3>
    <p>${cardDesc}</p>
    <span>${cardDate}</span>
</div>
`


document.write(card.repeat(4));   
*/
/*
// Number methode 
console.log(("100").toString());
console.log(100.10.toString());
console.log((100.101222).toFixed(4));
console.log(parseInt(1000.20));
console.log(parseInt('100 ahmed'));
console.log(parseFloat(1000.20));
console.log(Number.isInteger(100));
*/

// Math Object
/*
console.log(Math.round(10.5));
console.log(Math.floor(10.5));
console.log(Math.ceil(10.5));
console.log(Math.random());
console.log(Math.min(10,5,6,22,7));
console.log(Math.max(10,5,6,22,7));
console.log(Math.trunc(22.5));
console.log(Math.pow(2, 5));
*/

// let myName = "  Ahmed  ";

// console.log(myName[2]);
// console.log(myName.charAt(2));
// console.log(myName.trim());
// console.log(myName.length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.indexOf("A"));  // output -1 not found
// console.log(myName.lastIndexOf("d")); // begin from the end 
// console.log(myName.slice(0,3)); // start , end
// console.log(myName.repeat(3));
// console.log(myName.split("")); //separator[optional], limit[optional]

/*
let a = "Ahmed Sayed";

console.log(a.substring(0,5));  // from index 0 to 5 (not including end)
console.log(a.substring(5,0));  // swape index
console.log(a.substring(a.length - 5)); // from end 
console.log(a.substr(0,5));   // start , no. char 
console.log(a.includes("Ahmed")); // return boolean [ES6]
console.log(a.startsWith("A"));   // start with A [ES6]
console.log(a.startsWith("h",1));   // index 1 start with h 
console.log(a.endsWith("d"));     // end with s  
console.log(a.endsWith("d",5));  // length 5 end with d [ES6]
*/
/*
let x= "Elzero Web School";
let y = x.slice(3,7);
console.log(x.charAt(2).toUpperCase() + y);

console.log(x.charAt(x.length -4).toUpperCase().repeat(8));

console.log(x.charAt(0).toLowerCase() + x.substring(1).toUpperCase());
*/
/*
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

let price = -1;
console.log(`${price ??= 200}`); 
*/
/*
let st = "Elzero   Web School";
 
if ((st.length*2).toString() === "34"){
    console.log("Good");
}

if (st.charAt(st.indexOf("W")).toLowerCase() === "w"){
    console.log("Good");
}
*/

////////////// Switch statement
/*
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
*/
//////////////////////  Arrays  //////////////////////////////
/*
let nums = [1,2,3,4,5];  // default array
let names = ["Ahmed","Sayed",["Moahmed","kotb"]];  // nested array

console.log(nums[2]);  // access element
console.log(names[1][0]); // index 1 first char
console.log(names[2][1][0]); // index 1 first char in nested array
names[1] = "Ali";   // change element 1
console.log(Array.isArray(nums));  // check array
console.log(nums.length);  // check array

let names2 = ["Ahmed","Sayed","Mohamed"];

names2.unshift("kotb");   // insert element at the first
names2.push("kotb");      // insert element at the end 

names2.shift();           // remove first element
names2.pop();             // remove last element

console.log(names2);

console.log(names2.indexOf("Ahmed"));
console.log(names2.lastIndexOf("Ahmed"));
console.log(names2.includes("Ahmed"));

console.log(names2.sort());
console.log(names2.reverse());
// console.log(names.lastIndexOf("Ahmed"));
 

console.log(names2.slice(1));
console.log(names2.slice(1,2));
console.log(names2.splice(1,0,"Kotb"));
console.log(names2);


let allNames = names.concat(names2,"Alaa");

console.log(allNames);
console.log(names2.join());
console.log(names2.join(" | "));
*/
/*
let zero =0;
let counter=3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
 
// console.log(my.slice(zero,++counter).reverse());

 
// console.log(my.slice(++zero,counter).reverse());

console.log("El" + my[1].slice(2));
*/

// function maskify(cc){
//     let len = cc.length-3;
//     let a = cc.split("");

//     console.log(len);
// }

// maskify("CCCCCCCCCCCCCCCCCCCC");

let allElements =[1,2,3,"Ahmed","Ali",4,5,"Moahmed",6];
let namesOnly =[];

 
for(let i=0;i< allElements.length ;i++){
     
    if (typeof allElements[i] === "string"){
        namesOnly.push(allElements[i]);
    }

};
console.log(namesOnly);
