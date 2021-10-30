



// !--------------->>>>>>>>>>>>> Episode-1

// document.write("Name : Maruf<br/>");
// document.write("Phone : 765t43876");


// ? ways to make variables

// ? NO-1

// var name = "Maruf"
// var age = 22
// document.write(name);
// document.write(age);

// ? NO-2    [Don't recommended]

// var name;
// var age;
// name = "Harun";
// age = 22;
// document.write(name);
// document.write(age);
// ? NO-3   [MOstly recommended]
// var name, age;
// name = "Harun"; 
// age = 22;
// document.write(name);
// document.write(age);

// ? converting to string

// var num = 33;
// hum = toString(num);

// ? converting to integer

// var num = 33;
// hum = parseInt(num);

// ? converting to float {দশমিক}

// var num = 33;
// hum = parseFloat(num); 

// ? identyfing data type

// console.log(typeof(hum));

// ? tofixed and toprecision

// var num = 3.1256
// console.log(num.toFixed(3)); [//! after decimal it is counted ]
// console.log(num.toPrecision(3)); [//! it is counted from the start]

// ? Boolean

// console.log(Number(true))       ==> 1
// console.log(Number(false))      ==> 0

// ? number function
// console.log(Number("33"))       ==> number
// console.log(Number("33.5"))     ==> number


// ? string  concatenation


// ? concat  { It is a library function}

// var text1 = "Bangladesh ";
// var text2 = "is a beautiful country.";
// document.write(text1.concat(text2));

// ? OR

// var text = text1.concat(text2);
// document.write(text);

// ? OR --    { It's not a library function}

// var num1 = 20;
// var num2 = 10;

// document.write("num1="+(num1++) + " and num2="+(num2++)) ;

// ?OR

// document.write("num1="+ num1 + " and num2="+ num2) ;



// ? Length

// var name = "Birulia"
// document.write("number of character " + name.length);

// ? OR

// var name = "Birulia";
// var len =  name.length;
// document.write("number of character " + len);

// ? prompt  [ get data from user]
//  var name = prompt("Find the value:");
//  document.write("The length is "+ name.length);

// ? charAt
// var text = "Bangladesh"
// document.write(text.charAt(3));

// ? uppercase

// var text = "Bangladesh"
// text = text.toUpperCase();
// console.log(text);

// ? lowercase 

// var text = "Bangladesh"
// text = text.toLowerCase();
// console.log(text);

// ? Slice 

// var text = "MAruf2Hossain"
// document.write(text.slice(5,10));

// ? task-1

// var firstName = " Maruf";
// var lastName = "Hussein";
// var fullName = firstName + " " + lastName;
// document.write(fullName);
// document.write(" Total length of fullname is = " + fullName.length);
// document.write(fullName.toUpperCase());

// ? Operators

// arithmetics operators ==>  +,-,*,/,%(modulous),**(exponent),++,--
// assignment operators  ==>  =,+=,-=,*=,/=,%=,**=

// var x = 3;

// x += 4; //[x = x + 4]
// console.log(x);
// x -= 4; // [x = x - 4]
// console.log(x);
// x *= 4; // [x = x * 4]
// console.log(x);
// x /= 4; // [x = x / 4]
// console.log(x);

// ? making simple calculator

// ? task-2

// var num1 = prompt("Enter your first number : ");
// var num2 = prompt("Enter your last number : ");

// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);

// var add, sub, mul, div, mod, ast;

// add = num1 + num2;
// document.write(num1 + " + " + num2 + " = " + add + "<br/>");

// sub = num1 - num2;
// document.write(num1 + " - " + num2 + " = " + sub + "<br/>");

// mul = num1 * num2;
// document.write(num1 + " * " + num2 + " = " + mul + "<br/>");

// div = num1 / num2;
// document.write(num1 + " / " + num2 + " = " + div + "<br/>");

// mod = num1 % num2;
// document.write(num1 + " % " + num2 + " = " + mod + "<br/>");

// ast = num1 ** num2;
// document.write(num1 + " ** " + num2 + " =  " + ast);  


// !--------------->>>>>>>>>>>>> Episode-10


// ? various types of shapes
// var base = prompt("Enter your base");
// var height = prompt("Enter your height");
// area  = (base * height);
// area  = (base * height)/2;
// area  = (base *  perheight)/2;
// area  = (base * height)/2;
// document.write("area = " + area); 


// !--------------->>>>>>>>>>>>> Episode-11


// ?  exchanging calculator

// var far = prompt("Farenheit :");
// cel = (far - 32)*5/9;
// document.write("celsius = " + cel+"°C");

// var far = prompt("Farenheit :");
// cel = (far − 32)*5/9;
// document.write("celsius = " + cel+"°C");

// var inch = prompt("inch :");
// meter = inch / 39.37;
// document.write("meter ="+ meter);

// ?    BMI calculator
// var weight = prompt("Enter your weight :");
// var height = prompt("Enter your height :");
// height = Math.pow(height,2);
// BMI = weight/height;
// document.write("BMI = "+BMI);


// !--------------->>>>>>>>>>>>> Episode-12


// ? Operators

// ? Relational --->  >,>=,<,=<,==,===,!=,!==
// ? Logical    --->  && , || , !

//   == means only detect the value.
//   === means detect both data type and value.
// ?   && and
// ?  || or
// ? !--> it divert the result.
//  console.log(!(5>10));
//   true.


// !--------------->>>>>>>>>>>>> Episode-13

// ? if, else if , else

// var num = prompt("Enter your value :");

// if (num%2==0) {
//   document.write("even");
// }
// else{
//   document.write("odd");

// }

// var num = 13;

// if (num < 0) {
//   document.write("positive");
// } else if(num>0) {
//   document.write("negative");}

//  else { 
//   document.write("Zero");
// }

// ? 


// ? user grade 

// var marks = prompt("Enter your marks:")

// if (marks >= 80) {
//   document.write("A+");
// }
// else if (marks >= 70) {
//   document.write("A");
// }
// else if (marks >= 60) {
//   document.write("A-");
// }
// else if (marks >= 50) {
//   document.write("B");
// }
// else if (marks >= 40) {
//   document.write("C");
// }
// else if (marks >= 33) {
//   document.write("D");
// }
// else {
//   document.write("F");
// }

