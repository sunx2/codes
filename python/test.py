import requests as r



class Url(object):
    def __init__(self,items,link="https://www.google.com/search?client=firefox-b-d&q="):
        self.full_url = link
        self.items = items

    def con_link(self):
        return self.items.replace(" ","+")

    def full_link(self):
        return self.full_url+self.con_link()
        

print(Url("hello world").full_link())