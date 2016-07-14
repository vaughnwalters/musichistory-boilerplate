"use strict";

var $ = require("jquery");
var loader = require("./loader")

// show viewMusic view on click
$("#viewMusic").click(() => {
  event.preventDefault();
  $("#showSongs").show();
  $("#inputSongs").hide();
});


// show addMusic view on click
$("#addMusic").click(() => {
  event.preventDefault();
  $("#showSongs").hide();
  $("#inputSongs").show();
});


// wrap dom handler stuff in document ready
// $(function() {

// });