// ? OR

// !--------------->>>>>>>>>>>>> Episode-14 

// var marks = prompt("Enter your marks:")
// if (marks > 100 || marks < 0) {
//   document.write("Invalid marks");
// }

// else if (marks >= 80 && marks <= 100) {
//   document.write("A+");
// }
// else if (marks >= 70 && marks <= 79) {
//   document.write("A");
// }
// else if (marks >= 60 && marks <= 69) {
//   document.write("A-");
// }
// else if (marks >= 50 && marks <= 59) {
//   document.write("B");
// }
// else if (marks >= 40 && marks <= 49) {
//   document.write("C");
// }
// else if (marks >= 33 && marks <= 39) {
//   document.write("D");
// }
// else {
//   document.write("F");
// } 


// !--------------->>>>>>>>>>>>> Episode-15


// ? Identifying the large number

// var num1 = prompt("Enter your number :");
// var num2 = prompt("Enter your number :");
// var num3 = prompt("Enter your number :");

// if (num1>num2 && num1>num3) {
//   document.write("The larger number = "+ num1++);
// }
// if (num2>num1 && num2>num3) {
//   document.write("The larger number = "+ num2++);
// }
// if (num3>num2 && num3>num1) {
//   document.write("The larger number = "+ num3++);
// }

// ? Identifying vowel /consonant

// var letter = prompt("Enter your letter:")
// letter=(letter.toLowerCase());
// if (letter == "a"|| letter == "i"|| letter =="e"|| letter == "o"|| letter=="u") {
//   document.write("Vowel");
// }
// else{
//   document.write("consonant");
// }

// !--------------->>>>>>>>>>>>> Episode-16

// ? digit spelling

// var digit = prompt("Enter your digit :");

// if (digit == 0) {
//   console.log("ZERO");
// }
// else if (digit == 1) {
//   console.log("One");
// }
// else if (digit == 2) {
//   console.log("Two");
// }
// else if (digit == 3) {
//   console.log("Three");
// }
// else if (digit == 4) {
//   console.log("Four");
// }
// else if (digit == 5) {
//   console.log("Five");
// }
// else if (digit == 6) {
//   console.log("Six");
// }
// else if (digit == 7) {
//   console.log("Seven");
// }
// else if (digit == 8) {
//   console.log("Eight");
// }
// else if (digit == 9) {

//   console.log("Nine");
// }
// else {
//   console.log("Invalid digit");
// }

// ? Using switch method

// var digit = prompt("Enter your digit :");

// switch (digit) {
//   case "0":
//     console.log("Zero");
//     break;
//   case "1":
//     console.log("One");
//     break;
//   case "2":
//     console.log("Two");
//     break;
//   case "3":
//     console.log("Three");
//     break;
//   case "4":
//     console.log("Four");
//     break;
//   case "5":
//     console.log("Five");
//     break;
//   case "6":
//     console.log("Six");
//     break;
//   case "7":
//     console.log("Seven");
//     break;
//   case "8":
//     console.log("Eight");
//     break;
//   case "9":
//     console.log("Nine");
//     break;

//   default:
//     console.log("Invalid digit");
// }

// ? identifying vowel or consonant using switch (Task - 5)

// var letter = prompt("Input any letter :");
// letter = letter.toLowerCase();

// switch (letter) {
//   case "a":
//      console.log("vowel");
//      break;
//   case "e":
//      console.log("vowel");
//      break;
//   case "i":
//      console.log("vowel");
//      break;
//   case "o":
//      console.log("vowel");
//      break;
//   case "u":
//     console.log("vowel");
//     break;

//   default:
//     console.log("consonant");
// }


// !--------------->>>>>>>>>>>>> Episode-16


// ? for loop

// for(starting; condition ; update){
//   document.write("___________");
// }

// for (var x = 2; x<=6;x++){
//   document.write("<h1> Hello  </h1>");
// }
// for (var x = 0; x<=200; x= x+5){
//   document.write(" "+ x);
// }
// for (var x = 20; x>=2; x= x-1){
//   document.write(" "+ x);
// }
// document.write("<h1>End</h1>");


// !--------------->>>>>>>>>>>>> Episode-17



// ? addition of some numbers

// var sum = 0;
// for (var x = 1; x <= 3; x++

// ) {
//   sum = sum + x;

// }

// document.write(sum);


// !--------------->>>>>>>>>>>>> Episode-18



// ? get value from user

// var m = parseInt(prompt("Enter your first number : "));
// var n = parseInt(prompt("Enter your second number : "));
// var sum = 0;
// for (var x = m; x <= n; x = x + 1) {
//   sum = sum + x;
// }
// document.write(sum);

// ? run a programme multiple time which got from user

// for(var x = 1 ;x<=5;x++  ){

//   var m = parseInt(prompt("Enter first value :"));
//   var n = parseInt(prompt("Enter second value :"));

//   sum = m + n;
//   console.log(sum);
// }


// -\!--------------->>>>>>>>>>>>> Episode-19

// ! while loop


// ? find the value of 1 --> 10 addition

// var x = 1;
// var sum = 0;

// while (x <= 10) {
//     sum = sum + x;
//     x++;
// }
// document.write(sum);

// ?? task - 6
// write a programme that will sum of those numbers which are divisible by 3 and 5 the area is 1-100
// var x = 1;
// var sum = 0;
// while (x <= 50) {
//     if (x % 3 == 0 && x % 5 == 0) {
//         sum = sum + x;
//         document.write(" " + x);
//     }
//     x = x + 1;

// }
// document.write(" sum =" + sum);


// !--------------->>>>>>>>>>>>> Episode-20

// ? do while loop

// var x = 1;
// do{
//     document.write(" "+x);
//     x++;
// } while (x<=10) ;



// !--------------->>>>>>>>>>>>> Episode-21

// ? break and continue + practice by changing  

