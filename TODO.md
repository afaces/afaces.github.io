Known bugs: 
- js
- Show now playing meant to be on top of everything when scrolls down enough it mantains to be placed on the top
- Starting one song ends the previous EVENT 
- button ❇️ add the song to the playlist ✴ takes it out to mantain a local playlist and is used to create new playlists and also indicates the selected current playlist
- ✳️ button is shown to indicate that the track is present in the selected playlist, ✴ takes it out of the selected playlist
- If button ⏭ is pressed, the position of the playlist moves to the next track, if there is no playlist, justs plays the next song
- button 🔝 goes back to the top of the page and it shows at the low right page limit when enough scroll down is made
- ➕➖ volume keys (not float, we want int here)
- Button ⏹ Pauses all playlist or track playing and gets back to the actual playing track if there is any
- On mouse over without click there different buttons emoji change yet to be stablished

Animation:
- When the button of the song is played the emoji changes to ⏮, when this same button is pressed again music goes back to the beggining of the track 
and then it hides the music player controls of the song and the emoji, then button turns back to the original one and if it being pressed again and back to normal and it show the correct music player and the buttons...
- Button for each album to Show/Hide all album related songs buttons 
- Playing a song directly in the controller changes the emoji to ⏮ (meaning that the button is pressed the song will go back to the beginning which is what happens)
- Pressing the ⏮ will show correspondant emojis of action for the selected song.
- Sound bar hopefully similar sync to the actual audio controls live in sort of <div> in .md to play the global playlist management showing the track duration and actual point of reproduction, the current name of the track and in the time emoji button tracking of the music streaming flux of the songs.
