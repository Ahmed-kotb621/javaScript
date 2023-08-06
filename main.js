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

let allElements = [1, 2, 3, "Ahmed", "Ali", 4, 5, "Moahmed", 6];
let namesOnly = [];


// for(let i=0;i< allElements.length ;i++){

//     if (allElements[i] === "Ali"){
//         break;
//     }
//     console.log(allElements[i])
// };


// let products =["Iphone","Samsung","oppo","Hp","Dell","Vivo"];
// let colors =["Red","Green","Blue"];
// let counter =4;

// document.write(`<h1>Show ${counter} products</h1>`);
// for(let i=0;i<counter;i++){
//     document.write(`<div>`);
//     document.write(`<h3>${products[i]}</h3>`);
//     document.write(`${colors.join(" - ")}`); 
//     document.write(`</div>`);
// }

// let i=0;
// while(i<products.length){
//     console.log(products[i]);
//     i++;
// }

//////////////////////////////////////////

// let admins =["Ahmed","Osama","Sayed","Stop","Samera"];

// let employees=["Amged","Sameh","Ameer","Omar","Othman","Amany","Samia"];

// let adminlength = 0;

// for(i=0;i<admins.length;i++){

//     if(admins[i] === "Stop") break;
//     adminlength++;
// }

// document.write(`<h2>We Have X Admins </h2>`);
// document.write(`<h2>We Have ${adminlength} Admins </h2>`);
// document.write(`<hr>`);


// for (let i = 0; i < adminlength; i++) {
//     document.write(`<h2>The Admin For Team ${i+1} is ${admins[i]}</h2>`);
//     document.write(`<h2>Team Members : </h2>`);
//     for (let j = 0; j < employees.length; j++) {
//         if(employees[j][0] === admins[i][0]){
//             document.write(`<p>-${j+1} ${employees[j]}</p>`);
//         }
//     }
// }

/*
function rangeYears(start = 20,end = 40){   // default parametars
    for(let i=start;i<end;i++){
        console.log(i);
    }
}

rangeYears();
*/

// Function Rest parameters
/*
function sumOfNumbers(...numbers){    
    let result=0;
    for(let i=0;i<numbers.length;i++){
        result += numbers[i];
    }    
    return result;
}

console.log(sumOfNumbers(10,20,30,10,20));
*/
// let x = "name";
// if(typeof x === "string"){
//     console.log("String");
// }else{
//     console.log("not String");
// };

// typeof x === "string" ? console.log("String"):  console.log("not String");

//////////////////////////////////
/*
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
*/

// document.getElementById("show").onclick = function (){
//     console.log("Show");
// }

// function count(num1,num2){
//     return num1,num2;
// }

// let count =(num1,num2) => num1 + num2;

// console.log(count(10,20));

// let names = function (...name) {
//     console.log(`String [${name.join(" ],[ ")}] => Done`);
// }

// let names = (...name) => console.log(`String [${name.join(" ],[ ")}] => Done`);


// console.log(names("osama", "mohamed", "ali", "ibrahim"));
 
// let allLis = document.querySelectorAll("ul li");
// let allDivs= document.querySelectorAll(".content div");

// allLis.forEach(function(el){
//     el.onclick = function(){
//         allLis.forEach(function(el){
//             el.classList.remove("active");
//         });
//         this.classList.add("active");
//     }
// });

 
// var w =8;

// if( w%2 === 0 && w !==2){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

// create object 
// let user ={
//     theName:"Ahmed",
//     theAge:23,
//     "user name":"Ahmed kotb",   // not valid (number,space,etc..)
//     sayhello:function(){
//         return `welcome ${this.theName}`;
//     }
// };
// console.log(user.theAge);
// console.log(user.theName);
// console.log(user["user name"]);  // bracket notation
// console.log(user.sayhello());

// let word = "internationalization";
// let word = readline();

// let wLength =word.length-2,result;

// if (word.length >10){
//      result = `${word[0]}${wLength}${word[word.length-1]}`
// }else {
//     result =word;
// }
// console.log(result);
 