// for (var i =1;i <=20;i++ ){
//     if (i==10) {
//         break;
//     }
//     document.write(" "+i);
// }
// for (var i =1;i <=20;i++ ){
//     if (i==10) {
//         continue;
//     }
//     document.write(" "+i);
// }

// !--------------->>>>>>>>>>>>> Episode-22

// ? ternary operator

// var number = Number(prompt("Enter your number :"));

// var num= number>0 ? "Positive" :number<0 ? "Negative":"Zero";
// document.write(num);

// let x = -30;
// let cantine = x<0 ? "Negative" : "Positive";
// console.log(cantine);
// let x = 30;
// let cantine = x<0 ? "Negative" : x>0 ? "Positive":"Zero"
// console.log(cantine);

// ? write a programme to find the highest number between three numbers using tarnery operator.


// ! creating a function




// function maruf(num, cum) {
//     var result = num * cum;
//     return result;
// }

// document.write(maruf(6, 45) + " " + "<br/>");





// ! 
// function addition(num1,num2){
// var result = num1+num2;
// document.write(" "+result+"<br/>");

// }

// addition(3,4);
// addition(30,40);
// addition(13,14);
// ! 

// function subtion(num1,num2){
//     var result = num1-num2;
//     document.write(" "+result+"<br/>");

// }
// subtion(23,4);
// subtion(30,40);
// subtion(13,14);

// ! let's create it using function Constuctor

// function Profile(name, age, clas, lang) {
//     this.name = name;
//     this.age = age;
//     this.clas = clas;
//     this.lang = lang;


// ?  function inside function

//     this.display = function () {

//         document.write(this.name+"<br/>");
//         document.write(this.age+"<br/>");
//         document.write(this.clas+"<br/>");
//         document.write(this.lang+"<br/>");
//     }
// }

// var student1 = new Profile("Maruf", 22, 14, ["Bangla", "English"]);
// var student2 = new Profile("Faruk", 32, 14, ["Bangla", "English"]);
// var student3 = new Profile("Ariff", 24, 14, ["Bangla", "English"]);


// student1.display();
// student2.display();
// student3.display();

// document.write(student1.name);
// document.write(student2.name);
// document.write(student3.name);
// document.write(student3.lang);


// ? make a calculator using function

// !--------------->>>>>>>>>>>>> Episode-23

// ? arrays

// var games = ["Free Fire","Pubg","Annihilation","Faug"];
// console.log(games.push("GTA"));
// console.log(games);
// games.pop();
// console.log(games);

// ! arrays -->

// var names = new Array(5);
// names[0]="monir"
// names[1]="monik"
// names[2]="manik"
// names[3]="onik"
// names[4]="monika"
// console.log(names[2]);
// czonsole.log(names.length;

// ? concat on arrays

// var country1 = ["Bangladesh", "India"]
// var country2 = ["Qatar", "Qwait"]

// desh = country1.concat(country2);
// console.log(desh);

// !--------------->>>>>>>>>>>>> Episode-24

// !--------------->>>>>>>>>>>>> Episode-26

// ! array's library function

// push(),pop(),concat(),shift(),unshift(),splice(),slice(),sort(),reverse()

// var games = ["Free Fire","Pubg","Annihilation","Faug","Gameloft"];

// ! push 

// games.push("Fifa");
// console.log(games);

// ! pop

// games.pop();
// console.log(games);

// ! shift

// games.shift();             //? opposite of pop
// console.log(games);

// ! unshift

// games.unshift("Gameloft")  //? opoosite of push
// console.log(games);

// ! splice

// var games = ["Free Fire","Pubg","Annihilation","Faug","Gameloft"];

// games.splice(3,2,"New Orleans","Vice City","Monacco","Mafia","Gangster");
// console.log(games);

// var games = ["Free Fire", "Pubg", "Annihilation", "Faug", "Gameloft", "Hungry Shark", "Sa"];

// games.splice(4,1);
// console.log(games);

// ! slice

// var newArray = games.slice(2);
// console.log(newArray);

// ! sort

// var sorted = games.sort();
// games.reverse();
// console.log(sorted);






// ! sort in numbers

// var numbers = [3,435,533,566,3425,64366,343,4,5,344,34];
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);

// ? loop in Array

// var marks = [10, 20, 30, 40, 50];
// sum = 0;
// for (var i = 0; i < 5; i++) {
//     console.log(marks[i]);
//     sum = sum + marks[i];
// }
// console.log(sum);


// var marks = new Array();

// ? Or

// var number = [];
// var sum = 0;
// for (var i = 0; i <= 5; i++) {
//     number[i] = parseInt(prompt("Enter your number :"));
//     console.log(number[i]);
//     sum = sum + number[i];
// }
// document.write("Total = "+ sum);



// !  Math object

// run in console

// ? for square

// var sqr = Math.sqrt(16);
// document.write(sqr);


// var abs = Math.abs(-160);
// document.write(abs);


// var sin = Math.sin(160);
// document.write(sin);


// var cos = Math.cos(80);
// document.write(cos);


// var cos = Math.cos(80);
// document.write(cos);


// Math.floor(4.6);

// Math.ceil(4.6);

// Math.round(4.6);

// Math.max(4,6,-5);

// Math.min(4,6,-5);

// ? usage of Math Object

// var num1 = parseInt(prompt("Enter first number :"));
// var num2 = parseInt(prompt("Enter second number :"));

// var max546 = Math.max(num1,num2);
// document.write(max546);


// ? Math.random

// Math.random(); //! [Numbers from 0 to less than 1]

// Math.random()*6;  //! [Numbers inside 0 to 5]

// Math.floor(Math.random()*6); //! integer low from 0 to 5 

// Math.floor(Math.random()*5) + 1; //! integer low from 1 to 5 

// Math.floor(Math.random()*11) + 10; //! iteger low from 10 to 20 


// ! guessing game 


// var numOfWon = 0;
// var numOfLost = 0;

// for (var i = 0; i <= 100; i++) {

//     var userNum = parseInt(prompt("Enter a number:"));
//     var randomNum = Math.floor((Math.random() * 5) + 1);


