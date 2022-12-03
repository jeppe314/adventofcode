import requests
url = 'https://adventofcode.com/2022/day/2/input'
r = requests.get(url, allow_redirects=True)
open('input.txt', 'wb').write(r.content)

