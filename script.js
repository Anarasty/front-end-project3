document.getElementById("demo2").innerHTML = 4 + 4;

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("demo").style.backgroundColor = "red";
  document.getElementById("demo").style.fontSize = "40px";
}

function myFunction2() {
  window.alert(
    "После того, как вы нажмете ОК, вас уничтожат. Вы уверены в своем выборе?"
  );
  window.alert("точно?");
}

console.log("testing console");
function myFunction3() {
  window.print("print me");
}

// ---
let a, b, c;
a = 2;
b = 3;
c = a + b;
document.getElementById("statements").innerHTML = "value of a + b is " + c;
// ---

function myFunction4() {
  let animalFirst = "cat";
  document.getElementById("catDemo").innerHTML = animalFirst;
}

function myFunction5() {
  let animalSecond;
  document.getElementById("dogDemo").innerHTML = animalSecond;
}

function myFunction6() {
  var myNumber = "One";
  var myNumber;
  document.getElementById("demoNumberVar").innerHTML = myNumber;
}

// ---
let q = 5 + 2 + 3;
let w = "John" + " " + "Doe";
let e = "5" + 2 + 3;
let r = 2 + 3 + "5";
document.getElementById("demo3").innerHTML = q;
document.getElementById("demo4").innerHTML = w;
document.getElementById("demo5").innerHTML = e;
document.getElementById("demo6").innerHTML = r;
// ---

{
  // let CAN NOT BE USE IN BLOCK SCOPE {}
  var monkey = "monkey";
}
document.getElementById("demo7").innerHTML = monkey;

var creature = "elf";
{
  var creature = "gnome";
}

console.log(creature);

// ---
let animal = "cat";
{
  let animal = "dog";
}

console.log("the animal is " + animal);

// ---
const numberTest = 13.13;
//numberTest = 20; //THIS WILL GIVE AN ERROR
// numberTest = numberTest + 10;//THIS WILL GIVE AN ERROR
console.log("number is " + numberTest);

// ---
function myFunction7() {
  const food = ["apple", "tomato", "orange"];
  food[1] = "pizza";
  food.push("bread");
  document.getElementById("demoArray1").innerHTML = food;
}

// ---
function myFunction8() {
  const juice = { water: "200mg", shugar: "10mg", dop: "5mg" };
  juice.dop = "15mg";
  juice.color = "orange";
  document.getElementById("demoArray2").innerHTML =
    juice.water + juice.shugar + juice.dop + juice.color;
}

const beta = 12;
{
  const beta = 20;
  console.log("beta is ..." + beta);
}
{
  const beta = 30;
  console.log("beta is ..." + beta);
}
console.log("beta is ..." + beta);

// ---
let firstNumber = 2;
let secondNumber = 3;

let result1 = firstNumber ** secondNumber; //Exponentiation
let result2 = firstNumber + secondNumber;

document.getElementById("demo8").innerHTML = result1;
document.getElementById("demo9").innerHTML = result2;

let name1 = "Bob ";
name1 += "Franklin";
document.getElementById("demo10").innerHTML = name1;

// --- ARITHMETICS
let qq = 22;
let ww = 10;
let result3 = qq % ww; //Modulus returns the division remainder
document.getElementById("demo11").innerHTML = result3;

let ee = 10;
ee++;
let rr = ee; //Increment
document.getElementById("demo12").innerHTML = rr;

let tt = 10;
tt--;
let yy = tt;
document.getElementById("demo13").innerHTML = tt;

// --- ASSIGMENT
let uu = 5;
uu += 20;
document.getElementById("demo14").innerHTML = uu;

let ii = 10;
ii -= 2;
document.getElementById("demo15").innerHTML = ii;

// ------------- DATA TYPES
let l; //NOW UNDIFINED
l = 12; // NOW 12
l = 'mark'; // NOW MARK
document.getElementById("demo16").innerHTML = l;

let t = 4,
y = 4,
u = 5;

