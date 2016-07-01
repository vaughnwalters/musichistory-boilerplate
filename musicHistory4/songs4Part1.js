// what is "responseText"? is an an attribute of the target when the event occurs?
// why am i getting null for value of dButton1, dButton2, and dButton3?  ids are showing up in dev tools.
// (because they had not been created when the page first loads.  must be created inside of the function)

// songsObject is an object, and stored in that object is an array.  that array is named songs, and has three objects.
// object with one array named songs, and that array has three objects.  each object is a song.  each song has 3 keys

//but these have to be created and stored within the function 

// var dButton1=document.getElementById("deleteButton[0]");
// var dButton2=document.getElementById("deleteButton[1]");
// var dButton3=document.getElementById("deleteButton[2]");
// // var dButtons = document.getElementsByClassName("deleteButton");
// console.log(dButton1);
// console.log(dButton2);
// console.log(dButton3);
// console.log(dButtons);

// current song i clicked on, and storing in var cardToRemove
// log out event, then can look at target and properties, parent Node, etc
// event.target.parentNode will give whole div, while event.target
 // will give just the button element

function clickEvent() {
  console.log(event.target.parentNode);
  var cardToRemove = event.target.parentNode;
  var contentHolder = document.getElementById("inputSongs");
  contentHolder.removeChild(cardToRemove);
}

function executeThisCodeAfterFileIsLoaded () {
  // console.log(this.responseText);
  console.log(event.target.responseText);
  var songsObject = JSON.parse(event.target.responseText);
  // console.log("songsObject", songsObject);
  var contentEl = document.getElementById("inputSongs");
  // contentEl.innerHTML = event.target.responseText
  // contentEl.innerHTML = "test"
  var songsArray = songsObject.songs;

  for (var i = 0; i < songsArray.length; i++) {
    var songItem = songsArray[i];
    contentEl.innerHTML += 
      `<div class="songList"> 
        <div class="title">  ${songItem.title}  </div> 
        <div class="artist">  ${songItem.artist}  </div> 
        <div class="album"> ${songItem.album}  </div>
        <button class="deletebutton" id="deleteButton[${i}]">Delete It</button> 
      </div>`;

    // console.log("songObject", songs);
  }
  // created these variables in this function because the buttons had not yet
  // been created to place them at top of the page. 

// addEventListener with a for loop
  // for (var i=0; i<deleteButton.length, i++) {
  //   var dButton = `deleteButton[i]`;
  //   var currentButton = document.getElementById(dButton);
  //   currentButton.addEventListener("click", clickEvent);
  // }

  var dButton1=document.getElementById("deleteButton[0]");
  var dButton2=document.getElementById("deleteButton[1]");
  var dButton3=document.getElementById("deleteButton[2]");
  var dButton4=document.getElementById("deleteButton[3]");
  dButton1.addEventListener("click", clickEvent);
  dButton2.addEventListener("click", clickEvent);
  dButton3.addEventListener("click", clickEvent);
  dButton4.addEventListener("click", clickEvent);
  // var dButtons = document.getElementsByClassName("deleteButton");
  console.log(dButton1);
  console.log(dButton2);
  console.log(dButton3);
  console.log(dButton4);
  // console.log(dButtons)
};

// Create an XHR object
var myRequest = new XMLHttpRequest();

// Then tell the XHR object exactly what to do
// opening a GET request
// open is a method on XHR objects
// first argument says what to do - "GET" - a predefined string that lets the method (open) know to go get something
// in this case songs.json, which is the second argument
myRequest.open("GET", "songs.json");

// Tell the XHR object to start sending the request
// then wait until load or error and then execute function specficed by event listener
myRequest.send();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);
// dButton1.addEventListener("click", deleteFirstSong);




// ORDER OF EVENTS
// 1 open request
// 2 send it off
// 3 waiting
// 4 once request comes back, it loads
// 5 if doesn't come back, it errors



// Part One

// Read from local JSON file with an XHR.
// Loop over results and inject into Music History list view.
// Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

// Part Two

// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the songs from the first list and inject the DOM into the document
//  as you've already done.
// When the user clicks that button, load the songs from the 
// second JSON file and append them to the bottom of the existing music, but before the More button.