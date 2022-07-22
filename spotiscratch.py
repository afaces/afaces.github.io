import requests
from bs4 import BeautifulSoup

playlists = ["https://open.spotify.com/playlist/2a4YUDpE5KQRDbPT0E9tJ2", "https://open.spotify.com/playlist/5sj85p0DBgtP5GJr7tpAwH"]
playlistName = ""

url = playlists[0]
res = requests.get(url)
html_page = res.content

soup = BeautifulSoup(html_page, 'html.parser')
text = soup.find_all(text=True)

output = ''
blacklist = [
    '[document]',
    'noscript',
    'header',
    'html',
    'meta',
    'head',
    'input',
    'script',
    # there may be more elements you don't want, such as "style", etc.
]

for t in text:
    if t.parent.name not in blacklist:
        output += '{} '.format(t)

lines = output.split('\n')

namePlaylist = lines[0].split(" ")
result = ""
for i in namePlaylist[:-3]:
    result = result + i + " "
namePlaylist = result
print(namePlaylist)

playlist = lines[len(lines) - 1]
comment = playlist.split("more-icon-android")[0]
for i in comment.split(" ")[:-4]:
    result = result + i + " "
commentary = result
#print(commentary)

result = ""
firstPosition = comment.split(" ")[3:][-4:][:3]
result = " "
for i in firstPosition:
    result = result + i + " "
firstPosition = result

playlistList = playlist.split("more-icon-android")
playlistList[0] = firstPosition

for i in playlistList[:-1]:
    print(i)


# First is the name and author of the playlist, nice! :)
# The last line is the actual songs and position of the playlist.
lastline = ""

'''
with open("new_items.csv", "w") as f:
    pepe = "olaa, mama\n"
    f.write(pepe)
    for items in itemlocator:
        print(items)

'''

