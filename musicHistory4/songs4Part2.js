$("#deleteButton0").click(() => {
  $("inputSongs").children().remove(event.target.parentNode);
});


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
  var dButton2=document.getElementById("deleteButton1");
  dButton2.addEventListener("click", clickEvent1);
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
  dButton21.addEventListener("click", clickEvent2);
  dButton22.addEventListener("click", clickEvent2);
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



