//^ Creating a new  div

let customDiv = document.createElement("div");
let storage = localStorage.getItem("text");
if (storage == null) {
   customDivTxt = document.createTextNode("Click here to edit...");    
} else {
    customDivTxt = document.createTextNode(storage);
}
customDiv.appendChild(customDivTxt);

//^ setting attributes

customDiv.setAttribute('id','customDivId');
customDiv.setAttribute('style','border:1px solid black;width : 200px; padding : 30px');

//^ injecting to html page 

let con = document.querySelector('.container');
let fruits = document.querySelector('.fruits');

con.insertBefore(customDiv,fruits);

//^ making alive the div

customDiv.addEventListener('click',function () {

    let noOfTextarea = document.querySelectorAll("#myTextarea").length;
    if (noOfTextarea == 0) {
         customDiv.innerHTML = ` <div class="mb-3">
   <textarea class=" textarea form-control" id="myTextarea" rows="3">${customDiv.innerHTML}</textarea>
 </div> `;
    };
    let textarea = document.querySelector('#myTextarea');
textarea.addEventListener("blur",function () {
    customDiv.innerHTML = textarea.value;
    localStorage.setItem("text",textarea.value);
});

});




