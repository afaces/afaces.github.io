domainList=("amazon.com" "bandcamp.com" "deezer.com" "facebook.com" "instagram.com" "music.apple.com" "us.napster.com" "paypal.com" "shazam.com" "soundcloud.com" "open.spotify.com" "tidal.com" "tiktok.com" "twitter.com" "youtube.com" "music.youtube.com" "pandora.com" )



for domain in ${domainList[@]}; do
  url="https://www.google.com/s2/favicons?domain=${domain}"
  wget "${url}" -O "assets/images/favicons/${domain}.png"
done
