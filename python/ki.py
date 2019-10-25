import requests as r
a = r.get("https://www.google.com/search?client=firefox-b-d&q=hello+world")

print(a.text)


"xpdopen"