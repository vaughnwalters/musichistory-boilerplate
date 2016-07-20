"use strict";

var $ = require("jquery");

// document ready
$(() => {

// hide inputSongs div on page load
  (function(){
    $("#inputSongs").hide()
  }())


  let songHolder;

  // get initial songs from json file
  $.ajax({
    url: "songs.json"
  }).done(function(cont) {
    songHolder = cont;
    populateDOM(songHolder);

  });

  // populate dom with contents from array in the object
  function populateDOM(cont) {
    let counter = -1;
    $("#showSongs").html("");
    for (let i = 0; i < cont.songs.length; i++) {
      let songItem = cont.songs[i];
      counter++;  
      $("#showSongs").append(
      `<div class="songList" id="songItem--${counter}"> 
        <div class="title">  ${songItem.title}  </div> 
        <div class="artist">  ${songItem.artist}  </div> 
        <div class="album"> ${songItem.album}  </div>
        <button class="deletebutton">Delete It</button> 
      </div>`);
    }
// call function to populate artist select options
    // append artist and album selectors here with array data
    popArtistFilter(cont);
    popAlbumFilter(cont);
  }

// populate the artist filter select options
  function popArtistFilter (cont) {
    $("#artistFilter").html("");
    for (let i=0; i < cont.songs.length; i++) {
      let songItem = cont.songs[i];
      $("#artistFilter").append(
        `<option value = ${songItem.title}>${songItem.title}</option>
      `)
    }
  }

// populate the album filter select options
  function popAlbumFilter (cont) {
    $("#albumFilter").html("");
    for (let i=0; i < cont.songs.length; i++) {
      let songItem = cont.songs[i];
      $("#albumFilter").append(
        `<option value = ${songItem.album}>${songItem.album}</option>
      `)
    }
  }



// add new song to array
  $("#addSong").on("click", () => {
    let newSong = {
      "title" : $("#titleInput").val(),
      "artist" : $("#artistInput").val(),
      "album" : $("#albumInput").val()  
    };
    // pushing newSong into array
    songHolder.songs.push(newSong);
    populateDOM(songHolder);
    $("#titleInput").val("");
    $("#artistInput").val("");
    $("#albumInput").val(""); 

  }); 



// remove songs from the array
  $("#showSongs").on("click", ".deletebutton", (event) => {
    let divID = $(event.target).parent().attr("id");
    let targetNumberID = divID.split("--")[1];
    songHolder.songs.splice(targetNumberID, 1);
    populateDOM(songHolder);
  });



  module.exports = {populateDOM}
});


// One module is
// responsible for loading songs from a JSON 
// file and storing them in an array. This
// module should expose one method for getting 
// the entire list of songs, and one method
// for adding a song to the array.

// The new music form should have a field for
// every key on a song object. We started with 
// just Artist, Album, and Title, but you can add
// more if you wish.

// The music form should be fully functional.
// When you click the Save Song button, a new 
// object should be added to the array of songs.
// The DOM should also be immediately updated with
// the new song added.

// "add music" form needs to toggle view of the 
// yellow portion of the DOM?