//     if (userNum == randomNum) {
//         document.write("Congratulations! You have won." + "<br/>");
//         numOfWon++;
//     }
//     else {
//         document.write("You have lost. The number was = " + randomNum + "<br/>");
//         numOfLost++;

//     }

// }

// document.write("Total num of won = " + numOfWon + "<br/>");
// document.write("Total num of lost = " + numOfLost + "<br/>");

// ! date object

// var date = new Date();
// console.log(date);

// var year = date.getFullYear();
// console.log(year);

// var month = date.getMonth();
// console.log(month);

// var day = date.getDay();
// console.log(day);

// var Time = date.getTime();
// console.log(Time);

// var hour = date.getHours();
// console.log(hour);

// var minutes = date.getMinutes();
// console.log(minutes);


// ! DOM

// document.getElementById("heading1").innerHTML="goodbye"
// document.getElementById("heading2").innerHTML="goodbye"

// document.getElementsByClassName("heading1").innerHTML="Hello"

// document.getElementsByClassName("heading1")[1].innerHTML="Hello1" 

// ! query selector

// ? in id

// document.querySelector("#heading1").innerHTML="Myself"
// document.querySelector(".heading1").innerHTML="Yourself"
// document.querySelector("p").innerHTML="Themselves"

// document.querySelector("a").innerHTML="changed";
// document.querySelector("li a").innerHTML="changed";
// document.querySelector("div a").innerHTML="changed";


// document.querySelectorAll("li")[1].innerHTML="changed";

// ! event handler to onclick event 

// function myMessage() {
//     alert("Hello man");
// }

// function myMessage1() {
//     alert("Hello world");
// }

// function myMessage2() {
//     alert("I am groot");
// }

// function myMind(){
//     document.querySelector("#para").innerHTML="See you not for mind"
// }

// function myMind2(){
//     document.querySelector("#para").innerHTML="Have ralax"
// }
// var helloe=document.querySelector("#myImage");
// function myPicture(){
// helloe.src="img/bg.jpg";

// function myPicture2(){
// helloe.src="img/bg1.jpg";
// }

// var myVar = document.querySelector("#myImg");
// function myPicture(){
//     myVar.src="img/bg.jpg";
// }


// ? don't know why class is not supported in this case

// // var ele =document.createElement("h1");
// // var text =document.createTextNode("HEllo everyone");

// // ele.appendChild(text);

// // var findDiv=document.getElementsByClassName("myDiv");
// // findDiv.appendChild(ele);

// // var heading = document.createElement("h2");
// // var text = document.createTextNode("This is  text node");
// // heading.appendChild(text);

// // var hiding = document.getElementsByClassName("myDiv");
// // hiding.appendChild(heading);

// ! creating an element

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("This is text node");
// heading3.appendChild(text);

// ^ var myDiv = document.querySelector("#my-Div");
// myDiv.appendChild(heading3);


// ! removing child

// var myDiv = document.querySelector("#my-Div");
// var remove = document.getElementsByTagName("h1")[1];
// myDiv.removeChild(remove);

// ! insert child before one another

// var myDiv = document.getElementById("my-Div");
// var newChild = document.createElement("h1");
// var text = document.createTextNode("what are you thinking");
// newChild.appendChild(text);
// var hello = document.getElementsByTagName("h1")[1];
// myDiv.insertBefore(newChild, hello)

// ! adding or removing class

// var addclass = document.getElementById("my-Div").classList;
// var addclass = document.getElementById("my-Div").classList.add("anyClassName");
// var addclass = document.getElementById("my-Div").classList.remove("anyClassName");   //? {try these on console}




// //! replace child

// var myDiv = document.getElementById("my-Div");
// var newChild = document.createElement("h1");
// var text = document.createTextNode("what are you thinking");
// newChild.appendChild(text);
// var hello = document.getElementsByTagName("h1")[1];
// myDiv.replaceChild(newChild, hello)



// ! remove child

// var myDiv = document.getElementById("my-Div");

// var hello = document.getElementsByTagName("h1")[1];
// myDiv.removeChild( hello)


// ! image slider

// var photos = ["img/bg.jpg", "img/bg1.jpg", "img/contact.jpg"];

// var imgTag = document.querySelector("img");

// var count = 0;
// function next() {

//     count++;

//     if (count>=photos.length) {
//         count=0;
//         imgTag.src = photos[count];
//     }
//     else{
//         imgTag.src = photos[count];
//     }


// }



// function prev() {

//     count--;

//     if (count<0) {
//         count=photos.length-1;
//         imgTag.src = photos[count];
//     }
//     else{
//         imgTag.src = photos[count];
//     }

// }

// ! selecting dynamic  css on javascript

// function addStyle() {
//     var myText = document.querySelector("#paraid");
//     myText.classList.add("para-style");

// }
// function removeStyle() {
//     var myText = document.querySelector("#paraid");
//     myText.classList.remove("para-style");

// }

// ! event listener

// var clickme = document.querySelector("button");
// clickme.addEventListener("click",myFunction);

// function myFunction(){
//     alert("HI Hoe");
// }

// ! anonymous function

// var clickme = document.querySelector("button");
// clickme.addEventListener("click",function myFunction(){
//     alert("HI Hoe");
// })

// var myVar = document.querySelector("h1");
// myVar.addEventListener("mouseover",myFunction)
// function myFunction(){
//     myVar.classList.add("para-style");
// }
// myVar.addEventListener("mouseout",myFunction2)
// function myFunction2(){
//     myVar.classList.remove("para-style");
// }

// ? event listener on multiple element


// var button = document.querySelectorAll("button")[0];
// button.addEventListener("click",function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML= text + " is clicked"
// });
// var button = document.querySelectorAll("button")[1];
// button.addEventListener("click",function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML= text + " is clicked"
// });
// var button = document.querySelectorAll("button")[2];
// button.addEventListener("click",function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML= text + " is clicked"
// });

// or

// for (var u = 0;u<len;u++)
// {
//     var button = document.querySelectorAll("button")[u];
//     button.addEventListener("click",function () {
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML= text + " is clicked"
//     });
// }


// ? audio playing

