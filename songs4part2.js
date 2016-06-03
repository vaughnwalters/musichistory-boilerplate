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
var moreButton = document.getElementById("addSongs");


function clickEvent1() {
  console.log(event.target.parentNode);
  var cardToRemove = event.target.parentNode;
  var contentHolder = document.getElementById("inputSongs");
  contentHolder.removeChild(cardToRemove);
  console.log("TESTING")
}

function executeThisCodeAfterFileIsLoaded () {
  console.log(event.target.responseText);
  var songsObject = JSON.parse(event.target.responseText);
  var contentEl = document.getElementById("inputSongs");
  var songsArray = songsObject.songs;

// break this out into a function and call both times
  for (var i = 0; i < songsArray.length; i++) {
    var songItem = songsArray[i];
    contentEl.innerHTML += 
      `<div class="songList"> 
        <div class="title">  ${songItem.title}  </div> 
        <div class="artist">  ${songItem.artist}  </div> 
        <div class="album"> ${songItem.album}  </div>
        <button class="deletebutton" id="deleteButton${i}">Delete It</button> 
      </div>`;

  }
  var dButton1=document.getElementById("deleteButton0");
  var dButton2=document.getElementById("deleteButton1");
  // var dButton3=document.getElementById("deleteButton2");
  // var dButton4=document.getElementById("deleteButton3");
  dButton1.addEventListener("click", clickEvent1);
  dButton2.addEventListener("click", clickEvent1);
  // dButton3.addEventListener("click", clickEvent);
  // dButton4.addEventListener("click", clickEvent);
  // var dButtons = document.getElementsByClassName("deleteButton");
  console.log(dButton1);
  console.log(dButton2);
};

function clickEvent2() {
  console.log(event.target.parentNode);
  var cardToRemove = event.target.parentNode;
  var contentHolder = document.getElementById("inputSongs2");
  contentHolder.removeChild(cardToRemove);
}


function addMoreSongs () {
  console.log("event", event);
  var songsObject = JSON.parse(event.target.responseText);
  var contentEl2 = document.getElementById("inputSongs2");
  var songsArray = songsObject.songs;

  for (var i = 0; i < songsArray.length; i++) {
    var songItem = songsArray[i];
    contentEl2.innerHTML += 
      `<div class="songList"> 
        <div class="title">  ${songItem.title}  </div> 
        <div class="artist">  ${songItem.artist}  </div> 
        <div class="album"> ${songItem.album}  </div>
        <button class="deleteButton2" id="deleteButton2${i}">Delete It</button> 
      </div>`;
  }


  var dButton21=document.getElementById("deleteButton20");
  var dButton22=document.getElementById("deleteButton21");
  // var dButton3=document.getElementById("deleteButton22");
  // var dButton4=document.getElementById("deleteButton23");
  dButton21.addEventListener("click", clickEvent2);
  dButton22.addEventListener("click", clickEvent2);
  // dButton3.addEventListener("click", clickEvent);
  // dButton4.addEventListener("click", clickEvent);
  console.log(dButton21);
  console.log(dButton22);
};


var myRequest = new XMLHttpRequest();
myRequest.open("GET", "songs.json");
myRequest.send();
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);

function addSecondJSONfile() {
  var addSongs = new XMLHttpRequest();
  addSongs.open("GET", "songs2.json");
  addSongs.send();
  addSongs.addEventListener("load", addMoreSongs);
};

var moreButton = document.getElementById("addSongs");
moreButton.addEventListener("click", addSecondJSONfile);





// ORDER OF EVENTS
// 1 open request
// 2 send it off
// 3 waiting
// 4 once request comes back, it loads
// 5 if doesn't come back, it errors



// Part Two

// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the songs from the first list and inject the DOM into the document
//  as you've already done.
// When the user clicks that button, load the songs from the 
// second JSON file and append them to the bottom of the existing music, but before the More button.