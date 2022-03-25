document.getElementById("demo2").innerHTML = 4 + 4;

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("demo").style.backgroundColor = "red";
  document.getElementById("demo").style.fontSize = "40px";
}

function myFunction2() {
  window.alert(
    "После того, как вы нажмете ОК, вас выебут в рот. Вы уверены в своем выборе?"
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