// for(var i = 0;i<3;i++){
//     document.querySelectorAll(".button")[i].addEventListener("click",function () {
//     var text = this.innerHTML;
//     autoplay(text);
// })

// }

// function autoplay(text) {

//     switch (text) {
//         case "a": var audio = new Audio("sounds/a.mp3");
//         audio.play();			// start playing audio
//             break;

//         case "b": var audio = new Audio("sounds/b.mp3");
//         audio.play();			// start playing audio
//             break;

//         case "c": var audio = new Audio("sounds/c.mp3");
//         audio.play();
// 			// start playing audio
//             break;

//         default:
//             break;
//     }

// }


// !  playing Animation with keypress

// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         audioPlay(text);
//         playAnimation(text); 

//     });

//     function audioPlay(text) {
//         switch (text) {
//             case "a":
//                 var audio = new Audio("sounds/a.mp3");
//                 audio.play();			// start playing audio
//                 break;
//             case "b":
//                 var audio = new Audio("sounds/b.mp3");
//                 audio.play();			// start playing audio
//                 break;
//             case "c":
//                 var audio = new Audio("sounds/c.mp3");
//                 audio.play();			// start playing audio
//                 break;

//             default:
//                 break;
//         }
//     }

// }
//     function playAnimation(text) {

//       var selectedButton = document.querySelector("."+text);
//       selectedButton.classList.add("anim");

//       setTimeout(function()  {
//       selectedButton.classList.remove("anim");

//       }, 1000);

//     }

//     document.addEventListener("keypress",function (event) {
//         var key = event.key;
//         audioPlay(key);
//         playAnimation(key); 
//     });

    

// !  Keypress

// count = 0 ;
// document.querySelector("textarea").addEventListener("keypress",function (event) {
//     count++;
//     var press = event.key;
//     document.querySelector("p").innerHTML="You have pressed "+ count+ " number "
// });


// ! Canvas


// var c = document.getElementById("myCanvas");

// var ctx = c.getContext("2d");

// ctx.strokeStyle = "black"
// ctx.strokeRect(10,10,380,280)


// ctx.lineWidth = 3;
// ctx.strokeStyle = "black"
// ctx.strokeRect(10, 10, 380, 280);

// ctx.fillStyle = "green"
// ctx.fillRect(12, 12, 376, 276);

// var centerX = c.width / 2;
// var centerY = c.height / 2;

// ctx.beginPath();

// ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);

// ctx.fillStyle = "red";
// ctx.fill();
// ctx.strokeStyle = "white"
// ctx.stroke();



// ! try catch error handling

// try {
//    alert("Hello") 
//    alert(X)} 
//  catch (error) {
//     console.log("catch me");
//     console.log(error);
//     console.log(error.name);
// }
// finally{

//     alert("I am groot.") 
// }


// document.querySelector("#checkButton").addEventListener("click", function () {
//     var num = document.querySelector("#textField").value;


//     try {
//         if (num < 5) {
//             throw "this value is too low"

//         }
//         else if (num > 10) {
//             throw "this value is too high"
//         }
//     }

//     catch (error) {

//         console.log(error);
//     }


// });

// ! introducing to ES6

// var p = 7;

// if (true) {
//     p=5;
// }
// document.write(p);
// result will be 7


// !  let

// let p = 7;

// if (true) {
//     let p=5;
// }
// document.write(p);

// ! const

// const  c = 6;

// if (true) {
//      c = 5;
// }
// console.log(c)

// let i = 33;
// for(let i = 0; i<=5;i++){
//     console.log(i);
// }
// console.log(i);

// let x = 35;
// let y = 37;

// sum = x + y;

// console.log(`The sum is ${sum}, Isn't it right ? `)


// let name = "Maruf Hossain";
// let age = 22;



// console.log(`My name is ${name} and my age is ${age}.`)


// ? normal function declaring

// function myFunction(x,y){
//     sum = x+y;
//     console.log(sum);
// }
// myFunction(20,23);




// ! function declaring on ES6  

// const myFunction = (x, y) => {

//     sum = x + y;
//     console.log(sum);

// }
// myFunction(20,30);


// !  hoisting

// x = 30;
// console.log(x);
// var x;

// x = 30;
// console.log(x);
// const/let x;


// p = 10
// if (true) {
//     console.log(`y = ${p}`);
//     var p;
// }

// ! strict mode 
// "use strict"
// i = 20;
// console.log(i)

// ! default parameter

// function myFunction(para = "There is no parameter in that function.") {
//     console.log(`${para}`);
// }
// myFunction();

// !  rest parameter

// function myFunction(x,y,...z) {
//     console.log(`x = ${x} y = ${y} z = ${z}`)
// }
// myFunction(10,20,30,40,50,60);

// ! spread operator

// function myFunction(x, y, z) {
//    return x + y + z;
// }
// let numbers = [3,5,2];
// console.log(myFunction(numbers[0],numbers[1],numbers[2]));


// function myFunction(x, y, z) {
//     return x + y + z;
//  }
 
//  let numbers1 = [3,5,2];
//  console.log(myFunction(...numbers1));

// let numbers1 = [3,5,2];
// let numbers2 = [1,6];
// let numbers = [...numbers1,...numbers2]
// console.log(numbers);



// ! variables and function declaration in ES6

// ? just use let instead of var

// ! on const you can't change the value

// ? function declaring on ES6

// const add = (x,y) =>
// {
//     let sum = x + y ;
//     console.log(sum);
// }
// add(3,5);

// ? string concatenation on ES6

// let name = "Maruf";
// let message = `I am ${name}`;
// let address = "I live in Birulia in Savar in Dhaka."


// console.log(
// `${message}
// ${address}
// ${name}`);

// hoisting 
// "use strict"
// x = 10;
// console.log(x);
// const/let x;

// ! default parameter
// function myFunction(text = "Don't forget to subscribe.") {
//     console.log(`${text}`);
// }
// myFunction();
// myFunction("I love my country.");

// ! rest parameter

// function myFunction(x, y, ...z) {
//     console.log(`x = ${x},y = ${y}, z = ${z}`);
// }
// myFunction(10, 15,34,343,2343,123424,5);


