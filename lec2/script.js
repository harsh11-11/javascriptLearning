//variable, let and constants

var c; // be intialize without putting any value
var b = 10;
var b = 11; //can be redeclared/intialized
console.log(b);

var d = null;
var r;
console.log(d,r);  //null undefined
let a = 10; 
a=12;
console.log(a);

const e = 14;
console.log(e);

console.log(`hii yall ${b} and ${d}`);

//strings
let x= "hello World ";
let y = "World";

console.log(x, y); //hello world - creates spaces automatically.
//FOR CONCATENATE USE + OPERATOR BUT THIS WHEN USED DOESNT GIVE SPACE
console.log(x+y); //helloWorld


console.log(x.indexOf('Wor')); //6 //-1
console.log(x.trim());
console.log(x.includes("hello"));
console.log(x.slice(0,5)); //0inlcuded 5excluded

let favColor = "red blue green";
console.log(favColor.split(" "));

favColor = "red,blue,green";x
console.log(favColor.split(","));

//string are immutable

//NUMBERS

let num = 4.0;
console.log(num, typeof num); //number
let num1 = 4050;
console.log(num1);

//not every string is converted to Number.
//every number can be converted to String.

//Boolean
let x1 = "";
console.log(Boolean(x1)); //false = space
let x2 = "0";
console.log(Boolean(x2)); //true
let x3 = 0;
console.log(Boolean(x3)); //false

//Arrays
//1. Define
let dishes = ["G jamun",9,"P Bhaji"];
console.log(dishes);
console.log(dishes[0]);

dishes[0] = "Gulab Jamun";
dishes[1] = "Burger";
dishes[2] = "Pav bhaji";

console.log(dishes);
console.log(dishes.join("-"));//Gulab Jamun-Burger-Pav bhaji
console.log(dishes.indexOf("Pav bhaji")); //2 caseSensitive

//can also concate two arrays element
//dishes.concat(newDishes);    
//dishes.length
//all up methods of array does not mutate

//MUTATEd Method
//array.push("ele1"); //show size after new element added
//array.pop(); //this output poped Element.

//Boolean operators and Comparision operators
//.includes()




//function 
function name(){
    console.log("in function\n");
}
name();

//Now this type of function is used
let invite = function(name, time){
    console.log(`Welcome, ${name} on time ${time}`);
}

invite("harsh"); //Welcome, harsh on time undefined
//if dont want indefined then do 
//function(name = "DefaultName", time = "defaultTime"){}
invite("harsh", "20:30");

//Arrow Function //Coder Dost youtube channel









