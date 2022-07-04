origin_folder="${HOME}/afaces.github.io/assets/music"
buttons_file="${HOME}/afaces.github.io/buttons.md"
repo_relative_path="assets/music"

> "${buttons_file}"
current_directory="$(pwd)"
IFS=$'\n'

cd "${origin_folder}"
for album in $(ls | sort -h); do
  echo "printing ${album} name to buttons.md"
  echo "#### ${album}" >> "${buttons_file}"
  cd "${album}"
  for song in $(ls | sort -h); do
    echo "printing ${song} name to buttons.md"
    echo "###### ${song}" >> "${buttons_file}"
    echo "<audio controls>
<source src=\"${repo_relative_path}/${album}/${song}\" type=\"audio/mp3\">
</audio>
" >> "${buttons_file}"
  done
  echo >> "${buttons_file}"
  cd ..
done

cd "${current_directory}"