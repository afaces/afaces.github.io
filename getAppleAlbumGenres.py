import requests
from bs4 import BeautifulSoup

albumURLS = ["https://music.apple.com/ee/album/nefasto/1451391634",
             "https://music.apple.com/ee/album/writer/1451269260",
             "https://music.apple.com/ee/album/back-and-fro/1451918017",
             "https://music.apple.com/ee/album/planetc/1451531303",
             "https://music.apple.com/ee/album/black/1467487008",
             "https://music.apple.com/ee/album/list/1465782851",
             "https://music.apple.com/ee/album/a-cool-name/1476619482",
             "https://music.apple.com/ee/album/50/1478633752",
             "https://music.apple.com/ee/album/advisory-content/1483446809",
             "https://music.apple.com/ee/album/buy-never/1496917294",
             "https://music.apple.com/ee/album/where-are-my-royalties/1507915440",
             "https://music.apple.com/ee/album/bulls-eye/1507149654",
             "https://music.apple.com/ee/album/who-u-tryna-impress/1520552193",
             "https://music.apple.com/ee/album/journey-to-wasted-youth/1517513646",
             "https://music.apple.com/ee/album/lyricless-miracles/1527382332",
             "https://music.apple.com/ee/album/irl/1531738167",
             "https://music.apple.com/ee/album/before-senescence/1541931125",
             "https://music.apple.com/ee/album/back-to-the-origins/1546448596",
             "https://music.apple.com/ee/album/the-bad-words/1550720545",
             "https://music.apple.com/ee/album/conversation-conservation/1549508601",
             "https://music.apple.com/ee/album/gloomy-dances/1571030956",
             "https://music.apple.com/ee/album/not-too-bad/1585945551",
             "https://music.apple.com/ee/album/there-is-another/1621763768"]


url = albumURLS[14]
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
print(str(lines).split("Afaces   ', ' ', '   ")[1].split("\\")[0].strip("\t"))