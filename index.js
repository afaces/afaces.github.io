console.log("Hello world!");

// TODO OUTPUT CURRENT SONG IN CONSOLE
console.log(JSON.stringify("song name: " += song_name))


// Method to pause global song

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// TODO: Create function to parse the audio tag elements for the player to be ready to work
let curr_track = document.createElement('audio');

let nefasto_URL = "https://m.media-amazon.com/images/I/81djy5jwQ2L._SS500_.jpg"

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "Nefasto",
    artist: "Afaces",
    image: nefasto_URL,
    path: "/assets/music/1.- 'Nefasto'/1 - Nefasto.mp3"
  },
  {
    name: "Forgotten past",
    artist: "Afaces",
    image: nefasto_URL,
    path: "/assets/music/1.- 'Nefasto'/2 - Forgotten past.mp3"
  },
  {
    name: "Desgarrador #2",
    artist: "Afaces",
    image: nefasto_URL,
    path: "/assets/music/1.- 'Nefasto'/3 - Desgarrador2.mp3",
  },
];

