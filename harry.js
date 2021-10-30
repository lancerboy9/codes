//! episode-2 
//^ different types of console

// console.time("Your code")
// console.log("string");
// console.log(5*6);
// console.log(9);
// console.log(["Maruf","Arif"]);
// console.log({name:"Maruf",Brother:"Arif"});
// console.table({name:"Maruf",Brother:"Arif"});
// console.warn("Your are in danger");
// console.assert(9<5,"This is not possible")
// console.timeEnd("Your code")
// console.clear();
// console.log();

//! episode-5 trensform to string
//^ trensform to string

// let num = "4354";
// // console.log(num,(typeof num ));
// let pum = num.toString();
// console.log(pum);
// let arr = String([3, 5, 7, 3, 2, 3]);
// console.log(arr);
// let obj = String({name:"Maruf",another:"Arif",further:"Faruk"});
// console.log(obj);
// let string = "Arif";
// console.log(typeof string);
// stringToNum = Number("Arif");
// console.log(typeof stringNum);
// arr = Number([4,454,35,6554]);
// console.log(arr);
// boolean = Number(true);
// console.log(boolean);
// boolean = Number(false);
// console.log(boolean);

// let date = new Date();
// console.log(typeof date);
// let date = Number(new Date());
// console.log(typeof date);

//! episode - 6
//^ different kinds of small functions

// let html = "<h1>Hello ,how are you ?</h1>"
// console.log(html.concat("I am Maruf"));
// console.log(html,"I am groot");
// console.log(html.toUpperCase());
// console.log(html.toLowerCase());
// console.log(html);
// console.log(html.indexOf("H"));
// console.log(html.lastIndexOf("h"));
// console.log(html.charAt("11"));
// console.log(html.split(" "));
// console.log(html.replace("Hello","Hi"));

// console.log(html.substring(7,5));
// console.log(html.slice(7,5));
// console.log(html.substr(7,5));


// console.log(html.substring(5,7));
// console.log(html.slice(5,7));
// console.log(html.substr(5,7));

// let html = "<h1>Hello12 ,how are you ?</h1>"



// console.log(html.slice(6,4));
// console.log(html.substring(6,4));
// console.log(html.substr(6,4));

//^ episode - 8
//& if elss
// const pen = "10 tk";
// let note;
// if (note) {
//     console.log("Got it");
// }
// else{
//     console.log("Nothing found");
// }

// if (typeof any !== 'defined') {
//     console.log("magicAny is undefined");
// }
// else{
//     console.log("undefined");
// }
//^ episode - 11
//& window


// let a = window;
// console.log(a);
// let a = location;
// console.log(a);
// let a = document;
// console.log(a);

// let a = innerHeight;
// console.log(a);
// let history = window.history;
// console.log(history);
// console.log(history.go(-2));;

//^ episode - 12
// console.log('any');
// let a = document;
// a = document.all;
// a = document.body;
// a = document.forms;
// a = document.links;
// a = document.images;
// a = document.scripts[0];
// Array.from(a).forEach((element) => {
//     console.log(element);
//     console.log(typeof a);
// });
// console.log(a);



// let text = "facebook";
// let links = document.links;
// let href;

// Array.from(links).forEach((element)=>{
//     href = element.href;
//     console.log(href);
//     if (href.includes(text)) {
//         console.log("Fb found");
//     }else{
//         console.log("not found");
//     };
// });


// let text = String(["facebook","google"]);

// let links = document.links;
// let href;
// Array.from(links).forEach((element) => {
//     href = element.href;
//     console.log(href);
//     if (href.includes("facebook")) {
//         console.log("Item found")
//     } else if (href.includes("google")) {
//         console.log("Item found");
//     } else {
//         (console.log("Not found"));
//     }
// })
//^ episode - 13
//& fetch all links from the given page and print out only the described text

// let links = document.links;

// Array.from(links).forEach((element) => {
//     text = element.innerHTML;
//     console.log(text);
//     if (text.includes("facebook")) {
//         console.log("Mission passed");
//     } else if (text.includes("youtube")) {
//         console.log("Mission passed");
//     } else {
//         console.log("Mission failed");
//     };
// });

//^ episode-14 //! { HTML Selector }
//& parent , child and chidnodes

// let fb = document.getElementsByClassName("facebook")[0];
// let class1 = fb.className;
//  class1 = fb.parentNode;
//  class1 = fb.childNodes;
//   class1 = fb.innerHTML="<i>Heillo</i>"
// console.log(class1);

// let myChild = document.getElementsByClassName("child");
// Array.from(myChild).forEach((Element)=>{
//     Element.style.color = "green";
//     console.log(Element);
// })

// let classes = document.getElementsByClassName("container");
//  classes = document.getElementsByClassName("child");

// let button = document.querySelectorAll("button a");
// let  classes = document.getElementsByTagName("div");
// console.log(button);
// let x = Array.from(button);
// let y = Array.from(classes);


// x.forEach((element)=>{
//     element.style.color="green";
// });
// y.forEach((element)=>{
//     element.style.color="green";
// });
// console.log(classes);
// Array.from(classes).forEach((element)=>{
//     element.style.color="green";
// });