///////////////Dom /////////////
 
// let userName = document.querySelector("[name='username']");
// let userAge = document.querySelector("[name='userage']");
 


// document.forms[0].onsubmit = function(event){
//     let userValid = false;
//     let ageValid = false;
     
//     if(userName.value !== "" && userName.value.length <= 10){
//         userValid = true;
       
//     };
//     if(userAge !== ""){
//         ageValid = true;
//     };
//     if(userValid === false || ageValid === false){
//         event.preventDefault();
//     };
    
// };
 
/*
let mainHeader = document.createElement("div"); 
let logo = document.createElement("h2");
let logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);

let MainNav = document.createElement("ul");

let li1 = document.createElement("li");
let li1Text = document.createTextNode("Home");
li1.appendChild(li1Text);

let li2 = document.createElement("li");
let li2Text = document.createTextNode("Services");
li2.appendChild(li2Text);

let li3 = document.createElement("li");
let li3Text = document.createTextNode("About");
li3.appendChild(li3Text);

let li4 = document.createElement("li");
let li4Text = document.createTextNode("Contact");
li4.appendChild(li4Text);


MainNav.appendChild(li1);
MainNav.appendChild(li2);
MainNav.appendChild(li3);
MainNav.appendChild(li4);

MainNav.style.cssText ="list-style:none;display:flex;justify-content:space-between;align-items:center";
li1.style.cssText="margin-left:10px;font-size:20px;color:#777";
li2.style.cssText="margin-left:10px;font-size:20px;color:#777";
li3.style.cssText="margin-left:10px;font-size:20px;color:#777";
li4.style.cssText="margin-left:10px;font-size:20px;color:#777";
logo.style.cssText="margin-left:30px;font-size:30px;color:green";

mainHeader.style.cssText ="display:flex;justify-content:space-between;align-items:center";
mainHeader.appendChild(logo);
mainHeader.appendChild(MainNav);
document.body.appendChild(mainHeader);

let arr = [1,1,2,2,3,4,5,5,5]

let uniqe =[...new Set(array)];

console.log(uniqe)
*/
/*
let counter = setTimeout(function(){
    console.log("Hello");
},3000);


let counter2=setTimeout(sayHello,3000,"Ahmed",23);

function sayHello(username,age){
     console.log(`Hello i am ${username} my age is ${age}`);
};

btn.onclick = function(){
    clearTimeout(counter2);
}*/


// setInterval(function(){
//     console.log("Hello");
// },1000);

// let myDiv = document.querySelector("div");

// function countDown(){
//     myDiv.innerHTML -= 1;
//     if(myDiv.innerHTML === "0"){
//         clearInterval(counter);
//     }
// };

// let counter =setInterval(countDown,2000);
/*
let btn = document.querySelector("button");

console.log(btn);

window.onscroll = function(){
    if(window.scrollY >= 500){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
}

document.body.classList.toggle("dark");
*/

/*   // loacl storage pratice
let lis= document.querySelectorAll("ul li");
let show=document.querySelector(".show");

if(window.localStorage.getItem("color")){
    show.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach((li)=>{
        li.classList.remove("active");
    })
    document.querySelector(`[data-color=${window.localStorage.getItem("color")}]`).classList.add("active");
}else{
    console.log("no");
}
lis.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        console.log(e.currentTarget.dataset.color)

        // remove active class
        lis.forEach((li)=>{
            li.classList.remove("active")
        });

        // add Active class to current li
        e.currentTarget.classList.add("active");
        // add current color to local storage
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        // add color to show div
        show.style.backgroundColor = e.currentTarget.dataset.color;

    })
});

*/
/*
let title_input = document.querySelector(".title");
let submit_input = document.querySelector(".submit");
let show_tasks = document.querySelector(".tasks");


 

submit_input.onclick =() =>{
    if (title_input.value != ""){
       
    }   
}

window.localStorage.setItem("title",title_input.value); 
let container = document.createElement("div");  
let task = document.createElement("div");  
let task_title = document.createTextNode(window.localStorage.getItem("title"));
task.appendChild(task_title);
let delete_btn =document.createElement("button");
let btn_text = document.createTextNode("Delete");
delete_btn.appendChild(btn_text);
container.style.cssText = "display:flex;justify-content:space-between;align-items:center;background-color:white;padding: 15px;border-radius: 5px;font-size: 20px;"
delete_btn.style.cssText="font-weight: bold;background-color: red;color: white;border: none;padding: 5px;border-radius: 5px;"
container.appendChild(task);
container.appendChild(delete_btn);
show_tasks.appendChild(container);
 */

 
