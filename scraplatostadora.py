# We scrape the images

# https://www.latostadora.com/afaces

import requests
from bs4 import BeautifulSoup

playlists = ["https://www.latostadora.com/afaces"]
playlistName = ""

url = playlists[0]
res = requests.get(url)
html_page = res.content

soup = BeautifulSoup(html_page, 'html.parser')
#text = soup.find_all(text=True)
images = soup.find_all('img')

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
for t in images:
    if t.parent.name not in blacklist:
        output += '{} '.format(t)

lines = output.split('data-original=')

# print(lines[1].split(" ")[0])
# print(lines[2].split(" ")[0])

text = ""
for i in lines:
    text += i
ola = text.split("zoomable-images")

c = 1
images_url = []
for j in ola:
    images_url.append(ola[c].split(" ")[1].strip("\""))
    c+=1
    if c >= len(ola):
        break

# Get URL of each product
project_href = [i.a['href'] for i in soup.find_all('div', attrs={'class': 'm-product-card'})]
for i in range(len(project_href)):
    project_href[i] = "https://www.latostadora.com" + project_href[i]

urlIDList = []
for j in range(len(images_url)):
    separateList=[]
    separateList.append(images_url[j])
    separateList.append(project_href[j])
    urlIDList.append(separateList)

# print(urlIDList[0])
with open("store.md", "w") as o:
    for k in range(len(urlIDList)):
        o.writelines("[![Alt text](" + urlIDList[k][0] + ")](" + urlIDList[k][1] + ")\n")
