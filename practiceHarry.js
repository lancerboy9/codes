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


//^ practice of substr ,slice , substing

// let str = "ammiJaniNaKisuTumiKiAkash"
// console.log(str.substring(-445,5)); //! { count  starts  from first by using 2nd parameter  }
// console.log(str.slice(1,5)); //!{ minus does not supported here }
// console.log(str.substr(-11)); //! { only count from last }

// console.log(str.substring(8,3));
// console.log(str.slice(8,3));
// console.log(str.substr(8,3));

//^ if else

// let mobile = Number(prompt("Enter mobile price :"));
// if (mobile ===10000){
//     console.log("Price is ok.");
// } else if (mobile>10000){
//     console.log("Price is too High.");
// }
//  else{
//     console.log("Price is too low.");
// };
// else{
//     console.log("Price is too low.");
// }

//^ documents
// let linkTxt = "google";
// let link = document.links;
// let text;
// Array.from(link).forEach((element) => {
//    text = element.href;
//    console.log(text);
//    if (text.includes(linkTxt)) {
//        console.log("google found");
//    } else {
//        console.log("sorry nothing found");
//    }
// })
// let str = "facebook";
// let link = document.links;
// let txt;
// Array.from(link).forEach((element)=>{
// txt = element.href;
// if(txt.includes(str)){
// console.log("Fb link found");
// }
// else{
// console.log("Sorry no link found");
// }
// })

//^ practise on HTML selector in Javascript

// let con = document.querySelector(".container");
// let con = document.querySelector(".child");
// varia = con.className;
// varia = con.childNodes;//!{ also counts the comments }
// varia = con.children[0];//!{ just count the elements }
// varia = con.children[0];
// varia = varia.innerHTML="<b>hello</b>";
// varia = varia.innerText="<b>hello</b>";
// con.style.color ="green";
// links = document.all;
// Array.from(links).forEach((element)=>{
//     console.log(element);
//     element.style.color = "yellow";
// })
// console.log(links);

//^ different kinds of events

// document.querySelector("#myClick").addEventListener("click",function (element) {
// console.log("Button is Clicked",element);
// let myEle; 
// myEle = element.target.children;
// myEle =Array.from(element.target.classList);
// console.log(myEle);
// Array.from(myEle).forEach((ele)=>{
//     console.log(ele.childNodes);
// })
// console.log(myEle);
// console.log(myEle.children);
// })  

//^ different kinds of event

// document.querySelector(".container").addEventListener("mousemove",function (elem) {
//     console.log(rgb`(${offserX},${offserY},155)`);
// })


// document.querySelector("#myCon").addEventListener("click",function (event) {
//     let items =Array.from(event.target.children).forEach((child)=>{
//         contenteditable = "true";
//         console.log(child);
//     });


//     console.log(items);
// })


//^ solution of exercise - 2  [ from youtube comment section ] 


// let myFirstDiv = document.createElement("div");
// // Result === <div></div>

// let valStoredInLocalStr = localStorage.getItem('mycustomtext');

// // Chances are there might be no value in the localStorage..then 
// let myFirstDivsText = document.createTextNode('Click it to edit..');
// // let myFirstDivsText;

// if(valStoredInLocalStr === null){
//     // We allow to enter the custom text.. 
//     let myFirstDivsText = document.createTextNode('Click it to edit..');
// }
// else{
//     myFirstDivsText = document.createTextNode(valStoredInLocalStr);
// }


// myFirstDiv.appendChild(myFirstDivsText);

// // Result === <div> Click it to edit.. </div>

// // Final value of the above myFirstDiv variable can be seen as ..


// // myFirstDiv = <div> Click it to edit.. </div>

// let myContainer = document.querySelector(".container");

// let secondArgument = document.getElementById("myfirst");

// myContainer.insertBefore(myFirstDiv,secondArgument);

// // Adding Event listeners...

// myFirstDiv.addEventListener("click",function(){
//     let noOFTextareas = document.getElementsByClassName('textarea').length;
//     //  Step 3 .When we click multiple times we are spoiling the text area.. as a result we can see multiple <textarea> with multiple id attributes.. Since we can only have one id, that's why i grabed the text area with ClassName and applied the length property. NOTE : if you try to use the getElementById property than ".length" is not useful, because we can only have one unique id per element.

//     if(noOFTextareas === 0){
//         // Step 4 entering in the If block.. and it is not saving the custom text.. for that we are writting the blur event listner outside the if block..

//         let iWantToSeeAboveText = myFirstDiv.innerHTML;
//         // follow step 2 after, the below step 1. Don't use the if as of now.. at last we will copy paste this inside the if block

