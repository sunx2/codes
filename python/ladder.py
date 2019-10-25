import json

class Ladder(object):
    def __init__(self,size:int,generate=False):
        self.size = size
        self.details = {x:"" for x in range(1,size+1) } if generate else json.load(open("ladder.json",'r'))
        json.dump(self.details,open("ladder.json",'w')) if generate else ''
    
    def put(self,name,pos:int):
        self.details[pos] = name
        json.dump(self.details,open("ladder.json",'w'))
        return True
    
    def advance(self,name,pos:int):
        if pos==self.size+1:
            self.details[pos]=name
            json.dump(self.details,open("ladder.json",'w'))
            return True
        if pos==1:
            return False
        else:
            t = self.details[pos-1]
            self.details[pos-1]=name
            self.details[pos] = t
            json.dump(self.details,open("ladder.json",'w'))
            return True
    def drop(self,pos:int):
        self.details[pos]=''
        json.dump(self.details,open("ladder.json",'w'))
        return True
    def search(self,string):
        return (self.details.values.index(string)) if (a in self.details.values or a in self.details.keys()) else False
    def print_ladder(self):
        return "\n".join([f"{x}: {self.details[x]}" for x in self.details.keys()])
    def return_ladder(self):
        return self.details


a = Ladder(5,True)# for new ladder else a=Ladder[5] 
a.put("ren",1) #for adding player in position
a.put("man",2)
a.put("pot",3)
a.put("lkr",4)
a.put("pe",5)

print(a.print_ladder())
print(a.search("ren"))
a.advance("pot",3)
print(a.print_ladder())
a.drop(1)
print(a.print_ladder())
        