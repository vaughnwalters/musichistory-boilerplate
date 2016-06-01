var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log("what's in the array", songs);

// Each student must add one song to the beginning and the end of the array.
songs.push("April Fools - by the Frogs on the album My Daughter the Broad");
songs.unshift("Don't you ever be lonely - by the Weary Boys on the album Good Times");

console.log("push and unshift a song", songs);

// Students] must find and replace the > character in each item with a - character.
// Loop over the array and remove any words or characters that obviously don't belong.

// function replaceLetters(currsong) {
//   currentSong=currentSong.replace(currsong);
// }

for (var i=0; i < songs.length; i++) {
  var currentSong=songs[i];
  currentSong = currentSong.replace(/>/g, "-");
  currentSong = currentSong.replace(/\*|@|!/g, "").replace("(", "");
  console.log("current song", currentSong);
  var songList = document.getElementById("inputSongs");
  songList.innerHTML += "<div>" + currentSong + "</div>";
}

// Must add each string to the DOM in index.html in the main content area.
// var songList = document.getElementById("inputSongs");
// songList.innerHTML = currentSong;



// Requirements

// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

// {Song name} by {Artist} on the album {Album}