// ! spread parameter

// function myFunction(x, y, z) {
//     return (x + y + z);
// }
// let numbers = [3,4,2];
// ? normal
// console.log(myFunction(numbers[0],numbers[1],numbers[2]));
// ? spread parameter
// console.log(myFunction(...numbers));
// ! concatening 
// let num1 = [4,6,8];
// let num2 = [2,10];

// let num = [566,565,...num2,88];
// console.log(`${num}`);

// ! spread operator on Objects

// let p1 = {
//     name : "Maruf",
//     age : 23
// }
// let p2 = {
//     name1 : "Faruk",
//     age2 : 33
// }

// let p = { ...p1, ...p2 };
// console.log(p);

// ! Object literals

// ! Old 
// function myInfo(name,address) {
//     return {
//         name : name,
//         address : address
//     }
// }console.log(myInfo("Sharif","Birulia"));

// ! ES6
// function myFunction(name,age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(myFunction("Maruf Hossain",23));


// ! methods in Objects

// ! old

// let message = {
//     body:function () {
//         return alert("Hello world");
//     }
// }
// console.log(message.body());

// ! ES6 

// let message = {
//     body() {
//         return alert("Hello world");
//     }
// };
// console.log(message.body());

// let messages = {
//     'any name'(){
//         return alert("I love my Allah");
//     }
// };
// console.log(messages['any name']);

// //! practice 
// // let message = {
// //     'any name'(){
// //         return "Can you remember it."
// //     }
// // }
// // console.log(message['any name']);


// // let messages = {
// //     body : function () {
// //         return "Nothing to show";
// //     }
// // }

// //! ES6

// // console.log(messages.body());
// // let messages = {
// //     body () {
// //         return "Nothing to show";
// //     }
// // }
// // console.log(messages.body());


// //! old
// // function studentInfo(name,age) {
// //     return{
// //         name:name,
// //         age:age
// //     }
// // }
// // console.log(studentInfo("Maruf",23));


// //! ES6
// // function studentInfo(name,age) {
// //     return{
// //         name,
// //         age
// //     }
// // }
// // console.log(studentInfo("Maruf",23));

// ! for of { uses in string }
// const numbers = ["Maruf","Faruk","Arif"];

// for (const num of numbers) {
//    console.log(num)
// }

// ! for in { uses in objects }
// const profile = {
//     name:"Maruf",
//     age:23,
//     address: "Birulia"
// }

// for (let x in profile) {
//      console.log(`${x}:${profile[x]}`);
// }


// ! forEach

// const numbers = [4,6,87,32,11];
// numbers.forEach(function(x) {
//     console.log(x);
// });

// ? add 5 with every numbers in the array

// const numbers = [4,6,87,32,11];
// numbers.forEach(function(x,index,array) {
//    array[index] = x + 5;
// });
// console.log(numbers);

// ? make square of each number of the arry
// const numbers = [4, 6, 87, 32, 11];
// var squareResults = [];

// numbers.forEach(function (x) {
//     squareResults.push(x * x);
//     })
//     console.log(squareResults);

// ! Map { declare an array automatically + need to put in variable }

// var numbers = [3, 5, 32, 5, 7, 5, 33];
// var squareNumbers = numbers.map(function (x) {

//     return x * x;

// });
// console.log(squareNumbers);


// ! filter

// const numbers = [5, 4, 3, 44, 6];
// let newNumbers = numbers.filter(function (x) {
//     return x>5;
// });
// document.write(newNumbers);
// console.log(newNumbers);

// ! old
// function myFunc() {
//     return character.filter(function (x) {
//         return x.age > 20;
//     }).map(function (y) {
//         return y.name;
//     })
// }
// console.log(myFunc());

// !  ES6

// const callFunc2 = () => {
//     return person.filter((x) => x.age>20).map((y)=>y.name);
// }
// console.log(callFunc2());

// const callFunc2 = () =>{return person.filter((x)=>x.gpa>4).map((y)=>y.name)};

// console.log(callFunc2());

// ! arrow function


// function myFunction2(num1,num2) {
//     document.write (num1 + num2 ) ;
// }
// myFunction2(3,4);

// const division = (num1,num2) => num1 / num2;

// console.log(division(9,6));

//  const message = () =>   "My name is Maruf";//return will not be given at the time of curly brackets.

// console.log(message());


// ! arrow function 2

// ! practicing arrow function in objects

// const public = [
//     {   
//         id   : 101,
//         name : "Alex",
//         age : 35
//     },
//     {   
//         id   : 102,
//         name : "James",
//         age : 23
//     },
//     {   
//         id   : 103,
//         name : "Haris",
//         age : 30
//     }
// ]

// function check() {
//    return public.filter(function (x) {
//         return x.age>=30;
//     }).map(function (y) {
//         return y.name;
//     })
// }
// console.log(check());

// const check = () =>
//     public.filter((x)=>x.id>101).map((y)=>y.name);


// console.log(check());


// ! Destructuring

// ? array Destructuring
// let numbers = [5,64,3,75,4];
// let [a,b,c,d,e] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// const marks = [5,23,33,6,43] ;

// [num1,num2,num3,num4,num5] = marks;

// console.log(num1);

// todo // uses of spread parameter here
// let [a,b,c,...x] = numbers;
// console.log(x);

// ? swap Destructuring
// let a = 50;
// let b = 60;
// [a,b] = [b,a]
// console.log(a);

// ? object Destructuring
// const students = {
//     name:"Maruf",
//     address:"Birulia"
// }
// const {name,address} = students;
// console.log(name);
// console.log(address);
// ? nested object Destructuring

// const students = {
//     name: "Maruf",
//     address: "Birulia",
//     language : {

//         native: "Bangla",
//         second: "English"

//     }
// }
// const { name, address,language } = students;
// console.log(name);
// console.log(address);
// console.log(language.native);

// ? function parameters Destructuring


// ! old

// const myFunction = (person) => {

//         console.log(person.age);
//         console.log(person.name);
//         console.log(person.roll);

// }