// console.log(Array.from("12345",(num)=> +num + +num));
/*
class Person {

    static count =5;
    constructor(name, age) {
        this.name = name || "UN"; // this asign to the object being created and asign value of name to is property
        this.age = age ;
        this.msg =function(){
            return `Hello ${this.name} age ${this.age}`;
        }
    }

    helloMsg(){
        return `Hello ${this.name} age ${this.age} ${this.count}`;
    }

    updateName(newName){
       return  this.name = newName;
    }
};

let personOne =new Person("Ahmed",23);
let personTwo =new Person("Mohamed",20);

console.log(personOne.helloMsg());
// personOne.name = "ali";

// console.log(personOne.name);
// console.log(personOne.age);
// console.log(personOne.msg());
// console.log(personOne.helloMsg());
// console.log(personOne.updateName("sayed"));

// let str = "Ahmed";
// let str2 = new String("Ahmed");

// console.log(str);
// console.log(str2);

// console.log(typeof str);
// console.log(typeof str2);

// console.log(str instanceof String);
// console.log(str2 instanceof String);

// console.log(str.constructor === String);
// console.log(str2.constructor === String);
*/

// parent class 
// class Parent {
//     #e;
//     constructor(id,name,email){
//         this.i=id;
//         this.n=name;
//         this.#e =email;
//     }
//     sayHello(){
//         return `Hello ${this.name}`
//     }
// };

// //Derived class (child)

// class Child extends Parent {
//     constructor(id,name,age){
//         super(id,name);
//         this.age =age;
//     }
// };

// let child = new Child(100,"Ahmed",20);
// let parent = new Parent(100,"Ahmed","koym")

// console.log(parent.n);
// console.log(parent.e);

// const jsonObjectFromSErver = '{"userName":"Ahmed","Age":20}';

// let myObj = JSON.parse(jsonObjectFromSErver);

// console.log(typeof myObj);
// console.log(jsonObjectFromSErver);
// let myjson = JSON.stringify(myObj);

// console.log(typeof myjson);
// console.log(myjson);

// console.log(Math.round(15.5));                                       

/*
let arr = [1,3,5,7,9];


function binarySearch(arr,item){
    let low = 0,high= arr.length - 1;
    while (low <= high) {
        let mid =Math.round((low + high)/2), guess = arr[mid];
        if (guess === item) {
            return mid;
        }else if (guess < item){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return false;
};

console.log(binarySearch(arr,9));
// Iterative function to implement Binary Search
// let iterativeFunction = function (arr, x) {
  
//     let start=0, end=arr.length-1;
         
//     // Iterate while start not meets end
//     while (start<=end){
 
//         // Find the mid index
//         let mid=Math.floor((start + end)/2);
  
//         // If element is present at mid, return True
//         if (arr[mid]===x) return mid;
 
//         // Else look in left or right half accordingly
//         else if (arr[mid] < x)
//              start = mid + 1;
//         else
//              end = mid - 1;
//     }
  
//     return false;
// }



console.log(Math.round(10.5));
console.log(Math.floor(10.7));
console.log(Math.ceil(10.3));
*/

