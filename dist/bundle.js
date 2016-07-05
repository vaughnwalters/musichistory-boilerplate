(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$.ajax({
  url: "songs.json"
}).done(function(cont) {
  populateDOM(cont);
});

function populateDOM(cont) {
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


$("#inputSongs").on("click", ".deletebutton", function(event) {
  $(this).parent().remove();
});


// $("#addSongs").click(addSecondJSONfile);

// calling populateDOM happened at end of ajax call, in promises it happens at the call site

// function addSecondJSONfile() {
//   $.ajax({
//     url: "songs2.json"
//   }).done(function(moreSongs){
//     populateDOM(moreSongs);
//   });
// }

// promises created to allow to deal with results of ajax calls at call site
// for managing entire chain of functions from one spot
// promises are used to make code more managable
$("#addSongs").click(function() {
  addSecondJSONfile()
    .then(function(moreSongs) {
      populateDOM(moreSongs);
    })
})

var addSecondJSONfile = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "songs2.json"
    }).done(function(moreSongs) {
      resolve(moreSongs);
      // after resolve then gets access to moreSongs
      // "then" is a function that sets up event listeners
      // waiting for resolve to get called
    }).fail(function(xhr, status, error) {});
  });
};


//   })
// }

// PROMISES FROM ACME:

// var getCategories = function() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "json/categories.json"
//     }).done(function(data) {
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   })
// };

// getCategories()
// .then(function(catData) {
//   // then is a method on 
//   explosiveData.push(catData.categories);
//   // array and function return second funciton
//   // console.log("categoriesPromise", catData);
//   return getTypes();
// }).then(function(typeData) {
//   explosiveData.push(typeData.types);
//   // console.log("getTypes", typeData)
//   return getProducts();
// }).then(function(prodData) {
//   explosiveData.push(prodData.products);
//   // console.log("getProducts", prodData)
//   // console.log(explosiveData[0]);
//   loadCategoriesPage();
// });

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
