

let notes = [] , titles = [] , archive=[];
let newTitle = document.getElementById("title"), clientNote = document.getElementById("clientNote"), clientNoteTitle = document.getElementById("clientNoteTitle")
  newNote = document.getElementById("newNote") , client = document.getElementById("client");
 document.getElementById("form").addEventListener('submit', addNote);


 newNote.addEventListener('change' , Note);
 function Note (e){
 
   console.log(e.target.value);
   localStorage.setItem('note' , e.target.value );
   notes.push(localStorage.getItem('note'));
  //  clientNote.innerHTML = notes
  
 }

 newTitle.addEventListener('change' , title);

 function title (event){
  console.log(event.target.value);
  localStorage.setItem('title' , event.target.value );
  titles.push(localStorage.getItem('title'));
  // clientNoteTitle.innerHTML = titles
 }
 
 

function addNote(note) {
  note.preventDefault();
  console.log(note);
  
   for (let i = 0; i < titles.length; i++) {
    // clientNoteTitle.innerHTML = titles[i];
    titles[i] = document.querySelector('#title').value
    // clientNote.innerHTML = notes[i];
    notes[i] = document.querySelector('#newNote').value
    localStorage.setItem(titles[i] , notes[i] )
        
    
    localStorage.getItem(titles[i] );
    localStorage.getItem( notes[i] );
    output = titles[i] + " : "+ notes[i]

  

}
console.log(archive);
archive.push(output);

  client.innerHTML = archive;
  
}