// var expect = function(val) {
//      this.toBe = function(){
//         return `val ${val}`;
//      }
// };

 
// console.log(expect(5).toBe(5));
/*
var createCounter = function(init) {
    let count = init;
    return {
        increment:function(){
            return ++count;
        },
        reset:function(){
            count = init;
            return count;
        },
        decrement:function(){
            return --count;
        }
    }
};

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.reset());
console.log(counter.decrement());
*/
/*
var expect = function(val) {
    return {
        toBe:function(value1){
            if(val === value1){
                return true
            }else{
                throw "not Equal";
            }
        },
        notToBe:function(vlaue2){
            if (val !== vlaue2){
                return "value:true"
            }else{
                return "Error:equal"
            }
        }
    }
    
};


console.log( expect(5).toBe(5)); // true
console.log( expect(5).toBe(null)); // true
console.log( expect(5).notToBe(5)); // true
expect(5).notToBe(5); // throws "Equal"

5 > 3 ? console.log(true):console.log(false);
*/
/*
function findSmallest(arr){
    let smallest = arr[0];
    let samllest_index =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
            samllest_index = i;
        }
    }  
    return smallest;  
};

console.log(findSmallest([5,3,2,1,6]));

function sortArray(arr){
    let newArray =[];
    for(let i=0;i<arr.length;i++){
        let smallest = findSmallest(arr);
        newArray.push(smallest);
        
    }
    return newArray;
};

console.log(sortArray([5,3,2,1,6]));

// let arr=[5,3,2,1,6];
// let newArray =[];

// console.log(newArray.push(arr.pop()));
 
*/

// var map = function(arr, fn) {
//     let x;
//     switch(fn){
//         case 'pluseone':
//            x= arr.map(el=>{
//                return el +1;
//             });
//         break;
//         case "plusI":
//           x=  arr.map((el,index)=>{
//                 return el+index;
//           })
//         break;
//         case "constant":
//           x=  arr.map(function(el){
//                 el = 42;
//                 return el;
//             });
//         break;
//     }
//   return x;
// };

 
// let arr = [0,10,20,30];
// let x= arr.filter(function(el){
//     return el>10;
// })

// const newArray = filter([0,10,20,30],greaterThan10(10));
// console.log(filter([0,10,20,30],greaterThan(10)));

// var map = function(arr, fn) {
//     const ans = [];
//     for (const i in arr)
//     {
//         ans.push(fn(arr[i],Number(i)));
//     }
//     return ans;
// };

// let arr=[1,2,3,4];
// const ans = [];
//     for (const i in arr)
//     {
//         ans.push(fn(arr[i],Number(i)));
//     }

// var compose = function(functions) {
// 	return function(x) {
//         for (const func of functions.reverse())
//         {
//             x=func(x);
//         }
//         return x;
//     }
// };

// var compose = function(functions) {
//     return function(x){
//         for(let func of functions.reverse()){
//             x =func(x);
//         }
//         return x;
//     }
// };

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9


// var argumentsLength = function(...args) {
//     console.log(args.length);
// };

// argumentsLength(1, 2, 3); // 3
/*
function quickSort(arr){       
    if(arr.length <2){
        return arr;
    }
    let pivot =arr[0];
    let leftArr =[];
    let rightArr =[];
     
    for(let i =1;i<arr.length;i++){
        if(arr[i] < pivot ){
            leftArr.push(arr[i]);
        }else {
            rightArr.push(arr[i]);
        }        
    }
    return [...quickSort(leftArr), pivot ,...quickSort(rightArr)];
}

console.log(quickSort([15,10,20,5]));
*/

/*
class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    // Getter 
    get area(){
        return this.caclArea();
    }
    // method
    caclArea(){
        return this.height * this.width;
    }
};


let rec = new Rectangle(10,10);


console.log(rec.area);
*/
/*
class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size =0;
    }

    // method
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key,value){
        let index = this._hash(key);
        this.table[index] = [key,value];
        this.size++;
    }

    get(key){
        const index = this._hash(key);
        return this.table[index];
    }
}


const hashh =new HashTable();

hashh.set("Ahmed",10);

console.log(hashh.get("Ahmed"));

const mapp = new Map();

mapp.set("map1",10);
mapp.set("map2",20);

console.log(mapp.get("map1"));
console.log(mapp.get("map2"));
*/



let two =  num1 => num1 + 5;

console.log(two(2,5));
console.log("".padStart(100,'*'));