//         myFirstDiv.innerHTML = `<textarea class="form-control textarea" id="abc" rows="3">${iWantToSeeAboveText}</textarea>`;
//         // Start with this as Step 1 and see in the browser(without using the if statement). AS we click on the <div> we are presented with the textarea..So with innerHTML property we include the HTML.. didn't use the innerText as this would never incorporate the textarea with tags. Now if you want to include the custom text we have to write it between <textarea> </textarea>

//     }
//     // add listener for blur event..
//     let myTextarea = document.getElementById("abc");
//     // Step 5.. this is the same above text area..
//     myTextarea.addEventListener("blur",function(){
//          localStorage.setItem('mycustomtext',myTextarea.value);
//         // Step 6.. setting the items in the localStorage with key-->'mycustomtext'. we are getting the items from localStorage above, becasue there might be chances that the elements are stored previously in the browser local storage...
//     })

// })

//& solution of exercise - 2 form Harry


// let divElem = document.createElement("div");
// let text  = document.createTextNode("I am groot.")
// let h1 = document.querySelector(".heading");
// let firstCh = document.querySelector(".firstChild");

// console.log(newDiv,h1,firstCh);


// corrected solution of exercise - 2

// creating a new div
// let divElem = document.createElement('div');

// let val = localStorage.getItem('text');
// let text;
// if (val == null) {
//     text = document.createTextNode("Click to edit.");
// } else {
//     text = document.createTextNode(val);
// }

// divElem.appendChild(text);

// // setting attributes
// divElem.setAttribute("id", "elem");
// divElem.setAttribute("class", "myElem");
// divElem.setAttribute("style", "border:1px solid black;margin:20px;padding:20px;width:170px");

// // injecting them
// let con = document.querySelector(".container");
// let firstCh = document.querySelector("#myfirst");
// con.insertBefore(divElem, firstCh)
// console.log(divElem, con, firstCh);

// // divElem.addEventListener("click",function (){
// //     let html = elem.innerHTML;
// //     divElem.innerHTML =  `<textarea class="myTextarea" id="textarea" rows="3">${html}</textarea>`
// //& must need to use getElementsByClassName otherwise it will not work 
// divElem.addEventListener("click", function () {
//     let noOFTextareas = document.getElementsByClassName("textarea").length;
//     if (noOFTextareas == 0) {
//         let html = elem.innerHTML;
//         divElem.innerHTML = `<textarea class="textarea" id="textArea" rows="3">${html}</textarea>`;
//     }

//     let textarea = document.getElementById("textArea");
//     textarea.addEventListener("blur", function () {
//         elem.innerHTML = textarea.value;
//         localStorage.setItem("text", textarea.value);
//     });


// });

// let newDiv = document.createElement("div");
// let text = document.createTextNode("I am groot.");
// newDiv.appendChild(text);
// let con = document.querySelector(".container");
// let first = document.querySelector("#myFirst");

// newDiv.setAttribute("id","myElem");
// newDiv.setAttribute("style",'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// con.insertBefore(newDiv,first)
// console.log(newDiv,con,first);



//& practicing of exercise - 2 solution

//^ creating div from scratch

// let myDiv = document.createElement("div");
// let text = document.createTextNode("Click to edit ...");
// myDiv.appendChild(text);
// let myHeading = document.querySelector("#heading");
// myHeading.appendChild(myDiv);

//^ injecting the created div to the html page

// let con = document.querySelector(".container");
// let menu = document.querySelector(".menu");
// con.insertBefore(myDiv,menu);

//& setting Attribute

// myDiv.setAttribute("id","myIdOfCreatedDiv");
// myDiv.setAttribute("style","margin:20px;border:2px solid black;padding:20px;width:120px");

// console.log(myDiv,con,menu);

//^ creating the Element

let myDiv = document.createElement("div");

let myLocal = localStorage.getItem("text");
let text;
if (myLocal == null) {
    text =  document.createTextNode("I am groot");
}
else{
    text =  document.createTextNode(myLocal);
}

myDiv.appendChild(text);


//^ injecting the div to the html page 

let con = document.querySelector("#container");
let myFirst = document.querySelector("#first");

con.insertBefore(myDiv,myFirst);

//^ setting attributes

myDiv.setAttribute("id","elem");
myDiv.setAttribute("style","margin:20px;border:2px solid black;width:180px;padding:20px");

//^ making the div alive 

myDiv.addEventListener("click",function () {
    let noOFTextareas = document.getElementsByTagName("textarea").length;
    // console.log(noOFTextareas);
    if (noOFTextareas == 0) {
         myDiv.innerHTML = `<textarea class = "textareaClass" id = "textarea" rows = "3">
        ${elem.innerHTML}
    </textarea>`; 
};
let textarea = document.querySelector("textarea");
textarea.addEventListener("blur",function () {
    myDiv.innerHTML = textarea.value;
    localStorage.setItem("text",textarea.value);

})
})