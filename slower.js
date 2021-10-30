//& A new begining

//^ Canvas

// let cxt = document.querySelector("#myCanvas");
// let c = cxt.getContext("2d");
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(8, 8, 380, 280);

// c.fillStyle = "green";
// c.fillRect(8, 8, 380, 280);

 //& making of circle

// let centerX = cxt.width/2;
// let centerY = cxt.height/2;

// c.beginPath();
// c.arc(centerX,centerY,65,0,Math.PI*2,false);
// c.strokeStyle="black";
// c.stroke();
// c.fillStyle="red";
// c.fill();




//^ image slider

// let images = ["img/bg.jpg", "img/bg1.jpg", "img/bg2.jpg"]
// let myPic = document.querySelector("#myImg");

// let count = 0;

// const next = () => {
//     count++;
//     if (count >= images.length) {
//         count = 0;
//         myPic.src = images[count];
//     }else{
//         myPic.src = images[count];
//     };
    
// };
// const prev = () => {
//     count--;
//     if (count<0) {
//         count = images.length-1;
//         myPic.src = images[count];
//     }else{
//         myPic.src = images[count];
//     };

// };

//^ Css dynamic change

// const para = document.querySelector("p");
// const button1 = document.querySelector("#myButton1");
// const button2 = document.querySelector("#myButton2");

// button1.addEventListener("click",()=>{
//     para.classList.add("myCss");
// })
// button2.addEventListener("click",()=>{
//     para.classList.remove("myCss");
// })


//^ event listener in multiple element { arrow function is not working here !!! } 

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

//todo this using loop

// let len = document.querySelectorAll("button").length;

// for (let u = 0; u < len; u++) {
//     document.querySelectorAll("button")[u].addEventListener("click", function () {
//         let text = this.innerHTML;
//         document.querySelector("h1").innerHTML = "You have clicked " + text
//     });
// }


//^ audio playing

// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         let text = this.innerHTML;
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


//     });
// };
     


 // ^ again audio playing  

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

//^ keypress
// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function (event) {
//     count++;
//     var key = event.key;
//     document.querySelector("p").innerHTML = "You have clicked " + count;
// });


//! All about Promise

//? creating promise
// new Promise((resolve,reject)=>{resolve("I am Maruf.")}) 

//? put inside a variable
// const variablePromise =new Promise((resolve,reject)=>{resolve("I am Maruf.")}); 
//? put inside a function
// const myFunctionPromise = () =>{return new Promise((resolve,reject)=>{resolve("I am Maruf.")});  }

//? give a condition true

// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         let condition = true;
//         if (condition) {resolve("I am Maruf.")});
//     }};


//? give a condition false

// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         let condition = false;
//         { reject("I am not Maruf.") });
//^ Error with full family { reject(new Error("I am not Maruf.")) });
// }};



//! calling a promise

//? in case of "resolve"

// variablePromise.then((res)=>{console.log(res);})

//? in case of "reject"

// variablePromise.catch((res)=>{console.log(res);})

//? run multiple promise
//& At first
//^ create promise1
//^ create promise2
//* Promise.all([promise1,promise2]).then(([res1,res2])=>{console.log(res1,res2);})

//? race between promise
//& At first
//^set setTimeout function inside the targeted promises
//* Promise.race([promise1,promise2]).then((res)=>{console.log(res);})


//! promise chaining 

//& At first
//^ create some promises using function
//* taskOne()
//* .then((res)=>{console.log(res);})
//* .then(taskTwo)
//* .then((res)=>{console.log(res);})
//* .then(taskThree)
//* .then((res)=>{console.log(res);})
//* .then(taskFour)
//* .then((res)=>{console.log(res);})

//? Do this using async await

//& At first
//^ create some promises using function
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

//& Es6 

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

//& insert data

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


//& Error handling throw

// let checked = document.getElementById("checkButton").addEventListener("click", function () {
//     let value = document.getElementById("myInput").value;

// try {
//     if (value > 10) 
//         {
//             throw "this is too big"
//         } else if (value < 5) {
//             throw "this is too small"
//         }else{
//             throw "this is ok"
//         }

// } catch (error) {
//     console.log(error);
// }

// });
//^ Object literals
//& ES6
// function myFriend (name, address)  {
//     return {
//          name,
//          address
//     }
// }
// console.log(myFriend("Maruf", "Birulia"));

// function myFunction(name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(myFunction("Maruf Hossain", 23));

// methods in objects

// let bigDog = {
//     demo: function () {

//         return alert("HI")
// }
// };
// console.log(bigDog.demo());


// let bigDog = {
//     demo() {

//         return alert("HI")
// }
// };
// console.log(bigDog.demo());


// let bigDog = {
//     'demo name'() {

//         return alert("HI")
// }
// };
// console.log(bigDog['demo name']());

//& re -- Object literals

// function myFunc(name,address) {
//  return{
//     name : name,
//     address : address
//  }   
// }

// console.log(myFunc("Maruf","Birulia"));

// function myFault(name,address) {
//   return{
//     name,
//     address 
// }  
// };console.log(myFault("Maruf","Birulia"));

//^ Methods in Objects

// let myMethods = {
//     body: function () {
//         return alert("Hello");
//     }
// };

// console.log(myMethods.body());

//^ methods in Objects

// let sentence = {body(){
//     return alert("Follow me.")
// }
// };
// console.log(sentence.body());


// let message = {
//     'body name'() {
//         return alert("Hello world");
//     }
// };
// console.log(message['body name']());

//^ object literals in function

// function myFunc() {
//     return {
//     name:"Maruf",
//     address:"Birulia"
//     }
// }
// console.log(myFunc());

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
