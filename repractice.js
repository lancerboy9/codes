showNotes(); //& This should must declared in order to show the writings when no note will be created .

//^ when someone click on Add Button
document.querySelector("#addBtn").addEventListener("click", function () {
    let storage = localStorage.getItem("text");
    if (storage == null) {
        myBox = [];
    } else {
        myBox = JSON.parse(storage);
    }
    let addTxt = document.querySelector("#addTxt");

    // let myBox1 = Array.from(myBox);
    // myBox1.push(addTxt.value);
    // localStorage.setItem('text',JSON.stringify(myBox1));
    // console.log(myBox1);
    myBox.push(addTxt.value);
    localStorage.setItem("text", JSON.stringify(myBox));
    addTxt.value = "";
    console.log(myBox);
    showNotes();
});

//^ function for showing notes
function showNotes() {
    let storage = localStorage.getItem("text");
    if (storage == null) {
        myBox = [];
    } else {
        myBox = JSON.parse(storage);
    }
    let html = "";
    Array.from(myBox).forEach((element, index) => {
        html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index+1}  </h5>
      <p class="card-text">${element}</p>
      <button id = ${index} onClick  =deleteButton(this.id) class="btn btn-primary">Delete</button>
    </div>
  </div>`;
    });

    let notes = document.querySelector("#notes");
    if (myBox.length != 0) {
        notes.innerHTML = html;
    } else {
        notes.innerHTML = `I know there will be some error`;
    };
};

//^ function for deleting

function deleteButton(index) {
    let storage = localStorage.getItem("text");
    if (storage == null) {
        myBox = [];
    } else {
        myBox = JSON.parse(storage);
    };

    myBox.splice(index,1);
    localStorage.setItem("text", JSON.stringify(myBox));
    showNotes();
};

//^ function for searching

// let search = document.querySelector("#searchTxt");
// search.addEventListener("input",function () {
//     let inputValue = searchTxt.value;
//     // console.log(inputValue);
//     let notes = document.querySelectorAll(".noteCard");
//     Array.from(notes).forEach((element)=>{
//         let paraTxt = element.querySelectorAll("p")[0].innerHTML;
//         if (paraTxt.includes(inputValue)) {
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }
//         // showNotes();
//     })
// })

let search = document.querySelector("#searchTxt");
search.addEventListener("input",function () {
    let inputValue = searchTxt.value.toLowerCase();
    let noteTxt = document.querySelectorAll(".noteCard");
    Array.from(noteTxt).forEach((element)=>{
        let paraTxt = element.querySelectorAll("p")[0].innerHTML;
        if (paraTxt.includes(inputValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});