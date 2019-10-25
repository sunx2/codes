from importlib import import_module
data = import_module("datastore",package="Collections")
types = import_module("datatypes", package="collections")

keydict = []
keycomponents = []

class Token(object):
    def __init__(self,value,types,args):
        self.value = value
        self.type = types
        self.args = args
    def _get_type(self):
        return self.type
    def _get_dict(self):
        return [self.value,self.type,self.args]

class Interprete(object):
    def __init__(self):
        return super.__str__ 
    
    def _arg_callback(self):
        return
    
    def _next(self):
        return


        