// const person = {
//     name:"Maruf",
//     age:23,
//     roll:03
// }
// console.log(myFunction(person));

// ! old 2

// const studentInfo = (peron) => {

//     console.log(`${peron.age},${peron.name}`);

// }

// const peron = {
//     name: "Maruf",
//     age:23,
//     roll:03
// }
// studentInfo(peron);

// ! ES6

// const funcky = ({name, age}) => {

//     console.log(`${name}`);

// }
// const
//     house = {
//         name: "HOuse",
//         age: 100
//     }


// funcky(house);


// ? practicing destructing in function parameters

// const myGoal = (person) =>{
    
//     console.log(`${person.name}`);

// };

// const myGoal = ({name,age}) =>{
    
//     console.log(`${name}`);
//     console.log(`${age}`);

// };

// const person = {
//     name : "Modana",
//     age : 23
// };

// myGoal(person);


// ! array methods

// ? find();

// const marks =  [3,5,4,42,22,1,11]

// let evenMarks = marks.find((value)=>value%2===0);
// console.log(evenMarks);

// let numbers = [5, 23, 34, 77, 43, 33];
// let fullNum = numbers.find(x => x%2===0);
// console.log(fullNum);


// ? findIndex();

// const marks =  [3,5,4,42,22,1,11]

// let evenIndexMarks = marks.findIndex((value)=>value%2===0);
// console.log(evenIndexMarks);

// let numbers = [5, 23, 34, 77, 43, 33];
// let fullNum = numbers.findIndex(x => x%2===0);
// console.log(fullNum);

// ? alternative
// const marks =  [3,5,4,42,22,1,11]
// const parOfNum = (x) =>{
//     if (x%2===0) {
    
//         return x
//     }
// }
// let evenMarks = marks.find((parOfNum));
// console.log(evenMarks);

// ! string methods

// ? startsWith();
// let message = "Inshallah, I will fight for Islam ";
// console.log(message.startsWith("Inshallah", 0));
// ? endsWith();
// console.log(message.endsWith("Islam", 7));
// ? includes();
// console.log(message.includes("Islam"));

// ! ES6 modules & classes + set & get

// todo first of all do this
// in the html file
// <script src="practice.js" type ="module"></script>

// ? in index.js 

// ! class

// class Student {

//   constructor(id,name){
//     this.id = id;
//     this.name = name
//   };

// };

// let profile1 = new Student(101,"Maruf");

// console.log(profile1.id);
// console.log(profile1.name);

// ! set

// class Student {

//     constructor(id,name){
//       this.id = id;
//       this.name = name
//     };
//     set studentId(name){
//           this.name = name;
//     }
  
//   };
  
//   let profile1 = new Student(101,"Maruf");
  
//   console.log(profile1.id);
//   console.log(profile1.name);
  
//   profile1.studentId="Faruk";
//   console.log(profile1.name);

// ! get

// class Student {

//     constructor(id,name){
//       this.id = id;
//       this.name = name
//     }; 
//     get studentProfile(){
//         return this.id + " " + this.name;
//     }
//   };
//   let profile1 = new Student(101,"Maruf");
//   console.log(profile1.studentProfile);

// ? in practice.js


// ! modules

// import
//     {myFunc,
// text} from './myModules.js';
//     console.log(text);

// myFunc("Hi Bangladesh");
// console.log(text);

// * name change in import

// import
//     {myFunc,
// text as message} from './myModules.js';
//     console.log(message);

// myFunc("Hi Bangladesh");
// console.log(message);

// * name change in export

// import
//     {myFunc,
// message} from './myModules.js';
//     console.log(message);

// myFunc("Hi Bangladesh");
// console.log(message);

// ? in myModules.js
// export
//       let text = "I am groot";

// export
//      function myFunc(txt) {
//       text = txt;
//      };

// * name change in export

// let text = "I am groot";

// export
//      {text as message}
// export
//      function myFunc(txt) {
//       text = txt;
//      };

// console.log("Hi");
// document.querySelector("#checkButton").addEventListener("click",()=>{
//     console.log("button is clicked.");
// });
// console.log("Bye");

// ! class

// class Student {

//   constructor(id,name){
//     this.id = id;
//     this.name = name
//   };

// };

// let profile1 = new Student(101,"Maruf");

// console.log(profile1.id);
// console.log(profile1.name);

// ! set

// class Student {

//     constructor(id,name){
//       this.id = id;
//       this.name = name
//     };
//     set studentId(name){
//           this.name = name;
//     }

//   };

//   let profile1 = new Student(101,"Maruf");

//   console.log(profile1.id);
//   console.log(profile1.name);

//   profile1.studentId="Faruk";
//   console.log(profile1.name);

// ! get

// class Student {

//     constructor(id,name){
//       this.id = id;
//       this.name = name
//     }; 
//     get studentProfile(){
//         return this.id + " " + this.name;
//     }
//   };
//   let profile1 = new Student(101,"Maruf");
//   console.log(profile1.studentProfile);

// ! synchronous and asynchronous

// console.log("one");
// console.log("Loding");
// console.log("three");
// console.log("four");
// console.log("five");
// console.log("six");

// const one = () => {
//     console.log("one");
// };
// const dataLoading = () =>{
//     console.log("Loading data");
// }

// ? or
// const two = () => {
//     setTimeout(() =>{
//         console.log("Loading data");
//     },1000);
// };
// const three = () => {
//     console.log("three");
// };
// const four = () => {
//     console.log("four");
// };
// const five = () => {
//     console.log("five");
// };
// const six = () => {
//     console.log("six");
// };

// one();
// two();
// three();
// four();
// five();
// six();


// ! callback and highOrderNumbers

// function square(x) {
//     console.log(`square of ${x}: ${x*x}` )
// };
// square(5);
// const y = square;
// y(5);
// function highOrderFunction(num,callback) {
//     callback(num);
// };
// highOrderFunction(6,square);

// ! more on callback

// const one = (callback) => {
//     console.log("one");
//     callback();
// };

// //? or

// const two = (callback) => {
//     setTimeout(() => {
//         console.log("Loading data");
//         callback();

