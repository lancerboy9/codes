// todo var making

// var fruit,price;
// fruit = "Apple";
// price = 50; 
// document.write("The price of the" +" " +`${fruit}`+ " is"+" "+ `${price}` + "tk");

// todo identyfing data type

// var Phone = 734;
// phone = toString(Phone)
// console.log(typeof(phone));

// todo converting to integer

// var text = 36004;
// jjr = parseInt(text);
// console.log(jjr);

// todo converting to float

// var float = "3353";
// float = parseFloat(float);
// console.log(float);

// todo tofixed

// var num = 5.6426786;
// console.log(num.toFixed(4));

// todo toprecision

// var num = 3.5367
// console.log(num.toPrecision(3));


// ! Number function

// console.log(typeof(Number("46.4")));


// var text = " My life";
// var text2= " is dull";
// document.write("The length is = " +text.length);
// ? OR
// len = text + text2;
// document.write(len.length);

// var text = prompt("Find the value");
// document.write(text.length);

// var rest = "goodbye freeofire"
// document.write(rest.slice(6,13));

// var first = prompt("Enter your first name :");
// var last = prompt("Enter your last name :");
// fullname=first +" "+ last;
// document.write(fullname);
// document.write(fullname.toUpperCase());
// document.write(fullname.toLowerCase());
// var name = fullname.toUpperCase();
// document.write(name);
// ! making a simple calculator
// var num1 = parseInt(prompt("Enter your first number:"));
// var num2 = parseInt(prompt("Enter your last number:"));

// add = num1 + num2;
// document.write("num1 + num2 = " + add + "<br/>");
// sub = num1 - num2;
// document.write("num1 - num2 = " + sub + "<br/>");
// mul = num1 * num2;
// document.write("num1 * num2 = " + mul + "<br/>");
// div = num1 / num2;
// document.write("num1 / num2 = " + div + "<br/>");
// ast = num1 ** num2;
// document.write("num1 ** num2 = " + ast + "<br/>");
// modu = num1 % num2;
// document.write("num1 % num2 = " + modu);

// var num1 = (prompt("Enter your number :"));
// num2 = (2);
// sum = (num1 % num2);
// if (sum == 0) {
//     document.write("Even");
// }
// if (sum != 0) {
//     document.write("Odd");
// }
// var digit = prompt("Enter any digit : ");
// digit = digit.toLowerCase();
// switch(digit){
// case"a":
// case"e":
// case"i":
// case"o":
// case"u":
// console.log("Vowel");
// break;

// default:
// console.log("consonant")

// }

// ? making exchange calculator

// var kg = parseInt(prompt("Enter your value : "));
// g = kg *1000;
// document.write(kg+"kg"+" = "+g+" "+"g");

// ! farenheit --> celcius

// var far = prompt("Farenheit :");
// cel = (far - 32)*5/9;
// document.write("Celcius = "+cel+"°C");

// ! celcius --> farenheit

// var cel = prompt("Celcius");
// far = (cel * 9/5) + 32 ;
// document.write(far);

// ! time -->

// var hr = prompt("Enter hour");
// var min = prompt("Enter min");
// hr = hr*60;
// min= min*60;
// total= hr*min;

// ! seconds in years-->

// var year = prompt("Enter year :");
// day = 3600 * 24;
// yn = day * 365;
// total = year * yn;
// document.write(total);

// ! making BMI calculator 

// var height = prompt("Enter your height (inch) :");
// var weight = prompt("Enter your weight (kg) :");
// height= height/39.37;
// height = Math.pow(height, 2)
// BMI = weight / height;
// document.write(BMI);

// ! even or odds

// var num = prompt("Enter number :");
// if(num==0){
//     document.write("It is zero.");
// }
// else if (num % 2 == 0) {
//     document.write("It is even.");
// }

// else {
//     document.write("It is odd.");
// }

// ! identyfing positive or negative

// var num = prompt("Enter number :");
// if(num>0){
//     document.write("It is positive");
// }
// else if(num<0){
//     document.write("It is negative");
// }
// else {
//     document.write("It is Zero");
// }

// ! making grade sheet

// var num = prompt("Enter your number :");

// if (num < 0 || num > 100) {
//     document.write("Invalid mark");
// }

// else if (num >= 80 && num <= 100) {
//     document.write("A+");
// }
// else if (num >= 70 && num <= 79) {
//     document.write("A");
// }
// else if (num >= 60 && num <= 69) {
//     document.write("A-");
// }
// else if (num >= 50 && num <= 59) {
//     document.write("B");
// }
// else if (num >= 40 && num <= 49) {
//     document.write("C");
// }
// else if (num >= 33 && num <= 39) {
//     document.write("D");
// }
// else {
//     document.write("F");
// }

// ! identyfing the large number from three numbers

// var num1 = prompt("Enter First number :");
// var num2 = prompt("Enter Second number :");
// var num3 = prompt("Enter Third number :");

// if (num1 > num2 && num1 > num3) {
//     document.write("the large number  " + num1++);
// }
// else if (num2 > num3 && num2 > num1) {
//     document.write("the large number  " + num2++);
// }
// else {
//     document.write("the large number  " + num3++);
// }

// ! addition of 1-->10 

// var sum  = 0

// for ( var x = 1 ; x<=10 ; x++){
//     sum = sum + x ;
// }document.write(sum);

// ! for loop --> run a programme multiple times

// for(var m = 1 ; m <=5 ; m++){
//     document.write("You will see it five times ")
// }


// ! get data from user and add them using for loop

// var sum = 0;
// var x = parseInt(prompt("Enter a number"));
// var y = parseInt(prompt("Enter a number"));
// for (i = x; i <= y; i++) {
//     sum = sum + i;
// } document.write(sum);

// ! sum of those numbers which are divisible by 3 & 5 , the area is 1-->100;

// ! using while loop
// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum = sum + i;      
//         document.write(" " + sum);

//     }
//     i++;
// } document.write(" sum = " + sum);

// ! using for loop

// var sum = 0;
// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum = sum + i;
//         document.write(" "+sum);
//     }
//     i++;
// } document.write(" sum= "+sum);

// ! break and continue

// for (var x = 1;x<=30; x=x+1){
//     if (x==15) {
//         continue;
//     }
//     document.write(" "+x);
// }

// ! creating a function

// function square() {
//     var num = 8;
//     result = num * num;
//     document.write("The result is = "+result);

// }

// square();
// square();
// square();

// !]

// var s1 = prompt("Enter your first number:");
// var s2 = prompt("Enter your second number:");

// function sub(sum1, sum2) {
//     var bum = sum1 - sum2;
//     return bum;
// }

// document.write("The result is sub = " + sub(s1, s2) + "<br/");

// var m1 = prompt("Enter your first number:");
// var m2 = prompt("Enter your second number:");

// function mod(sum1, sum2) {
//     var mom = sum1 % sum2;
//     return mom;
// }

// document.write("The result is mod = " + mod(m1, m2) + "<br/");


// var e1 = prompt("Enter your first number:");
// var e2 = prompt("Enter your second number:");

// function exp(sum1, sum2) {
//     var eum = sum1 ** sum2;
//     return eum;
// }

// document.write("The result is =  exp" + exp(e1, e2) + "<br/");


// var u1 = prompt("Enter your first number:");
// var u2 = prompt("Enter your second number:");

// function mul(sum1, sum2) {
//     var mum = sum1 * sum2;
//     return mum;
// }

// document.write("The result is  mul= " + mul(u1, u2) + "<br/>");


// var d1 = prompt("Enter your first number:");
// var d2 = prompt("Enter your second number:");

// function div(sum1, sum2) {
//     var dum = sum1 / sum2;
//     return dum;
// }

// document.write("The result is div = " + div(d1, d2) + "<br/>");

// var a1 = prompt("Enter your first number:");
// var a2 = prompt("Enter your second number:");

// function add(sum1, sum2) {
//     var aum = sum1 + sum2;
//     return aum;
// }

// document.write("The result is add = " + add(a1, a2) + "<br/");

// ?
// function maruf(num, cum) {
//     var result = num * cum;
//     return result;
// }