document.getElementById("demo17").innerHTML = (y == t) + ' ' + (y == u);

document.getElementById("demo18").innerHTML = typeof 2 + ' ' + typeof "sell";

// ------------- FUNCTIONS
let func1 = myFunction9(2, 3);
document.getElementById("demo19").innerHTML = func1;
function myFunction9(p1, p2) {
  return p1 + p2;
}

document.getElementById("demo20").innerHTML = "Number: " + myFunction10(5) + " apples left";
function myFunction10(countOfApples){
  return countOfApples - 1;
}

// ------------- OBJECTS
 const cat = {
   name: "Max",
   age: 4,
   gender: "male",
   color: "black, grey, white"
 };

 document.getElementById("demo21").innerHTML = "Cat name is " + cat.name + ". He is " + cat.age + " years old." + cat['gender'];

 const person1 = {
  firstName: 'Alan',
  secondName: 'Black',
  age: 23,
  fullName: function() {
    return this.firstName + "__" + this.secondName;
  }
 };
 document.getElementById("demo22").innerHTML = "Full name is " + person1.fullName();


// ------------- STRINGS
let someText = 'SADSASDASDSAD';
let lengthText = someText.length;
console.log('text length '+ lengthText);

let someText2 = "this is \"SPARTA\" !!!";
console.log(someText2);

let testString = 'MAX';
let testObject =  new String('Max');

document.getElementById("demo24").innerHTML = typeof testString + "<br>" + typeof testObject;

document.getElementById("demo25").innerHTML = testString==testObject;

// ------------- STRING METHODS

let someText3 = 'This is some text';
let slice1 = someText3.slice(5, 12);
let slice2 = someText3.slice(-12, -5); 
let slice3 = someText3.slice(5);
let slice4 = someText3.slice(-5);

document.getElementById("demo26").innerHTML = slice1;
document.getElementById("demo27").innerHTML = slice2;
document.getElementById("demo28").innerHTML = slice3;
document.getElementById("demo29").innerHTML = slice4;


let someText4 = 'Enother paragraph here';
let substring1 = someText4.substring(0, 7);

document.getElementById("demo30").innerHTML = substring1;


let someText5 = 'Hello world';
let substr1 = someText5.substr(0, 7);
let substr2 = someText5.substr(4);
let substr3 = someText5.substr(-8);

document.getElementById("demo31").innerHTML = substr1;
document.getElementById("demo32").innerHTML = substr2;
document.getElementById("demo33").innerHTML = substr3;

let someText6 = 'Good morning morning';
let replace1 = someText6.replace('morning', 'night');
let replace2 = someText6.replace(/MORNING/i, 'night');
let replace3 = someText6.replace(/morning/g, "night");

document.getElementById("demo34").innerHTML = replace1;
document.getElementById("demo35").innerHTML = replace2;
document.getElementById("demo36").innerHTML = replace3;


let someText7 = "Hi All!";
let someText8 = "2";

let uppercase1 = someText7.toUpperCase();
let lowercase1 = someText7.toLowerCase();
let concat1 = someText7.concat('', someText8);
let padstart1 = someText8.padStart(9,0);
let padend1 = someText8.padEnd(3,0);
console.log(uppercase1);
console.log(lowercase1);
console.log(concat1);
console.log(padstart1);
console.log(padend1);

let someText9 = "HELLO WORLD";
let charat1 = someText9.charAt(1);
let propertyAcess = someText9[0];
console.log(charat1);
console.log(propertyAcess);

// ------------- STRING SEARCH METHODS
let string1 = "Hello awesome world awesome";
console.log(string1.indexOf('awesome',1));
console.log(string1.lastIndexOf('awesome',20));
console.log(string1.search('Hello'));

let string2 = "Hello HELLO hello";
console.log(string2.match('ello')); // --/ello/g--
console.log(string2.match(/ello/gi));
console.log(string2.includes('sobaka'));
console.log(string2.startsWith('He'));
console.log(string2.endsWith('lo'));

// ------------- TEMPLATE LITERALS

