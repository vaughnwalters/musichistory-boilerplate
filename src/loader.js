"use strict";

var $ = require("jquery");

// document ready
$(() => {

  let songHolder;

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
    console.log("songHolder",songHolder);
  }) 


  $.ajax({
    url: "songs.json"
  }).done(function(cont) {
    songHolder = cont;
    populateDOM(songHolder);
  });

  function populateDOM(cont) {
    let counter = 0;
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
  }




// how to remove song from array, not just the DOM
  $("#showSongs").on("click", ".deletebutton", (event) => {
    console.log($(event.target).parent().attr("id"));
    console.log("songHolder", songHolder);
    let test = $(event.target).parent().attr("id");
    targetNumberID = test.split("--")[1]
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




// DEPRECATED FROM MUSIC HISTORY 5

  // $("#addSongs").click(function() {
  //   addSecondJSONfile()
  //   .then(function(moreSongs) {
  //     populateDOM(moreSongs);
  //   })
  // })

  // var addSecondJSONfile = function() {
  //   return new Promise((resolve, reject) => {
  //     $.ajax({
  //       url: "songs2.json"
  //     }).done(function(moreSongs) {
  //       resolve(moreSongs);
  //       // after resolve then gets access to moreSongs
  //       // "then" is a function that sets up event listeners
  //       // waiting for resolve to get called
  //     }).fail(function(xhr, status, error) {});
  //   });
  // };