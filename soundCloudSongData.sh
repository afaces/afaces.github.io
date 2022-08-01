songlist=("decks-loosed" "jib" "knob" "aim" "odds" "plans" "kudos" "forked" "wronged" "villains-runaway" "aloft-fall" "ail" "caretaker" "slip")
EOF="\n"
artist="afaces"
for song in ${songlist[@]}; do
  special="url=https://soundcloud.com/$artist/$song"
  echo -e $(curl "https://soundcloud.com/oembed" -d 'format=json' -d "${special}") >> soundCloudMetadata.txt
done