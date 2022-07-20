Known bugs: 
- avoid tag duplication
- A Button/text href for each album to show hidden track buttons for each correspondant album (now being shown)
- Transform numbers in song tags to text (0: zero, 1: one...)
- When album menu title names are clicked to show/hide the album songs and album cover
- Tooltip over emojis tags correctly triggers the animations
- Remember last playing track state on refresh (same way it's tracking the height of the page (?))
- Click on Album image from navbar leads to page to move to the album position (#tagged)
- Click on Track name from navbar leads to #tag of the song
- Max volume of the song can be increased (?)
- Change Menu theme icon to custom emoji 🎚️

Go for:
- Create script to scrape names of tracks and orders of tracks from Spotify Playlists by URL
- Create basic contact section for the page- button ❇ add the song to the playlist ✴ takes it out to mantain a local playlist and is used to create new playlists and also indicates the selected current playlist
- ✳️button is shown to indicate that the track is present in the selected playlist, ✴ takes it out of the selected playlist
- button 🔝 goes back to the top of the page and it shows at the low right page limit when enough scroll down is made
- ➕➖ volume keys (not float, we want int here to control volume and being able to put it more loud like vlc) buttons do make up or down when pressed and move volume 
- Button ⏹ Pauses all playlist or track playing and gets back to the actual playing track if there is any

- Animation:
- When the button of the song is played the emoji changes to ⏮, when this same button is pressed again music goes back to the beggining of the track 
and then it hides the music player controls of the song and the emoji, then button turns back to the original one and if it being pressed again and back to normal and it show the correct music player and the buttons...
- Button for each album to Show/Hide all album related songs buttons 
- Playing a song directly in the controller changes the emoji to ⏮ (meaning that the button is pressed the song will go back to the beginning which is what happens)
- Pressing the ⏮ will show correspondant emojis of action for the selected song.
- Sound bar hopefully similar sync to the actual audio controls live in sort of <div> in .md to play the global playlist management showing the track duration and actual point of reproduction, the current name of the track and in the time emoji button tracking of the music streaming flux of the songs.
