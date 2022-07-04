origin_folder="/mnt/afaces_albums"
destination_folder="${HOME}/afaces.github.io/assets/music"

#test -f "${i%.wav}.mp3" || lame -b 320 -h "${i}" "${i%.wav}.mp3"
rm -Rf "${destination_folder}"
mkdir -p "${destination_folder}"

if ! which lame; then
  if [ "${EUID}" -eq 0 ]; then
    apt-get install -y lame
  else
    sudo apt-get install -y lame
  fi
fi

if [ ! -d "${origin_folder}" ]; then
  echo "The music folder is not found"
  exit 1
fi

current_directory="$(pwd)"
cd "${origin_folder}"
for album in *; do
  cd "${album}"
  echo "Enter in album ${album}"
  mkdir -p "${destination_folder}/${album}"
  for song in *; do
    #test -f "${song%.wav}.mp3" || lame -b 320 -h "${song}" "${song%.wav}.mp3"
    if echo "${song}" | grep -Eq '.*.wav'; then
      echo "Converting song ${song} to mp3 and moving to repository folder"
      lame -b 320 -h "${song}" "${destination_folder}/${album}/${song%.wav}.mp3"
    fi
  done
  cd ..
done

cd "${current_directory}"
