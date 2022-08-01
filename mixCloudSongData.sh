songlist=("casa-lola-jam-session-na-x" "casa-lola-jam-sessions-na-x-1" "casa-lola-jam-sessions-na-x-2" "casa-lola-jam-sessions-na-x-35" "casa-lola-jam-sessions-na-x-23" "casa-lola-jam-sessions-na-x-13" "casa-lola-jam-sessions-na-x-33" "casa-lola-jam-sessions-na-x-π" "casa-lola-jam-sessions-na-x-iv" "casa-lola-jam-sessions-na-x-iv-34" "casa-lola-jam-sessions-na-x-5" "casa-lola-jam-sessions-na-x-6" "casa-lola-jam-sessions-na-x-7")
EOF="\n"
artist="axlfc"
for song in ${songlist[@]}; do
  special="https://www.mixcloud.com/oembed/?url=https://www.mixcloud.com/$artist/$song&format=json"
  echo "$special"
  echo -e $(curl "${special}") >> mixCloudMetadata.txt
done