// document.write(maruf(6, 45) + " " + "<br/>");


// ! creating a simple calculator using function 


// var s1 = prompt("Enter your first number:");
// var s2 = prompt("Enter your second number:");

// function sub(sum1, sum2) {
//     var bum = sum1 - sum2;
//     document.write("This is sub = " + bum + "<br/>");
// }
// sub(s1, s2);


// var m1 = prompt("Enter your first number:");
// var m2 = prompt("Enter your second number:");

// function mod(sum1, sum2) {
//     var mom = sum1 % sum2;
//     document.write("This is mod =  " + mom + "<br/>");
// }
// mod(m1, m2);


// var e1 = prompt("Enter your first number:");
// var e2 = prompt("Enter your second number:");

// function exp(sum1, sum2) {
//     var eum = sum1 ** sum2;
//     document.write("This is exp = " + eum + "<br/>");
// }
// exp(e1, e2);


// var u1 = prompt("Enter your first number:");
// var u2 = prompt("Enter your second number:");

// function mul(sum1, sum2) {
//     var mum = sum1 * sum2;
//     document.write("This is  mul =  " + mum + "<br/>");
// }
// mul(u1, u2);



// var d1 = prompt("Enter your first number:");
// var d2 = prompt("Enter your second number:");

// function div(sum1, sum2) {
//     var dum = sum1 / sum2;
//     document.write("This is  div= " + dum + "<br/>");
// }
// div(d1, d2);


// var a1 = prompt("Enter your first number:");
// var a2 = prompt("Enter your second number:");

// function add(sum1, sum2) {
//     var aum = sum1 + sum2;
//     document.write("This is  add =  " + aum);
// }
// add(a1, a2);



// // //! creating simple calculator using function

// var guns = ["Shotgun","Sks","Ak","M4A1"];

// console.log(guns[2]);
// console.log(guns.length);
// guns.push("AWM");
// guns.push("Kar98");
// guns.push("Groza");
// console.log(guns);
// console.log(guns.length);

// ! loop in array

// var fruits = ["Apple","Oranges","Mangoes","Guavas","Pinapples"];

// for(var i=0;i<5;i++){
//     console.log(fruits[i]);
// }

// ? get data from user and add them using for loop and array

// var num = [];

// for(var i = 0;i<6;i++){
//     num[i]=parseInt(prompt("Enter your Number :"));
// }
// var sum = 0;
// for(var i = 0;i<6;i++){
//     sum= sum+num[i];
//     console.log(num[i]);
// }
// console.log("Total = "+sum);

// creating a function

// function maruf(num, cum) {
//     var result = num * cum;
//     return result;
// }
// document.write(maruf(6, 45) + " " + "<br/>");
// document.write(maruf(6, 4) + " " + "<br/>");

// function addition(num1, num2) {
//     var result = num1 + num2;
//         document.write(" " + result + "<br/>");}
// addition(3, 4);
// addition(30, 40);
// addition(13, 14);
//     function subtion(num1, num2) {
//         var result = num1 - num2;
//         document.write(" " + result + "<br/>");
// }
// subtion(23, 4);
// subtion(30, 40);
// subtion(13, 14);

// function myFunction(num1, num2) {

//     var result = num1+num2;
//     return result;
// }
// document.write(myFunction(34,34));



// var m = Number(prompt("Enter your first number :"));
// var n = Number(prompt("Enter your second number :"));

// function myFunction(num,num) {

//     var result = num + num;
//     document.write("add = " + result + "<br/>");
// }
// myFunction(m, n);
// var p = Number(prompt("Enter your first number :"));
// var q = Number(prompt("Enter your second number :"));
// function mySubstraction(num, num) {

//     var result = num - num;
//     document.write("Sub = " + result + "<br/>");
// }
// mySubstraction(p, q);


// var c = Number(prompt("Enter your first number :"));
// var v = Number(prompt("Enter your second number :"));
// function myMultiplication(num, num) {

//     var result = num * num;
//     document.write("mul= " + result + "<br/>");
// }
// myMultiplication(c, v);


// var w = Number(prompt("Enter your first number :"));
// var q = Number(prompt("Enter your second number :"));
// function myDiv(num1, num2) {

//     var result = num1 / num2;
//     return result;
// }
// document.write( "div = "+ myDiv(w, q) + "<br/>");


// var w = Number(prompt("Enter your first number :"));
// var q = Number(prompt("Enter your second number :"));
// function maruf(num, cum) {
//     var result = num / cum;
//     return result;
// }
// document.write("Sum = "+ maruf(w, q)  + "<br/>");
// document.write( 

// ! creating  a function

// function myFunction(p1,p2){
//     var event = p1/p2;
//     return event;
// }
// document.getElementById("demo").innerHTML=myFunction(4,5);

// let func = myFunction(8,3);
// document.getElementById("demo").innerHTML = func;

// function myFunction(x,y){
//     var action = x*y;
//     return action;
// }

// ! temperature exchanging 

// var farn = prompt("Enter Farenheit");
// var cels = (farn - 32) * 5/9;

// document.write(cels);

// var cel = parseInt(prompt("Enter Celcius"));
// var farn = (cel * 9/5) + 32;
// document.write(farn); 

// var cel = celcius(55);

// let y = parseInt(prompt("Enter farenheit:"));
// function tocelscius(f) {
//     return (f - 32) * 5/9; 
// }

// let m = tocelscius(y);
// let text = "The farenheit is " + m + " celscius";
// document.getElementById("demo").innerHTML=text

// document.getElementById("demo").innerHTML=m
// document.write(m);


// function myFunction(){

//     return "I am groot";
// }

// document.getElementById("demo").innerHTML = myFunction();

// ! creating objects

// const profile = {
//     name:"Maruf",
//     roll:04,
//     homeTown:"Savar",
//     language:["Bangla","English","HIndi"]
// }
// console.log(profile.name);
// console.log(profile.roll);
// console.log(profile.homeTown);
// console.log(profile.language);

// document.getElementById("demo").innerHTML= "My name is "+ profile.name;

// ! creating a method inside Object

// const member = {
//     name : "Maruf",
//     style: "default",
//     skills:"computing",
//     lang:["Bangla","English","HIndi"],
//     salary: function () {
//        return this.lang[1]; 
//     }
// }
// document.write(member.salary());

// var x = "Mango";
// var x = typeof x;
// var y = new String();
// var y = typeof y;

// document.write(x+"<br/>"+y);

// let x = 5;
// x++;
// ++x;
// let z = x;
// document.getElementById("demo").innerHTML = z;
// var num = 33;
// document.getElementById("demo").innerHTML=(typeof(num));

// let sum = 0;
// for (let i = 1; i<=5; i++){
//     sum = sum+i;
// }
// document.write(sum); 


// var m = parseInt(prompt("Enter your number:"));
// var n = parseInt(prompt("Enter your number:"));

// var sum = 0;
// for (let x = m; x <= n ; x++){
// sum = sum + x;
// }document.write(sum);


// var m = prompt("Enter number :");
// var n = prompt("Enter number :");


// for (let x = 1; x <= 5; x++) {
//     var num1 = parseInt(prompt("Enter your number:"));
//     var num2 = parseInt(prompt("Enter your number:"));
//     var sum = num1 + num2;
//     console.log(sum);
// }

// ! unlimited

// var m = prompt("Enter your number:");
// var n = prompt("Enter your number:");

// for (let x = m; x <= n; x++) {
//     var num1 = parseInt(prompt("Enter your number:"));
//     var num2 = parseInt(prompt("Enter your number:"));
//     var sum = num1 + num2;
//     console.log(sum);
// }


// ! obj --> add 0 to 9 all numbers using for loop, while loop and do while loop .

// var sum = 0;
// for(var i = 0; i<=9; i++){
// sum = sum + i;
// }
// document.write(sum);

// for(){

// }

// var i = 0
// var sum = 0;
// while ( i<=9) {
//     sum = sum + i; 
//     i++;
// }
// document.write(sum);


// var i = 0
// var sum = 0;
// do {
//     sum = sum + i; 
//     i++;
// } while (i<=9);
// document.write(sum);

