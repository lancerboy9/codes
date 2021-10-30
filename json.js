showNotes();

//^ creating stucture for notes
document.querySelector("#addBtn").addEventListener("click", function () {
    let addTxt = document.querySelector("#addTxt");
    let storage = localStorage.getItem("text");
    let customArray;
    if (storage == null) {
        customArray = [];
    } else {
        customArray = JSON.parse(storage);
    };
    let myError = Array.from(customArray)
    myError.push(addTxt.value);
    localStorage.setItem("text", JSON.stringify(myError));
    addTxt.value = "";
    // console.log(customArray.length);
    console.log(myError);
    showNotes();
});

function showNotes() {
    let storage = localStorage.getItem("text");
    let myError;
    if (storage == null) {
        myError = [];
    } else {
        myError = JSON.parse(storage);
    };
    let html = "";
    Array.from(myError).forEach(function (element, index) {
        html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note ${index + 1 }</h5>
    <p class="card-text">${element}</p>
    <button id = ${index} onClick = deleteButton(this.id)  class="btn btn-primary">Delete</button>
  </div>
</div>`
    })
    let myNotes = document.querySelector("#notes");
    if (myError.length != 0) {
        myNotes.innerHTML = html;
    } else {
        myNotes.innerHTML = `Click to "Add Note" button to add a note`;
    };
};

function deleteButton(index) {
    let storage = localStorage.getItem("text");
    let myError;
    if (storage == null) {
        myError = [];
    } else {
        myError = JSON.parse(storage);
    };

    myError.splice(index, 1);
    localStorage.setItem("text", JSON.stringify(myError));
    showNotes();
};

//~ Search notes using search button

let search = document.querySelector("#searchTxt");
search.addEventListener("input", function () {
    let inputValue = search.value.toLowerCase();
    // console.log("input event fired",inputValue);
    let noteCards = document.querySelectorAll(".noteCard");
    Array.from(noteCards).forEach(function (element) {
        let paraTxt =  element.querySelectorAll("p")[0].innerText;
         if (paraTxt.includes(inputValue)) {
             element.style.display = "block";
            } else {
                element.style.display = "none";
         };
      });
   });