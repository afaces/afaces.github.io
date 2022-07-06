origin_folder="${HOME}/afaces.github.io/assets/music"
buttons_file="${HOME}/afaces.github.io/buttons.md"
repo_relative_path="assets/music"

> "${buttons_file}"
current_directory="$(pwd)"
IFS=$'\n'

header="---
layout: page
title: Afaces fanpage
---
[![Alt text](assets/images/icon/amazonmusic.svg)](https://music.amazon.com/artists/B07MWG7VY1/afaces) [![Alt text](assets/images/icon/bandcamp.svg)](https://afaces.bandcamp.com) [![Alt text](assets/images/icon/deezer.svg)](https://www.deezer.com/es/artist/57830442) [![Alt text](assets/images/icon/facebook.svg)](https://www.facebook.com/afaces/) [![Alt text](assets/images/icon/instagram.svg)](https://www.instagram.com/_afaces/) [![Alt text](assets/images/icon/itunes.svg)](https://music.apple.com/us/artist/afaces/1450474907) [![Alt text](assets/images/icon/napster.svg)](https://us.napster.com/artist/afaces) [![Alt text](assets/images/icon/shazam.svg)](https://www.shazam.com/es/artist/afaces/1450474907) [![Alt text](assets/images/icon/soundcloud.svg)](https://soundcloud.com/afaces) [![Alt text](assets/images/icon/spotify.svg)](https://open.spotify.com/artist/3zbzWzOqZcY3mZBG5ICF9l) [![Alt text](assets/images/icon/tidal.svg)](https://tidal.com/browse/artist/10889435) [![Alt text](assets/images/icon/tiktok.svg)](https://www.tiktok.com/@afaces) [![Alt text](assets/images/icon/twitter.svg)](https://twitter.com/afaces2) [![Alt text](assets/images/icon/youtube.svg)](https://www.youtube.com/user/axelaxel12)
## Table of contents"


# Create menu of albums in webpage
echo "${header}" >> "${buttons_file}"
f=1
cd "${origin_folder}"

album_tags=()
for album in $(ls | sort -h); do
  album_tag="$(echo "${album}" | cut -d " " -f2- | tr -d " " | tr -d "-" | tr -d "'" | tr -d "%" | tr -d "." | tr "[:upper:]" "[:lower:]")"
  album_tags[$f]+="${album_tag}"

  echo "${f}. [$(echo "${album}" | cut -d ' ' -f2- | cut -d "'" -f2- | rev | cut -d "'" -f2- | rev)](#${album_tag})" >> "${buttons_file}"
  f=$((f+1))
done

video_IDs=("SWNbhMxS4S4"
"1PB176jjic8"
"uwmr2eNdpE4"
"F44txcWQoJQ"
"rcAxMjoC7fw"
"_DSxx9E3MCQ"
"RVxpNONLZ8o"
"_4Vfk487foQ"
"ybNa3a48fxk"
"Utmf9RgCITo"
"VCzKkBZ-03w"
"zg2NECdI3OY"
"Nx3ucT01P-g"
"rEKs9ttSOLA"
"0EdaPCRZXmY"
"FzD53ikXz5w"
"g9dWBnJ20MQ"
"uEgdTjGGk-Y"
"Lt66WnK2Xq4"
"msZJIYzS7vA"
"jojN7p_oBsw"
"5D2dG7wPEGc"
"yJaQezPFOdc"
)
i=0
for album in $(ls | sort -h); do
  echo
  echo "#### ${album} <a name=${album_tags[i]}></a>" >> "${buttons_file}"

  echo "[![${album}](https://img.youtube.com/vi/${video_IDs[$i]}/0.jpg)](https://www.youtube.com/watch?v=${video_IDs[$i]}  \"${album}\")" >> "${buttons_file}"
  cd "${album}"
  i=$((i+1))
  for song in $(ls | sort -h); do
    echo "printing ${song} name to buttons.md"
    song_title="$(echo ${song} | rev | cut -d '.' -f2- | rev | tr -d "&" | tr -d "(" | tr -d ")" | tr -d  "#" | tr -d "$")"
    song_number="$(echo ${song_title} | cut -d '-' -f1 | tr -d '.' | tr -d ' ')"
    song_tag="$(echo "${song_title}" | cut -d " " -f2- | tr -d " " | tr -d "-" | tr -d "'" | tr -d "%" | tr -d  "#" | tr -d "." | tr "[:upper:]" "[:lower:]")"
    #echo "The actual tag of the song is ${song_tag}"
    echo "
<h6>${song_number}</h6>" >> "${buttons_file}"
    # Embedd function button in index.js and use button to display song player
    title="$(echo ${song_title} | cut -d '-' -f2-)"
    echo "<script type=\"text/javascript\" src=\"/index.js\"></script>
<script>
function showButton${song_tag}() {
  let ${song_tag}_controls = \"<audio controls><source src=\\\"/${repo_relative_path}/${album}/${song}\\\" type=\\\"audio/mp3\\\"></audio>\";
  document.getElementById(\"${song_tag}\").innerHTML = ${song_tag}_controls;
}
</script>
<input type = \"button\" onclick = \"showButton${song_tag}()\" value = \"⏯${title}\">
<p id=\"${song_tag}\"></p>
" >> "${buttons_file}"
  done
  echo >> "${buttons_file}"
  cd ..
done

cd "${current_directory}"