// ! obj --> add those numbers which are dividable by 3 && 5

// var x = 0;
// var add = 0;
// while (x <= 50) {
//     if (x % 3 == 0 && x % 5 == 0) {
//         console.log(x);
//         add = add + x;
//     }
//     x++;
// }
// document.write(add);

// var i = 0;
// add = 0;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//         add = add + i;
//     }
//     i++;
// }document.write("Total = "+add)

// ! creating normal function

// function myFunction() {
//     document.write("Hello World.");
// }
// myFunction();


// function Fashion(cloth,shoes,pants,blanks) {
//     this.cloth=cloth;
//     this.shoes=shoes;
//     this.pants=pants;
//     this.blanks=blanks;
//     this.show = function () {
//        console.log(this.cloth);
//        console.log(this.shoes);
//        console.log(this.pants);
//        console.log(this.blanks);
//     }
// }
// var set1 = new Fashion("Lather","Bata","Jince","Italian");
// var set2 = new Fashion("Cotton","Royal","Half","Spain");
// var set3 = new Fashion("Unknown","Unknown","Unknown","Unknown");

// set1.show();
// set2.show();
// set3.show();

// var bikes = ["moto","honda","yamaha","r15"]
// document.getElementById("demo").innerHTML=bikes

// var bikes = new Array("moto","honda","yamaha","r15");

// document.getElementById("demo").innerHTML=bikes[3];

// var del = bikes.pop();
// document.write(bikes);

// var del = bikes.shift();
// document.write(bikes);

// var del = bikes.push("Hello");
// document.write(bikes);

// var del = bikes.unshift("Hi");
// document.write(bikes);

// bikes.splice(2,2,["AKm Sima"],["Hello"]);
// document.write(bikes);

// var del = bikes.slice(1,2);
// document.write(del);


// var bikes = ["moto","honda","alpha","yamaha","r15"]
// var sorted = bikes.sort();
// sorted.reverse();
// document.write(sorted);

// var numbers = [6,9,80,4,7,5];
// var sorted = numbers.sort(function(a,b) {
//     return a-b;
// });
// document.write(sorted);

// !  loop in Array

// var number = [33, 54, 3, 123, 5, 656];
// sum = 0;
// for (var x = 0; x<6;x++ ){
//     console.log(number[x]);
//     sum = sum + number[x];
// }
// console.log("Total = "+ sum);

// var number = [];
// var sum = 0;
// for (var i = 0; i <= 5; i++) {
//     number[i] = parseInt(prompt("Enter your number :"));
//     console.log(number[i]);
//     sum = sum + number[i];
// }
// document.write("Total = "+ sum);

// var num1 = prompt("Enter a number : ");
// var num2 = prompt("Enter a number : ");

// var maxi = Math.min(num1,num2);
// document.write(maxi);


// ! guessing game 

// var numOfWon = 0;
// var numOfLost = 0;

// for (var i = 0; i <= 10; i++) {

//     var userNum = prompt("Enter  a number between 1 to 10 :");
//     var randomNum = Math.floor(Math.random()*11+1);

//     if (userNum == randomNum) {
//         document.write("Congratulations ! You have won."+"<br/>");
//         numOfWon++;
//     }
//     else{
//         document.write("You have lost.The number was "+randomNum+"<br/>");
//         numOfLost++;
//     }

// }

// document.write("The number of won = "+ numOfWon+"<br/>");
// document.write("The number of Lost = "+ numOfLost);

// ! onclick function

// function myFunction() {
//     alert("Hello world");
// }
// myFunction();
// document.getElementById("demo").innerHTML= myFunction();

// var mi = document.getElementById("myImg");
// function myPic() {
//     mi.src = "img/bg.jpg";
// }

// ! creating an element 
// var create = document.createElement("h2");
// var text = document.createTextNode("What should I write");
// var head = create.appendChild(text);

// var hello =  document.getElementsByClassName("myDiv")[0];

// hello.appendChild(head);

// ! insert before
// var myDivi =  document.querySelector("#myDiv");
// var para = document.createElement("p");
// var text = document.createTextNode("Hello everyone, how are you ?");
// para.appendChild(text);
// myDivi.appendChild(para);
// var heading = document.getElementsByTagName("h1")[0];
// myDivi.insertBefore(para,heading);

// ! use only id in this case

// var myDivi =  document.querySelector("#myDiv");
// var remove =  document.getElementById("dell");
// myDivi.removeChild(remove);

// ! adding or removing class

// var myDivi =  document.querySelector("#myDiv").classList.add("myButton");
// var myDivi =  document.querySelector("#myDiv").classList.remove("myButton");
// console.log(myDivi);

// ! replacing child

// var myDivi = document.querySelector("#myDiv");
// var newchild = document.createElement("p");
// var text = document.createTextNode("Hello everyone, how are you ?");
// newchild.appendChild(text);
// var replaced = document.getElementById("dell");

// myDivi.replaceChild(newchild,replaced);

// ! image slider

// var photos = ["img/bg.jpg", "img/bg1.jpg", "img/bg2.jpg"];

// var myImg = document.querySelector("img");

// var clicked = 0;

// function next() {
//     clicked++;
//     myImg.src = photos[clicked];
//     if (clicked >= photos.length) {
//         clicked = 0;
//         myImg.src = photos[clicked];
//     }
// }

// function prev() {
//     clicked--;
//     myImg.src = photos[clicked];
//     if (clicked < 0) {
//         clicked = photos.length-1;
//         myImg.src = photos[clicked];
//     }

// }

// function addStyle() {
//     document.querySelector("#para").classList.add("para-style");
// }

// function removeStyle() {
//      document.getElementById("para").classList.remove("para-style");

// }

// ! event listener

// var head2 = document.querySelector("h2");
// head2.addEventListener("click",myFunction)
//     function myFunction() {
//         alert("Hi")
//     }
// head2.addEventListener("mouseOver",myFunction)
//     function myFunction() {
//        head2.classList.add("para-style")
// }


// var myVar = document.querySelector("h1");
// myVar.addEventListener("mouseover",function () {
//     myVar.classList.add("para-style");
// });

// myVar.addEventListener("mouseout",function () {
//     myVar.classList.remove("para-style");
// }); 

// ! event listener on multiple item

// var button = document.querySelectorAll("button")[0];
// button.addEventListener("click",function () {
//  var text = this.innerHTML;
//  document.querySelector("h2").innerHTML= text + " is clicked ";   
// })

// var button = document.querySelectorAll("button")[1];
// button.addEventListener("click",function () {
//  var text = this.innerHTML;
//  document.querySelector("h2").innerHTML= text + " is clicked ";   
// })

// var button = document.querySelectorAll("button")[2];
// button.addEventListener("click",function () {
//  var text = this.innerHTML;
//  document.querySelector("h2").innerHTML= text + " is clicked ";   
// })

// var len = document.querySelectorAll("button").length;
// for( var i = 0; i <len;i++){
// var button = document.querySelectorAll("button")[i];
// button.addEventListener("click",function () {
//  var text = this.innerHTML;
//  document.querySelector("h2").innerHTML= text + " is clicked ";   
// })
// }

// ! playing audio

// for(var i = 0; i <3 ;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function () {
//     var text = this.innerHTML;
//     autoplay(text);
// })
// };
// function autoplay(text) {
//     switch (text) {
//         case "a":
//             var audio = new Audio("sounds/a.mp3");
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio("sounds/b.mp3");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio("sounds/c.mp3");
//             audio.play();
//             break;

//         default:
//             break;
//     }
// };

// ! play Animation

// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         autoplay(text);
//         playAnimation(text);
//     })
// };
// function autoplay(text) {
//     switch (text) {
//         case "a":
//             var audio = new Audio("sounds/a.mp3");
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio("sounds/b.mp3");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio("sounds/c.mp3");
//             audio.play();
//             break;

//         default:
//             break;
//     }
// };

// function playAnimation(text) {
//     var selectedButton = document.querySelector("." + text);
//     selectedButton.classList.add("anim");
//     setTimeout(function () {

//         selectedButton.classList.remove("anim");

//     }, 1000);
// }

