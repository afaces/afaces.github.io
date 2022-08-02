import os
from pytube import Playlist
from pytube import YouTube

def get_playlist(playlists):
    urls = []
    for playlist in playlists:
        playlist_urls = Playlist(playlist)
        for playlistUrl in playlist_urls:
            urls.append(playlistUrl)
    return urls

playlists = ["https://www.youtube.com/playlist?list=PLvEI0iOxif001QPlAAQhg688Za2PAfzB-"]

pl_urls = get_playlist(playlists)

for i in range(len(pl_urls)):
    pl_urls[i] = pl_urls[i].split("/")[3].split("=")[1]

with open('ytTracks.md', 'w') as w:
    for url in pl_urls:
        correctURL = "https://www.youtube.com/watch?v=" + url
        yt = YouTube(correctURL)
        w.writelines("[![Alt text](https://img.youtube.com/vi/" + url + "/0.jpg)](" + correctURL + " \"" + yt.title + "\"" + ")\n")
