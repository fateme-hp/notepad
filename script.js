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
    let clientNote = document.createElement("p");
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
    let clientNote = document.createElement("p");
    clientNote.classList.add("clientNote");
    //append to client
    client.appendChild(clientNote);

    // append to created div
    clientNoteTitle.append(noteTitle[i]);
    clientNote.append(noteContent[i]);
  }

  this.reset();
}

let remove = document.querySelector("#noteBox");
console.log(remove);

remove.addEventListener("click", removeItem);

function removeItem(clickedBtn){
  console.log(clickedBtn);

  if (clickedBtn.srcElement.className == "removeBtn"){
console.log(clickedBtn.srcElement);
console.log(clickedBtn.srcElement.nextElementSibling);

let noteTitle = JSON.parse(localStorage.getItem("title"));
    let noteContent = JSON.parse(localStorage.getItem("note"));

    for (let i = 0; i < noteTitle.length; i++) {
      const elementValue = clickedBtn.srcElement.nextElementSibling.children[0].innerText;
      console.log(elementValue);
      console.log(noteTitle[i]);
      if (elementValue == noteTitle[i]){
        noteTitle.splice(i, 1);
            noteContent.splice(i, 1);
            localStorage.setItem("title", JSON.stringify(noteTitle)); // add title to local storage
            localStorage.setItem("note", JSON.stringify(noteContent)); // add title to local storage
      }
      
    }
    
    

    document.querySelector("#noteBox").removeChild(clickedBtn.srcElement.nextElementSibling);
document.querySelector("#noteBox").removeChild(clickedBtn.srcElement);

  }




}

// for (let i = 0; i < remove.length; i++) {
//   remove[i].addEventListener("click", removeItem)
//   removeItem(i);
// }

// function removeItem(clickedBtn){

//   let noteTitle = JSON.parse(localStorage.getItem("title"));
//   let noteContent = JSON.parse(localStorage.getItem("note"));

// }
// remove.forEach((element, index) => {

//   element.onclick = (event) => {
//     console.log("You clicked button number " + index);
//    }
//   // element.addEventListener("click", removeItem(index));
//   // function removeItem(index) {
//   //   let noteTitle = JSON.parse(localStorage.getItem("title"));
//   //   let noteContent = JSON.parse(localStorage.getItem("note"));
//   //   noteTitle.splice(index, 1);
//   //   noteContent.splice(index, 1);
//   //   localStorage.setItem("title", JSON.stringify(noteTitle)); // add title to local storage
//   //   localStorage.setItem("note", JSON.stringify(noteContent)); // add title to local storage
//   //   document.querySelector("#noteBox").removeChild(client);
//   // }
// });