// ! practice playanimation with audio & keypress

// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         audioPlay(text);
//         animationPlay(text);
//     });


//     function audioPlay(text) {
//         switch (text) {
//             case "a":
//                 var audio = new Audio("sounds/a.mp3");
//                 audio.play();
//                 break;
//             case "b":
//                 var audio = new Audio("sounds/b.mp3");
//                 audio.play();
//                 break;
//             case "c":
//                 var audio = new Audio("sounds/c.mp3");
//                 audio.play();
//                 break;

//             default:
//                 break;
//         };
//     };

// };
// function animationPlay(text) {
//     var selectedButton = document.querySelector("." + text);
//     selectedButton.classList.add("anim");
//     setTimeout(function () {
//         selectedButton.classList.remove("anim");
//     }, 1000);
// };

// document.addEventListener("keypress", function (event) {
//     var key = event.key;
//     audioPlay(key);
//     animationPlay(key);
// });




// ! practice of keypress

// for (var i = 0; i < 3; i++) {

//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         audioPlay(text);
//         animationPlay(text);
//     });

//     function audioPlay(text) {
//         switch (text) {
//             case "a":
//                 var audio = new Audio("sounds/a.mp3");
//                 audio.play();
//                 break;
//             case "b":
//                 var audio = new Audio("sounds/b.mp3");
//                 audio.play();
//                 break;
//             case "c":
//                 var audio = new Audio("sounds/c.mp3");
//                 audio.play();
//                 break;

//             default:
//                 break;
//         };
//     };

// };
// function animationPlay(text) {
//     var selectedButton = document.querySelector("." + text);
//     selectedButton.classList.add("anim");
//     setTimeout(function () {
//         selectedButton.classList.remove("anim");
//     }, 1000);
// };

// document.addEventListener("keypress",function (event) {
//     var key = event.key;
//     audioPlay(key);
//     animationPlay(key);
// });

// ! more on keypress
// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function (event) {
//     count++;
//     var key = event.key;
//     document.querySelector("p").innerHTML="You have pressed "+ count;
// });

// ! canvas

// var can = document.getElementById("myCanvas");
// var ctx = can.getContext("2d");
//     ctx.lineWidth = "3";
//     ctx.strokeStyle = "black";
//     ctx.strokeRect(10, 10, 390, 280);
//     ctx.fillStyle = "green";
//     ctx.fillRect(12, 12, 386, 276);

//     var centerX = can.width/2;
//     var centerY = can.heigth/2;
//     ctx.beginPath();
//     ctx.arc(centerX,centerY,50,0,2*Math.PI,false);
//     ctx.fillStyle="red";
//     ctx.fill();
//     ctx.strokeStyle="white";
//     ctx.stroke();







// ! wrong

// var c = document.getElementById("myCanvas");

// var ctx = c.getContext("2d");

// // ctx.strokeStyle = "black"
// // ctx.strokeRect(10,10,380,280)


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

// var c = document.querySelector("#myCanvas");
// var ctx = c.getContext("2d");
// ctx.lineWidth = 3;
// ctx.strokeStyle = "black";
// ctx.strokeRect(10, 10, 380, 280);

// ctx.fillStyle = "green";
// ctx.fillRect(11,11,378,278);

// //! It's time to creating a circle and that's the point

// var centerX = c.width / 2;
// var centerY = c.height / 2;

// ctx.beginPath();
// ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.strokeStyle = "white";
// ctx.stroke();

// ! practice canvas
// var cv = document.querySelector("#myCanvas");
// var ctx = cv.getContext("2d");
// ctx.lineWidth = 4;
// ctx.strokeStyle = "black";
// ctx.strokeRect(10, 10, 380, 280);
// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 380, 280);

// var centerX = cv.width / 2;
// var centerY = cv.height / 2;
// ctx.beginPath();
// ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI, false);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.lineWidth = 1;
// ctx.strokeStyle = "white";
// ctx.stroke();

// ! error handling

// try {
//     alert("I love Allah");
//     alert(m);

// } catch (error) {
//     alert("inside catch block");
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);


// }
// finally{
//     alert("Hi world");
// };

// ! throw error handling

// document.querySelector("#checkButton").addEventListener("click", function () {

//     var num = document.querySelector("#valueOfInput").value;
//     try {
//         if (num < 5) {
//             throw "This is too low";
//         }
//         else if (num > 10) {
//             throw "This is too high";
//         }
//     } catch (error) {
//         console.log(error);
//     }
// });

// ! practice of foreach

// const result = [4,65,4,32,5];
// result.forEach(function (x)
//  {
//     console.log(x);
// })


// const result = [4, 65, 4, 32, 5];
// result.forEach(function (x,index,array)
//  {
//      array[index] = x + 10;
// })
// console.log(result);


// const results = [4,65,4,32,5];
// var squareResults = [];
// results.forEach(function (x)
// {
//     squareResults.push(x*x);
// })
// console.log(squareResults);


// ! arrow function part 2

// var character = [
//     {
//         name: "Maruf",
//         age: 23,
//         height: 5.7
//     },
//     {
//         name: "Arif",
//         age: 20,
//         height: 5.7
//     },
//     {
//         name: "Faruk",
//         age: 26,
//         height: 5.8
//     }
// ]


// function calFunc() {
//    return person.filter(function (x) {
//         return x.gpa>3.00 || x.age>22;
//     }).map(function (y) {
//         return y.name;
//     })
// }
// console.log(calFunc());

// const addFunc = ({name,age}) => {
//     console.log(`${name},${age}`);
// }
// const any = {
//     name:"Maruf",
//     age:23
// }
// addFunc(any);

// ! modules

// import
//     {myFunc,
// text} from './myModules.js';
//     console.log(text);

// myFunc("Hi Bangladesh");
// console.log(text);

// //? name change in import

// import
//     {myFunc,
// text as message} from './myModules.js';
//     console.log(message);

// myFunc("Hi Bangladesh");
// console.log(message);

// //? name change in export

// import
//     {myFunc,
// message} from './myModules.js';
//     console.log(message);

// myFunc("Hi Bangladesh");
// console.log(message);

// ! default parameter

// function myFunction(text = "I am groot") {
//     console.log(`${text}`);
// };
// myFunction("I am Maruf");

// ! rest parameter

// function myFunction(x,y,...z) {
//     console.log(`x = ${x} y = ${y} z = ${z}`);
// }
// myFunction(12,33,212,43)


// ! practice rest operator

// function myFunction(x,y,...z) {
//     console.log(`x=${x},y=${y},z=${z}`);
// }
// myFunction(3,21,2,32,23,43,5,4,);

// ! without spread parameter
// function myFunction(x, y, z) {
//     return x + y + z;
// }
// let numbers = [4,5,6];
// console.log(myFunction(numbers[0],numbers[1],numbers[2]));
// function myFunc(m, n) {
//     return m + n;
// }
// let z = [4, 5];
// let m = myFunc(z[0],z[1]);
// console.log(m);
// ! spread parameter 
// function myFunc(x, y, z) {
//     return x + y + z;
//     let numbers = [5,2,7];
//     console.log(myFunc(...numbers));
// }

// function myFunction(x, y, z) {
//    return x + y + z;
// }

// let numbers1 = [3,5,2];
// let numbers2 = [6,4,...numbers1];

// console.log(numbers2);

// const p1 = {

//     name : "Faruk",
//     age : 34
// }
// const p2 = {
// name : "Maruf",
//     age : 23
// }

// const p = { ...p2,...p1};
// console.log(p);
// ! Object literals
// //* Old
// function myFunc(name, address) {
//     return {
//         name: name,
//         address: address
//     }
// } console.log(myFunc("Maruf", "Birulia"));

// //*ES6

// function myFunc(name, address) {
//     return {
//         name,
//         address
//     }
// } console.log(myFunc("Maruf", "Birulia"));

// ? Methods in Objects

// function myFunc() {
//     body:function () {
//         return "Heelo"
//     }
// }

// let message = {
//     body : function () {
//         return "Hello";
//     }
// }
// console.log(message.body());

// let message = {
//     body() {
//         return "Hello";
//     }
// }
// console.log(message.body());

