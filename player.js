console.log("Hello world!");

// Method to pause global song

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

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "1 - Nefasto",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/1 - Nefasto.mp3",
  },
  {
    name: "2 - Forgotten past",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/2 - Forgotten past.mp3",
  },
  {
    name: "3 - Desgarrador2",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/3 - Desgarrador2.mp3",
  },
  {
    name: "4 - Baby On Fire",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/4 - Baby On Fire.mp3",
  },
  {
    name: "5 - Floating",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/5 - Floating.mp3",
  },
  {
    name: "6 - Inconscience",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/6 - Inconscience.mp3",
  },
  {
    name: "7 - Hot  Spicy",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/7 - Hot & Spicy.mp3",
  },
  {
    name: "8 - A Team Fight",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/8 - A Team Fight.mp3",
  },
  {
    name: "9 - Ha ha ha",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/9 - Ha ha ha.mp3",
  },
  {
    name: "10 - Aberrante",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/10 - Aberrante.mp3",
  },
  {
    name: "11 - Help",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/11 - Help.mp3",
  },
  {
    name: "12 - Cough",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/12 - Cough.mp3",
  },
  {
    name: "13 - Just enough",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/13 - Just enough.mp3",
  },
  {
    name: "14 - Song for the deaf",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/14 - Song for the deaf.mp3",
  },
  {
    name: "15 - Helo",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/15 - Helo.mp3",
  },
  {
    name: "16 - Back from there",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/16 - Back from there.mp3",
  },
  {
    name: "17 - Catastrofico",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/17 - Catastrofico.mp3",
  },
  {
    name: "18 - egipto",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/18 - egipto.mp3",
  },
  {
    name: "19 - take those pills",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/19 - take those pills.mp3",
  },
  {
    name: "20 - Uh-uh ft. Yellow Button",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/20 - Uh-uh ft. Yellow Button.mp3",
  },
  {
    name: "21 - Waves Not Found",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/21 - Waves Not Found.mp3",
  },
  {
    name: "22 - aceptable",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/22 - aceptable.mp3",
  },
  {
    name: "23 - Don't remind me",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/23 - Don't remind me.mp3",
  },
  {
    name: "24 - Platform",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c",
    path: "assets/music/1.- 'Nefasto'/24 - Platform.mp3",
  },
  {
    name: "1 - Pencil",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/1 - Pencil.mp3",
  },
  {
    name: "2 - No Reason",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/2 - No Reason.mp3",
  },
  {
    name: "3 - Assault",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/3 - Assault.mp3",
  },
  {
    name: "4 - Paint Over the Floor",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/4 - Paint Over the Floor.mp3",
  },
  {
    name: "5 - Phoenix Arising From The Ashes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/5 - Phoenix Arising From The Ashes.mp3",
  },
  {
    name: "6 - Birthday of Universe",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/6 - Birthday of Universe.mp3",
  },
  {
    name: "7 - haunted love",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/7 - haunted love.mp3",
  },
  {
    name: "8 - DEPresion",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/8 - DEPresion.mp3",
  },
  {
    name: "9 - Warm in Winter",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/9 - Warm in Winter.mp3",
  },
  {
    name: "10 - Time just gone",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/10 - Time just gone.mp3",
  },
  {
    name: "11 -Desires",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/11 -Desires.mp3",
  },
  {
    name: "12 -Go  Catch A Flight",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/12 -Go & Catch A Flight.mp3",
  },
  {
    name: "13 - What did he gone",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/13 - What did, he gone.mp3",
  },
  {
    name: "14 - too much",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/14 - too much.mp3",
  },
  {
    name: "15 - Christmas again",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/15 - Christmas again.mp3",
  },
  {
    name: "16 - back to lack",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/16 - back to lack.mp3",
  },
  {
    name: "17 - Dirty clothes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/17 - Dirty clothes.mp3",
  },
  {
    name: "18 - Why so sad",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/18 - Why so sad.mp3",
  },
  {
    name: "19 - sick of it",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/19 - sick of it.mp3",
  },
  {
    name: "20 - tears",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/20 - tears.mp3",
  },
  {
    name: "21 - BONDAGE",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/21 - BONDAGE.mp3",
  },
  {
    name: "22 - Writer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/22 - Writer.mp3",
  },
  {
    name: "23 - innocent",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/23 - innocent.mp3",
  },
  {
    name: "24 - Last Sight",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c",
    path: "assets/music/2.- 'Writer'/24 - Last Sight.mp3",
  },
  {
    name: "1 - taste",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/1 - taste.mp3",
  },
  {
    name: "2 - troop",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/2 - troop.mp3",
  },
  {
    name: "3 - teenage drive",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/3 - teenage drive.mp3",
  },
  {
    name: "4 - day owl",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/4 - day owl.mp3",
  },
  {
    name: "5 - shout",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/5 - shout.mp3",
  },
  {
    name: "6 - War King",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/6 - War King.mp3",
  },
  {
    name: "7 - Oclock",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/7 - Oclock.mp3",
  },
  {
    name: "8 - village",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/8 - village.mp3",
  },
  {
    name: "9 - storm",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/9 - storm.mp3",
  },
  {
    name: "10 - got the music of tonight",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/10 - got the music of tonight.mp3",
  },
  {
    name: "11 - sunrise",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/11 - sunrise.mp3",
  },
  {
    name: "12 - Landscape",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/12 - Landscape.mp3",
  },
  {
    name: "13 - mirage",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/13 - mirage.mp3",
  },
  {
    name: "14 - city lights",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/14 - city lights.mp3",
  },
  {
    name: "15 - TUESDAY",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/15 - TUESDAY.mp3",
  },
  {
    name: "16 - goodbye beach",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/16 - goodbye beach.mp3",
  },
  {
    name: "17 - explorer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/17 - explorer.mp3",
  },
  {
    name: "18 - Ball",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/18 - Ball.mp3",
  },
  {
    name: "19 - moth",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/19 - moth.mp3",
  },
  {
    name: "20 - to and fro",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85",
    path: "assets/music/3.- 'Back and Fro'/20 - to and fro.mp3",
  },
  {
    name: "1 - Ambrosia",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/1 - Ambrosia.mp3",
  },
  {
    name: "2 - memory",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/2 - memory.mp3",
  },
  {
    name: "3 - fast bad",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/3 - fast bad.mp3",
  },
  {
    name: "4 - stream",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/4 - stream.mp3",
  },
  {
    name: "5 - Need",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/5 - Need.mp3",
  },
  {
    name: "6 - cold space",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/6 - cold space.mp3",
  },
  {
    name: "7 - kind of weird",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/7 - kind of weird.mp3",
  },
  {
    name: "8 - terre",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/8 - terre.mp3",
  },
  {
    name: "9 - LUNE",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/9 - LUNE.mp3",
  },
  {
    name: "10 - MARS",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/10 - MARS.mp3",
  },
  {
    name: "11 - mercury",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/11 - mercury.mp3",
  },
  {
    name: "12 - venus",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/12 - venus.mp3",
  },
  {
    name: "13 - Retipuj",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/13 - Retipuj.mp3",
  },
  {
    name: "14 - uranio",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/14 - uranio.mp3",
  },
  {
    name: "15 - NETPUNO",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/15 - NETPUNO.mp3",
  },
  {
    name: "16 - soon",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/16 - soon.mp3",
  },
  {
    name: "17 - encelato",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/17 - encelato.mp3",
  },
  {
    name: "18 - ganimidi",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/18 - ganimidi.mp3",
  },
  {
    name: "19 - aphostmere",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/19 - aphostmere.mp3",
  },
  {
    name: "20 - yeahr",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445",
    path: "assets/music/4.- 'Planetc'/20 - yeahr.mp3",
  },
  {
    name: "1 - screan",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/1 - screan.mp3",
  },
  {
    name: "2 - orange",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/2 - orange.mp3",
  },
  {
    name: "3 - gallery",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/3 - gallery.mp3",
  },
  {
    name: "4 - todya",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/4 - todya.mp3",
  },
  {
    name: "5 - Bive",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/5 - Bive.mp3",
  },
  {
    name: "6 - ad's grace",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/6 - ad's grace.mp3",
  },
  {
    name: "7 - surrend",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/7 - surrend.mp3",
  },
  {
    name: "8 - andorthe",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/8 - andorthe.mp3",
  },
  {
    name: "9 - shock",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/9 - shock.mp3",
  },
  {
    name: "10 - Juggler",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/10 - Juggler.mp3",
  },
  {
    name: "11 - Bulb",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/11 - Bulb.mp3",
  },
  {
    name: "12 - scratch",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/12 - scratch.mp3",
  },
  {
    name: "13 - furtherword",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/13 - furtherword.mp3",
  },
  {
    name: "14 - Sentinel",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/14 - Sentinel.mp3",
  },
  {
    name: "15 - COUNTLESS",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/15 - COUNTLESS.mp3",
  },
  {
    name: "16 - derklight",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/16 - derklight.mp3",
  },
  {
    name: "17 - artrist",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/17 - artrist.mp3",
  },
  {
    name: "18 - whatdidhappen",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/18 - whatdidhappen.mp3",
  },
  {
    name: "19 - UNKNOWN",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/19 - UNKNOWN.mp3",
  },
  {
    name: "20 - control_plus_s",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/20 - control_plus_s.mp3",
  },
  {
    name: "21 - BITTERCANDY",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/21 - BITTERCANDY.mp3",
  },
  {
    name: "22 - water small",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/22 - water small.mp3",
  },
  {
    name: "23 - Petri dish",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/23 - Petri dish.mp3",
  },
  {
    name: "24 - late",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/24 - late.mp3",
  },
  {
    name: "25 - Shipfriend",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c",
    path: "assets/music/5.- 'Black'/25 - Shipfriend.mp3",
  },
  {
    name: "1 - ace",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/1 - ace.mp3",
  },
  {
    name: "2 - start",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/2 - start.mp3",
  },
  {
    name: "3 - the power of gabber",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/3 - the power of gabber.mp3",
  },
  {
    name: "4 - Track lost",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/4 - Track lost.mp3",
  },
  {
    name: "5 - yawn",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/5 - yawn.mp3",
  },
  {
    name: "6 - sniks",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/6 - sniks.mp3",
  },
  {
    name: "7 - Noon",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/7 - Noon.mp3",
  },
  {
    name: "8 - clear",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/8 - clear.mp3",
  },
  {
    name: "9 - clueless",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/9 - clueless.mp3",
  },
  {
    name: "10 - Gone",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/10 - Gone.mp3",
  },
  {
    name: "11 - depart",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/11 - depart.mp3",
  },
  {
    name: "12 - wait",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/12 - wait.mp3",
  },
  {
    name: "13 - ease",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/13 - ease.mp3",
  },
  {
    name: "14 - flash",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/14 - flash.mp3",
  },
  {
    name: "15 - robots in london",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/15 - robots in london.mp3",
  },
  {
    name: "16 - escalene",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/16 - escalene.mp3",
  },
  {
    name: "17 - dancefloor",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/17 - dancefloor.mp3",
  },
  {
    name: "18 - HitHats",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/18 - HitHats.mp3",
  },
  {
    name: "19 - plate",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/19 - plate.mp3",
  },
  {
    name: "20 - petals",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/20 - petals.mp3",
  },
  {
    name: "21 - leftovers",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/21 - leftovers.mp3",
  },
  {
    name: "22 - upward",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029",
    path: "assets/music/6.- 'list'/22 - upward.mp3",
  },
  {
    name: "1 - Negativ",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/1 - Negativ.mp3",
  },
  {
    name: "2 - unbalanced",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/2 - unbalanced.mp3",
  },
  {
    name: "3 - Fly",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/3 - Fly.mp3",
  },
  {
    name: "4 - Untitled",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/4 - Untitled.mp3",
  },
  {
    name: "5 - heartbreak",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/5 - heartbreak.mp3",
  },
  {
    name: "6 - hustle",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/6 - hustle.mp3",
  },
  {
    name: "7 - lasers through smoke",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/7 - lasers through smoke.mp3",
  },
  {
    name: "8 - haul",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/8 - haul.mp3",
  },
  {
    name: "9 - shining stars",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/9 - shining stars.mp3",
  },
  {
    name: "10 - celebrate",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/10 - celebrate.mp3",
  },
  {
    name: "11 - step",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/11 - step.mp3",
  },
  {
    name: "12 - graph",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/12 - graph.mp3",
  },
  {
    name: "13 - sos",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/13 - sos.mp3",
  },
  {
    name: "14 - mirror",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/14 - mirror.mp3",
  },
  {
    name: "15 - vortex attack",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/15 - vortex attack.mp3",
  },
  {
    name: "16 - resources",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/16 - resources.mp3",
  },
  {
    name: "17 - r u there",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/17 - r u there.mp3",
  },
  {
    name: "18 - boom!",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7",
    path: "assets/music/7.- 'A cool name'/18 - boom!.mp3",
  },
  {
    name: "1 - no one",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/1 - no one.mp3",
  },
  {
    name: "2 - jackpot",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/2 - jackpot.mp3",
  },
  {
    name: "3 - meet",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/3 - meet.mp3",
  },
  {
    name: "4 - roundabout",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/4 - roundabout.mp3",
  },
  {
    name: "5 - branch",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/5 - branch.mp3",
  },
  {
    name: "6 - skid",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/6 - skid.mp3",
  },
  {
    name: "7 - stop",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/7 - stop.mp3",
  },
  {
    name: "8 - gap",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/8 - gap.mp3",
  },
  {
    name: "9 - Prince",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/9 - Prince.mp3",
  },
  {
    name: "10 - missing",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/10 - missing.mp3",
  },
  {
    name: "11 - sticky heat",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/11 - sticky heat.mp3",
  },
  {
    name: "12 - surcease",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/12 - surcease.mp3",
  },
  {
    name: "13 - Weissbier",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/13 - Weissbier.mp3",
  },
  {
    name: "14 - sirens",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/14 - sirens.mp3",
  },
  {
    name: "15 - new titles",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/15 - new titles.mp3",
  },
  {
    name: "16 - loco motion",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/16 - loco motion.mp3",
  },
  {
    name: "17 - best beast",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/17 - best beast.mp3",
  },
  {
    name: "18 - Cute As Hell",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/18 - Cute As Hell.mp3",
  },
  {
    name: "19 - regreat",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/19 - regreat.mp3",
  },
  {
    name: "20 - edge",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/20 - edge.mp3",
  },
  {
    name: "21 - 50%",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/21 - 50%.mp3",
  },
  {
    name: "22 - hot pockets",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d",
    path: "assets/music/8.- '50%'/22 - hot pockets.mp3",
  },
  {
    name: "1 - cigarret advertisement",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/1 - cigarret advertisement.mp3",
  },
  {
    name: "2 - seawatch",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/2 - seawatch.mp3",
  },
  {
    name: "3 - nostalgia",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/3 - nostalgia.mp3",
  },
  {
    name: "4 - ray-v",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/4 - ray-v.mp3",
  },
  {
    name: "5 - lab",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/5 - lab.mp3",
  },
  {
    name: "6 - lit",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/6 - lit.mp3",
  },
  {
    name: "7 - dessert",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/7 - dessert.mp3",
  },
  {
    name: "8 - tahw",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/8 - tahw.mp3",
  },
  {
    name: "9 - coolture",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/9 - coolture.mp3",
  },
  {
    name: "10 - freemium",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/10 - freemium.mp3",
  },
  {
    name: "11 - no more recall",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/11 - no more recall.mp3",
  },
  {
    name: "12 - keen",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/12 - keen.mp3",
  },
  {
    name: "13 - try",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/13 - try.mp3",
  },
  {
    name: "14 - club the clap",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/14 - club the clap.mp3",
  },
  {
    name: "15 - candle",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/15 - candle.mp3",
  },
  {
    name: "16 - parlor",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/16 - parlor.mp3",
  },
  {
    name: "17 - lesshome",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/17 - lesshome.mp3",
  },
  {
    name: "18 - enchanted",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/18 - enchanted.mp3",
  },
  {
    name: "19 - Chasing papers",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/19 - Chasing papers.mp3",
  },
  {
    name: "20 - one blink two eyes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/20 - one blink two eyes.mp3",
  },
  {
    name: "21 - forbear",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed",
    path: "assets/music/9.- 'advisory content'/21 - forbear.mp3",
  },
  {
    name: "1 .- Entrance",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/1 .- Entrance.mp3",
  },
  {
    name: "2.- Haze",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/2.- Haze.mp3",
  },
  {
    name: "3.- Extravaganza",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/3.- Extravaganza.mp3",
  },
  {
    name: "4.- Confidant",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/4.- Confidant.mp3",
  },
  {
    name: "5.- Field Company",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/5.- Field Company.mp3",
  },
  {
    name: "6.- Breath Pause",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/6.- Breath Pause.mp3",
  },
  {
    name: "7.- Violence en l'amour",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/7.- Violence en l'amour.mp3",
  },
  {
    name: "8.- Jugular",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/8.- Jugular.mp3",
  },
  {
    name: "9.- Aubrey",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/9.- Aubrey.mp3",
  },
  {
    name: "10.- Darcy",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/10.- Darcy.mp3",
  },
  {
    name: "11.- Ana",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/11.- Ana.mp3",
  },
  {
    name: "12.- Julia",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/12.- Julia.mp3",
  },
  {
    name: "13.- Pete",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/13.- Pete.mp3",
  },
  {
    name: "14.- John",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/14.- John.mp3",
  },
  {
    name: "15.- Martin",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/15.- Martin.mp3",
  },
  {
    name: "16.- Adrian",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/16.- Adrian.mp3",
  },
  {
    name: "17.- Land",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/17.- Land.mp3",
  },
  {
    name: "18.- Deter",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/18.- Deter.mp3",
  },
  {
    name: "19.- Cruiser",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/19.- Cruiser.mp3",
  },
  {
    name: "20.- Off Faces",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/20.- Off Faces.mp3",
  },
  {
    name: "21.- Roads to Nowhere",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469",
    path: "assets/music/10.- 'BUY NEVER'/21.- Roads to Nowhere.mp3",
  },
  {
    name: "1 - Try your worst",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/1 - Try your worst.mp3",
  },
  {
    name: "2 -Nights Alone fake  Bill",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/2 -Nights Alone (fake $ Bill).mp3",
  },
  {
    name: "3 - r-Cycle",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/3 - r-Cycle.mp3",
  },
  {
    name: "4 - Struggles",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/4 - Struggles.mp3",
  },
  {
    name: "5 - Heirs",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/5 - Heirs.mp3",
  },
  {
    name: "6 - darts",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/6 - darts.mp3",
  },
  {
    name: "7 - Powder",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/7 - Powder.mp3",
  },
  {
    name: "8 -Traeh",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/8 -Traeh.mp3",
  },
  {
    name: "9 - Heights",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/9 - Heights.mp3",
  },
  {
    name: "10 - Bearer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/10 - Bearer.mp3",
  },
  {
    name: "11 - Cap",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/11 - Cap.mp3",
  },
  {
    name: "12 - Ashore",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/12 - Ashore.mp3",
  },
  {
    name: "13 - Real Heterogeneous Fauna",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/13 - Real Heterogeneous Fauna.mp3",
  },
  {
    name: "14 - Nightmares",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/14 - Nightmares.mp3",
  },
  {
    name: "15 - Presage",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/15 - Presage.mp3",
  },
  {
    name: "16 - scrape",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/16 - scrape.mp3",
  },
  {
    name: "17 - Confine Yourself",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/17 - Confine Yourself.mp3",
  },
  {
    name: "18 - On try",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/18 - On try.mp3",
  },
  {
    name: "19 - Play my mind",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/19 - Play my mind.mp3",
  },
  {
    name: "20 - Not's new",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39",
    path: "assets/music/11.- 'Bull's-eye'/20 - Not's new.mp3",
  },
  {
    name: "1 - God knows no",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/1 - God knows no.mp3",
  },
  {
    name: "2 - Corsair",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/2 - Corsair.mp3",
  },
  {
    name: "3 - Stay Home metamorphosis",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/3 - Stay Home (metamorphosis).mp3",
  },
  {
    name: "4 - Prevail",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/4 - Prevail.mp3",
  },
  {
    name: "5- Shudder",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/5- Shudder.mp3",
  },
  {
    name: "6 - Sari",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/6 - Sari.mp3",
  },
  {
    name: "7 - Subterfuge",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/7 - Subterfuge.mp3",
  },
  {
    name: "8- Tú",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/8- Tú.mp3",
  },
  {
    name: "9 - How",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/9 - How.mp3",
  },
  {
    name: "10 - Oh yeah hey",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/10 - Oh yeah hey.mp3",
  },
  {
    name: "11 - Calmly",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/11 - Calmly.mp3",
  },
  {
    name: "12 - migraine",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/12 - migraine.mp3",
  },
  {
    name: "13 - End",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/13 - End.mp3",
  },
  {
    name: "14 - abmas",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/14 - abmas.mp3",
  },
  {
    name: "15 - 26536",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/15 - 26536.mp3",
  },
  {
    name: "16 - shadows",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/16 - shadows.mp3",
  },
  {
    name: "17 - trial",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/17 - trial.mp3",
  },
  {
    name: "18 - Mnoalu",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9",
    path: "assets/music/12.- 'Where are my royalties'/18 - Mnoalu.mp3",
  },
  {
    name: "1 - Over lovely",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/1 - Over lovely.mp3",
  },
  {
    name: "2- Sway",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/2- Sway.mp3",
  },
  {
    name: "3 - funk-o-matic",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/3 - funk-o-matic.mp3",
  },
  {
    name: "4 - you dont want to know anything about me",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/4 - you dont want to know anything about me.mp3",
  },
  {
    name: "5 - toutlair",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/5 - toutlair.mp3",
  },
  {
    name: "6 - swarmv",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/6 - swarmv.mp3",
  },
  {
    name: "7 - pledge",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/7 - pledge.mp3",
  },
  {
    name: "8 - fletsif",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/8 - fletsif.mp3",
  },
  {
    name: "9 - State of matters",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/9 - State of matters.mp3",
  },
  {
    name: "10 - now what",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/10 - now what.mp3",
  },
  {
    name: "11 - doll",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/11 - doll.mp3",
  },
  {
    name: "12 - first",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/12 - first.mp3",
  },
  {
    name: "13 - though",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/13 - though.mp3",
  },
  {
    name: "14 - not the last",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/14 - not the last.mp3",
  },
  {
    name: "15 - check it out",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/15 - check it out.mp3",
  },
  {
    name: "16 - numbers",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/16 - numbers.mp3",
  },
  {
    name: "17 - annexes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/17 - annexes.mp3",
  },
  {
    name: "18 - Una luz",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/18 - Una luz.mp3",
  },
  {
    name: "19 - door",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/19 - door.mp3",
  },
  {
    name: "20 - Wired",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/20 - Wired.mp3",
  },
  {
    name: "21 - together stay",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/21 - together stay.mp3",
  },
  {
    name: "22 - yes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/22 - yes.mp3",
  },
  {
    name: "23 - zoom",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/23 - zoom.mp3",
  },
  {
    name: "24 - castle queenside",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c",
    path: "assets/music/13.- 'Who u tryna' impress'/24 - castle queenside.mp3",
  },
  {
    name: "1 - YouThieve",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/1 - YouThieve.mp3",
  },
  {
    name: "2 - F the industry",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/2 - F the industry.mp3",
  },
  {
    name: "3 - Smoke The Law",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/3 - Smoke The Law.mp3",
  },
  {
    name: "4 - Rape my pockets",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/4 - Rape my pockets.mp3",
  },
  {
    name: "5 - Freedom slaught",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/5 - Freedom slaught.mp3",
  },
  {
    name: "6 - Hijack thoughts",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/6 - Hijack thoughts.mp3",
  },
  {
    name: "7 - Emotional terrorism",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/7 - Emotional terrorism.mp3",
  },
  {
    name: "8 - Traffic under other's influence",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/8 - Traffic under other's influence.mp3",
  },
  {
    name: "9 - Denounce your neighbor",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/9 - Denounce your neighbor.mp3",
  },
  {
    name: "10 - Corruption pillage",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/10 - Corruption pillage.mp3",
  },
  {
    name: "11 - Sedition from Earth",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/11 - Sedition from Earth.mp3",
  },
  {
    name: "12 - Disobey the Children",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/12 - Disobey the Children.mp3",
  },
  {
    name: "13 - Accomplices of Tyranny",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/13 - Accomplices of Tyranny.mp3",
  },
  {
    name: "14 - Suicide Collective",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/14 - Suicide Collective.mp3",
  },
  {
    name: "15 - Breakfast at FakeNew's",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/15 - Breakfast at FakeNew's.mp3",
  },
  {
    name: "16 - Pure uncut drug",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/16 - Pure uncut drug.mp3",
  },
  {
    name: "17 - Reveal the Lies",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/17 - Reveal the Lies.mp3",
  },
  {
    name: "18 - Dumb Intellectual Property",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/18 - Dumb Intellectual Property.mp3",
  },
  {
    name: "19 - Speech of Fake Freedom",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/19 - Speech of Fake Freedom.mp3",
  },
  {
    name: "20 - Global Alarm",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/20 - Global Alarm.mp3",
  },
  {
    name: "21 - Back to a New State of Normality",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88",
    path: "assets/music/14.- 'The bad words'/21 - Back to a New State of Normality.mp3",
  },
  {
    name: "1 - get you hype",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/1 - get you hype.mp3",
  },
  {
    name: "2 - do your will",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/2 - do your will.mp3",
  },
  {
    name: "3 - Weight of Ego",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/3 - Weight of Ego.mp3",
  },
  {
    name: "4 - I own a computer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/4 - I own a computer.mp3",
  },
  {
    name: "5 - Soul impulse",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/5 - Soul impulse.mp3",
  },
  {
    name: "6 - Techne",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/6 - Techne.mp3",
  },
  {
    name: "7 - Melalcoholiac",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/7 - Melalcoholiac.mp3",
  },
  {
    name: "8 - Peevish",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/8 - Peevish.mp3",
  },
  {
    name: "9 - Bloody Valhalla",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/9 - Bloody Valhalla.mp3",
  },
  {
    name: "10 - Afflatus",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/10 - Afflatus.mp3",
  },
  {
    name: "11 - Way to Death",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/11 - Way to Death.mp3",
  },
  {
    name: "12 - crossed looks",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/12 - crossed looks.mp3",
  },
  {
    name: "13 - Conquer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/13 - Conquer.mp3",
  },
  {
    name: "14 - Not me to talk",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/14 - Not me to talk.mp3",
  },
  {
    name: "15 - For what do",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/15 - For what do.mp3",
  },
  {
    name: "16 - lewej",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/16 - lewej.mp3",
  },
  {
    name: "17 - Wicked",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/17 - Wicked.mp3",
  },
  {
    name: "18 - Desolate",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/18 - Desolate.mp3",
  },
  {
    name: "19 - deal",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/19 - deal.mp3",
  },
  {
    name: "20 - elope",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa",
    path: "assets/music/15.- 'Journey to Wasted Youth'/20 - elope.mp3",
  },
  {
    name: "1 - Place",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/1 - Place.mp3",
  },
  {
    name: "2 - Headway",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/2 - Headway.mp3",
  },
  {
    name: "3 - Paramount echoes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/3 - Paramount echoes.mp3",
  },
  {
    name: "4 - Drifted",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/4 - Drifted.mp3",
  },
  {
    name: "5 - Amalgam",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/5 - Amalgam.mp3",
  },
  {
    name: "6 - Soulmates",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/6 - Soulmates.mp3",
  },
  {
    name: "7 - Blue",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/7 - Blue.mp3",
  },
  {
    name: "8 - Forgotten kisses",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/8 - Forgotten kisses.mp3",
  },
  {
    name: "9 - Nitwit",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/9 - Nitwit.mp3",
  },
  {
    name: "10 - Wait me for",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/10 - Wait me for.mp3",
  },
  {
    name: "11 - Back your watch",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/11 - Back your watch.mp3",
  },
  {
    name: "12 - all almost",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/12 - all almost.mp3",
  },
  {
    name: "13 - skyline",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/13 - skyline.mp3",
  },
  {
    name: "14 - It Seems That The Clouds Left With You",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/14 - It Seems That The Clouds Left With You.mp3",
  },
  {
    name: "15 - might",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/15 - might.mp3",
  },
  {
    name: "16 - casual",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/16 - casual.mp3",
  },
  {
    name: "17 - Untangled",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/17 - Untangled.mp3",
  },
  {
    name: "18 - regrowth",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/18 - regrowth.mp3",
  },
  {
    name: "19 - Burn it",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/19 - Burn it.mp3",
  },
  {
    name: "20 - concealed",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/20 - concealed.mp3",
  },
  {
    name: "21 - Lightning",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1",
    path: "assets/music/16.- 'Lyricless Miracles'/21 - Lightning.mp3",
  },
  {
    name: "1.- Misery",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/1.- Misery.mp3",
  },
  {
    name: "2 - Wonder",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/2 - Wonder.mp3",
  },
  {
    name: "3 - 3",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/3 - 3.mp3",
  },
  {
    name: "4 - 4444",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/4 - 4444.mp3",
  },
  {
    name: "5 - The music you skip",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/5 - The music you skip.mp3",
  },
  {
    name: "6 - Have to have",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/6 - Have to have.mp3",
  },
  {
    name: "7 - Last Summer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/7 - Last Summer.mp3",
  },
  {
    name: "8 - Downstairs",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/8 - Downstairs.mp3",
  },
  {
    name: "9 - Flummox",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/9 - Flummox.mp3",
  },
  {
    name: "10 - Outcast",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/10 - Outcast.mp3",
  },
  {
    name: "11 - Bitter Goodbyes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/11 - Bitter Goodbyes.mp3",
  },
  {
    name: "12 - Sand",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/12 - Sand.mp3",
  },
  {
    name: "13 - Sunshine eyes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/13 - Sunshine eyes.mp3",
  },
  {
    name: "14 - Old Hat",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/14 - Old Hat.mp3",
  },
  {
    name: "15 - Poor aching heart",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/15 - Poor aching heart.mp3",
  },
  {
    name: "16 - Handhold",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/16 - Handhold.mp3",
  },
  {
    name: "17 - Bad DJ",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/17 - Bad DJ.mp3",
  },
  {
    name: "18 - Pay day",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b",
    path: "assets/music/17.- 'irl'/18 - Pay day.mp3",
  },
  {
    name: "Lonely - Bella Thorne - Afaces remix",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/Lonely - Bella Thorne - Afaces remix.mp3",
  },
  {
    name: "1 - Preshrunk",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/1 - Preshrunk.mp3",
  },
  {
    name: "2 - Bottle",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/2 - Bottle.mp3",
  },
  {
    name: "3 - That epoch you existed",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/3 - That epoch you existed.mp3",
  },
  {
    name: "4 - Unplaylisted",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/4 - Unplaylisted.mp3",
  },
  {
    name: "5 - Hang up",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/5 - Hang up.mp3",
  },
  {
    name: "6 - Infraencer",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/6 - Infraencer.mp3",
  },
  {
    name: "7 - Awry astrays",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/7 - Awry astrays.mp3",
  },
  {
    name: "8 - Large dresses",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/8 - Large dresses.mp3",
  },
  {
    name: "9 - Greedings",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/9 - Greedings.mp3",
  },
  {
    name: "10 - Whim",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/10 - Whim.mp3",
  },
  {
    name: "11 - Flail",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/11 - Flail.mp3",
  },
  {
    name: "12 - Questions",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/12 - Questions.mp3",
  },
  {
    name: "13 - 14 - New Titles1",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/13 - 14 - New Titles[1].mp3",
  },
  {
    name: "14 - External thoughts",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/14 - External thoughts.mp3",
  },
  {
    name: "15 -Chiripitiflauticus",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/15 -Chiripitiflauticus.mp3",
  },
  {
    name: "16 - Cat",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/16 - Cat.mp3",
  },
  {
    name: "17 - Hi there",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/17 - Hi there.mp3",
  },
  {
    name: "18 - Soundtest3",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c",
    path: "assets/music/18.- 'before senescence'/18 - Soundtest3.mp3",
  },
  {
    name: "1.- This song has no video",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/1.- This song has no video.mp3",
  },
  {
    name: "2.- Tarnish",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/2.- Tarnish.mp3",
  },
  {
    name: "3.- liek",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/3.- liek.mp3",
  },
  {
    name: "4.- Making me crazy",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/4.- Making me crazy.mp3",
  },
  {
    name: "5.- Stick to the tree",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/5.- Stick to the tree.mp3",
  },
  {
    name: "6.- vitriolic",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/6.- vitriolic.mp3",
  },
  {
    name: "7.- mixptakes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/7.- mixptakes.mp3",
  },
  {
    name: "8.- Old times",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/8.- Old times.mp3",
  },
  {
    name: "9.- Long time no see",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/9.- Long time no see.mp3",
  },
  {
    name: "10.- trap'd by u",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/10.- trap'd by u.mp3",
  },
  {
    name: "11.- Flying neon tires",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/11.- Flying neon tires.mp3",
  },
  {
    name: "12.- Soundtest2",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/12.- Soundtest2.mp3",
  },
  {
    name: "13.- Destiny repeats",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/13.- Destiny repeats.mp3",
  },
  {
    name: "14.- My mother's softener",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/14.- My mother's softener.mp3",
  },
  {
    name: "15.- dial",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/15.- dial.mp3",
  },
  {
    name: "16.- La hija de Franco",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/16.- La hija de Franco.mp3",
  },
  {
    name: "17.- Sintonize",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/17.- Sintonize.mp3",
  },
  {
    name: "18.- Astronauta",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/18.- Astronauta.mp3",
  },
  {
    name: "19.- Schedules",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/19.- Schedules.mp3",
  },
  {
    name: "20.- blue lighted rain",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/20.- blue lighted rain.mp3",
  },
  {
    name: "21.- good night",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38",
    path: "assets/music/19.- 'back to the origins'/21.- good night.mp3",
  },
  {
    name: "1.- Messy streak",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/1.- Messy streak.mp3",
  },
  {
    name: "2.- things removed",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/2.- things removed.mp3",
  },
  {
    name: "3.- man's compliments",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/3.- man's compliments.mp3",
  },
  {
    name: "4.- mami call you later",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/4.- mami call you later.mp3",
  },
  {
    name: "5.- so cheap",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/5.- so cheap.mp3",
  },
  {
    name: "6.- aftermath",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/6.- aftermath.mp3",
  },
  {
    name: "7.- last day's morning bedroom trash",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/7.- last day's morning bedroom trash.mp3",
  },
  {
    name: "8.- first day's afternoon dormer junk",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/8.- first day's afternoon dormer junk.mp3",
  },
  {
    name: "9.- tired",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/9.- tired.mp3",
  },
  {
    name: "10.- words of choice",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/10.- words of choice.mp3",
  },
  {
    name: "11.- gators",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/11.- gators.mp3",
  },
  {
    name: "12.- improvise over",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/12.- improvise over.mp3",
  },
  {
    name: "13.- change of view",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/13.- change of view.mp3",
  },
  {
    name: "14.- the ether",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/14.- the ether.mp3",
  },
  {
    name: "15.- Unbidden",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/15.- Unbidden.mp3",
  },
  {
    name: "16.- taboo",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/16.- taboo.mp3",
  },
  {
    name: "17.- where do I weirdo I",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/17.- where do I (weirdo I).mp3",
  },
  {
    name: "18.- more work",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/18.- more work.mp3",
  },
  {
    name: "19.- bday boi",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/19.- bday boi.mp3",
  },
  {
    name: "20.- raw",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5",
    path: "assets/music/20.- 'conversation conservation'/20.- raw.mp3",
  },
  {
    name: "1.- yeah yeah",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/1.- yeah yeah.mp3",
  },
  {
    name: "2.- bby",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/2.- bby.mp3",
  },
  {
    name: "3.- mcguffin",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/3.- mcguffin.mp3",
  },
  {
    name: "4.- almsgiving",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/4.- almsgiving.mp3",
  },
  {
    name: "5.- product project",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/5.- product project.mp3",
  },
  {
    name: "6.- distractions",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/6.- distractions.mp3",
  },
  {
    name: "7.- secrets",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/7.- secrets.mp3",
  },
  {
    name: "8.- cascade",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/8.- cascade.mp3",
  },
  {
    name: "9.- sunscreen",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/9.- sunscreen.mp3",
  },
  {
    name: "10.- So far so close your friends will be okay",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/10.- So far so close (your friends will be okay).mp3",
  },
  {
    name: "11.- trip",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/11.- trip.mp3",
  },
  {
    name: "12.- appear",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/12.- appear.mp3",
  },
  {
    name: "13.- Unveil",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/13.- Unveil.mp3",
  },
  {
    name: "14.- Plans",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/14.- Plans.mp3",
  },
  {
    name: "15.- flickering",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/15.- flickering.mp3",
  },
  {
    name: "16.- La cour de mon grand-père",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/16.- La cour de mon grand-père.mp3",
  },
  {
    name: "17.- what's poppin'",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/17.- what's poppin'.mp3",
  },
  {
    name: "18.- promise",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/18.- promise.mp3",
  },
  {
    name: "19.- unspeak",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/19.- unspeak.mp3",
  },
  {
    name: "20.- Used to be my friend",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c",
    path: "assets/music/21.- 'Gloomy dances'/20.- Used to be my friend.mp3",
  },
  {
    name: "1.- Ker al Loch",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/1.- Ker al Loch.mp3",
  },
  {
    name: "2.- Bleak",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/2.- Bleak.mp3",
  },
  {
    name: "3.- seed",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/3.- seed.mp3",
  },
  {
    name: "4.- grewth",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/4.- grewth.mp3",
  },
  {
    name: "5.-  Sad kids game",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/5.-  Sad kids game.mp3",
  },
  {
    name: "6.- Worthless",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/6.- Worthless.mp3",
  },
  {
    name: "7.- resile",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/7.- resile.mp3",
  },
  {
    name: "8.- nab",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/8.- nab.mp3",
  },
  {
    name: "9.- dim bone",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/9.- dim bone.mp3",
  },
  {
    name: "10.- Distant echoes of lost loves",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/10.- Distant echoes of lost loves.mp3",
  },
  {
    name: "11.- Stalwart",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/11.- Stalwart.mp3",
  },
  {
    name: "12.- giddy",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/12.- giddy.mp3",
  },
  {
    name: "13.- wag",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/13.- wag.mp3",
  },
  {
    name: "14.- dear diary",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/14.- dear diary.mp3",
  },
  {
    name: "15.- aigre-doux",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/15.- aigre-doux.mp3",
  },
  {
    name: "16.- Life without u",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/16.- Life without u.mp3",
  },
  {
    name: "17.- bane",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/17.- bane.mp3",
  },
  {
    name: "18.- forlorn",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/18.- forlorn.mp3",
  },
  {
    name: "19.- cloaks",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/19.- cloaks.mp3",
  },
  {
    name: "20.- batteries not included",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/20.- batteries not included.mp3",
  },
  {
    name: "21.-  pleasant strangeness",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc",
    path: "assets/music/22.- 'Not Too Bad'/21.-  pleasant strangeness.mp3",
  },
  {
    name: "1.-  Kept me hanging",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/1.-  Kept me hanging.mp3",
  },
  {
    name: "2.- Solution",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/2.- Solution.mp3",
  },
  {
    name: "3.- Where were you this friday night",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/3.- Where were you this friday night.mp3",
  },
  {
    name: "4.- Leaks",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/4.- Leaks.mp3",
  },
  {
    name: "5.- undertow",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/5.- undertow.mp3",
  },
  {
    name: "6.- cross lines",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/6.- cross lines.mp3",
  },
  {
    name: "7.- nothing left",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/7.- nothing left.mp3",
  },
  {
    name: "8.- one floor",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/8.- one floor.mp3",
  },
  {
    name: "9.- handle",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/9.- handle.mp3",
  },
  {
    name: "10.- milling",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/10.- milling.mp3",
  },
  {
    name: "11.- mayhap",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/11.- mayhap.mp3",
  },
  {
    name: "12.- diffident age",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/12.- diffident age.mp3",
  },
  {
    name: "13.- dubious",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/13.- dubious.mp3",
  },
  {
    name: "14.- strike",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/14.- strike.mp3",
  },
  {
    name: "15.- dissent",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/15.- dissent.mp3",
  },
  {
    name: "16.- humdrum",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/16.- humdrum.mp3",
  },
  {
    name: "17.- toss",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/17.- toss.mp3",
  },
  {
    name: "18.- salver",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/18.- salver.mp3",
  },
  {
    name: "19.- trite",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/19.- trite.mp3",
  },
  {
    name: "20.- flowers",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/20.- flowers.mp3",
  },
  {
    name: "21.- alive verge",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/21.- alive verge.mp3",
  },
  {
    name: "22.- tie your shoes",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/22.- tie your shoes.mp3",
  },
  {
    name: "23.- half below",
    artist: "Afaces",
    image: "https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443",
    path: "assets/music/23.- 'There is Another'/23.- half below.mp3",
  },
];
        

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // Update details of the track
  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = (track_index + 1) + " / " + track_list.length;

  // Set an interval of 1000 milliseconds for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current one finishes playing
  curr_track.addEventListener("ended", nextTrack);

  // Apply a random background color
  // random_bg_color();
}

function random_bg_color() {
  // Generate from custom color palette
  // Get a random number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

// Reset Values
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // Adding a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);

//Get the button:
mybutton = document.getElementById("myTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);