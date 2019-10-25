from Framework.server import route,run,response
import json


@route("/")
def index():
    response.content_type = 'application/json'
    return json.dumps({"name":"sun"})

run(host='localhost',port=8000)


class DataClass(object):
    def __init__(self,name=None):
        self.name = name
