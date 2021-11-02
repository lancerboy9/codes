

//Improving Magic Notes Website Exercise 3



console.log(`I'm khan`);

//Display Notes On Screen
showNotes();


//SEC#1
//If user click on Add Note Button Add it to Local Storage

//Target Add Note Button
let addBtn = document.getElementById('addBtn');

//Add Click Event Listner
addBtn.addEventListener('click', function () {

    //Target inner title and inner description
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');

    //Convert into object literal to push into local storage and then covert into an array by using array.from() func and retrieve title and text easily
    let detl = {
        'title': addTitle.value,
        'description': addTxt.value
    }

    //GET Notes from Local Storage
    let notes = localStorage.getItem('notes');

    //If not does not exists then create an notes obj blank array
    if (notes == null) {
        notesObj = [];
    }

    //If notes exists simply store into notesObj String
    else {
        notesObj = JSON.parse(notes);
    }

    //Store the Created object (above) into notesObj variable
    notesObj.push(detl);

    //Store the notesObj into Local Storage
    localStorage.setItem('notes', JSON.stringify(notesObj));

    //Set the variables values to blank to avoid typed chracter (Agr main inki values ko blank set nahi krta toh data store honay k bad bhi woh wahi ka wahi likha reh jata)
    addTxt.value = "";
    addTitle.value = "";

    //Display Notes On Screen
    showNotes();
});


//SEC#2
//Get the stored notes from local Storage and display it
//Function to show elements from localStorage

function showNotes() {

    //GET Notes from Local Storage
    let notes = localStorage.getItem('notes');

    //If not does not exists then create an notes obj blank array
    if (notes == null) {
        notesObj = [];
    } 
    
    //If notes exists simply store into notesObj String
    else {
        notesObj = JSON.parse(notes);
    }

    //Create Variable to store html
    let html = ``;

    //Convert notesObj into Array and Access the tile And Description and show it on screen
    Array.from(notesObj).forEach(function (element, index) {
        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element['title']}</h5>
        <p class="card-text">${element['description']}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        `
    });

    //Target the Cards Area
    let notesElm = document.getElementById('notes');

    //Set Condition if Cards exists then notesElm.innerHTML = html
    if (notesObj != 0) {
        notesElm.innerHTML = html;
    } 

    //If cards not exists then show this Message
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


//SEC#3
//Create a note delete functionality
// Function to delete a note


function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    //Use splice() function to remove card from local Storage
    notesObj.splice(index, 1);

    //Update Loacal storage
    localStorage.setItem("notes", JSON.stringify(notesObj));

    //Display Notes On Screen
    showNotes();

}


//SEC#4
//Create a search functionality
//Function to search note

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {

    // Getting input tag Text
    let inputVal = search.value.toLowerCase();

    //Targeting All Cards and convert into array and perform search operation one by one
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {

        //Targeting Matched Card Inner string (paragraph)
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        //Set Condition (if string is matched show it otherwise hide it)
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";//Show
        } else {

            element.style.display = "none";//Hide
        }
    });

});


/*
Further Features:
1. Add Title ==> Done! 
2. Mark a note as Important
3. Separate notes by user
4. Add time stamp to your note
*/