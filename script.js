//add event listener for loading
window.addEventListener("load", loadNote);
function loadNote() {
  let noteTitle = JSON.parse(localStorage.getItem("title") || "[]");
  let noteContent = JSON.parse(localStorage.getItem("note") || "[]");
  for (let i = 0; i < noteContent.length; i++) {
    //create remove btn
    const removeBtn = document.createElement("span");
    removeBtn.textContent = "✖";
    removeBtn.classList.add("removeBtn");
    document.querySelector("#noteBox").appendChild(removeBtn);
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
    let clientNote = document.createElement("pre");
    clientNote.classList.add("clientNote");
    //append to client
    client.appendChild(clientNote);
    // append to created div
    clientNoteTitle.append(noteTitle[i]);
    clientNote.append(noteContent[i]);
  }
}
//get form inputs, create some elements to append inputs

// step 01:  add event listener for form submit
document.getElementById("form").addEventListener("submit", addNote);
// step 02: create a function to get the local storage input
// and add new values
function addNote(note) {
  let newTitle = document.getElementById("title").value,
    newNote = document.getElementById("newNote").value;

  note.preventDefault(); //to prevent opening new page

  let noteTitle = JSON.parse(localStorage.getItem("title") || "[]");
  let noteContent = JSON.parse(localStorage.getItem("note") || "[]");

  noteTitle.push(newTitle);
  localStorage.setItem("title", JSON.stringify(noteTitle)); // add title to local storage

  noteContent.push(newNote);
  localStorage.setItem("note", JSON.stringify(noteContent)); // add title to local storage

  noteTitle = JSON.parse(localStorage.getItem("title"));
  noteContent = JSON.parse(localStorage.getItem("note"));

  for (let i = 0; i < noteContent.length; i++) {
    //create remove btn
    const removeBtn = document.createElement("span");
    removeBtn.textContent = "✖";
    removeBtn.classList.add("removeBtn");
    document.querySelector("#noteBox").appendChild(removeBtn);

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
    let clientNote = document.createElement("pre");
    clientNote.classList.add("clientNote");
    //append to client
    client.appendChild(clientNote);

    // append to created div
    clientNoteTitle.append(noteTitle[i]);
    clientNote.append(noteContent[i]);
  }

  this.reset();
}

// remove note by clicking on removeBtn
let remove = document.querySelector("#noteBox");

// add event listener to remove notes
remove.addEventListener("click", removeItem);
// create a function to remove notes
function removeItem(clickedBtn) {
  console.log(clickedBtn);
  // check whether the clicked btn has a class of removeBtn or no
  // if clicked btn had the class of removeBtn
  // delete the required data (note and its title)
  if (clickedBtn.srcElement.className == "removeBtn") {
    console.log(clickedBtn.srcElement);
    console.log(clickedBtn.srcElement.nextElementSibling);
    // get values from local storage
    let noteTitle = JSON.parse(localStorage.getItem("title"));
    let noteContent = JSON.parse(localStorage.getItem("note"));
    //check the index of clicked note to remove values from local storage
    for (let i = 0; i < noteTitle.length; i++) {
      const elementValue =
        clickedBtn.srcElement.nextElementSibling.children[0].innerText; // find the value of clicked element
      console.log(elementValue);
      console.log(noteTitle[i]);
      // check which array index match the clicked element value 
      // then splice the index and add new array to localstorage
      if (elementValue == noteTitle[i]) { 
        noteTitle.splice(i, 1);
        noteContent.splice(i, 1);
        localStorage.setItem("title", JSON.stringify(noteTitle)); // add title to local storage
        localStorage.setItem("note", JSON.stringify(noteContent)); // add title to local storage
      }
    }
    // remove related html elements
    document
      .querySelector("#noteBox")
      .removeChild(clickedBtn.srcElement.nextElementSibling);
    document.querySelector("#noteBox").removeChild(clickedBtn.srcElement);
  }
}


// when add note button is clicked ,change the display of notepad form 
let noteBtn = document.getElementById("addNoteBtn");

noteBtn.addEventListener("click", showNotepad);

function showNotepad() {
  document.getElementById("notepad").style.display = "flex";
}
