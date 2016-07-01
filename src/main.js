"use strict";
 
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "songs.json");
myRequest.send();
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);

function executeThisCodeAfterFileIsLoaded () {
  var songsObject = JSON.parse(event.target.responseText);
  var songsArray = songsObject.songs;
  populateDOM(songsArray);
}

function populateDOM (songsArray) {
  for (var i = 0; i < songsArray.length; i++) {
  var songItem = songsArray[i];
  $("#inputSongs").append( 
    `<div class="songList"> 
      <div class="title">  ${songItem.title}  </div> 
      <div class="artist">  ${songItem.artist}  </div> 
      <div class="album"> ${songItem.album}  </div>
      <button class="deletebutton">Delete It</button> 
    </div>`);
  }
}

$("#inputSongs").on("click", ".deletebutton", function(event) {   
  $(this).parent().remove();
}); 

function addMoreSongs () {
  console.log("event", event);
  var songsObject = JSON.parse(event.target.responseText);
  var songsArray = songsObject.songs;
  populateDOM(songsArray);
}

function addSecondJSONfile() {
  var addSongs = new XMLHttpRequest();
  addSongs.open("GET", "songs2.json");
  addSongs.send();
  addSongs.addEventListener("load", addMoreSongs);
}

$("#addSongs").click(addSecondJSONfile);