// let char = {
// body(){
//     return "Hellow"
// }
// };
// console.log(char.body());
// ! methods in Object

// const anyName = {
//     "any Obj"(){
//         return "I am groot";
//     }
// };
// console.log(anyName["any Obj"]);

// let messages = {
//     'any name'(){
//         return alert("I love my Allah");
//     }
// };
// console.log(messages['any name']);

// ! for of  

// const name = ["Maruf","Arif","Monir"];

// for(num of name)
// console.log(num);

// ! for in

// const person1 = {
//     name : "Maruf",
//     age  : 21,
//     address:"Birulia",
//     roll : 4
// }
// for ( x  in person1)
// console.log(`${x}:${person1[x]}`);
// ! forEach
// const numbers = [4,2,5,23,22];
// numbers.forEach((x)=>{
//     console.log(x);
// });

// ! practice forEach

// const anyNum = [45,13,42,66,67 ];
// anyNum.forEach((para)=>{
//     console.log(para);
// });

// ? add 5 with every Number and put them in another array

// const anyNum = [45,13,42,66,67 ];
// const newArray = [];
// const newArray1 = [];
// anyNum.forEach((x,index,array)=>{
//     array[index] = x+5;
//     newArray.push(x+15);
//     newArray1.push(x*x);
// });
// console.log(anyNum);
// console.log(newArray);
// console.log(newArray1);
// const hiHello = [54,43,777,44,23];
// hiHello.forEach((x)=>{
//     console.log(x);
// }) ;
// const hiHello = [54, 43, 777, 44, 23];
// const newSquare0 = [];
// const newSquare = [];
// hiHello.forEach((x, index, array) => {
//     // array[index] = x + 6;
//     newSquare.push(x * x);
//     newSquare0.push(x + 6);
// });
// console.log(hiHello);
// console.log(newSquare0);
// console.log(newSquare);

// ! map

// const anyNum = [45, 13, 42, 66, 67];

// let x = anyNum.map((x) => {
//     return x + 5;
// });
// console.log(x);

// let x = anyNum.filter((x) => {
//     return x > 15;
// });
// console.log(x);

// ! arrow function

// ? traditional 

// function myFriend(name1,name2,name3) {
// console.log("ziad","Abir","Robin"); 
// }
// myFriend();

// ? ES6

// const myFriend = (a,b,c) =>{
//     console.log("Maruf","Faruk","Arif");
// }
// myFriend();

// ? traditional

// function myFunc() {
//     return "Hi I am groot."
// };

// console.log(myFunc());

// ? ES6

// const myFunc = () =>  "Hi I am groot.";

// console.log(myFunc());

// const myFunc = (num1 ,num2) => num1+num2  ;

// console.log(myFunc(8,6));

// const myFunc = (num1 ,num2) => num1/num2  ;

// console.log(myFunc(8,4));


// ! arrow function in Objects

// const student = [
//     {
//         name : "Maruf",
//         age : 23,
//         gpa : 4.69
//     },
//     {
//         name : "Faruk",
//         age : 24,
//         gpa : 3.39
//     },
//     {
//         name : "Arif",
//         age : 25,
//         gpa : 4.00
//     }
// ]
// console.log(student);

// ? find out those names who got gpa 4 or more

//  const search = () => 
//      student.filter((x)=>x.gpa>4).map((y)=>y.name);

//     console.log(search());

// ! destructuring

// const marks = [5,23,33,6,43] ;

// [num1,num2,num3,num4,num5] = marks;

// console.log(num1);

// ! spread operator

// const marks = [5,23,33,6,43] ;

// [num1,num2,...num5] = marks;

// console.log(num1);

// ? swap variables

// let x = 35 ;
// let y = 25 ;

// [x,y] = [y,x];

// console.log(x);
// console.log(y);

// ? destructing in objects

// const people = {
//     name : "Alex",
//     age : 34
// }
// const {name,age} = people;
// console.log(name);
// console.log(age);

// ? destructing in nested objects

// const people = {
//     name : "Alex",
//     age : 34,
//     language : 
//             {
//                 Basic : "English",
//                 Native : "Bangla"
//             }


// }
// const {name,age,language} = people;
// console.log(name);
// console.log(age);
// console.log(language.Native);


// ! arr0w methods

// ? find()

// let numbers = [5, 23, 34, 77, 43, 33];
// let fullNum = numbers.find(x => x%2===0);
// console.log(fullNum);
// //? findIndex()
// let numbers = [5, 23, 34, 77, 43, 33];
// let fullNum = numbers.findIndex(x => x%2===0);
// console.log(fullNum);

// ? or

// let numbers = [5, 23, 34, 77, 43, 33];

// const again = (value,index,array) => {

//         if(value % 2 ===0) 
//         return value;

// }

// let fullNum = numbers.find(again);
// console.log(fullNum);

//     let numbers = [5, 23, 34, 77, 43, 33];

//     const abnormal = (value) => {
//         if (value % 2===0) {
//             return value;
//         }
//     }
// let m = numbers.find(abnormal);
// console.log(m);

// ! string methods

// const blanket = "I am groot";

// console.log(blanket.includes("groot"));

// ? modules , classes , set & get 

// import {  nameFunc,text } from "./myModules.js";

// console.log(text);

// nameFunc("I am groot.");
// console.log(text);


// import { finish as teut, myFunc } from "./myModules.js";
// console.log(teut);
// myFunc("I am groot.");
// console.log(teut);


// ! synchronous and asyncchronus

// const taskOne = () =>{
//     console.log("One");
// };
// const taskTwo = () =>{
//     console.log("Two");
// };

// const taskThree = () =>{
//     setTimeout(() =>{console.log("Three.data Loading");}
//     , 2000);
// };
// const taskFour = () =>{
//     console.log("Four");
// };
// const taskFive = () =>{
//     console.log("Five");
// };
// taskOne();
// taskTwo();
// taskThree()
// taskFive(;
// taskFour(););

// ! callback and higherOrderFunction

// const square = (x) =>{
//     console.log(`square of ${x} : ${x*x}`);
// }
// square(7);
// const z = square ;
// z(8);

// const higherOrderFunction = (num,callback) =>{
// callback(num);
// }
// higherOrderFunction(7,square);


// ! practice  callback and higherOrderFunction

//  const square = (x) =>{
//      console.log(`Square of ${x} : ${x*x}`);
//  };

//  const higherOrder = (num,callback) =>{
//     callback(num);
//  };
//  higherOrder(9,square);

// ! more on callback

// const taskOne = (callback) => {
//     console.log("One");
//     callback();
// };
// const taskTwo = (callback) => {
//     console.log("Two");
//     callback();
// };

// const taskThree = (callback) => {
//     setTimeout(() => {
//         console.log("Three.data Loading");
//         callback();
//     }
//         , 2000);
// };
// const taskFour = (callback) => {
//     console.log("Four");
//     callback();
// };
// const taskFive = () => {
//     console.log("Five");
// };
// taskOne(()=>{});
// taskTwo(()=>{});
// taskThree(()=>{});
// taskFour(()=>{});
// taskFive(()=>{});

// taskOne(function f1() {
//     taskTwo(function f2() {
//         taskThree(function f3() {
//             taskFour(function f4() {
//                 taskFive(function f5() {

//                 });
//             });
//         });
//     });
// });
// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour(() => {
//                 taskFive(() => {

//                 });
//             });
//         });
//     });
// });

// ! promise 1
// create a promise
// const promise1 = new Promise((resolve, reject) => {
//     let myPromise = true;
//     if (myPromise) {
//         resolve("Jack is my name")
//     }
//     else {
//         reject("Mack is my name")
//     };
// });
// promise1.then((res) => { console.log(res); });

// ! handling error

// ! run a promise
// const promise1 = new Promise((resolve, reject) => {
//     let myPromise = false;
//     if (myPromise) {
//         resolve("Jack is my name")
//     }
//     else {
//         reject ("Mack is my name")
//     };
// });
// promise1.then((res) => { console.log(res); })
// .catch((err)=>{console.log(err);})

// ? Direct resolve or reject

// const promise1 = new Promise((resolve, reject) => {

