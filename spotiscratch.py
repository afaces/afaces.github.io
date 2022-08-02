import requests
from bs4 import BeautifulSoup

playlists = ["https://open.spotify.com/playlist/2a4YUDpE5KQRDbPT0E9tJ2",
             "https://open.spotify.com/playlist/0eLED3QLJRWDSb6pTW0zy4",
             "https://open.spotify.com/playlist/1XbaN56zIWH5HlBhbcFPGe",
             "https://open.spotify.com/playlist/6Mcta0SrXUh6RQJxZKBD8Y", # 3
             "https://open.spotify.com/playlist/3Yoekg61qdZYYe6svontIR",
             "https://open.spotify.com/playlist/5NBtRIkykvSvSV1y1S1XXH",
             "https://open.spotify.com/playlist/5qnC6nYRLUoPMSqHH93C5L",
             "https://open.spotify.com/playlist/5DwCADSp8YDO4IOazBMIvx",
             "https://open.spotify.com/playlist/4OohxMENTJpMJYUy60LV8Q",
             "https://open.spotify.com/playlist/4kgY11b72mpkbNmyrvBRrK",
             "https://open.spotify.com/playlist/0FnWquh2lijOZcHqK3UhhC", # 10
             "https://open.spotify.com/playlist/0t1SdiLXjJEBQsy0GQQuE7",
             "https://open.spotify.com/playlist/42VoiulLsyXGHHL4Xi5shf",
             "https://open.spotify.com/playlist/48DCmv7Jr9h8zHUG3cQ6ot",
             "https://open.spotify.com/playlist/0ylsLGS4PdmkvBWgOFGb4W",
             "https://open.spotify.com/playlist/3GEWx7EwDDiOMZ9wf8eEFB",
             "https://open.spotify.com/playlist/0Nw0bzsuihDd1tvAswqOQo",
             "https://open.spotify.com/playlist/0D2jhjjLba0AFmxrLrn7lw",
             "https://open.spotify.com/playlist/1yVBgQsd3D7HphwvqNST5r",
             "https://open.spotify.com/playlist/5UJgK6GlMH9lc3qKssGEnC",
             "https://open.spotify.com/playlist/0dvjiEDQneQrUiTGjpHb7W", # 20 bad playlist
             "https://open.spotify.com/playlist/0rgBrrXSUNVfwheUD9IPUd",
             "https://open.spotify.com/playlist/04t1plohJT1caZZ2z5LBuP",
             "https://open.spotify.com/playlist/2R7slbNNZWKsmXjivbScwn",

             "https://open.spotify.com/playlist/5sj85p0DBgtP5GJr7tpAwH" # Uh-uh bad playlist
             ] # Uh- uh and 20 bad playlists
badplaylists = ["https://open.spotify.com/playlist/5sj85p0DBgtP5GJr7tpAwH", "https://open.spotify.com/playlist/0dvjiEDQneQrUiTGjpHb7W"] # Uh-uh & 20
artistURL = "/user/1153971537"

url = playlists[24]
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

el = soup.find_all(href=True)
linesURL = str(el)

myList = []

if url in badplaylists:
    print("aki printeo si la url está en la badplaylist")
    print("veo que las dos primeras crashean")
    index = 0
    for i in playlistList[:-1]:
        trackURL = linesURL.split(artistURL)[1].split("href")[index].split('"')[1]
        content = i + ", " + trackURL
        myList.append(content)
        index += 2
else:
    index = 1
    for i in playlistList[:-1]:
        trackURL = linesURL.split(artistURL)[1].split("href")[index].split('"')[1]
        content = i + ", " + trackURL
        myList.append(content)
        index += 2
# TODO: Some playlist url don't show link properly due to (what is thought) index desyncronization, musht check sources of difference



for song in range(len(myList)):
    name = myList[song].split(",")[0]
    songURL = myList[song].split(",")[1]
    print(name)
    print(songURL)