let string3 = `Testing 'template' "literals"`;
document.getElementById("demo37").innerHTML = string3;

let name2 = 'MAX';
let surname2 = "PAIN";
let string4 = `My name is ${name2} and my surname is ${surname2}`;
document.getElementById("demo38").innerHTML = string4;

// ------------- NUMBERS
let number1 = 0.2 + 0.1;
document.getElementById("demo39").innerHTML = number1;

let number2 = "hello" * 23;
document.getElementById("demo40").innerHTML = number2;
document.getElementById("demo41").innerHTML = isNaN(number2);

let number3 = NaN;
let number4 = "22";
let result4 = number3 + number4;
document.getElementById("demo42").innerHTML = result4 + typeof number3;

let result5 = 3/0;
document.getElementById("demo43").innerHTML = result5;

let number5 = 0xFF;
document.getElementById("demo44").innerHTML = number5;

let number6 = new Number(120);
document.getElementById("demo45").innerHTML = number6 + typeof number6;

// ------------- NUMBER METHODS
let number7 = 20;
document.getElementById("demo46").innerHTML = number7.toString() + " " + (30).toString();

let number8 = 3.5456;
document.getElementById("demo47").innerHTML =
  number8.toExponential() +
  "</br>" +
  number8.toExponential(2) +
  "</br>" +
  number8.toExponential(6);  

document.getElementById("demo48").innerHTML = 
  number8.toFixed(0) + 
  "</br>" +
  number8.toFixed(2) +
  "</br>" +
  number8.toFixed(6);

document.getElementById("demo49").innerHTML =
  number8.toPrecision() +
  "</br>" +
  number8.toPrecision(2) +
  "</br>" +
  number8.toPrecision(6);

document.getElementById("demo50").innerHTML = number8.valueOf() + "</br>" + (222).valueOf();

document.getElementById("demo51").innerHTML = 
Number(true) + "<br>" +
Number(false) + "<br>" +
Number(12) + "<br>" +
Number("23") + "<br>" +
Number("1,111") + "<br>" +
Number("20 10");

document.getElementById("demo52").innerHTML = 
parseInt("-43") + "<br>" +
parseInt("2.23") + "<br>" +
parseInt("20 12") + "<br>" +
parseInt("66 hello") + "<br>" +
parseInt("eee 22");

document.getElementById("demo53").innerHTML = 
parseFloat("-212") + "<br>" +
parseFloat("33.33") + "<br>" +
parseFloat("54 ff") + "<br>" +
parseFloat("sss 11");

let number9 = Number.MAX_VALUE;
console.log(number9);

let number10 = Number.MIN_VALUE;
console.log(number10);

let number11 = Number.POSITIVE_INFINITY;
console.log(number11);

let number12 = Number.NEGATIVE_INFINITY;
console.log(number12);

let number13 = Number.NaN;
console.log(number13);

let number14 = 23;
console.log(number14.MAX_VALUE);


///ARRAYS///
const animals1 = ['mouse','cat','dog'];
animals1[0]='not mouse';

const animals2 = [];
animals2[0] = 'lion';
animals2[1] = 'elephant';
animals2[2] = 'zebra';
let animalLast = animals2[animals2.length-1];

const animals3 = new Array("husky","wolf");
animals3.push("dingo");
animals3[animals3.length] = 'dogy';
// Array.isArray(animals3);
// animals3 instanceof Array;

console.log('Arrays----');
console.log(animals1);
console.log(animals2);
console.log(animals3);
console.log(animalLast);
console.log(Array.isArray(animals3));

///ARRAY METHODS///
console.log(animals1.join("-"));
console.log(animals3.pop());
console.log(animals3);
console.log(animals3.push('superCat'));
console.log(animals3);
console.log('shift '+animals3.shift());
console.log(animals3);
console.log('unshift '+animals3.unshift("DOG!"));
console.log(animals3);

