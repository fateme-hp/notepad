// define variables
let notes, titles;
let newTitle = document.getElementById("title"),
  newNote = document.getElementById("newNote");

//get form inputs, create some elements to append inputs

// step 01:  add event listener for form submit
document.getElementById("form").addEventListener("submit", addNote);

// step 02: get input changes
// step 02-1: add event listener for title change
newTitle.addEventListener("change", title);
function title(event) {
  console.log(event.target.value);
  localStorage.setItem("title", event.target.value); // add title to local storage
  titles = localStorage.getItem("title"); // get title from local storage
}
//step 02-2 add event listener for note change
newNote.addEventListener("change", Note);
function Note(e) {
  console.log(e.target.value);
  localStorage.setItem("note", e.target.value); // add note to local storage
  notes = localStorage.getItem("note"); // get note from local storage
}

// step 03: create a function 
// to create some elements to get input values 
// and then append local storage data to created elements
function addNote(note) {
  note.preventDefault(); //to prevent opening new page

  localStorage.setItem(titles, notes); // needs work!

  //create a div for client
  let client = document.createElement("div");
  client.classList.add("client");
  //append to div with notes id
  document.querySelector("#noteBox").appendChild(client);
  //create a span for clientNoteTitle
  let clientNoteTitle = document.createElement("span");
  clientNoteTitle.classList.add("clientNoteTitle");
  //append to client
  client.appendChild(clientNoteTitle);
  //create a p for clientNote id
  let clientNote = document.createElement("p");
  clientNote.classList.add("clientNote");
  //append to client
  client.appendChild(clientNote);
  // append to created div
  clientNoteTitle.append(titles);
  clientNote.append(notes);
}

//add event listener for loading
window.addEventListener("load", addNote);
titles = localStorage.getItem("title");
notes = localStorage.getItem("note");
