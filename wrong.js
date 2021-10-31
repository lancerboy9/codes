document.querySelector("#addBtn").addEventListener("click",function () {
  let addTxt = document.querySelector("#addTxt");
  let storage = localStorage.getItem("text");
  // let myArry;
  if (storage == null) {
      myArry = [] ;
  }else{
      myArry = JSON.parse(storage);
  };

  // let addTxt = document.querySelector("#addTxt");
  // let inputBoxValue = addTxt.value;
  // myArry.push(inputBoxValue);
  // localStorage.setItem("text",JSON.stringify(myArry));

  // console.log(myArry);
  Array.from(myArry).push(addTxt.value);
  localStorage.setItem("text",JSON.stringify(myArry));
  addTxt.value = "";
  console.log(myArry);


  // ourBox.push(addTxt.value);
  // addTxt.value = "";
  // localStorage.setItem("text", JSON.stringify(ourBox));


});



function greetingUsers() {
    let h1 = document.createElement("h1");
    let text = document.createTextNode("Welcome");
    h1.appendChild(text);
    document.body.appendChild(h1);
    let name = prompt("Input your name :");
    if (name == null || name == '') {
        text = "no name found";
    } else {
        text = name ;
    }
}
greetingUsers();



//^ making digital clock

clockButton.addEventListener("click", myClock);

function myClock() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    let time = hours +minutes ":" +  + ":" + seconds;

    setInterval(
        myClock, 1000);
};

document.querySelector("p").textContent = time;

function formatTime(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    };
};
//^ different kinds of console

// console.time('Your code Took');
// console.log('Hello console');
// console.log(4+34);
// console.log(34);
// console.log(true);
// console.log([34,2,1,2]);
// console.log({harry: 'this', marks:34});
// console.table({harry: 'this', marks:34});
// console.warn('This is a warning');
// console.clear();
// console.timeEnd('Your code Took');
// console.assert(566<189, 'Age >189 is not possible';
// console.error('This is an error');

// const spacing = '8px'; 
// const mystyle =  
// `padding: ${spacing}; background-color: white; color: blue ; font-style:
// italic; border: 1px solid black dotted; font-size: 2em;`; 
// console.log('%cCode With Harry', mystyle);

//^ custom console log

// let padding = '10px 25px';
// let myConsole = `padding:${padding};background-color:white;font-size:2rem;font-style:italic;color:green;`
// console.log('%c Help me',myConsole);

// function myFunc() {
//     return typeof myFunc;
// };
// console.log(typeof myFunc);
// console.log(myFunc());


// let res;
// res = '4' - '4'; 
// console.log(res) // "34"
// res = '3'  4; 
// console.log(res) // "34"
// res = '4' * 5;
// console.log(res); // 20
// res = '4' + 5;
// console.log(res); // 20


// let res
// res = '4' - '4'; 
// console.log(res); // 0
// res = '4' * 5;
// console.log(res); // 20


// ^ creating a variable
// let a = document.links
// let myVar = "http//www.codewithharry.com";
// Array.from(a).forEach((myVar)=>{
//     let link = myVar.href;
//     if (link.includes("Harry")) {
//         console.log("Found");
//     }
//     else{
//         console.log("Not found");
//     }
// })
//!------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magic Notes</title>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
  </script>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container my-3"></div>
  <h1>This is a heading</h1>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  
  </div>















  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
  </script>
</body>

</html>

//! Deleting notes

// function deleteNotes() {
//     let storage = localStorage.getItem("text");
//     let customArray;
//     if (storage == null) {
//         customArray = [];
//     } else {
//         customArray = JSON.parse(storage);
//     };
//     let myNotes = document.querySelector("#notes");
//    Array.from(myNotes).forEach((index)=>{
//        myNotes.splice(index,1);
//    })
// localStorage.setItem("text",JSON.stringify(myNotes));
// }