const allAnimals = animals1.concat(animals2,animals3);
console.log(allAnimals);
console.log('splice '+allAnimals.splice(1,4,'Kitty'));
console.log(allAnimals);
const allAnimals2 = allAnimals.slice(3);
console.log('slice ');
console.log(allAnimals2)
console.log(allAnimals);

///ARRAY SORT///
console.log("ARRAY SORT");
const array1 = ["B","D", "C","A"];
console.log(array1);
console.log(array1.sort());
console.log(array1.reverse());
const array2 = [1,5,3,2,4];
console.log(array2.sort());
console.log(array1.indexOf("D"));
console.log(array1.lastIndexOf("A"))
const array3 = Array.from("QWERTY");
console.log(array3);
console.log(array3.includes("Q"));

///ARRAY CONST///
const fruits1 = ["Banana", "Watermelon","Apple"];
fruits1[0] = "Strawberry";
fruits1.push("Kiwi");
console.log(fruits1);

const animals4 = ["cat", "dog","mouse"];
console.log(animals4);
{
  const animals4 = ["zebra","lion","simba"]
  console.log(animals4);
}


///DATES///
const date1 = new Date();
document.getElementById("demo54").innerHTML = date1;

// 7 numbers specify year, month, day, hour, minute, second, and millisecond 
const date2 = new Date(2010, 8, 17, 3, 54, 20, 12);
document.getElementById("demo55").innerHTML = date2;

const date3 = new Date(2020);
document.getElementById("demo56").innerHTML = date3;

const date4 = new Date('September 19, 2020 12:12:12');
document.getElementById("demo57").innerHTML = date4;

document.getElementById("demo58").innerHTML = date3.toString();
document.getElementById("demo59").innerHTML = date3.toDateString();
document.getElementById("demo60").innerHTML = date3.toUTCString();
document.getElementById("demo61").innerHTML = date3.toISOString();


///DATE FORMATS///
const date5 = new Date("2020-09-17"); ///ISO Format
document.getElementById("demo62").innerHTML = date5;

const date6 = new Date("09/14/2000"); ///Short date format
document.getElementById("demo63").innerHTML = date6;

const date7 = new Date("Sep 2 2009"); ///Long date format
document.getElementById("demo64").innerHTML = date7;

let parseDate = Date.parse("September 20 2020");
document.getElementById("demo65").innerHTML = parseDate;


///DATE GET METHODS///
const date8 = new Date();
document.getElementById("demo66").innerHTML = date8.getTime();
document.getElementById("demo67").innerHTML = date8.getFullYear();
document.getElementById("demo68").innerHTML = date8.getMonth() + 1;
///----
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo69").innerHTML = months[date8.getMonth()];
///----
document.getElementById("demo70").innerHTML = date8.getDate();
document.getElementById("demo71").innerHTML = date8.getHours();
document.getElementById("demo72").innerHTML = date8.getMinutes();
document.getElementById("demo73").innerHTML = date8.getSeconds();
document.getElementById("demo74").innerHTML = date8.getMilliseconds();
document.getElementById("demo75").innerHTML = date8.getDay();
///----
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo76").innerHTML = days[date8.getDay()];
///----


///DATE SET METHODS///
const date9 = new Date();
date9.setFullYear(2020, 10, 10)
document.getElementById("demo77").innerHTML = date9;

date9.setMonth(11);
document.getElementById("demo78").innerHTML = date9;

date9.setDate(30);
document.getElementById("demo79").innerHTML = date9;

date9.setHours(06);
document.getElementById("demo80").innerHTML = date9;

date9.setMinutes(06);
document.getElementById("demo81").innerHTML = date9;

date9.setSeconds(06);
document.getElementById("demo82").innerHTML = date9;

///JS MATH ///
//Math constants
//Math.E        // returns Euler's number
//Math.PI       // returns PI
//Math.SQRT2    // returns the square root of 2
//Math.SQRT1_2  // returns the square root of 1/2
//Math.LN2      // returns the natural logarithm of 2
//Math.LN10     // returns the natural logarithm of 10
//Math.LOG2E    // returns base 2 logarithm of E
//Math.LOG10E   // returns base 10 logarithm of E

