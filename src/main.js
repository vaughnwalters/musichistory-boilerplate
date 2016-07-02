"use strict";

$.ajax({
    url: "songs.json"
  }).done(function(cont){
    populateDOM(cont);
  });

function populateDOM (cont) {
  for (var i = 0; i < cont.songs.length; i++) {
  var songItem = cont.songs[i];
  $("#inputSongs").append( 
    `<div class="songList"> 
      <div class="title">  ${songItem.title}  </div> 
      <div class="artist">  ${songItem.artist}  </div> 
      <div class="album"> ${songItem.album}  </div>
      <button class="deletebutton">Delete It</button> 
    </div>`);
  }
}

function addSecondJSONfile() {
  $.ajax({
    url: "songs2.json"
  }).done(function(moreSongs){
    populateDOM(moreSongs);
  });
}

$("#inputSongs").on("click", ".deletebutton", function(event) {   
  $(this).parent().remove();
}); 

$("#addSongs").click(addSecondJSONfile);