//     resolve("Jack is my name")
// });
// promise1.then((res) => { console.log(res); })

// const promise1 = new Promise((resolve, reject) => {
//         reject("Mack is my name")
// });
// promise1.catch((err)=>{console.log(err);})

// ? run multiple promise

// const promise1 = new Promise((resolve, reject) => {
//     let myPromise = true;
//     if (myPromise) {
//         resolve("Jack is my name")
//     }
//     else {
//         reject ("Mack is my name");
//     };
// });

// const promise2 = new Promise((resolve, reject) => {
//     {
//         resolve("Mack is my name");
//     };
// });


// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(res1,res2);
// });

// ? run multiple promise at once 

// const promise1 = new Promise((resolve,reject)=>{
//     let condition = true;
//     if (condition) {
//         resolve("I am groot.")
//     }
//     else{
//         reject("I am Maruf.")
//     };
// });


// const promise2 = new Promise ((resolve,reject)=>{
//     resolve("My name is groot.")
// }) ;

// Promise.all([promise1,promise2]).then((res)=>{console.log(res);})
// Promise.all([promise1,promise2]).then(([res1,res2])=>{console.log(res1,res2);})


// ! race promises

// const promise1 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("I am groot.")
//     }, 200);

// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My name is groot.")
//     }, 1000);
// });

// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// })

// ! promise 2

// console.log('welcome');

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am taskOne");
//     })
// };
// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("I am taskTwo");
//         }, 300);
//     })
// };
// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am taskThree");
//     })
// };
// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am taskFour");
//     })
// };
// const taskFive = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am taskFive");
//     })
// };

// taskOne()
//     .then((res) => {
//         console.log(res);
//     })
//     .then(taskTwo)
//     .then((res) => {
//         console.log(res);
//     })
//     .then(taskThree)
//     .then((res) => {
//         console.log(res);
//     })
//     .then(taskFour)
//     .then((res) => {
//         console.log(res);
//     })
//     .then(taskFive)
//     .then((res) => {
//         console.log(res);
//     })

//     console.log("bye");


// ! practicing promise chaining

// console.log("Welcome");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am groot 1");
//     })
// };
// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am groot 2");
//     })
// };
// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("I am not groot 3");
//         }, 250);
//     })
// };
// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("I am groot 4");
//     })
// };

// taskOne().then((res) => { console.log(res); })
//     .then(taskTwo).then((res) => { console.log(res); })
//     .then(taskThree).then((res) => { console.log(res); })
//     .then(taskFour).then((res) => { console.log(res); })


// const callAll = async() => {
//     try {
//         const t1 = await taskOne();
//         console.log(t1);
//         const t2 = await taskTwo();
//         console.log(t2);
//         const t3 = await taskThree();
//         console.log(t3);
//     } catch (error) {

//         console.log(error);
//     }
//     finally{
//         const t4 = await taskFour();
//         console.log(t4);     
//     };

// };
// callAll();

// console.log("Bye");

// ! All about Promise

// ? creating promise
// new Promise((resolve,reject)=>{resolve("I am Maruf.")}) 

// ? put inside a variable
// const variablePromise =new Promise((resolve,reject)=>{resolve("I am Maruf.")}); 
// ? put inside a function
// const myFunctionPromise = () =>{return new Promise((resolve,reject)=>{resolve("I am Maruf.")});  }

// ? give a condition true

// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         let condition = true;
//         if (condition) {resolve("I am Maruf.")});
//     }};


// ? give a condition false

// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         let condition = false;
//         { reject("I am not Maruf.") });
// ^ Error with full family { reject(new Error("I am not Maruf.")) });
// }};



// ! calling a promise

// ? in case of "resolve"

// variablePromise.then((res)=>{console.log(res);})

// ? in case of "reject"

// variablePromise.catch((res)=>{console.log(res);})

// ? run multiple promise
// & At first
// ^ create promise1
// ^ create promise2
// * Promise.all([promise1,promise2]).then(([res1,res2])=>{console.log(res1,res2);})

// ? race between promise
// & At first
// ^set setTimeout function inside the targeted promises
// * Promise.race([promise1,promise2]).then((res)=>{console.log(res);})


// ! promise chaining 

// & At first
// ^ create some promises using function
// * taskOne()
// * .then((res)=>{console.log(res);})
// * .then(taskTwo)
// * .then((res)=>{console.log(res);})
// * .then(taskThree)
// * .then((res)=>{console.log(res);})
// * .then(taskFour)
// * .then((res)=>{console.log(res);})

// ? Do this using async await

// & At first
// ^ create some promises using function
// async function callAllPro() {
//     const f1 = await taskOne();
//     console.log(f1);
//     const f2 = await taskTwo();
//     console.log(f2);
//     const f3 = await taskThree();
//     console.log(f3);
//     const f4 = await taskFour();
//     console.log(f4);
// };
// callAllPro();

// & Es6 

// const callAllPro = async () {
//     const f1 = await taskOne();
//     console.log(f1);
//     const f2 = await taskTwo();
//     console.log(f2);
//     const f3 = await taskThree();
//     console.log(f3);
//     const f4 = await taskFour();
//     console.log(f4);
// };
// callAllPro(); 

// & insert data

// const callAllPro = async () {
//     const f1 = await taskOne();
//     console.log(f1);
//     const f2 = await taskTwo(f1);
//     console.log(f2);
//     const f3 = await taskThree(f2);
//     console.log(f3);
//     const f4 = await taskFour(f3);
//     console.log(f4);
// };
// callAllPro();

// & starting from zero 

// ? onclick function

// var myPic = document.getElementById("myImg");
// document.getElementById("checkButton").addEventListener("click", () => {
//     myPic.src = "img/bg1.jpg";
// })

// ? pic showing on button click

// let myPic = document.getElementById("myImg");

// document.getElementById("myPic1").addEventListener("click",()=>{
//     myPic.src="Img/bg1.jpg";
// });
// document.getElementById("myPic2").addEventListener("click",()=>{
//     myPic.src="Img/bg2.jpg";
// }); 


// ?  innerHTML

// document.getElementById("myPic1").addEventListener("click",()=>{
//     document.querySelector("p").innerHTML="I am groot";

// });
// document.getElementById("myPic2").addEventListener("click",()=>{
//     document.querySelector("p").innerHTML="I am Maruf";
// }); 

// & creating,deleting,inserting Element in dom


// let main = document.getElementById("myDiv");
// let del = document.querySelector("p");
// let boss = document.querySelector("h1");

// let h1 = document.createElement("h6");
// let text = document.createTextNode("I am the Boss");
// h1.appendChild(text);
// main.appendChild(h1);
// let h2 = document.createElement("h2");
// let textNew = document.createTextNode("I am new");
// h2.appendChild(textNew);
// main.insertBefore(textNew,boss)
// main.removeChild(del);

// & image slider

// let myImg = document.querySelector("#myPic");
// let photos = ["img/bg.jpg", "img/bg1.jpg", "img/bg2.jpg"];

// let count = 0;

// const next = () => {
//     count++;
//     if (count >= photos.length) {
//         count = 0;
//         myImg.src = photos[count];

//     } else {
//         myImg.src = photos[count];
//     };
// };

// const prev = () => {
//     count--;
//     if (count<0) {
//         count = photos.length-1;
//         myImg.src = photos[count];

//     } else {
//         myImg.src = photos[count];
//     };
// };

// ^ Css dynamic change

// const para = document.querySelector("p");
// const button1 = document.querySelector("#myButton1");
// const button2 = document.querySelector("#myButton2");

// button1.addEventListener("click",()=>{
//     para.classList.add("myCss");
// })
// button2.addEventListener("click",()=>{
//     para.classList.remove("myCss");
// })

// ^ mouseover and mouseout

// const para = document.querySelector("p");
// const button1 = document.querySelector("#myButton1");
// const button2 = document.querySelector("#myButton2");
// button1.addEventListener("mouseover", () => {
//     para.classList.add("myCss");
// });
// button2.addEventListener("mouseout", () => {
//     para.classList.remove("myCss");
// });

// ^ event listener in multiple element { arrow function is not working here !!! Try it } 

