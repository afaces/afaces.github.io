import asyncio
import aiohttp
import requests
from bs4 import BeautifulSoup

url = "https://piped.kavin.rocks/channel/UC8q43meCJbtzr3UMdznZZ-Q"

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
print(lines)