console.log('MATH');
console.log('Math.E '+Math.E);
console.log('Math.PI '+Math.PI);
console.log('Math.SQRT2 '+Math.SQRT2);
console.log('Math.SQRT1_2 '+Math.SQRT1_2);
console.log('Math.LN2 '+Math.LN2);
console.log('Math.LN10 '+Math.LN10);
console.log('MMath.LOG2E '+Math.LOG2E);
console.log('Math.LOG10E '+Math.LOG10E);
console.log('-------');
console.log("Math.round "+Math.round(1.5));
console.log("Math.round "+Math.round(1.3));
console.log("Math.ceil "+Math.ceil(1.1));
console.log("Math.floor "+Math.floor(1.7));
console.log("Math.trunc "+Math.trunc(3.7));
console.log("Math.sign "+Math.sign(-3.5));
console.log("Math.pow "+Math.pow(2,3));
console.log("Math.sqrt "+Math.sqrt(25));
console.log("Math.abs "+Math.abs(-23.4));
console.log("Math.sin "+Math.sin(90 * Math.PI / 180));
console.log("Math.cos "+Math.cos(0 * Math.PI / 180));
console.log("Math.min "+Math.min(2, 3, 4, 5.2, 1.2));
console.log("Math.max "+Math.max(2, 3, 4, 5.2, 1.2));
console.log("Math.random "+Math.random());
console.log("Math.log "+Math.log(3));
console.log("Math.log2 "+Math.log2(3));
console.log("Math.log10 "+Math.log10(3));


///MATH RANDOM///
document.getElementById("demo84").innerHTML = Math.random();
document.getElementById("demo85").innerHTML = Math.floor(Math.random()*10); // Returns a random integer from 0 to 9
document.getElementById("demo86").innerHTML = Math.floor(Math.random()*10) + 1; // Returns a random integer from 1 to 10


///BOOLEANS///
console.log('----------');
console.log('BOOLEANS');
console.log('10==9 '+Boolean(10==9));
console.log('0 is not boolean - ' + Boolean(0));
console.log('-0 is not boolean - ' + Boolean(-0));
console.log('empty string is not boolean - ' + Boolean(""));
console.log('undefinded value is not boolean - ' + Boolean());
console.log('null value is not boolean - ' + Boolean(null));
console.log('false value is not boolean - ' + Boolean(false));
console.log('NaN value is not boolean - ' + Boolean(NaN));

///COMPARISON///
let compare1 = 5;
document.getElementById("demo87").innerHTML = (compare1==5); //true
document.getElementById("demo88").innerHTML = (compare1=='5');//true
document.getElementById("demo89").innerHTML = (compare1==8);//false

document.getElementById("demo90").innerHTML = (compare1===5);//true
document.getElementById("demo91").innerHTML = (compare1==='5');//false
document.getElementById("demo92").innerHTML = (compare1===8);//false

document.getElementById("demo93").innerHTML = (compare1!=2);//true
document.getElementById("demo94").innerHTML = (compare1!=="5");//true

document.getElementById("demo95").innerHTML = (compare1>8);//false
document.getElementById("demo96").innerHTML = (compare1<8);//true

document.getElementById("demo97").innerHTML = (compare1<=8);//true
document.getElementById("demo98").innerHTML = (compare1>=8);//false


///IF ELSE STATEMENT///
console.log('------IF ELSE------')
let number15 = 10;
if (number15 > 10){
  console.log('Number is greater than 10!');
} else if (number15 < 10){
  console.log('Number in lower than 10!');
} else {
  console.log('Its 10!');
}


///SWITCH///
console.log('----SWITCH----');
animal1 = 'DOG';
switch(animal1) {
  case 'CAT':
    console.log("I am a cat")
    break;
  case 'DOG':
    console.log("I am a dog")
    break;
  default :
  console.log('There is no animal...')
}