// let click1 = document.querySelectorAll("button")[0];
// click1.addEventListener("click", function () {
//     let text1 = this.innerHTML;
//     document.querySelector("h1").innerHTML = "You have clicked " + text1
// });
// let click2 = document.querySelectorAll("button")[1];
// click2.addEventListener("click", function () {
//     let text2 = this.innerHTML;
//     document.querySelector("h1").innerHTML = "You have clicked " + text2
// });
// let click3 = document.querySelectorAll("button")[2];
// click3.addEventListener("click", function () {
//     let text3 = this.innerHTML;
//     document.querySelector("h1").innerHTML = "You have clicked " + text3
// });

// todo this using loop

// let len = document.querySelectorAll("button").length;

// for (let u = 0; u < len; u++) {
//     document.querySelectorAll("button")[u].addEventListener("click", function () {
//         let text = this.innerHTML;
//         document.querySelector("h1").innerHTML = "You have clicked " + text
//     });
// }


// ^ audio playing

// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         let text = this.innerHTML;
//         audioPlay(text)
//     });
// };
//         const audioPlay = (text) => {
//             switch (text) {
//                 case "a":
//                     var audio = new Audio("sounds/a.mp3");
//                     audio.play();
//                     break;

//                 case "b":
//                     var audio = new Audio("sounds/b.mp3");
//                     audio.play();
//                     break;

//                 case "c":
//                     var audio = new Audio("sounds/c.mp3");
//                     audio.play();
//                     break;

//                 default:
//                     break;
//             };
//         };

// // ^ again audio playing  

// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click",
//         function () {
//             let text = this.innerHTML;
//             audioPlay(text);
//             playAnimation(text);
//         });
// };

// const audioPlay = (text) => {
//     switch (text) {
//         case "a":
//             let audio = new Audio("sounds/a.mp3");
//             audio.play();
//             break;
//         case "b":
//             let audio1 = new Audio("sounds/b.mp3");
//             audio1.play();
//             break;
//         case "c":
//             let audio2 = new Audio("sounds/c.mp3");
//             audio2.play();
//             break;

//         default:
//             break;
//     };
// };

//^  playAnimation
// const playAnimation = (text) => {
//     let selectedButton = document.querySelector("." + text);
//     selectedButton.classList.add("myCss");

//     setTimeout(() => {
//         selectedButton.classList.remove("myCss");
//     }, 1000);
// };

// document.addEventListener("keypress",function (event) {
//     let text = event.key;
//     audioPlay(text);
//     playAnimation(text);
// });
//^ playing Audio with Animation and keypress

// let len = document.querySelectorAll("button").length;
// for(let i = 0; i<len;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function () {
//     let txt = this.innerHTML;
//     audioPlay(txt);

// });
// };

// const audioPlay = (txt) =>{
//     switch (txt) {
//         case "a":
//                 let audio = new Audio("sounds/a.mp3");
//                 audio.play();
//             break;
//         case "b":
//                 let audio1 = new Audio("sounds/b.mp3");
//                 audio1.play();
//             break;
//         case "c":
//                 let audio2 = new Audio("sounds/c.mp3");
//                 audio2.play();
//             break;

//         default:
//             break;
//     };
// };

//! Animation in click with Audio
// let totalLen = document.querySelectorAll("button");

// for (let m = 0; m < totalLen.length; m++) {
//     document.querySelectorAll("button")[m].addEventListener("click", function () {
//         let txt = this.innerHTML;
//         audioPlay(txt);
//         animationPlay(txt);
//     });
// };

// const audioPlay = (txt)=>{
//     switch (txt) {
//         case "a":
//                 let audio = new Audio("sounds/a.mp3");
//                 audio.play();
//             break;
//         case "b":
//                 let audio1 = new Audio("sounds/a.mp3");
//                 audio1.play();
//             break;
//         case "c":
//                 let audio2 = new Audio("sounds/a.mp3");
//                 audio2.play();
//             break;

//         default:
//             break;
//     };
// };



// const animationPlay=(txt)=>{
//     let selectedButton = document.querySelector("."+txt);
//     selectedButton.classList.add("myCss");
//     setTimeout(() => {
//         selectedButton.classList.remove("myCss");
//     }, 500);

// };

// document.addEventListener("keypress",function (any) {
//     let key = any.key;
//     audioPlay(key);
//     animationPlay(key);
// });

//^ canvas

// let mainCvs = document.querySelector("#myCanvas");

// let ctx = mainCvs.getContext("2d");
// ctx.fillStyle="green";
// ctx.fillRect(10,10,380,280);

// ctx.strokeStyle="black  ";
// ctx.strokeRect(11,11,380,280);

// let centerX =mainCvs.width/2;
// let centerY =mainCvs.height/2;

// ctx.beginPath();
// ctx.arc(centerX,centerY,65,0,Math.PI*2,false);
// ctx.fillStyle="red";
// ctx.fill();
// ctx.strokeStyle="black";
// ctx.stroke();

//^ map

// const marks = [4,6,2,3,7,55,32,113,5];
// let square = marks.map(function myFunc(x) {
//     return x*x;
// });
// console.log(square);


//^ filter
// const marks = [4,6,2,3,7,55,32,113,5];
// let square = marks.filter(function myFunc(x) {
//     return x>5;
// });
// console.log(square);

//^ uses of map and filter in Objects array


//^ let's create a objects array at first

// const miracle = [
//     {
//         name : "Maruf",
//         age : 19,
//         gpa : 4.69
//     },
//     {
//         name : "Faruk",
//         age : 25,
//         gpa : 3.69
//     },
//     {
//         name : "Arif",
//         age : 27,
//         gpa : 5.00
//     }
// ];
// let fool = miracle.filter((x)=>x.age>20).map((y)=>y.name);
// console.log(fool);
// let checkAge = miracle.filter(function (x) {
//     return x.age>20;
// }).map(function (y) {
//     return y.name;
// })
// ;
// console.log(checkAge);


//& destructuring

//^ array destructuring

// const arrays = ["Maruf","Faruk","Arif","Sharif"];
// console.log(arrays[0],arrays[1],arrays[2],arrays[3]);

// const [a,b,c,d] = arrays;
// console.log(a,b,c,d);


//^ swap destructuring

// let a = 34;
// let b = 56;
// [a,b]=[b,a];
// console.log(a);//result is 56
// console.log(b);//result is 34


//^ objects destructuring

// const anyObj = {
//     name: "Maruf",
//     age : 21,
//     address:"Birulia"
// };
// const{name,age,address} = anyObj;
// console.log(name,age,address);

// console.log(anyObj.address
//     );

//^ function destructuring

// const myFunc = () =>{
// console.log(`${anyObj.id} ${anyObj.name} age:${anyObj.age}`);
// };
// const anyObj = {
//     name:"Maruf",
//     age:21,
//     id:334
// };
// myFunc();


// const myFunc = ({age,name,id}) =>{     //& must need to give curly brackets here and 3rd brackets for array 
// console.log(`${id} ${name} age:${age}`);
// };
// const anyObj = {
//     name:"Maruf",
//     age:21,
//     id:334
// };
// myFunc(anyObj);

//^ arrow methods

//? find()

// const numbers = [55, 23, 29, 75, 43, 33];

// let separated = numbers.find(function (x) {
//     return x % 2 !== 0;
// });
// console.log(separated);

//^ findIndex();

// const marks = [5,43,2,6,34];

// let diff = marks.findIndex((x)=>x/3==2);
// console.log(diff);

//^ do this using if else 

// const marks = [5,43,2,6,34];

// const anyName = (x) =>{
//     if (x%2==0) {
//         return x;
//     }
// };
// let any = marks.find(anyName);
// console.log(any);


//^ string methods

//& startsWith()
// let message = "I am Maruf";
// console.log(message.startsWith("I",0));
//& endsWith()
// console.log(message.endsWith("Maruf"));
//& includes()
// console.log(message.includes("Maruf"));

//^ synchronous and asynchronous

// const taskOne = (callback) => {

//     console.log("one");
//     callback();
// };
// const taskTwo = (callback) => {