// console.log(classes);

// let  classes = document.querySelectorAll("div");
// for (let index = 0; index < classes.length; index++) {
//     const element = classes[index];
//     console.log(element);
//     element.style.color="green";
// }

//^ episode-15

//& children vs childNodes

// let con = document.querySelector(".container");

// console.log(con.children[0].nodeName);
// console.log(con.childNodes[0].nodeName);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType
// console.log(con.childNodes);
// console.log(con.children);
// console.log(con.childNodes[0].nodeType);
// console.log(con.children[0].nodeType);

//^ Traversing DOM

//  let con = document.querySelector(".container");
// console.log(con.childNodes);
// console.log(con.children);
//  console.log(con.children[0].children[0].children);

// console.log(con.firstChild);
// console.log(con.firstElementChild);
// console.log(con.lastChild);
// console.log(con.lastElementChild);
// console.log(con.childElementCount);
// console.log(con.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0]);

//^ creating Element 

// let h1 = document.createElement("h1");
// let text = document.createTextNode("I am groot");
// h1.appendChild(text);
// h1.className="myCss";
// h1.id= "myId";
// h1.setAttribute("myattribute","attribute");
// h1.innerHTML="I am groot";

// let con = document.querySelector(".container");
// con.appendChild(h1);
// console.log(h1);
// console.log(upon);

//^ episode-17
// console.log("This is tutorial 17 on events");

// document.getElementById("heading").addEventListener("click", function(e) {
//   let variable;
//   console.log("You have clicked the heading");
//   variable = e.target;
//   variable = e.target.className;
//   variable = Array.from(e.target.classList);

//   variable = e.target.id;
//   variable = e.offsetX;
//   variable = e.offsetY;
//   variable = e.clientX;
//   variable = e.clientY;
//   console.log(variable);
//   // location.href = '//codewithharry.com'
// });

// document.getElementById("heading").addEventListener("click", function (element) {
// let variable;
// console.log("clicked");
//    location.href = '//codewithharry.com';
// console.log(element);
// let variable;
// variable = element;

// variable = element.target;
// variable = element.target.id;
// variable = element.target.className;
// variable = element.target.classList;
// variable = Array.from(variable);
// variable.forEach((element)=>{
//     // console.log(element);
// });
// variable = element.offsetX;
// variable = element.offsetY;
// variable = element.clientX;
// variable = element.clientY;

//     console.log(variable);
// })

//^ episode - 18

// console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
//     console.log('You triggered mouse move event')
// })

// let fb = document.querySelector(".facebook");
// fb.addEventListener("click",func1);

// function func1(params) {
//     console.log(params);
// };

// ^ episode - 18

// let dblclick = document.querySelector(".btn");
// dblclick.addEventListener("dblclick",func2);
// let mouseover = document.querySelector(".btn");
// mouseover.addEventListener("mouseover",func3);
// let mouseleave = document.querySelector(".btn");
// mouseleave.addEventListener("mouseleave",func4);
// let mousedown = document.querySelector(".btn");
// mousedown.addEventListener("mousedown",func5);
// let mouseenter = document.querySelector(".btn");
// mouseenter.addEventListener("mouseenter",func6);
// let mousemove = document.querySelector(".container");
// mousemove.addEventListener("mousemove", func7);

// function func1(element) {
//     // console.log(element,"single click");
//     element.preventDefault();
// };
// function func2(element) {
//     console.log(element,"dblclick");
//     element.preventDefault();
// };
// function func3(element) {
//     console.log(element,"mouseover");
//     element.preventDefault();
// };
// function func4(element) {
//     console.log(element,"mouseleave");
//     element.preventDefault();
// };
// function func5(element) {
//     console.log(element,"mousedown");
//     element.preventDefault();
// };
// function func7(element) {
//     console.log(element, "mousemove");
//     console.log(element.offsetX, element.offsetY);
//     document.body.style.backgroundColor = `rgb(${element.offsetX},${element.offsetY},154)`;
//         element.preventDefault();
// };

// document.querySelector(".container").addEventListener("mousemove",function (element) {
//     console.log(element.offsetX,element.offsetY);
//     document.body.style.background=`rgb(${element.offsetX},${element.offsetY},255)`
// });

// & episode - 19 is the solution of exercise -1  

// ^ episode - 20

// localStorage.setItem("name", "Maruf");
// localStorage.setItem("name2", "Harry");
// let name = localStorage.getItem("name");
// let name2 = localStorage.getItem("name2");
// console.log(name,name2);


// let impArray = ["grapes","banana","apple"];

// localStorage.setItem("fruits",JSON.stringify(impArray));


// let myFruits =JSON.parse(localStorage.getItem("fruits"));
// console.log(myFruits);

// document.querySelector("#submitButton").addEventListener("click",function (element) {
//     element.preventDefault();
//     console.log(element.target);
// });

// console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
// console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'melem');
// divElem.setAttribute('class', 'myelem');
divElem.setAttribute('style', 'border:2px solid black; width: 180px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = melem.innerHTML;
    divElem.innerHTML = `<textarea class = "textarea form" id = "textarea" rows = "3">${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        melem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

 