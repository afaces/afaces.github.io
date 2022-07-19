origin_folder="${HOME}/afaces.github.io/assets/music"
albums_file="${HOME}/afaces.github.io/albums.json"
repo_relative_path="assets/music"

IFS=$'\n'

album_URLs=("https://i.scdn.co/image/ab67616d00001e02918d8d0900cf961190aa289c"
"https://i.scdn.co/image/ab67616d00001e02a84e896c601347891a2d0c7c"
"https://i.scdn.co/image/ab67616d00001e0266686af85889bb47803a4b85"
"https://i.scdn.co/image/ab67616d00001e02e64307672e7202cf8c902445"
"https://i.scdn.co/image/ab67616d00001e021a20209da2a5497b14b8967c"
"https://i.scdn.co/image/ab67616d00001e028f1c7b650531a39481876029"
"https://i.scdn.co/image/ab67616d00001e02d819937d7e25a37d4b32c5e7"
"https://i.scdn.co/image/ab67616d00001e029c4dadcd75ba0ed998cc458d"
"https://i.scdn.co/image/ab67616d00001e02f5287561d7ade72e33b7a7ed"
"https://i.scdn.co/image/ab67616d00001e02c733515ff39cd27fd96ea469"
"https://i.scdn.co/image/ab67616d00001e024e13a7f48a34cf8f2f53fe39"
"https://i.scdn.co/image/ab67616d00001e028ceccfdb6b83d800b1bc16d9"
"https://i.scdn.co/image/ab67616d00001e029e3287f752d05359e8167e3c"
"https://i.scdn.co/image/ab67616d00001e02f16ac3cbb781bbe82b27fc88"
"https://i.scdn.co/image/ab67616d00001e02f393a4270495a555206ef3aa"
"https://i.scdn.co/image/ab67616d00001e029e56f0034b290c78d63d23a1"
"https://i.scdn.co/image/ab67616d00001e02cf23571aa6a15b346b5a308b"
"https://i.scdn.co/image/ab67616d00001e02a4259e20681a6e42daea3e1c"
"https://i.scdn.co/image/ab67616d00001e02317a8bfc407c707f08eddf38"
"https://i.scdn.co/image/ab67616d00001e02f9dce670313a43f3b4e173d5"
"https://i.scdn.co/image/ab67616d00001e0273ba6162b4097650faec281c"
"https://i.scdn.co/image/ab67616d00001e0296d690174a503fba8c44b9cc"
"https://i.scdn.co/image/ab67616d00001e02d83b51260e83a16bb334f443"
)

current_directory="$(pwd)"


#{
#    name: "Nefasto",
#    artist: "Afaces",
#    image: "https://i.scdn.co/image/ab67616d0000b273918d8d0900cf961190aa289c",
#    path: "/assets/music/1.- 'Nefasto'/1 - Nefasto.mp3"
#  },

echo "let track_list = [" > "${albums_file}"

i=0
cd "${origin_folder}"
for album in $(ls | sort -h); do
  cd "${album}"

  for song in $(ls | sort -h); do
    song_title="$(echo "${song}" | rev | cut -d '.' -f2- | rev | tr -d "&" | tr -d "(" | tr -d ")" | tr -d "]" | tr -d "[" | tr -d  "#" | tr -d "," | tr -d "\"" | tr -d "$")"
    echo "  {
    name: \"${song_title}\",
    artist: \"Afaces\",
    image: \"${album_URLs[i]}\",
    path: \"${repo_relative_path}/${album}/${song}\",
  }," >> "${albums_file}"
  done
  i=$((i+1))
  cd ..
done
echo "];" >> "${albums_file}"
cd "${current_directory}"