//     }, 500);
// };
// const three = (callback) => {
//     console.log("three");
//     callback();
// };
// const four = (callback) => {
//     console.log("four");
//     callback();
// };
// const five = (callback) => {
//     console.log("five");
//     callback();
// };
// const six = () => {
//     console.log("six");
// };

// one(function f1() {
//     two(function f2(params) {
//         three(function f3() {
//             four(function f4() {
//                 five(function f6() {
//                     six(function f7() {

//                     });
//                 });
//             });
//         });
//     });
// });
// ! or
// one(() => {
//     two(() => {
//         three(() => {
//             four(() => {
//                 five(() => {
//                     six(() => {

//                     });
//                 });
//             });
//         });
//     });
// });

// ! Promise

// ? creating a promise
// * true
// const promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = true;
//     if (completedPromise) {
//         resolve("I am Maruf");
//     }
//     else{
//         reject("I am not Maruf");
// }
// });
// // console.log(promise1);
// promise1.then((am)=>{
//     console.log(am);

// });

// * false

// const promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = false;
//     if (completedPromise) {
//         resolve("I am Maruf");
//     }
//     else{
//         reject(new Error("I am not Maruf"));

//     }
// });
// // console.log(promise1);
// promise1.catch((err)=>{
//     console.log(err);

// });

// ! promise 

// ? create a promise 
// ? part-1
// const promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = true;
//     if (completedPromise) {
//         resolve("I am groot");
//     }else{
//         reject("I am Maruf");
//     }
// });
// promise1.then((obj)=>{
//     console.log(obj);

// });
// ? part-2
// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if (completedPromise) {
//         resolve(("I am groot"));
//     } else {
//         reject(new Error("I am Maruf"));
//     }
// });
// promise1
// .catch((obj) => {
//     console.log(obj);
// })
// .then((err)=>{
//         console.log(err.message);
//     });

// ! without any condition {direct resolve}

// const promise2 = new Promise((resolve,reject)=>{
//     resolve("I am groot 2");
// });
// promise2.then((any)=>{
//     console.log(any);
// });

// ! run multiple promise at once

// ? Promise.all()

// Promise.all([promise1,promise2]).then((res)=>{console.log(res);});

// Promise.all([promise1,promise2]).then(([res1,res2])=>{console.log(res1,res2);});

// ! race in promise

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am groot 1");

//     }, 2000);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("I am groot 2");
//     }, 1000);
// });

// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// });
// ! promise chaining
// console.log("Welcome");
// const one = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 1 bot.");
//     })
// };

// const two = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 2 bot.");
//     })
// };

// const three = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You are num 3 bot.");
//         }, 1000);
//     })
// };

// const four = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 4 bot.");
//     })
// };

// const five = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 5 bot.");
//     })
// };
// const six = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am six")
//     })
// };

// one()
//     .then((res) => { console.log(res) })
//     .then(two)
//     .then((res) => { console.log(res) })
//     .then(three)
//     .then((res) => { console.log(res) })
//     .then(four)
//     .then((res) => { console.log(res) })
//     .then(five)
//     .then((res) => { console.log(res) })
//     .then(six)
//     .then((res) => { console.log(res) })
//     .catch ((err) => { console.log(err); })

// ! practice
// // console.log("Welcome");
// // const taskOne = () =>{
//     //     return new Promise((resolve,reject)=>{
//         //         resolve("Num 1 is loaded")
//         //     })
//         // }
// // const taskTwo = () =>{
//     //     return new Promise((resolve,reject)=>{
// //         reject("Num 2 is loaded")
// //     })
// // }
// // const taskThree = () =>{
//     //     return new Promise((resolve,reject)=>{
//         //         setTimeout(() => {
//             //             resolve("Num 3 is loaded");
//             //         }, 2000);
// //     })
// // }
// // const taskFour = () =>{
//     //     return new Promise((resolve,reject)=>{
// //         resolve("Num 4 is loaded")
// //     })
// // }
// // taskOne().then((res)=>{
//     //     console.log(res);
//     // })
// // .then(taskTwo)
// // .then((res)=>{
//     //     console.log(res);
//     // })
//     // .then(taskThree)
//     // .then((res)=>{
//         //     console.log(res);
//         // })
// // .then(taskFour)
// // .then((res)=>{
// //     console.log(res);
// // })
// // .catch((err)=>{console.log(err);})
// // console.log("Bye");

// ^ async and await

// console.log("Welcome");
// const one = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 1 bot.");
//     })
// };

// const two = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 2 bot.");
//     })
// };

// const three = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You are num 3 bot.");
//         }, 1000);
//     })
// };

// const four = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 4 bot.");
//     })
// };

// const five = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 5 bot.");
//     })
// };
// const six = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am six")
//     })
// };

// async function callAllTasks() {
//     const t1 = await one();
//     console.log(t1);
//     const t2 = await two();
//     console.log(t2);
//     const t3 = await three();
//     console.log(t3);
//     const t4 = await four();
//     console.log(t4);
//     const t5 = await five();
//     console.log(t5);
//     const t6 = await six();
//     console.log(t6);
// }
// callAllTasks();
// ! ES6
// console.log("Welcome");
// const one = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 1 bot.");
//     })
// };

// const two = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 2 bot.");
//     })
// };

// const three = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You are num 3 bot.");
//         }, 1000);
//     })
// };

// const four = () => {
//     return new Promise((resolve, reject) => {
//         reject("You are not num  4 bot.");
//     })
// };

// const five = () => {
//     return new Promise((resolve, reject) => {
//         resolve("You are num 5 bot.");
//     })
// };
// const six = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am six")
//     })
// };

// ! with catching error

// const callAllTasks = async () => {
//     try {
//         const t1 = await one();
//         console.log(t1);
//         const t2 = await two();
//         console.log(t2);
//         const t3 = await three();
//         console.log(t3);
//         const t4 = await four();
//         console.log(t4);
//         const t5 = await five();
//         console.log(t5);
//         const t6 = await six();
//         console.log(t6);
    
//     } catch (error) {
//         console.log(error);
//     }
// };

// callAllTasks();
// console.log("Bye");







