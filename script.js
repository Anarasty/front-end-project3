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

var creature = 'elf';
{
  var creature = "gnome";
}

console.log(creature);

// ---
let animal = 'cat';
{
  let animal = 'dog';
}

console.log('the animal is ' + animal);

// ---
const numberTest = 13.13;
//numberTest = 20; //THIS WILL GIVE AN ERROR
// numberTest = numberTest + 10;//THIS WILL GIVE AN ERROR
console.log('number is ' + numberTest);

// ---
function myFunction7(){
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
  document.getElementById("demoArray2").innerHTML = juice.water + juice.shugar + juice.dop + juice.color;
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