//     setTimeout(() => {
//         console.log("two");
//         callback();

//     }, 2000);
// };
// const taskThree = (callback) => {

//     console.log("three");
//     callback();
// };
// const taskFour = (callback) => {

//     console.log("four");
//     callback();
// };
// const taskFive = () => {

//     console.log("five");

// };
// taskOne((callback) => {
//     taskTwo((callback) => {
//         taskThree((callback) => {
//             taskFour((callback) => {
//                 taskFive((callback) => {

//                 });
//             });

//         });

//     });

// });

//^ callBack and highOrderNumbers

// function square(a) {
//     console.log(`${a}:${a*a}`);
// };
// square(6);
// let m = square;
// m(5);
// function  highOrderFunc(num,callback) {
//     callback(num);
// };
// highOrderFunc(10,square);



// const square = (a) => {
//     console.log(`${a}:${a*a}`);
// };
// square(6);
// let m = square;
// m(5);
// const highOrderFunc = (num, callback) => {
//     callback(num);
// };
// highOrderFunc(10, square);

//^ Promise

//& creating a promise 

// let prom = new Promise((resolve,reject)=>{
//     let myProm = false;
//     if (myProm) {
//         resolve("Can I come in ?");
//     }else{
//         reject("No, you are rejected");
//     }
// });
// prom.catch((abc)=>{
//     console.log(abc);
// })

//& NO condition

// let prom = new Promise((resolve,reject)=>{
//         resolve("Can I come in ?");

// });
// prom.then((abc)=>{
//     console.log(abc);
// })

//^ Run multiple Promises at the same Time

// const promise1 = new Promise((resolve,reject)=>{
//    resolve(("I am Maruf"));
// });

// const promise2 = new Promise((resolve,reject)=>{
//    reject("I am groot");
// });

// Promise.all([promise1,promise2]).then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })

// const promise1 = new Promise((resolve,reject)=>{
//    resolve(("I am Maruf"));
// });

// const promise2 = new Promise((resolve,reject)=>{
//    resolve("I am groot");
// });

// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(res1,res2);
// });

//^ race among Promises

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//    resolve(("I am Maruf"));
//     }, 3000);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//    resolve("I am groot");
//     }, 2000);
// });

// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// });

//! Promise chaining

// console.log("Welcome");

// const taskOne = (callback) => {
//     return new Promise((resolve, reject) => {
//         resolve("Hi I am num 1 ");
//         callback();
//     });
// };
// const taskTwo = (callback) => {
//     return new Promise((resolve, reject) => {
//         resolve("Hi I am num 2 ");
//         callback();
//     });
// };
// const taskThree = (callback) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("Hi I am num 3 ");

//         }, 200);

//         callback();
//     });
// };
// const taskFour = (callback) => {
//     return new Promise((resolve, reject) => {
//         reject("Hi I am num 4 ");
//         callback();
//     });
// };
// const taskFive = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Hi I am num 5 ");
//     });
// };


// taskOne().then((res) => {
//     console.log(res);
// }).then(taskTwo).then((res) => {
//     console.log(res);
// }).then(taskThree).then((res) => {
//     console.log(res);
// }).then(taskFour).catch((res) => {
//     console.log(res);
// }).then(taskFive).then((res) => {
//     console.log(res);
// });


// const newWay = async() =>{
//     try {
//         let f1 = await taskOne((callback)=>{
//             console.log(f1);
//         });
//         let f2 = await taskTwo((callback)=>{

//             console.log(f2);
//         });
//         let f3 = await taskThree((callback)=>{
//             console.log(f3);

//         });
//         let f4 = await taskFour((callback)=>{
//             console.log(f4);

//         });

//     } catch (error) {
//         console.log(error);
//     }
//     finally{
//         let f5 = await taskFive();
//         console.log(f5); 
//     }

// };

// newWay();

// console.log("goodbye");
//!____-----_______----------_________--------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//^ BOM (Browser Object Model)

//& Window Object
// console.clear();
// console.log(window.document);
// console.log(document);
//& Location Object
// console.log(location);
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

//^ BOM customization

// let myDiv = document.querySelector(".my-Div");

// let b1 = myDiv.children[0];
// b1.textContent = location.href;
// console.log(b1);
// let b2 = myDiv.children[1];
// b2.textContent = location.host;
// console.log(b2);
// let bn = myDiv.children[2];
// bn.textContent = location.hostname;
// console.log(bn);
// let b3 = myDiv.children[3];
// b3.textContent = location.protocol;
// console.log(b3);
// let b5 = myDiv.children[4];
// b5.textContent = location.pathname;
// console.log(b5);

// document.querySelector("#myButton").addEventListener("click", function () {
//     location.assign("https://www.google.com/")
// });

//^ Greeting users

// const myFunc = () =>{

//     let name = prompt("Input your name:");
//     let text;
//     if (name ==null || name =="") {
//         text = "no name found";
//     }else{
//         text="welcome " + name;
//     };
//     let h1 = document.createElement("h1");
//     let textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// };
// myFunc();

//& Redo -->  greeting users


// const gretting = () =>{
//     let name = prompt("Input your name:");
//     let txt;
//     if (name==null || name=="") {
//         txt = "no name found";
//     }else{
//         txt = "Welcome "+name;
//     }
//     let h1 = document.createElement("h1");
//     let text = document.createTextNode(txt);
//     h1.appendChild(text);
//     document.body.appendChild(h1);
// }
// gretting();

//^ setTimeOut   { let or const is not supported here.}
// let h3 = document.querySelector("p");
// let save = document.querySelector("#saveButton");
// save.addEventListener("click",allIsWell)

// function allIsWell () {
//   setTimeout(() => {
//     h3.textContent="you have successfully saved the button !";
//   }, 1000);
// };

//^setInterval

// let count = 0;
// document.querySelector("#countButton").addEventListener("click",function () {

//     setInterval(() => {
//         count++;
//         document.querySelector("p").textContent= count;
//     }, 1);
// });


//^ create a save button

// let save = document.querySelector("#saveButton");
// let inform = document.querySelector(".inform");

// save.addEventListener("click",saveMe);

// function saveMe() {
//     inform.textContent="You have saved your files !"
//     setTimeout(() => {
//         inform.textContent= "";
//     }, 2000);
// };

//^ uses of interval
// let start = document.querySelector("#saveButton");
// let inform = document.querySelector(".inform");

// start.addEventListener("click", startMe);

// function startMe() {
//     let count = 0;

//     setInterval(() => {

//         count++;
//         if (count < 10) {
//             count = "0" + count;
//         } else {
//             count = count;
//         }
//         inform.textContent = count;
//     }, 1000);

// }; 

//^ create a simple digital clock

// let startClock = document.querySelector("#saveButton");
// let inform = document.querySelector(".inform");

// startClock.addEventListener("click", myClock);

// function myClock() {
//     let date = new Date();
//     let hours = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     min = formatTime(min);
//     sec = formatTime(sec);
//     let time = hours + ":" + min + ":" + sec;
//     inform.textContent = time;
//     setInterval(myClock,1000);
// };

// function formatTime(value) {
//     if (value<10) {
//         value = "0"+ value;
//     }
//     return value;

// };


//^ create a simple digital clock

// let startClock = document.querySelector("#saveButton");
// let inform = document.querySelector(".inform");

// startClock.addEventListener("click", myClock);

// function myClock() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//      minutes = formatTime(minutes);
//      seconds = formatTime(seconds);


//     let time = hours + ":" + minutes + ":" + seconds;
//     inform.textContent = time;
//     setInterval(myClock, 1000);

// };

// function formatTime(anyValue) {
//     if (anyValue<10) {
//         anyValue = "0" + anyValue;
//     };
//     return anyValue;
// }
// console.time('Your code took');
// console.table({name:"Harry",age:23});
// console.log({name:"Harry",age:23});
// console.error("This is an error !");
// console.warn("This is an error !");
// console.clear({name:"Harry",age:23});
// console.timeEnd('Your code took');

// let name = "Maruf";
// let address = "Birulia";

// let message = (`My name is ${name} I live in ${address} 
// `);

// console.log(message);


