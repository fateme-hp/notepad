
// define variables

let notes  , titles  ;
let newTitle = document.getElementById("title"),
  newNote = document.getElementById("newNote") ; 

  //  add event listener for form submit
 document.getElementById("form").addEventListener('submit', addNote);

//  add event listener for title change
 newTitle.addEventListener('change' , title);

 function title (event){
  console.log(event.target.value);
  localStorage.setItem('title' , event.target.value );
  titles = localStorage.getItem('title');
  // clientNoteTitle.innerHTML = titles
 }

// add event listener for note change
 newNote.addEventListener('change' , Note);
 function Note (e){
 
   console.log(e.target.value);
   localStorage.setItem('note' , e.target.value );
   notes = localStorage.getItem('note');
  
  
 }

function addNote(note) {
  note.preventDefault(); //to prevent opening new page

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
