"use strict";

var $ = require("jquery");
var loader = require("./loader")

$("#viewMusic").click(() => {
  event.preventDefault();
  console.log("viewMusic");
});

$("#addMusic").click(() => {
  event.preventDefault();
  console.log("addMusic");
});


// wrap dom handler stuff in document ready
// $(function() {

// });

