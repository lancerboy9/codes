//^ when someone click on add note

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function () {
    let addTxt = document.querySelector("#addTxt")
    let storage = localStorage.getItem("text");
    let ourBox;
    if (storage == null) {
        ourBox = [];
    } else {
        ourBox = JSON.parse(storage);
    };
    ourBox.push(addTxt.value);
    localStorage.setItem("text", JSON.stringify(ourBox));
    addTxt.value = "";
    console.log(ourBox);
    // showNotes();
});

// function showNotes() {
//     let storage = localStorage.getItem("text");
//     let ourBox;
//     if (storage == null) {
//         ourBox = [];
//     } else {
//         ourBox = JSON.parse(storage);
//     };
//     let html = "";
//     ourBox.forEach(function (element, index) {

//         html += `
//         <div class="noteCard mx-2 my-2" style="width: 18rem;">
//         <div class="card-body">
//             <h5 class="card-title">Note ${index + 1}</h5>
//             <div class="mb-3">
//             <p class="form-control" id="addTxt">${element}</p>
//             </div>
//             <button id="addBtn" class="btn btn-primary">Delete Note</button>
//         </div>
//        </div>
//         `
//     });
//     let myNotes = document.querySelector("#myNotes");

//     if (ourBox.length != 0) {
//         myNotes.innerHTML = html;
//     } else {
//         myNotes.innerHTML = `Please click on "add note button"`;

//     };

// };