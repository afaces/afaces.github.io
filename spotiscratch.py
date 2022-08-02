import requests
from bs4 import BeautifulSoup

playlists = ["https://open.spotify.com/playlist/2a4YUDpE5KQRDbPT0E9tJ2", "https://open.spotify.com/playlist/5sj85p0DBgtP5GJr7tpAwH"]
playlistName = ""
artistURL = "/user/1153971537"

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
# print(namePlaylist)

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

el = soup.find_all(href=True)
linesURL = str(el)

myList = []
index = 1
for i in playlistList[:-1]:
    trackURL = linesURL.split(artistURL)[1].split("href")[index].split('"')[1]
    content = i + ", " + trackURL
    myList.append(content)
    index += 2

for song in range(len(myList)):
    name = myList[song].split(",")[0]
    songURL = myList[song].split(",")[1]
    print(name)
    print(songURL)