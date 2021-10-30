showNotes();

document.querySelector("#addBtn").addEventListener("click", function () {

    let addTxt = document.querySelector("#addTxt");
    let storage = localStorage.getItem("text");
    let ourBox;
    if (storage == null) {
        ourBox = [];
    } else {
        ourBox = JSON.parse(storage);
    };

    ourBox.push(addTxt.value);
    addTxt.value = "";
    localStorage.setItem("text", JSON.stringify(ourBox));

    // console.log(ourBox);

    showNotes();

});

function showNotes() {
    let storage = localStorage.getItem("text");
    let ourBox;
    if (storage == null) {
        ourBox = [];
    } else {
        ourBox = JSON.parse(storage);
    };

    let html = "";

    ourBox.forEach((element, index) => {

        html += `<div class="noteCard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="form-control" id="addTxt">${element}</p>
          <button id= ${index} onClick = deleteNote(this.id) class="btn btn-primary">Delete Notes</button>
        </div>
      </div>`

    });

    let myNotes = document.querySelector("#myNotes");
    if (ourBox.length != 0) {
        myNotes.innerHTML = html;
    } else {

        myNotes.innerHTML = `Nothing to show ! Click on "Add Note" button to add a note`;
    };

};

//^ function to delete a note


function deleteNote(index) {

    let storage = localStorage.getItem("text");
    let ourBox;
    if (storage == null) {
        ourBox = [];
    } else {
        ourBox = JSON.parse(storage);
    };

    ourBox.splice(index, 1);
    localStorage.setItem("text", JSON.stringify(ourBox));
    showNotes();

};


//& search in the page

let search = document.querySelector("#searchTxt");
search.addEventListener("input", function () {
    let inputValue = search.value.toLowerCase();
    let noteCards = document.querySelectorAll(".noteCard");
    // console.log(typeof noteCards);
    // console.log(inputValue);
    Array.from(noteCards).forEach(function (element) {
        let myTxt = element.querySelectorAll("p")[0].innerText;
        //   console.log(myTxt);
        if (myTxt.includes(inputValue)) {
            element.style.display = "block";
        } else {

            element.style.display = "none";
        }

    })
})